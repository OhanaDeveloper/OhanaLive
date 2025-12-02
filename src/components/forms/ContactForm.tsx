"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // TODO: Send to backend/email
        console.log("Contact Form:", formData)

        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSuccess(true)
        }, 1000)
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
                    Message Received!
                </h2>
                <p className="text-xl text-gray-300 mb-2">
                    Thank you for reaching out.
                </p>
                <p className="text-gray-400">
                    We'll get back to you as soon as possible.
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

            {/* Subject */}
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-light mb-2">
                    Subject <span className="text-teal">*</span>
                </label>
                <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support Question</option>
                    <option value="volunteer">Becoming Mālama</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
                    Message <span className="text-teal">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 text-light rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all resize-none"
                    placeholder="How can we help?"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-teal/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    )
}
