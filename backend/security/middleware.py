"""
Security middleware for Ohana Live.
Handles login history tracking and activity logging.
"""

from .models import ActivityLog


def get_client_ip(request):
    """Extract client IP from request headers."""
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


class LoginHistoryMiddleware:
    """
    Middleware to track user activity.
    Logs significant actions for security monitoring.
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        # Only log for authenticated users
        if hasattr(request, 'user') and request.user.is_authenticated:
            # Log certain HTTP methods on API endpoints
            if request.path.startswith('/api/') and request.method in ['POST', 'PUT', 'PATCH', 'DELETE']:
                # Skip if already logged in view (avoid duplicates)
                if not getattr(request, '_activity_logged', False):
                    action_map = {
                        'POST': 'create',
                        'PUT': 'update',
                        'PATCH': 'update',
                        'DELETE': 'delete',
                    }

                    action = action_map.get(request.method, 'other')

                    ActivityLog.objects.create(
                        user=request.user,
                        action=action,
                        description=f'{request.method} {request.path}',
                        ip_address=get_client_ip(request),
                        metadata={
                            'method': request.method,
                            'path': request.path,
                            'status_code': response.status_code,
                        }
                    )

        return response
