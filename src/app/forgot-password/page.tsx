/**
 * Forgot Password Page
 * Request password reset email
 * ADA Compliant - WCAG AAA Standards
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://ohanalive-backend-production.up.railway.app';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/password-reset/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to send reset email. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
              Forgot Password?
            </h1>
            <p className="text-gray-400">
              No worries, we'll send you reset instructions
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
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-light mb-4">
                Check Your Email
              </h2>

              <p className="text-gray-400 mb-6">
                If an account exists with <strong className="text-light">{email}</strong>,
                you will receive password reset instructions shortly.
              </p>

              <p className="text-sm text-gray-500 mb-8">
                Didn't receive the email? Check your spam folder or try again in a few minutes.
              </p>

              <Link
                href="/login"
                className="inline-block w-full bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-teal/30 transition-all focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-dark-900"
              >
                Back to Login
              </Link>
            </motion.div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Password reset request form">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-light mb-2"
                >
                  Email Address <span className="text-teal" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  required
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby={error ? "reset-error" : "email-help"}
                  className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all placeholder-gray-500"
                  placeholder="your@email.com"
                />
                <p id="email-help" className="text-xs text-gray-500 mt-1">
                  Enter the email address associated with your account
                </p>
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
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Send Reset Link'
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

          <div className="mt-4 text-center">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-teal transition-colors focus:ring-2 focus:ring-teal rounded px-1"
            >
              Back to home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
