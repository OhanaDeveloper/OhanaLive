"""
Security models for Ohana Live.
Login history, user reports, blocks, and moderation.
"""

import uuid
from django.db import models
from django.utils import timezone as django_timezone
from django.conf import settings


class LoginHistory(models.Model):
    """Track all login attempts with device fingerprinting and geolocation."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='login_history'
    )

    # Device fingerprint
    ip_address = models.GenericIPAddressField(db_index=True)
    user_agent = models.TextField(blank=True)
    device_fingerprint = models.CharField(max_length=255, blank=True)
    os = models.CharField(max_length=100, blank=True)
    browser = models.CharField(max_length=100, blank=True)
    device_name = models.CharField(max_length=255, blank=True)

    # Geolocation (from IP)
    country = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    latitude = models.DecimalField(max_digits=10, decimal_places=8, null=True, blank=True)
    longitude = models.DecimalField(max_digits=11, decimal_places=8, null=True, blank=True)

    # Login status
    success = models.BooleanField()
    failure_reason = models.CharField(max_length=255, blank=True)

    created_at = models.DateTimeField(default=django_timezone.now, db_index=True)

    class Meta:
        db_table = 'security_loginhistory'
        verbose_name = 'Login History'
        verbose_name_plural = 'Login Histories'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['user', '-created_at']),
            models.Index(fields=['ip_address']),
        ]

    def __str__(self):
        status = "SUCCESS" if self.success else f"FAILED ({self.failure_reason})"
        return f"{self.user.public_handle} - {status} - {self.ip_address} - {self.created_at}"


class BlockedUser(models.Model):
    """Track blocked users for privacy and safety."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    blocker = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='blocking'
    )
    blocked = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='blocked_by'
    )

    reason = models.TextField(blank=True)
    created_at = models.DateTimeField(default=django_timezone.now)

    class Meta:
        db_table = 'security_blockeduser'
        verbose_name = 'Blocked User'
        verbose_name_plural = 'Blocked Users'
        unique_together = [['blocker', 'blocked']]
        indexes = [
            models.Index(fields=['blocker']),
            models.Index(fields=['blocked']),
        ]

    def __str__(self):
        return f"{self.blocker.public_handle} blocked {self.blocked.public_handle}"


class UserReport(models.Model):
    """User reports for moderation."""

    REASON_CHOICES = [
        ('harassment', 'Harassment'),
        ('spam', 'Spam'),
        ('harmful_content', 'Harmful Content'),
        ('impersonation', 'Impersonation'),
        ('privacy_violation', 'Privacy Violation'),
        ('other', 'Other'),
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('reviewed', 'Reviewed'),
        ('actioned', 'Actioned'),
        ('dismissed', 'Dismissed'),
    ]

    CONTENT_TYPE_CHOICES = [
        ('post', 'Post'),
        ('comment', 'Comment'),
        ('message', 'Message'),
        ('journal', 'Journal'),
        ('profile', 'Profile'),
        ('other', 'Other'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    reporter = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='reports_filed'
    )
    reported_user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='reports_against'
    )

    # Content reference (optional)
    content_type = models.CharField(max_length=50, choices=CONTENT_TYPE_CHOICES, blank=True)
    content_id = models.UUIDField(null=True, blank=True)

    reason = models.CharField(max_length=50, choices=REASON_CHOICES)
    description = models.TextField(blank=True)

    # Moderation
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending', db_index=True)
    reviewed_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='reports_reviewed'
    )
    reviewed_at = models.DateTimeField(null=True, blank=True)
    moderator_notes = models.TextField(blank=True)
    action_taken = models.CharField(max_length=255, blank=True)

    created_at = models.DateTimeField(default=django_timezone.now, db_index=True)

    class Meta:
        db_table = 'security_userreport'
        verbose_name = 'User Report'
        verbose_name_plural = 'User Reports'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['status', '-created_at']),
            models.Index(fields=['reported_user']),
        ]

    def __str__(self):
        return f"Report #{self.id} - {self.get_reason_display()} - {self.status}"


class ActivityLog(models.Model):
    """Log user activity for security and moderation."""

    ACTION_CHOICES = [
        ('login', 'Login'),
        ('logout', 'Logout'),
        ('create_post', 'Create Post'),
        ('edit_post', 'Edit Post'),
        ('delete_post', 'Delete Post'),
        ('create_comment', 'Create Comment'),
        ('send_message', 'Send Message'),
        ('join_group', 'Join Group'),
        ('leave_group', 'Leave Group'),
        ('profile_update', 'Profile Update'),
        ('report_user', 'Report User'),
        ('block_user', 'Block User'),
        ('other', 'Other'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='activity_logs'
    )

    action = models.CharField(max_length=50, choices=ACTION_CHOICES, db_index=True)
    description = models.TextField(blank=True)

    # Target reference (optional)
    target_type = models.CharField(max_length=50, blank=True)
    target_id = models.UUIDField(null=True, blank=True)

    # Metadata
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    metadata = models.JSONField(default=dict, blank=True)

    created_at = models.DateTimeField(default=django_timezone.now, db_index=True)

    class Meta:
        db_table = 'security_activitylog'
        verbose_name = 'Activity Log'
        verbose_name_plural = 'Activity Logs'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['user', '-created_at']),
            models.Index(fields=['action', '-created_at']),
        ]

    def __str__(self):
        return f"{self.user.public_handle} - {self.get_action_display()} - {self.created_at}"
