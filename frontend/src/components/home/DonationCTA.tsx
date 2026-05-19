"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Heart } from "lucide-react"

export default function DonationCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="py-10 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-dark-900/60 backdrop-blur-md border border-teal/20 rounded-2xl px-8 py-8 shadow-xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-purple/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform", transform: "translateZ(0)" }}
            >
              <Heart className="w-6 h-6 text-teal" fill="currentColor" />
            </motion.div>

            <p className="text-gray-300 text-lg">
              These meetings run every night.{" "}
              <span className="text-white font-semibold">$7 keeps one going.</span>
            </p>

            <Link href="/support">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal to-purple text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-teal/20 transition-shadow cursor-pointer"
              >
                Support the ʻOhana
              </motion.span>
            </Link>

            <p className="text-xs text-gray-500">Community-funded · No pressure · Mahalo 🌺</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
