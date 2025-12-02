"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PenLine } from "lucide-react"

interface ShareStoryCTAProps {
    variant?: "card" | "inline"
    className?: string
}

export default function ShareStoryCTA({ variant = "inline", className = "" }: ShareStoryCTAProps) {
    if (variant === "card") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br from-purple/10 to-teal/10 border-2 border-purple/30 rounded-2xl p-8 md:p-12 text-center ${className}`}
            >
                <PenLine className="w-12 h-12 text-purple mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-light mb-4">
                    Share Your Story
                </h3>
                <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                    Your journey matters. Help others by sharing your experience, strength,
                    and hope.
                </p>
                <Link
                    href="/forms/story"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple to-purple-dark text-light font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-purple/50 hover:scale-105 transition-all"
                >
                    <PenLine className="w-5 h-5" />
                    Submit Your Story
                </Link>
            </motion.div>
        )
    }

    // inline variant (default)
    return (
        <Link
            href="/forms/story"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-purple/20 hover:bg-purple/30 border-2 border-purple text-purple font-semibold rounded-lg transition-all ${className}`}
        >
            <PenLine className="w-5 h-5" />
            Share Your Story
        </Link>
    )
}
