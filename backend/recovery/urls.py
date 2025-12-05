"""
URL routes for recovery app API endpoints.
"""

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    MeetingViewSet, MeetingSignUpViewSet, MeetingAttendanceViewSet,
    MalamaContactViewSet, AnnouncementViewSet
)

router = DefaultRouter()
router.register(r'meetings', MeetingViewSet, basename='meeting')
router.register(r'meeting-signups', MeetingSignUpViewSet, basename='meetingsignup')
router.register(r'meeting-attendance', MeetingAttendanceViewSet, basename='meetingattendance')
router.register(r'malama-contacts', MalamaContactViewSet, basename='malamacontact')
router.register(r'announcements', AnnouncementViewSet, basename='announcement')

urlpatterns = [
    path('', include(router.urls)),
]
