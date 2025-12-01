"""
Django admin configuration for users app.
"""

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser, Profile, SobrietyDate, Role


@admin.register(CustomUser)
class CustomUserAdmin(BaseUserAdmin):
    """Custom user admin with recovery fields."""

    list_display = ['public_handle', 'email', 'first_name', 'last_name', 'is_active', 'created_at']
    list_filter = ['is_active', 'is_staff', 'email_verified', 'created_at']
    search_fields = ['email', 'public_handle', 'first_name', 'last_name']
    ordering = ['-created_at']

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('public_handle', 'first_name', 'last_name', 'pronouns', 'bio', 'avatar_url')}),
        ('Location', {'fields': ('city', 'state', 'timezone')}),
        ('Recovery', {'fields': ('recovery_affiliations',)}),
        ('Privacy', {'fields': ('privacy_settings',)}),
        ('Contact', {'fields': ('phone_number', 'phone_verified')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Verification', {'fields': ('email_verified', 'two_factor_enabled')}),
        ('Important dates', {'fields': ('last_login', 'created_at', 'deleted_at')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'public_handle', 'password1', 'password2'),
        }),
    )

    readonly_fields = ['created_at']


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    """Profile admin."""

    list_display = ['user', 'my_story_visibility', 'show_sobriety_counter', 'created_at']
    list_filter = ['my_story_visibility', 'show_sobriety_counter', 'show_affiliations', 'show_location']
    search_fields = ['user__public_handle', 'user__email']
    readonly_fields = ['created_at']


@admin.register(SobrietyDate)
class SobrietyDateAdmin(admin.ModelAdmin):
    """Sobriety date admin."""

    list_display = ['user', 'substance', 'start_date', 'is_active', 'restart_count', 'days_sober']
    list_filter = ['is_active', 'substance', 'visibility']
    search_fields = ['user__public_handle', 'substance']
    readonly_fields = ['created_at', 'days_sober']


@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    """Role admin."""

    list_display = ['user', 'role', 'scope_type', 'granted_by', 'granted_at']
    list_filter = ['role', 'scope_type']
    search_fields = ['user__public_handle', 'user__email']
    readonly_fields = ['granted_at']
