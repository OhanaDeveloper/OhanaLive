"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Heart } from "lucide-react"

interface VolunteerCTAProps {
    variant?: "card" | "inline"
    className?: string
}

export default function VolunteerCTA({ variant = "inline", className = "" }: VolunteerCTAProps) {
    if (variant === "card") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br from-teal/10 to-purple/10 border-2 border-teal/30 rounded-2xl p-8 md:p-12 text-center ${className}`}
            >
                <Heart className="w-12 h-12 text-teal mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-light mb-4">
                    Join the Crew
                </h3>
                <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                    Help tend, preserve, and hold space for others. Join our dedicated
                    team of meeting facilitators.
                </p>
                <Link
                    href="/forms/volunteer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-teal/50 hover:scale-105 transition-all"
                >
                    <Heart className="w-5 h-5" />
                    Apply to Join
                </Link>
            </motion.div>
        )
    }

    // inline variant (default)
    return (
        <Link
            href="/forms/volunteer"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-teal/20 hover:bg-teal/30 border-2 border-teal text-teal font-semibold rounded-lg transition-all ${className}`}
        >
            <Heart className="w-5 h-5" />
            Join the Crew
        </Link>
    )
}
