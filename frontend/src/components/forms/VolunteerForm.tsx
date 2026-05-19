"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function VolunteerForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactPreference: "email",
        phone: "",
        social: "",
        cleanDate: "",
        story: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrorMessage(null)

        try {
            const res = await fetch("/api/forms/volunteer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                const base = data.error || "Submission failed"
                throw new Error(data.detail ? `${base}: ${data.detail}` : base)
            }
            setSuccess(true)
        } catch (err) {
            setErrorMessage(err instanceof Error ? err.message : "Submission failed")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <div className="text-6xl mb-6">🌺</div>
                <h2 className="text-3xl font-bold text-teal mb-4">
                    Mahalo!
                </h2>
                <p className="text-xl text-gray-300 mb-2">
                    Thank you for your interest in joining the Crew.
                </p>
                <p className="text-gray-400">
                    We'll be in touch soon.
                </p>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
                    Name <span className="text-teal">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                    placeholder="Your name"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-light mb-2">
                    Email <span className="text-teal">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                    placeholder="your@email.com"
                />
            </div>

            {/* Contact Preference */}
            <div>
                <label htmlFor="contactPreference" className="block text-sm font-medium text-light mb-2">
                    Preferred Contact Method <span className="text-teal">*</span>
                </label>
                <select
                    id="contactPreference"
                    name="contactPreference"
                    value={formData.contactPreference}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="social">Social Media</option>
                </select>
            </div>

            {/* Phone (if selected) */}
            {formData.contactPreference === "phone" && (
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-light mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                        placeholder="(555) 555-5555"
                    />
                </div>
            )}

            {/* Social (if selected) */}
            {formData.contactPreference === "social" && (
                <div>
                    <label htmlFor="social" className="block text-sm font-medium text-light mb-2">
                        Social Media Handle
                    </label>
                    <input
                        type="text"
                        id="social"
                        name="social"
                        value={formData.social}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                        placeholder="@username or platform/username"
                    />
                </div>
            )}

            {/* Clean Date */}
            <div>
                <label htmlFor="cleanDate" className="block text-sm font-medium text-light mb-2">
                    Clean Date <span className="text-teal">*</span>
                </label>
                <input
                    type="date"
                    id="cleanDate"
                    name="cleanDate"
                    value={formData.cleanDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                />
            </div>

            {/* Story Summary */}
            <div>
                <label htmlFor="story" className="block text-sm font-medium text-light mb-2">
                    Tell Us a Bit About Your Journey <span className="text-teal">*</span>
                </label>
                <textarea
                    id="story"
                    name="story"
                    value={formData.story}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all resize-none"
                    placeholder="Share what brought you to recovery, what you hope to offer, and why you want to join the Crew..."
                />
            </div>

            {errorMessage && (
                <div role="alert" className="rounded-lg bg-red-500/10 text-red-300 text-sm px-4 py-3">
                    {errorMessage}. You can also email <a href="mailto:daniel@ohanarecovery.org" className="underline">daniel@ohanarecovery.org</a> directly.
                </div>
            )}

            {/* Submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-teal/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
        </form>
    )
}
