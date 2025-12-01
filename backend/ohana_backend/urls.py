"""
Ohana Live Backend - Main URL Configuration
"""
from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    # Django Admin
    path('admin/', admin.site.urls),

    # API Documentation
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

    # OAuth 2.0
    path('oauth/', include('oauth2_provider.urls', namespace='oauth2_provider')),

    # User authentication & management
    path('api/', include('users.urls')),

    # Other apps (to be added)
    # path('api/social/', include('social.urls')),
    # path('api/journal/', include('journal.urls')),
    # path('api/recovery/', include('recovery.urls')),
    # path('api/community/', include('community.urls')),
    # path('api/messaging/', include('messaging.urls')),
    # path('api/resources/', include('resources.urls')),
]
