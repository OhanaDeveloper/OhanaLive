"""
User models for Ohana Live.
Custom user model with recovery-specific fields and privacy settings.
"""

import uuid
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models
from django.utils import timezone as django_timezone


class CustomUserManager(BaseUserManager):
    """Custom manager for CustomUser."""

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular user."""
        if not email:
            raise ValueError('Email address is required')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """Create and save a superuser."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True')

        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    """
    Custom user model with recovery-specific fields.
    Uses email as primary identifier, with optional pseudonym.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    # Authentication & Identity
    email = models.EmailField(unique=True, db_index=True)
    public_handle = models.CharField(max_length=50, unique=True, db_index=True)
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    pronouns = models.CharField(max_length=50, blank=True)

    # Profile
    bio = models.TextField(blank=True, max_length=500)
    avatar_url = models.URLField(max_length=500, blank=True)

    # Location (optional for timezone/resources)
    city = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=100, blank=True)
    timezone = models.CharField(max_length=50, default='UTC')

    # Recovery affiliations (stored as JSON array)
    recovery_affiliations = models.JSONField(
        default=list,
        blank=True,
        help_text='e.g., ["AA", "NA", "SMART", "Non-traditional"]'
    )

    # Privacy settings (JSON)
    privacy_settings = models.JSONField(
        default=dict,
        blank=True,
        help_text='User privacy preferences for profile, journals, messaging, etc.'
    )

    # Account status
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    email_verified = models.BooleanField(default=False)
    phone_number = models.CharField(max_length=20, blank=True)
    phone_verified = models.BooleanField(default=False)
    two_factor_enabled = models.BooleanField(default=False)

    # Timestamps
    created_at = models.DateTimeField(default=django_timezone.now, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)
    last_login = models.DateTimeField(null=True, blank=True)

    # Soft delete
    deleted_at = models.DateTimeField(null=True, blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['public_handle']

    class Meta:
        db_table = 'users_customuser'
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['email']),
            models.Index(fields=['public_handle']),
            models.Index(fields=['created_at']),
        ]

    def __str__(self):
        return f"{self.public_handle} ({self.email})"

    def get_full_name(self):
        """Return full name or handle if no name provided."""
        if self.first_name or self.last_name:
            return f"{self.first_name} {self.last_name}".strip()
        return self.public_handle

    def get_short_name(self):
        """Return first name or handle."""
        return self.first_name if self.first_name else self.public_handle

    def soft_delete(self):
        """Soft delete the user."""
        self.deleted_at = django_timezone.now()
        self.is_active = False
        self.save()

    def get_privacy_setting(self, key, default=None):
        """Get a specific privacy setting."""
        return self.privacy_settings.get(key, default)

    def set_privacy_setting(self, key, value):
        """Set a specific privacy setting."""
        self.privacy_settings[key] = value
        self.save(update_fields=['privacy_settings'])


class Profile(models.Model):
    """Extended user profile with recovery story and visibility settings."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='profile')

    # Extended story
    my_story = models.TextField(blank=True, help_text='Longer personal recovery story')
    my_story_visibility = models.CharField(
        max_length=20,
        default='private',
        choices=[
            ('private', 'Private'),
            ('friends', 'Friends Only'),
            ('community', 'Community'),
            ('public', 'Public'),
        ]
    )

    # Visibility toggles
    show_sobriety_counter = models.BooleanField(default=False)
    show_affiliations = models.BooleanField(default=False)
    show_location = models.BooleanField(default=False)

    created_at = models.DateTimeField(default=django_timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'users_profile'
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'

    def __str__(self):
        return f"Profile: {self.user.public_handle}"


class SobrietyDate(models.Model):
    """Track sobriety/clean dates per substance with restart history."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sobriety_dates')

    substance = models.CharField(
        max_length=100,
        help_text='e.g., alcohol, opioids, all substances, custom'
    )
    start_date = models.DateField()
    is_active = models.BooleanField(default=True)

    # Restart history preservation
    restart_count = models.IntegerField(default=0)
    previous_start_date = models.DateField(null=True, blank=True)

    visibility = models.CharField(
        max_length=20,
        default='private',
        choices=[
            ('private', 'Private'),
            ('friends', 'Friends Only'),
            ('community', 'Community'),
            ('public', 'Public'),
        ]
    )

    created_at = models.DateTimeField(default=django_timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'users_sobrietydate'
        verbose_name = 'Sobriety Date'
        verbose_name_plural = 'Sobriety Dates'
        ordering = ['-start_date']
        indexes = [
            models.Index(fields=['user', 'is_active']),
        ]

    def __str__(self):
        return f"{self.user.public_handle} - {self.substance} since {self.start_date}"

    def restart(self, new_start_date):
        """Restart counter, preserving history."""
        self.previous_start_date = self.start_date
        self.start_date = new_start_date
        self.restart_count += 1
        self.save()

    @property
    def days_sober(self):
        """Calculate days sober from start_date to today."""
        if not self.is_active:
            return 0
        delta = django_timezone.now().date() - self.start_date
        return delta.days


class Role(models.Model):
    """User roles for RBAC (Role-Based Access Control)."""

    ROLE_CHOICES = [
        ('user', 'User'),
        ('guide', 'Guide'),
        ('moderator', 'Moderator'),
        ('admin', 'Admin'),
        ('guest', 'Guest'),
    ]

    SCOPE_CHOICES = [
        ('global', 'Global'),
        ('group', 'Group'),
        ('meeting', 'Meeting'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='roles')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    # Optional scope (e.g., moderator of specific group)
    scope_type = models.CharField(max_length=20, choices=SCOPE_CHOICES, default='global')
    scope_id = models.UUIDField(null=True, blank=True)

    granted_by = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        related_name='granted_roles'
    )
    granted_at = models.DateTimeField(default=django_timezone.now)

    class Meta:
        db_table = 'users_role'
        verbose_name = 'User Role'
        verbose_name_plural = 'User Roles'
        unique_together = [['user', 'role', 'scope_type', 'scope_id']]
        indexes = [
            models.Index(fields=['user', 'role']),
        ]

    def __str__(self):
        scope = f" ({self.scope_type})" if self.scope_type != 'global' else ""
        return f"{self.user.public_handle} - {self.get_role_display()}{scope}"
