/**
 * API client for Ohana Live backend
 * Handles authentication, JWT tokens, and API requests
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://ohanalive-backend-production.up.railway.app';

interface AuthTokens {
  access: string;
  refresh: string;
}

interface LoginCredentials {
  email: string;
  password: string;
  recaptcha_token?: string;
}

interface RegisterData {
  email: string;
  public_handle: string;
  password: string;
  password_confirm: string;
  first_name?: string;
  last_name?: string;
  bio?: string;
  recaptcha_token?: string;
}

interface User {
  id: string;
  email: string;
  public_handle: string;
  first_name: string;
  last_name: string;
  profile: {
    id: string;
    bio: string;
    avatar: string | null;
    visibility: string;
  };
  sobriety_dates: any[];
  roles: any[];
}

interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

class ApiClient {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Token management
  private getAccessToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('access_token');
  }

  private getRefreshToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('refresh_token');
  }

  private setTokens(tokens: AuthTokens): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('access_token', tokens.access);
    localStorage.setItem('refresh_token', tokens.refresh);
  }

  private clearTokens(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  // Refresh access token
  private async refreshAccessToken(): Promise<boolean> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) return false;

    try {
      const response = await fetch(`${this.baseURL}/api/auth/token/refresh/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.access) {
          localStorage.setItem('access_token', data.access);
          if (data.refresh) {
            localStorage.setItem('refresh_token', data.refresh);
          }
          return true;
        }
      }

      // If refresh fails, clear tokens
      this.clearTokens();
      return false;
    } catch (error) {
      console.error('Token refresh failed:', error);
      this.clearTokens();
      return false;
    }
  }

  // Generic API request
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const accessToken = this.getAccessToken();

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    try {
      let response = await fetch(url, {
        ...options,
        headers,
      });

      // If unauthorized, try to refresh token and retry
      if (response.status === 401 && accessToken) {
        const refreshed = await this.refreshAccessToken();
        if (refreshed) {
          const newAccessToken = this.getAccessToken();
          if (newAccessToken) {
            headers['Authorization'] = `Bearer ${newAccessToken}`;
            response = await fetch(url, {
              ...options,
              headers,
            });
          }
        }
      }

      const data = await response.json();

      if (!response.ok) {
        // Handle different error formats
        let errorMessage = 'An error occurred';

        if (data.error) {
          errorMessage = data.error;
        } else if (data.detail) {
          errorMessage = data.detail;
        } else if (typeof data === 'object') {
          // Django validation errors: {"field": ["error message"]}
          const errors = Object.entries(data)
            .map(([field, messages]) => {
              if (Array.isArray(messages)) {
                return `${field}: ${messages.join(', ')}`;
              }
              return `${field}: ${messages}`;
            })
            .join('; ');
          if (errors) errorMessage = errors;
        }

        return {
          error: errorMessage,
          status: response.status,
        };
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      console.error('API request failed:', error);
      return {
        error: error instanceof Error ? error.message : 'Network error',
        status: 500,
      };
    }
  }

  // Authentication endpoints
  async register(data: RegisterData): Promise<ApiResponse<{ user: User; tokens: AuthTokens; message: string }>> {
    const response = await this.request<{ user: User; tokens: AuthTokens; message: string }>(
      '/api/auth/register/',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );

    if (response.data?.tokens) {
      this.setTokens(response.data.tokens);
    }

    return response;
  }

  async login(credentials: LoginCredentials): Promise<ApiResponse<{ user: User; tokens: AuthTokens; message: string }>> {
    const response = await this.request<{ user: User; tokens: AuthTokens; message: string }>(
      '/api/auth/login/',
      {
        method: 'POST',
        body: JSON.stringify(credentials),
      }
    );

    if (response.data?.tokens) {
      this.setTokens(response.data.tokens);
    }

    return response;
  }

  async logout(): Promise<void> {
    this.clearTokens();
  }

  // User endpoints
  async getCurrentUser(): Promise<ApiResponse<User>> {
    return this.request<User>('/api/users/me/');
  }

  async updateProfile(data: Partial<User['profile']>): Promise<ApiResponse<User>> {
    return this.request<User>('/api/users/me/profile/', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // Sobriety tracking
  async addSobrietyDate(data: { substance: string; sober_since: string; notes?: string }): Promise<ApiResponse<any>> {
    return this.request('/api/sobriety-dates/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getSobrietyDates(): Promise<ApiResponse<any[]>> {
    return this.request('/api/sobriety-dates/');
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }
}

// Export singleton instance
export const api = new ApiClient();

// Export types
export type { User, AuthTokens, LoginCredentials, RegisterData, ApiResponse };
