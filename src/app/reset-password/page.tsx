/**
 * Reset Password Page
 * Confirm password reset with token from email
 * ADA Compliant - WCAG AAA Standards
 */

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://ohanalive-backend-production.up.railway.app';

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    new_password: '',
    new_password_confirm: '',
  });
  const [uid, setUid] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const uidParam = searchParams.get('uid');
    const tokenParam = searchParams.get('token');

    if (!uidParam || !tokenParam) {
      setError('Invalid or missing reset link parameters');
    } else {
      setUid(uidParam);
      setToken(tokenParam);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Client-side validation
    if (formData.new_password !== formData.new_password_confirm) {
      setError('Passwords do not match');
      return;
    }

    if (formData.new_password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/password-reset/confirm/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uid,
          token,
          new_password: formData.new_password,
          new_password_confirm: formData.new_password_confirm,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } else {
        setError(data.error || 'Failed to reset password. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Show error if no uid/token
  if (!uid || !token) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-dark-900 border-2 border-dark-700 rounded-2xl shadow-2xl p-8 text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-light mb-4">Invalid Reset Link</h1>
            <p className="text-gray-400 mb-6">
              This password reset link is invalid or has expired.
            </p>
            <Link
              href="/forgot-password"
              className="inline-block w-full bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-teal/30 transition-all"
            >
              Request New Reset Link
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-dark-900 border-2 border-dark-700 rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-light mb-2">
              Reset Password
            </h1>
            <p className="text-gray-400">
              Enter your new password below
            </p>
          </div>

          {success ? (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-light mb-4">
                Password Reset Successful!
              </h2>

              <p className="text-gray-400 mb-6">
                Your password has been reset successfully.
                Redirecting you to login...
              </p>

              <Link
                href="/login"
                className="inline-block w-full bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-teal/30 transition-all"
              >
                Go to Login
              </Link>
            </motion.div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Password reset form">
              {/* New Password Field */}
              <div>
                <label
                  htmlFor="new_password"
                  className="block text-sm font-medium text-light mb-2"
                >
                  New Password <span className="text-teal" aria-label="required">*</span>
                </label>
                <input
                  type="password"
                  id="new_password"
                  name="new_password"
                  value={formData.new_password}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  aria-required="true"
                  aria-describedby="password-help"
                  className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all placeholder-gray-500"
                  placeholder="••••••••"
                />
                <p id="password-help" className="text-xs text-gray-500 mt-1">
                  At least 8 characters
                </p>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="new_password_confirm"
                  className="block text-sm font-medium text-light mb-2"
                >
                  Confirm New Password <span className="text-teal" aria-label="required">*</span>
                </label>
                <input
                  type="password"
                  id="new_password_confirm"
                  name="new_password_confirm"
                  value={formData.new_password_confirm}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  aria-required="true"
                  className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all placeholder-gray-500"
                  placeholder="••••••••"
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  id="reset-error"
                  role="alert"
                  aria-live="assertive"
                  className="bg-purple-900/20 border-2 border-purple text-light px-4 py-3 rounded-lg text-sm"
                >
                  <strong className="font-semibold">Error: </strong>
                  {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                aria-busy={isLoading}
                className="w-full bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-teal/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-dark-900"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Resetting password...</span>
                  </span>
                ) : (
                  'Reset Password'
                )}
              </button>
            </form>
          )}

          {/* Footer Links */}
          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="text-sm text-gray-500 hover:text-teal transition-colors focus:ring-2 focus:ring-teal rounded px-1"
            >
              ← Back to login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-950 flex items-center justify-center"><div className="text-light">Loading...</div></div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
