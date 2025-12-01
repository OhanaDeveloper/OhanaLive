"""
User app URL routing.
"""

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from .views import (
    UserRegistrationView,
    UserLoginView,
    UserViewSet,
    SobrietyDateViewSet,
    ProfileViewSet
)

# Create router for viewsets
router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'sobriety-dates', SobrietyDateViewSet, basename='sobriety-date')
router.register(r'profiles', ProfileViewSet, basename='profile')

urlpatterns = [
    # Authentication endpoints
    path('auth/register/', UserRegistrationView.as_view(), name='register'),
    path('auth/login/', UserLoginView.as_view(), name='login'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # ViewSet routes
    path('', include(router.urls)),
]
