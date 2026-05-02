/**
 * Signup/Registration Page
 * New user registration with email, handle, and password
 * ADA Compliant - WCAG AAA Standards
 * Protected with reCAPTCHA v3
 */

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReCaptchaProvider from '@/providers/ReCaptchaProvider';
import Link from 'next/link';

function SignupForm() {
  const router = useRouter();
  const { register } = useAuth();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    email: '',
    public_handle: '',
    password: '',
    password_confirm: '',
    first_name: '',
    last_name: '',
    bio: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (formData.password !== formData.password_confirm) {
      setError('Passwords do not match');
      return;
    }

    // Validate password strength
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);

    try {
      // Get reCAPTCHA token
      let recaptchaToken = '';
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha('signup');
      }

      // Send registration request with reCAPTCHA token
      const result = await register({
        ...formData,
        recaptcha_token: recaptchaToken,
      });

      if (result.success) {
        router.push('/'); // Redirect to home page
      } else {
        setError(result.error || 'Registration failed. Please try again.');
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
        className="w-full max-w-2xl"
      >
        <div className="bg-dark-900 border-2 border-dark-700 rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-light mb-2">
              Join Ohana Live
            </h1>
            <p className="text-gray-400">
              Start your recovery journey with our supportive community
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Registration form">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-light mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all placeholder-gray-500"
                  placeholder="John"
                />
              </div>

              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-light mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all placeholder-gray-500"
                  placeholder="Doe"
                />
              </div>
            </div>

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
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                aria-required="true"
                aria-describedby={error ? "signup-error" : undefined}
                className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all placeholder-gray-500"
                placeholder="your@email.com"
              />
            </div>

            {/* Username Field */}
            <div>
              <label
                htmlFor="public_handle"
                className="block text-sm font-medium text-light mb-2"
              >
                Username (Public Handle) <span className="text-teal" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="public_handle"
                name="public_handle"
                value={formData.public_handle}
                onChange={handleChange}
                required
                autoComplete="username"
                aria-required="true"
                aria-describedby="username-help"
                className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all placeholder-gray-500"
                placeholder="username123"
              />
              <p id="username-help" className="text-xs text-gray-500 mt-1">
                This is how others will see you in the community
              </p>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-light mb-2"
                >
                  Password <span className="text-teal" aria-label="required">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
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

              <div>
                <label
                  htmlFor="password_confirm"
                  className="block text-sm font-medium text-light mb-2"
                >
                  Confirm Password <span className="text-teal" aria-label="required">*</span>
                </label>
                <input
                  type="password"
                  id="password_confirm"
                  name="password_confirm"
                  value={formData.password_confirm}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  aria-required="true"
                  className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all placeholder-gray-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Bio Field */}
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-light mb-2"
              >
                Bio (Optional)
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={3}
                aria-describedby="bio-help"
                className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all resize-none placeholder-gray-500"
                placeholder="Tell us a bit about yourself and your recovery journey..."
              />
              <p id="bio-help" className="text-xs text-gray-500 mt-1">
                Share as much or as little as you'd like
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                id="signup-error"
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
                  <span>Creating account...</span>
                </span>
              ) : (
                'Create Account'
              )}
            </button>

            {/* reCAPTCHA Badge Notice */}
            <p className="text-xs text-gray-500 text-center">
              Protected by reCAPTCHA. Google{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-light underline">
                Privacy Policy
              </a>
              {' '}and{' '}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-light underline">
                Terms of Service
              </a>
              {' '}apply.
            </p>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-teal hover:text-teal-light font-semibold transition-colors focus:ring-2 focus:ring-teal rounded px-1"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-teal transition-colors focus:ring-2 focus:ring-teal rounded px-1"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <ReCaptchaProvider>
      <SignupForm />
    </ReCaptchaProvider>
  );
}
