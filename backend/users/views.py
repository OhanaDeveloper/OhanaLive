"""
User authentication and profile management API views.
Handles registration, login, profile updates, and privacy settings.
"""

from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.db import transaction
from django.contrib.auth import authenticate
from django.utils import timezone as django_timezone
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string

from .models import CustomUser, Profile, SobrietyDate, Role
from .serializers import (
    UserSerializer,
    PublicUserSerializer,
    UserRegistrationSerializer,
    ProfileSerializer,
    SobrietyDateSerializer,
    RoleSerializer,
    PasswordChangeSerializer,
    PrivacySettingsSerializer
)
from security.models import LoginHistory, ActivityLog


def get_client_ip(request):
    """Extract client IP from request headers."""
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


class UserRegistrationView(APIView):
    """
    POST /api/auth/register/
    Register a new user account.
    Returns user data and JWT tokens.
    """
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            with transaction.atomic():
                # Create user and profile
                user = serializer.save()

                # Log account creation
                ActivityLog.objects.create(
                    user=user,
                    action='create_account',
                    description=f'User registered: {user.public_handle}',
                    ip_address=get_client_ip(request),
                    metadata={
                        'user_agent': request.META.get('HTTP_USER_AGENT', ''),
                        'email': user.email,
                    }
                )

                # Generate JWT tokens
                refresh = RefreshToken.for_user(user)

                return Response({
                    'user': UserSerializer(user).data,
                    'tokens': {
                        'refresh': str(refresh),
                        'access': str(refresh.access_token),
                    },
                    'message': 'Registration successful! Welcome to Ohana Live.'
                }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(TokenObtainPairView):
    """
    POST /api/auth/login/
    Authenticate user and return JWT tokens.
    Tracks login history with device and location info.
    """
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        # Authenticate user
        user = authenticate(request, username=email, password=password)

        # Track login attempt
        ip_address = get_client_ip(request)
        user_agent = request.META.get('HTTP_USER_AGENT', '')

        if user is not None:
            # Successful login
            LoginHistory.objects.create(
                user=user,
                ip_address=ip_address,
                user_agent=user_agent,
                success=True
            )

            # Log activity
            ActivityLog.objects.create(
                user=user,
                action='login',
                description='User logged in',
                ip_address=ip_address
            )

            # Generate tokens
            refresh = RefreshToken.for_user(user)

            return Response({
                'user': UserSerializer(user).data,
                'tokens': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                },
                'message': 'Login successful!'
            }, status=status.HTTP_200_OK)

        else:
            # Failed login - try to find user to log failure
            try:
                failed_user = CustomUser.objects.get(email=email)
                LoginHistory.objects.create(
                    user=failed_user,
                    ip_address=ip_address,
                    user_agent=user_agent,
                    success=False,
                    failure_reason='Invalid password'
                )
            except CustomUser.DoesNotExist:
                # User doesn't exist - log generic failure
                pass

            return Response({
                'error': 'Invalid email or password'
            }, status=status.HTTP_401_UNAUTHORIZED)


class UserViewSet(viewsets.ModelViewSet):
    """
    User account management endpoints.
    GET /api/users/ - list users (public view)
    GET /api/users/{id}/ - retrieve user profile
    GET /api/users/me/ - get current user's full data
    PATCH /api/users/me/ - update current user
    PATCH /api/users/me/profile/ - update profile
    POST /api/users/me/change_password/ - change password
    GET/PATCH /api/users/me/privacy/ - manage privacy settings
    DELETE /api/users/me/deactivate/ - soft delete account
    """
    queryset = CustomUser.objects.filter(deleted_at__isnull=True)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return PublicUserSerializer
        return UserSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        if self.action == 'list':
            # Public listing - active users only
            return queryset.filter(is_active=True)
        return queryset

    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def me(self, request):
        """Get current authenticated user's full data."""
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    @action(detail=False, methods=['patch'], permission_classes=[permissions.IsAuthenticated])
    def update_profile(self, request):
        """Update user profile fields."""
        profile = request.user.profile
        serializer = ProfileSerializer(profile, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()

            # Log activity
            ActivityLog.objects.create(
                user=request.user,
                action='profile_update',
                description='User updated profile',
                ip_address=get_client_ip(request)
            )

            return Response({
                'profile': serializer.data,
                'message': 'Profile updated successfully!'
            })

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def change_password(self, request):
        """Change user password."""
        serializer = PasswordChangeSerializer(data=request.data, context={'request': request})

        if serializer.is_valid():
            new_password = serializer.validated_data['new_password']
            request.user.set_password(new_password)
            request.user.save()

            # Log activity
            ActivityLog.objects.create(
                user=request.user,
                action='password_change',
                description='User changed password',
                ip_address=get_client_ip(request)
            )

            return Response({
                'message': 'Password changed successfully!'
            })

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get', 'patch'], permission_classes=[permissions.IsAuthenticated])
    def privacy(self, request):
        """Get or update privacy settings."""
        if request.method == 'GET':
            return Response({
                'privacy_settings': request.user.privacy_settings
            })

        # PATCH
        serializer = PrivacySettingsSerializer(data=request.data)
        if serializer.is_valid():
            # Update privacy settings
            privacy_settings = request.user.privacy_settings or {}
            privacy_settings.update(serializer.validated_data)
            request.user.privacy_settings = privacy_settings
            request.user.save()

            # Log activity
            ActivityLog.objects.create(
                user=request.user,
                action='privacy_update',
                description='User updated privacy settings',
                ip_address=get_client_ip(request),
                metadata=serializer.validated_data
            )

            return Response({
                'privacy_settings': privacy_settings,
                'message': 'Privacy settings updated!'
            })

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['delete'], permission_classes=[permissions.IsAuthenticated])
    def deactivate(self, request):
        """Soft delete user account."""
        user = request.user
        user.deleted_at = django_timezone.now()
        user.is_active = False
        user.save()

        # Log activity
        ActivityLog.objects.create(
            user=user,
            action='deactivate_account',
            description='User deactivated account',
            ip_address=get_client_ip(request)
        )

        return Response({
            'message': 'Account deactivated successfully.'
        }, status=status.HTTP_200_OK)


class SobrietyDateViewSet(viewsets.ModelViewSet):
    """
    Sobriety date tracking endpoints.
    GET /api/sobriety-dates/ - list user's sobriety dates
    POST /api/sobriety-dates/ - create new sobriety date
    PATCH /api/sobriety-dates/{id}/ - update sobriety date
    DELETE /api/sobriety-dates/{id}/ - delete sobriety date
    POST /api/sobriety-dates/{id}/restart/ - restart sobriety counter
    """
    serializer_class = SobrietyDateSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return SobrietyDate.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

        # Log activity
        ActivityLog.objects.create(
            user=self.request.user,
            action='create_sobriety_date',
            description=f'Created sobriety date for {serializer.instance.substance}',
            ip_address=get_client_ip(self.request),
            target_type='sobriety_date',
            target_id=serializer.instance.id
        )

    @action(detail=True, methods=['post'])
    def restart(self, request, pk=None):
        """Restart sobriety counter with new date."""
        sobriety_date = self.get_object()
        new_start_date = request.data.get('start_date')

        if not new_start_date:
            return Response({
                'error': 'start_date is required'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Use model's restart method
        sobriety_date.restart(new_start_date)

        # Log activity
        ActivityLog.objects.create(
            user=request.user,
            action='restart_sobriety_date',
            description=f'Restarted sobriety date for {sobriety_date.substance}',
            ip_address=get_client_ip(request),
            target_type='sobriety_date',
            target_id=sobriety_date.id,
            metadata={
                'previous_date': str(sobriety_date.previous_start_date),
                'new_date': str(sobriety_date.start_date),
                'restart_count': sobriety_date.restart_count
            }
        )

        return Response({
            'sobriety_date': SobrietyDateSerializer(sobriety_date).data,
            'message': f'Sobriety counter restarted. You\'ve got this! (Restart #{sobriety_date.restart_count})'
        })


class ProfileViewSet(viewsets.ModelViewSet):
    """
    User profile management endpoints.
    GET /api/profiles/{user_id}/ - get user's profile
    PATCH /api/profiles/me/ - update own profile
    """
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Profile.objects.filter(user__deleted_at__isnull=True)

    def get_object(self):
        if self.kwargs.get('pk') == 'me':
            # Get current user's profile
            profile, created = Profile.objects.get_or_create(user=self.request.user)
            return profile
        return super().get_object()


class PasswordResetRequestView(APIView):
    """
    POST /api/auth/password-reset/
    Request a password reset email.
    Always returns success to prevent email enumeration attacks.
    """
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get('email', '').strip().lower()

        if not email:
            return Response({
                'error': 'Email is required'
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = CustomUser.objects.get(email=email, is_active=True)

            # Generate password reset token
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))

            # Build reset URL (frontend URL)
            frontend_url = settings.CORS_ALLOWED_ORIGINS[0] if settings.CORS_ALLOWED_ORIGINS else 'http://localhost:3000'
            reset_url = f"{frontend_url}/reset-password?uid={uid}&token={token}"

            # Send email
            subject = 'Reset Your Ohana Recovery Password'
            message = f"""
Aloha,

You requested to reset your password for Ohana Recovery.

Click the link below to reset your password:
{reset_url}

This link will expire in 24 hours.

If you didn't request this, you can safely ignore this email.

With aloha,
The Ohana Recovery Team

---
ʻOhana means family. Nobody gets left behind.
            """.strip()

            html_message = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0a0a0a; color: #e5e5e5; padding: 20px; }}
        .container {{ max-width: 600px; margin: 0 auto; background: #171717; border-radius: 12px; padding: 40px; border: 1px solid #262626; }}
        .header {{ text-align: center; margin-bottom: 30px; }}
        .logo {{ font-size: 28px; font-weight: bold; background: linear-gradient(to right, #14b8a6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }}
        .button {{ display: inline-block; background: linear-gradient(to right, #14b8a6, #0d9488); color: #000 !important; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 20px 0; }}
        .footer {{ text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #262626; color: #737373; font-size: 14px; }}
        .tagline {{ color: #14b8a6; font-style: italic; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Ohana Recovery</div>
        </div>
        <p>Aloha,</p>
        <p>You requested to reset your password for Ohana Recovery.</p>
        <p style="text-align: center;">
            <a href="{reset_url}" class="button">Reset Password</a>
        </p>
        <p>Or copy and paste this link into your browser:</p>
        <p style="word-break: break-all; color: #14b8a6; font-size: 12px;">{reset_url}</p>
        <p>This link will expire in 24 hours.</p>
        <p>If you didn't request this, you can safely ignore this email.</p>
        <p>With aloha,<br>The Ohana Recovery Team</p>
        <div class="footer">
            <p class="tagline">ʻOhana means family. Nobody gets left behind.</p>
        </div>
    </div>
</body>
</html>
            """.strip()

            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[email],
                html_message=html_message,
                fail_silently=False,
            )

            # Log activity
            ActivityLog.objects.create(
                user=user,
                action='password_reset_request',
                description='Password reset email sent',
                ip_address=get_client_ip(request)
            )

        except CustomUser.DoesNotExist:
            # Don't reveal if email exists - security best practice
            pass
        except Exception as e:
            # Log error but don't reveal to user
            import logging
            logger = logging.getLogger(__name__)
            logger.error(f"Password reset email failed: {str(e)}")

        # Always return success to prevent email enumeration
        return Response({
            'message': 'If an account exists with that email, you will receive password reset instructions shortly.'
        }, status=status.HTTP_200_OK)


class PasswordResetConfirmView(APIView):
    """
    POST /api/auth/password-reset/confirm/
    Confirm password reset with token and set new password.
    """
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        uid = request.data.get('uid')
        token = request.data.get('token')
        new_password = request.data.get('new_password')
        new_password_confirm = request.data.get('new_password_confirm')

        # Validate required fields
        if not all([uid, token, new_password, new_password_confirm]):
            return Response({
                'error': 'All fields are required: uid, token, new_password, new_password_confirm'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Validate passwords match
        if new_password != new_password_confirm:
            return Response({
                'error': 'Passwords do not match'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Validate password length
        if len(new_password) < 8:
            return Response({
                'error': 'Password must be at least 8 characters long'
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Decode uid
            user_id = force_str(urlsafe_base64_decode(uid))
            user = CustomUser.objects.get(pk=user_id)

            # Verify token
            if not default_token_generator.check_token(user, token):
                return Response({
                    'error': 'Invalid or expired reset link. Please request a new one.'
                }, status=status.HTTP_400_BAD_REQUEST)

            # Set new password
            user.set_password(new_password)
            user.save()

            # Log activity
            ActivityLog.objects.create(
                user=user,
                action='password_reset_complete',
                description='Password reset completed',
                ip_address=get_client_ip(request)
            )

            return Response({
                'message': 'Password reset successful! You can now log in with your new password.'
            }, status=status.HTTP_200_OK)

        except (TypeError, ValueError, OverflowError, CustomUser.DoesNotExist):
            return Response({
                'error': 'Invalid reset link. Please request a new one.'
            }, status=status.HTTP_400_BAD_REQUEST)
