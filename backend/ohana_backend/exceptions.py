"""
Custom exception handler for Ohana Live API.
Provides consistent error responses across the API.
"""

from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status


def custom_exception_handler(exc, context):
    """
    Custom exception handler that provides consistent error responses.
    Returns errors in the format:
    {
        "error": "Error message",
        "detail": "Detailed error information",
        "status_code": 400
    }
    """
    # Call REST framework's default exception handler first
    response = exception_handler(exc, context)

    if response is not None:
        # Customize the response data
        custom_response_data = {
            'error': str(exc),
            'status_code': response.status_code,
        }

        # Add detail if available
        if hasattr(response, 'data'):
            if isinstance(response.data, dict):
                custom_response_data['detail'] = response.data
            else:
                custom_response_data['detail'] = str(response.data)

        response.data = custom_response_data

    else:
        # Handle non-DRF exceptions
        custom_response_data = {
            'error': 'Internal server error',
            'detail': str(exc),
            'status_code': status.HTTP_500_INTERNAL_SERVER_ERROR,
        }
        response = Response(custom_response_data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return response
