"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CloudUpload, History, BarChart2, Star } from "lucide-react"

const features = [
  {
    icon: CloudUpload,
    label: "Synced across devices",
    detail: "Start on your phone, finish on any device. Your work never disappears.",
  },
  {
    icon: History,
    label: "Full history",
    detail: "Review every worksheet you've completed and see how far you've come.",
  },
  {
    icon: BarChart2,
    label: "Progress tracking",
    detail: "Track sobriety milestones and recovery momentum over time.",
  },
  {
    icon: Star,
    label: "Member-only features",
    detail: "Exclusive tools and resources for Ohana account holders.",
  },
]

export default function AccountSignupPromo() {
  return (
    <section className="py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative bg-dark-900/60 backdrop-blur-md border border-teal/20 rounded-2xl overflow-hidden shadow-xl">
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-purple/5 pointer-events-none" />
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" />

          <div className="relative z-10 px-6 py-10 md:px-12 md:py-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">

              {/* Left column */}
              <div className="flex-1 min-w-0">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="inline-block text-teal/80 text-xs font-mono tracking-widest uppercase mb-3"
                >
                  Free Ohana Account
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="text-2xl md:text-3xl font-bold text-gray-100 mb-3 leading-tight"
                >
                  Your worksheets, saved forever.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 leading-relaxed mb-7 max-w-lg"
                >
                  Right now your work saves to this device only. Create a free account and
                  it follows you everywhere — plus you unlock tracking, history, and
                  features built around real recovery.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold px-7 py-3.5 rounded-xl hover:shadow-lg hover:shadow-teal/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    Create Free Account
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-teal font-medium px-7 py-3.5 rounded-xl hover:bg-dark-800/60 transition-all"
                  >
                    Already have one? Log in →
                  </Link>
                </motion.div>
              </div>

              {/* Right column: feature grid */}
              <div className="w-full lg:w-auto lg:min-w-[340px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {features.map((feature, i) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.07 }}
                      className="flex items-start gap-3 bg-dark-800/40 hover:bg-dark-800/70 rounded-xl px-4 py-3 group transition-colors"
                    >
                      <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                        <feature.icon className="w-3.5 h-3.5 text-teal" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-200">{feature.label}</p>
                        <p className="text-xs text-gray-500 leading-snug mt-0.5">{feature.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
