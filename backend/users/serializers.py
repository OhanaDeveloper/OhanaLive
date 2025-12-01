"""
User serializers for Ohana Live API.
Handles user registration, authentication, profiles, and privacy.
"""

from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import CustomUser, Profile, SobrietyDate, Role


class SobrietyDateSerializer(serializers.ModelSerializer):
    """Serializer for sobriety dates."""

    days_sober = serializers.ReadOnlyField()

    class Meta:
        model = SobrietyDate
        fields = [
            'id', 'substance', 'start_date', 'is_active',
            'restart_count', 'previous_start_date', 'visibility',
            'days_sober', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'restart_count', 'previous_start_date', 'created_at', 'updated_at']


class RoleSerializer(serializers.ModelSerializer):
    """Serializer for user roles."""

    role_display = serializers.CharField(source='get_role_display', read_only=True)

    class Meta:
        model = Role
        fields = ['id', 'role', 'role_display', 'scope_type', 'scope_id', 'granted_at']
        read_only_fields = ['id', 'granted_at']


class ProfileSerializer(serializers.ModelSerializer):
    """Serializer for user profile."""

    class Meta:
        model = Profile
        fields = [
            'id', 'my_story', 'my_story_visibility',
            'show_sobriety_counter', 'show_affiliations', 'show_location',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class UserSerializer(serializers.ModelSerializer):
    """
    Detailed user serializer with profile and sobriety dates.
    Used for authenticated user's own data.
    """

    profile = ProfileSerializer(read_only=True)
    sobriety_dates = SobrietyDateSerializer(many=True, read_only=True)
    roles = RoleSerializer(many=True, read_only=True)

    class Meta:
        model = CustomUser
        fields = [
            'id', 'email', 'public_handle', 'first_name', 'last_name', 'pronouns',
            'bio', 'avatar_url', 'city', 'state', 'timezone',
            'recovery_affiliations', 'privacy_settings',
            'phone_number', 'phone_verified', 'email_verified', 'two_factor_enabled',
            'profile', 'sobriety_dates', 'roles',
            'created_at', 'last_login'
        ]
        read_only_fields = [
            'id', 'email_verified', 'phone_verified', 'created_at', 'last_login'
        ]
        extra_kwargs = {
            'email': {'required': True},
            'phone_number': {'write_only': True}
        }


class PublicUserSerializer(serializers.ModelSerializer):
    """
    Public user serializer for other users viewing profiles.
    Respects privacy settings.
    """

    days_sober = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = [
            'id', 'public_handle', 'first_name', 'bio', 'avatar_url',
            'pronouns', 'recovery_affiliations', 'days_sober', 'created_at'
        ]
        read_only_fields = fields

    def get_days_sober(self, obj):
        """Return sobriety counter if user has it enabled."""
        try:
            profile = obj.profile
            if profile.show_sobriety_counter:
                active_dates = obj.sobriety_dates.filter(is_active=True)
                if active_dates.exists():
                    return active_dates.first().days_sober
        except Profile.DoesNotExist:
            pass
        return None


class UserRegistrationSerializer(serializers.ModelSerializer):
    """
    User registration serializer.
    Creates user account with password validation.
    """

    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        style={'input_type': 'password'}
    )
    password_confirm = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )

    class Meta:
        model = CustomUser
        fields = [
            'email', 'public_handle', 'password', 'password_confirm',
            'first_name', 'last_name', 'pronouns', 'bio',
            'city', 'state', 'timezone', 'recovery_affiliations'
        ]
        extra_kwargs = {
            'email': {'required': True},
            'public_handle': {'required': True}
        }

    def validate(self, attrs):
        """Validate password confirmation."""
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError({
                "password": "Password fields didn't match."
            })
        return attrs

    def validate_public_handle(self, value):
        """Validate public handle format."""
        if len(value) < 3:
            raise serializers.ValidationError("Handle must be at least 3 characters long.")
        if not value.replace('_', '').replace('-', '').isalnum():
            raise serializers.ValidationError("Handle can only contain letters, numbers, hyphens, and underscores.")
        return value

    def create(self, validated_data):
        """Create user with hashed password."""
        validated_data.pop('password_confirm')
        password = validated_data.pop('password')

        user = CustomUser.objects.create_user(
            password=password,
            **validated_data
        )

        # Create associated profile
        Profile.objects.create(user=user)

        return user


class PasswordChangeSerializer(serializers.Serializer):
    """Serializer for password change."""

    old_password = serializers.CharField(required=True, write_only=True)
    new_password = serializers.CharField(
        required=True,
        write_only=True,
        validators=[validate_password]
    )
    new_password_confirm = serializers.CharField(required=True, write_only=True)

    def validate(self, attrs):
        """Validate password confirmation."""
        if attrs['new_password'] != attrs['new_password_confirm']:
            raise serializers.ValidationError({
                "new_password": "Password fields didn't match."
            })
        return attrs

    def validate_old_password(self, value):
        """Validate old password is correct."""
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError("Old password is incorrect.")
        return value


class PrivacySettingsSerializer(serializers.Serializer):
    """Serializer for updating privacy settings."""

    profile_visibility = serializers.ChoiceField(
        choices=['public', 'community', 'friends', 'private'],
        required=False
    )
    journal_visibility = serializers.ChoiceField(
        choices=['public', 'community', 'friends', 'private'],
        required=False
    )
    messaging_privacy = serializers.ChoiceField(
        choices=['anyone', 'friends', 'friends_and_guides', 'no_one'],
        required=False
    )
    show_activity = serializers.BooleanField(required=False)
    show_online_status = serializers.BooleanField(required=False)
