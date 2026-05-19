"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function StoryForm() {
    const [formData, setFormData] = useState({
        name: "",
        isAnonymous: false,
        cleanDate: "",
        story: "",
        consentToPublish: false,
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked
            setFormData({
                ...formData,
                [name]: checked,
            })
        } else {
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrorMessage(null)

        try {
            const res = await fetch("/api/forms/story", {
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
                <h2 className="text-3xl font-bold text-purple mb-4">
                    Your Journey Has Been Shared
                </h2>
                <p className="text-xl text-gray-300 mb-2">
                    Thank you for trusting us with your moʻolelo.
                </p>
                <p className="text-gray-400">
                    Your story will help light the path for others walking this journey.
                </p>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name / Anonymous Toggle */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="isAnonymous"
                        name="isAnonymous"
                        checked={formData.isAnonymous}
                        onChange={handleChange}
                        className="w-5 h-5 bg-dark-800 border-2 border-dark-700 rounded text-purple focus:ring-2 focus:ring-purple transition-all"
                    />
                    <label htmlFor="isAnonymous" className="text-sm font-medium text-light">
                        Share my story anonymously
                    </label>
                </div>

                {!formData.isAnonymous && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
                            Name <span className="text-purple">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required={!formData.isAnonymous}
                            className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-purple focus:border-purple transition-all"
                            placeholder="Your name"
                        />
                    </motion.div>
                )}
            </div>

            {/* Clean Date */}
            <div>
                <label htmlFor="cleanDate" className="block text-sm font-medium text-light mb-2">
                    Clean Date <span className="text-purple">*</span>
                </label>
                <input
                    type="date"
                    id="cleanDate"
                    name="cleanDate"
                    value={formData.cleanDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-purple focus:border-purple transition-all"
                />
            </div>

            {/* The Journey - Story Text */}
            <div>
                <label htmlFor="story" className="block text-sm font-medium text-light mb-2">
                    Your Journey <span className="text-purple">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-3">
                    Share your experience, strength, and hope. What brought you here? What keeps you coming back? What would you tell someone just starting their journey?
                </p>
                <textarea
                    id="story"
                    name="story"
                    value={formData.story}
                    onChange={handleChange}
                    required
                    rows={12}
                    className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-purple focus:border-purple transition-all resize-none"
                    placeholder="The journey of a thousand miles begins with a single step..."
                />
            </div>

            {/* Consent to Publish */}
            <div className="bg-dark-800/50 border-2 border-dark-700 rounded-lg p-6">
                <div className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        id="consentToPublish"
                        name="consentToPublish"
                        checked={formData.consentToPublish}
                        onChange={handleChange}
                        required
                        className="mt-1 w-5 h-5 bg-dark-800 border-2 border-dark-700 rounded text-purple focus:ring-2 focus:ring-purple transition-all"
                    />
                    <label htmlFor="consentToPublish" className="text-sm text-gray-300">
                        I give Ohana Live permission to share my story on the website and in recovery-related materials. I understand my story may be edited for length and clarity, and that I can request its removal at any time. <span className="text-purple">*</span>
                    </label>
                </div>
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
                className="w-full bg-gradient-to-r from-purple to-purple-dark text-light font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-purple/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "Sharing Your Journey..." : "Share Your Story"}
            </button>
        </form>
    )
}
