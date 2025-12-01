"""
Django admin configuration for security app.
"""

from django.contrib import admin
from .models import LoginHistory, BlockedUser, UserReport, ActivityLog


@admin.register(LoginHistory)
class LoginHistoryAdmin(admin.ModelAdmin):
    """Login history admin."""

    list_display = ['user', 'ip_address', 'success', 'city', 'country', 'created_at']
    list_filter = ['success', 'country', 'created_at']
    search_fields = ['user__public_handle', 'user__email', 'ip_address', 'city']
    readonly_fields = ['created_at']
    ordering = ['-created_at']

    fieldsets = (
        ('User', {'fields': ('user',)}),
        ('Device', {'fields': ('ip_address', 'user_agent', 'device_fingerprint', 'os', 'browser', 'device_name')}),
        ('Location', {'fields': ('country', 'city', 'latitude', 'longitude')}),
        ('Status', {'fields': ('success', 'failure_reason')}),
        ('Timestamp', {'fields': ('created_at',)}),
    )


@admin.register(BlockedUser)
class BlockedUserAdmin(admin.ModelAdmin):
    """Blocked user admin."""

    list_display = ['blocker', 'blocked', 'created_at']
    list_filter = ['created_at']
    search_fields = ['blocker__public_handle', 'blocked__public_handle']
    readonly_fields = ['created_at']


@admin.register(UserReport)
class UserReportAdmin(admin.ModelAdmin):
    """User report admin."""

    list_display = ['id', 'reporter', 'reported_user', 'reason', 'status', 'created_at']
    list_filter = ['status', 'reason', 'content_type', 'created_at']
    search_fields = ['reporter__public_handle', 'reported_user__public_handle', 'description']
    readonly_fields = ['created_at']
    ordering = ['-created_at']

    fieldsets = (
        ('Report Details', {'fields': ('reporter', 'reported_user', 'reason', 'description')}),
        ('Content Reference', {'fields': ('content_type', 'content_id')}),
        ('Moderation', {'fields': ('status', 'reviewed_by', 'reviewed_at', 'moderator_notes', 'action_taken')}),
        ('Timestamp', {'fields': ('created_at',)}),
    )

    actions = ['mark_as_reviewed', 'mark_as_actioned', 'mark_as_dismissed']

    def mark_as_reviewed(self, request, queryset):
        queryset.update(status='reviewed')
    mark_as_reviewed.short_description = "Mark selected reports as reviewed"

    def mark_as_actioned(self, request, queryset):
        queryset.update(status='actioned')
    mark_as_actioned.short_description = "Mark selected reports as actioned"

    def mark_as_dismissed(self, request, queryset):
        queryset.update(status='dismissed')
    mark_as_dismissed.short_description = "Mark selected reports as dismissed"


@admin.register(ActivityLog)
class ActivityLogAdmin(admin.ModelAdmin):
    """Activity log admin."""

    list_display = ['user', 'action', 'ip_address', 'created_at']
    list_filter = ['action', 'created_at']
    search_fields = ['user__public_handle', 'description']
    readonly_fields = ['created_at']
    ordering = ['-created_at']
