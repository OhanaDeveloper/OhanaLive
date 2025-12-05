"""
Meeting models for Ohana Live.
Handles nightly meeting scheduling, Mālama (host) assignments, and meeting metadata.
"""

import uuid
from django.db import models
from django.utils import timezone as django_timezone
from django.core.exceptions import ValidationError
from users.models import CustomUser


class Meeting(models.Model):
    """
    Represents a single Ohana Recovery meeting.
    Each meeting has a host (Mālama), date/time, Zoom link, and metadata.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    # Meeting details
    date = models.DateField(db_index=True, help_text='Date of the meeting')
    start_time = models.TimeField(default='23:00:00', help_text='Meeting start time (default 11pm PT)')
    end_time = models.TimeField(default='03:00:00', help_text='Meeting end time (default 3am PT)')

    # Host assignment
    host = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='hosted_meetings',
        help_text='Mālama (crew member) hosting this meeting'
    )

    # Meeting access
    zoom_link = models.URLField(max_length=500, blank=True, help_text='Zoom meeting URL')
    zoom_meeting_id = models.CharField(max_length=50, blank=True)
    zoom_passcode = models.CharField(max_length=50, blank=True)

    # Meeting status
    STATUS_CHOICES = [
        ('scheduled', 'Scheduled'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='scheduled')

    # Optional metadata
    theme = models.CharField(max_length=200, blank=True, help_text='Optional meeting theme or topic')
    notes = models.TextField(blank=True, help_text='Internal notes for hosts')

    # Attendance tracking
    attendee_count = models.IntegerField(default=0, help_text='Number of attendees')

    # Timestamps
    created_at = models.DateTimeField(default=django_timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'recovery_meeting'
        verbose_name = 'Meeting'
        verbose_name_plural = 'Meetings'
        ordering = ['-date', '-start_time']
        indexes = [
            models.Index(fields=['date', 'status']),
            models.Index(fields=['host']),
        ]
        unique_together = [['date', 'start_time']]

    def __str__(self):
        host_name = self.host.public_handle if self.host else 'Unassigned'
        return f"{self.date} - {host_name}"

    def clean(self):
        """Validate meeting data."""
        # Ensure host has appropriate role
        if self.host and not self.host.roles.filter(role__in=['guide', 'moderator', 'admin']).exists():
            raise ValidationError('Host must have guide, moderator, or admin role')

    @property
    def is_tonight(self):
        """Check if this meeting is happening tonight."""
        return self.date == django_timezone.now().date()

    @property
    def is_upcoming(self):
        """Check if meeting is in the future."""
        return self.date >= django_timezone.now().date()


class MeetingSignUp(models.Model):
    """
    Allows Mālama to sign up for specific meeting dates.
    Admin approves or auto-assigns based on availability.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    malama = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='meeting_signups',
        help_text='Mālama signing up to host'
    )

    requested_date = models.DateField(db_index=True)

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('declined', 'Declined'),
        ('cancelled', 'Cancelled'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

    # Optional message from Mālama
    message = models.TextField(blank=True, help_text='Optional note from Mālama')

    # Admin response
    reviewed_by = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='reviewed_signups'
    )
    reviewed_at = models.DateTimeField(null=True, blank=True)
    admin_notes = models.TextField(blank=True)

    created_at = models.DateTimeField(default=django_timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'recovery_meetingsignup'
        verbose_name = 'Meeting Sign-Up'
        verbose_name_plural = 'Meeting Sign-Ups'
        ordering = ['requested_date', '-created_at']
        indexes = [
            models.Index(fields=['malama', 'status']),
            models.Index(fields=['requested_date', 'status']),
        ]

    def __str__(self):
        return f"{self.malama.public_handle} - {self.requested_date} ({self.status})"

    def approve(self, admin_user):
        """Approve sign-up and create/assign meeting."""
        self.status = 'approved'
        self.reviewed_by = admin_user
        self.reviewed_at = django_timezone.now()
        self.save()

        # Create or update meeting with this Mālama as host
        meeting, created = Meeting.objects.get_or_create(
            date=self.requested_date,
            defaults={
                'host': self.malama,
                'status': 'scheduled'
            }
        )

        if not created and not meeting.host:
            meeting.host = self.malama
            meeting.save()

        return meeting

    def decline(self, admin_user, reason=''):
        """Decline sign-up request."""
        self.status = 'declined'
        self.reviewed_by = admin_user
        self.reviewed_at = django_timezone.now()
        self.admin_notes = reason
        self.save()


class MeetingAttendance(models.Model):
    """
    Track meeting attendance (optional, for analytics).
    Privacy-focused: only stores that user attended, not identity details.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE, related_name='attendances')
    user = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='meeting_attendances'
    )

    # Timestamps
    joined_at = models.DateTimeField(default=django_timezone.now)
    left_at = models.DateTimeField(null=True, blank=True)

    # Privacy: user can choose to track or remain anonymous
    is_anonymous = models.BooleanField(default=False)

    class Meta:
        db_table = 'recovery_meetingattendance'
        verbose_name = 'Meeting Attendance'
        verbose_name_plural = 'Meeting Attendances'
        ordering = ['-joined_at']
        indexes = [
            models.Index(fields=['meeting']),
            models.Index(fields=['user']),
        ]

    def __str__(self):
        user_display = 'Anonymous' if self.is_anonymous else (self.user.public_handle if self.user else 'Unknown')
        return f"{user_display} @ {self.meeting.date}"

    @property
    def duration_minutes(self):
        """Calculate how long user was in meeting."""
        if not self.left_at:
            return None
        delta = self.left_at - self.joined_at
        return delta.total_seconds() / 60


class MalamaContact(models.Model):
    """
    Contact information for Mālama (crew members).
    Used for admin coordination and emergency contacts.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    malama = models.OneToOneField(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='malama_contact'
    )

    # Contact methods
    emergency_phone = models.CharField(max_length=20, blank=True)
    backup_email = models.EmailField(blank=True)
    preferred_contact = models.CharField(
        max_length=20,
        choices=[
            ('phone', 'Phone'),
            ('email', 'Email'),
            ('both', 'Both'),
        ],
        default='email'
    )

    # Availability
    available_days = models.JSONField(
        default=list,
        help_text='Days of week available to host (e.g., ["monday", "wednesday"])'
    )
    max_meetings_per_week = models.IntegerField(default=2)

    # Notes
    notes = models.TextField(blank=True, help_text='Internal notes about Mālama availability')

    created_at = models.DateTimeField(default=django_timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'recovery_malamacontact'
        verbose_name = 'Mālama Contact'
        verbose_name_plural = 'Mālama Contacts'

    def __str__(self):
        return f"Contact: {self.malama.public_handle}"


class Announcement(models.Model):
    """
    Admin message board for internal team communication.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    author = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        related_name='announcements'
    )

    title = models.CharField(max_length=200)
    content = models.TextField()

    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('normal', 'Normal'),
        ('high', 'High'),
        ('urgent', 'Urgent'),
    ]
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES, default='normal')

    # Visibility
    is_pinned = models.BooleanField(default=False)
    is_archived = models.BooleanField(default=False)

    created_at = models.DateTimeField(default=django_timezone.now, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'recovery_announcement'
        verbose_name = 'Announcement'
        verbose_name_plural = 'Announcements'
        ordering = ['-is_pinned', '-created_at']

    def __str__(self):
        return self.title
