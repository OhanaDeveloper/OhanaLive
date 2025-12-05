"""
API views for recovery app endpoints.
"""

from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone as django_timezone
from django.db.models import Q
from datetime import timedelta

from .models import Meeting, MeetingSignUp, MeetingAttendance, MalamaContact, Announcement
from .serializers import (
    MeetingSerializer, MeetingSignUpSerializer, MeetingAttendanceSerializer,
    MalamaContactSerializer, AnnouncementSerializer
)


class MeetingViewSet(viewsets.ModelViewSet):
    """
    API endpoint for meetings.
    Supports listing, creating, updating meetings.
    """

    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        """Filter meetings based on query parameters."""
        queryset = Meeting.objects.select_related('host').all()

        # Filter by status
        status_filter = self.request.query_params.get('status')
        if status_filter:
            queryset = queryset.filter(status=status_filter)

        # Filter by date range
        start_date = self.request.query_params.get('start_date')
        end_date = self.request.query_params.get('end_date')

        if start_date:
            queryset = queryset.filter(date__gte=start_date)
        if end_date:
            queryset = queryset.filter(date__lte=end_date)

        return queryset.order_by('-date')

    @action(detail=False, methods=['get'])
    def tonight(self, request):
        """Get tonight's meeting."""
        today = django_timezone.now().date()
        meeting = Meeting.objects.filter(date=today).select_related('host').first()

        if meeting:
            serializer = self.get_serializer(meeting)
            return Response(serializer.data)
        return Response({'detail': 'No meeting scheduled for tonight'}, status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        """Get upcoming meetings for the next 7 days."""
        today = django_timezone.now().date()
        week_from_now = today + timedelta(days=7)

        meetings = Meeting.objects.filter(
            date__gte=today,
            date__lte=week_from_now,
            status='scheduled'
        ).select_related('host').order_by('date')

        serializer = self.get_serializer(meetings, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def calendar(self, request):
        """Get meetings for calendar view (current month by default)."""
        # Get year and month from query params or use current
        now = django_timezone.now()
        year = int(request.query_params.get('year', now.year))
        month = int(request.query_params.get('month', now.month))

        # Calculate first and last day of month
        first_day = django_timezone.datetime(year, month, 1).date()
        if month == 12:
            last_day = django_timezone.datetime(year + 1, 1, 1).date() - timedelta(days=1)
        else:
            last_day = django_timezone.datetime(year, month + 1, 1).date() - timedelta(days=1)

        meetings = Meeting.objects.filter(
            date__gte=first_day,
            date__lte=last_day
        ).select_related('host').order_by('date')

        serializer = self.get_serializer(meetings, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def assign_host(self, request, pk=None):
        """Assign a Mālama to host this meeting."""
        meeting = self.get_object()
        host_id = request.data.get('host_id')

        if not host_id:
            return Response({'error': 'host_id is required'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(meeting, data={'host_id': host_id}, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MeetingSignUpViewSet(viewsets.ModelViewSet):
    """
    API endpoint for meeting sign-ups.
    Mālama can request to host specific nights.
    """

    queryset = MeetingSignUp.objects.all()
    serializer_class = MeetingSignUpSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Filter sign-ups based on user role."""
        user = self.request.user

        # Admins see all sign-ups
        if user.is_staff or user.roles.filter(role__in=['admin', 'moderator']).exists():
            return MeetingSignUp.objects.select_related('malama', 'reviewed_by').all()

        # Mālama only see their own
        return MeetingSignUp.objects.filter(malama=user).select_related('malama', 'reviewed_by')

    def perform_create(self, serializer):
        """Create sign-up for current user."""
        serializer.save(malama=self.request.user)

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAdminUser])
    def approve(self, request, pk=None):
        """Approve a meeting sign-up request."""
        signup = self.get_object()
        meeting = signup.approve(request.user)

        return Response({
            'message': 'Sign-up approved',
            'signup': self.get_serializer(signup).data,
            'meeting': MeetingSerializer(meeting).data
        })

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAdminUser])
    def decline(self, request, pk=None):
        """Decline a meeting sign-up request."""
        signup = self.get_object()
        reason = request.data.get('reason', '')
        signup.decline(request.user, reason)

        return Response({
            'message': 'Sign-up declined',
            'signup': self.get_serializer(signup).data
        })

    @action(detail=False, methods=['get'])
    def pending(self, request):
        """Get all pending sign-up requests."""
        pending_signups = self.get_queryset().filter(status='pending').order_by('requested_date')
        serializer = self.get_serializer(pending_signups, many=True)
        return Response(serializer.data)


class MeetingAttendanceViewSet(viewsets.ModelViewSet):
    """
    API endpoint for meeting attendance tracking.
    """

    queryset = MeetingAttendance.objects.all()
    serializer_class = MeetingAttendanceSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Filter attendance records."""
        queryset = MeetingAttendance.objects.select_related('meeting', 'user').all()

        # Filter by meeting
        meeting_id = self.request.query_params.get('meeting_id')
        if meeting_id:
            queryset = queryset.filter(meeting_id=meeting_id)

        # Filter by user (only admins can see other users)
        if not self.request.user.is_staff:
            queryset = queryset.filter(user=self.request.user)

        return queryset.order_by('-joined_at')

    def perform_create(self, serializer):
        """Record user joining a meeting."""
        serializer.save(user=self.request.user)


class MalamaContactViewSet(viewsets.ModelViewSet):
    """
    API endpoint for Mālama contact information.
    Admin-only access.
    """

    queryset = MalamaContact.objects.all()
    serializer_class = MalamaContactSerializer
    permission_classes = [permissions.IsAdminUser]

    def get_queryset(self):
        """Get all Mālama contacts."""
        return MalamaContact.objects.select_related('malama').all()


class AnnouncementViewSet(viewsets.ModelViewSet):
    """
    API endpoint for admin announcements.
    Staff can create, all authenticated users can read.
    """

    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Get non-archived announcements."""
        queryset = Announcement.objects.select_related('author').filter(is_archived=False)

        # Order by pinned first, then by date
        return queryset.order_by('-is_pinned', '-created_at')

    def perform_create(self, serializer):
        """Set current user as author."""
        serializer.save(author=self.request.user)

    def get_permissions(self):
        """Staff can create/update/delete, all can read."""
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAdminUser()]
        return [permissions.IsAuthenticated()]

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAdminUser])
    def toggle_pin(self, request, pk=None):
        """Toggle pinned status of announcement."""
        announcement = self.get_object()
        announcement.is_pinned = not announcement.is_pinned
        announcement.save()

        return Response({
            'message': f"Announcement {'pinned' if announcement.is_pinned else 'unpinned'}",
            'announcement': self.get_serializer(announcement).data
        })
