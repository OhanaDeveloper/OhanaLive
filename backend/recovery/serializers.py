"""
Serializers for recovery app API endpoints.
"""

from rest_framework import serializers
from .models import Meeting, MeetingSignUp, MeetingAttendance, MalamaContact, Announcement
from users.models import CustomUser


class MalamaSerializer(serializers.ModelSerializer):
    """Simplified user serializer for Mālama hosts."""

    class Meta:
        model = CustomUser
        fields = ['id', 'public_handle', 'first_name', 'avatar_url', 'pronouns']


class MeetingSerializer(serializers.ModelSerializer):
    """Serializer for Meeting model."""

    host = MalamaSerializer(read_only=True)
    host_id = serializers.UUIDField(write_only=True, required=False, allow_null=True)
    is_tonight = serializers.BooleanField(read_only=True)
    is_upcoming = serializers.BooleanField(read_only=True)

    class Meta:
        model = Meeting
        fields = [
            'id', 'date', 'start_time', 'end_time',
            'host', 'host_id',
            'zoom_link', 'zoom_meeting_id', 'zoom_passcode',
            'status', 'theme', 'notes', 'attendee_count',
            'is_tonight', 'is_upcoming',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate_host_id(self, value):
        """Ensure host is a valid Mālama with appropriate role."""
        if value:
            try:
                user = CustomUser.objects.get(id=value)
                if not user.roles.filter(role__in=['guide', 'moderator', 'admin']).exists():
                    raise serializers.ValidationError('User must have guide, moderator, or admin role')
                return value
            except CustomUser.DoesNotExist:
                raise serializers.ValidationError('User not found')
        return value


class MeetingSignUpSerializer(serializers.ModelSerializer):
    """Serializer for MeetingSignUp model."""

    malama = MalamaSerializer(read_only=True)
    reviewed_by = MalamaSerializer(read_only=True)

    class Meta:
        model = MeetingSignUp
        fields = [
            'id', 'malama', 'requested_date', 'status',
            'message', 'reviewed_by', 'reviewed_at', 'admin_notes',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'malama', 'reviewed_by', 'reviewed_at', 'created_at', 'updated_at']


class MeetingAttendanceSerializer(serializers.ModelSerializer):
    """Serializer for MeetingAttendance model."""

    user = MalamaSerializer(read_only=True)
    duration_minutes = serializers.FloatField(read_only=True)

    class Meta:
        model = MeetingAttendance
        fields = [
            'id', 'meeting', 'user', 'joined_at', 'left_at',
            'is_anonymous', 'duration_minutes'
        ]
        read_only_fields = ['id', 'user', 'joined_at']


class MalamaContactSerializer(serializers.ModelSerializer):
    """Serializer for MalamaContact model."""

    malama = MalamaSerializer(read_only=True)

    class Meta:
        model = MalamaContact
        fields = [
            'id', 'malama', 'emergency_phone', 'backup_email',
            'preferred_contact', 'available_days', 'max_meetings_per_week',
            'notes', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'malama', 'created_at', 'updated_at']


class AnnouncementSerializer(serializers.ModelSerializer):
    """Serializer for Announcement model."""

    author = MalamaSerializer(read_only=True)

    class Meta:
        model = Announcement
        fields = [
            'id', 'author', 'title', 'content', 'priority',
            'is_pinned', 'is_archived',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'author', 'created_at', 'updated_at']
