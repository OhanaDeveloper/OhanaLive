"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Video } from "lucide-react"

interface MeetingCTAProps {
    variant?: "hero" | "inline" | "card"
    className?: string
}

export default function MeetingCTA({ variant = "inline", className = "" }: MeetingCTAProps) {
    if (variant === "hero") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`text-center ${className}`}
            >
                <Link
                    href="/#meeting"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-teal/50 hover:scale-105 transition-all"
                >
                    <Video className="w-6 h-6" />
                    Join Tonight's Meeting
                </Link>
                <p className="text-sm text-gray-400 mt-4">
                    Every night 11pm-3am PT · Free · No sign-up required
                </p>
            </motion.div>
        )
    }

    if (variant === "card") {
        return (
            <div className={`bg-dark-900/50 border-2 border-teal/30 rounded-2xl p-8 text-center ${className}`}>
                <h3 className="text-2xl font-bold text-light mb-4">
                    Join Us Tonight
                </h3>
                <p className="text-gray-400 mb-6">
                    Connect with others in recovery. Every night 11pm-3am PT.
                </p>
                <Link
                    href="/#meeting"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold rounded-lg hover:shadow-lg hover:shadow-teal/30 transition-all"
                >
                    <Video className="w-5 h-5" />
                    Join Meeting
                </Link>
            </div>
        )
    }

    // inline variant (default)
    return (
        <Link
            href="/#meeting"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold rounded-lg hover:shadow-lg hover:shadow-teal/30 transition-all ${className}`}
        >
            <Video className="w-5 h-5" />
            Join Tonight's Meeting
        </Link>
    )
}
