"use client"

import { motion } from "framer-motion"
import { Heart, Star, Zap, Shield } from "lucide-react"

const tiers = [
  {
    icon: Heart,
    amount: "$7",
    label: "One Night",
    frequency: "one-time",
    description: "Covers one full night of meetings: the Zoom, the hosting, the whole thing.",
    impact: "1 night of community",
    featured: false,
    color: "teal",
  },
  {
    icon: Star,
    amount: "$25",
    label: "Founding Member",
    frequency: "per month",
    description:
      "Join the inner circle. Recurring members are the backbone of Ohana, recognized, appreciated, and never forgotten.",
    impact: "3+ nights per month",
    featured: true,
    badge: "Most Meaningful",
    color: "teal",
  },
  {
    icon: Zap,
    amount: "$50",
    label: "One Week",
    frequency: "one-time",
    description: "Sponsor a full week of nightly meetings for everyone who shows up.",
    impact: "7 nights of community",
    featured: false,
    color: "purple",
  },
  {
    icon: Shield,
    amount: "$200",
    label: "Month Sponsor",
    frequency: "one-time",
    description:
      "Cover the entire month. Your handle can be acknowledged in meeting intros, or stay anonymous. Your call.",
    impact: "Full month covered",
    featured: false,
    color: "gold",
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function GivingTiers() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-teal/80 text-sm font-mono tracking-widest uppercase mb-4">
            Ways to Help
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Choose your kōkua
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every dollar goes directly to keeping the meetings running. $200 covers a
            full month. Broken down, that&apos;s $6.67 per night.
          </p>
        </motion.div>

        {/* Tiers grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {tiers.map((tier) => {
            const Icon = tier.icon
            const isFeatured = tier.featured

            return (
              <motion.div
                key={tier.label}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative group rounded-2xl border p-6 flex flex-col gap-4 cursor-pointer ${
                  isFeatured
                    ? "bg-gradient-to-b from-teal/10 to-dark-900 border-teal/50 shadow-lg shadow-teal/10"
                    : "bg-dark-900/60 border-dark-700 hover:border-teal/30"
                }`}
                style={{ willChange: "transform", transform: "translateZ(0)" }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal/0 via-teal/5 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Featured badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal to-purple text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="relative z-10 flex flex-col gap-4 flex-1">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isFeatured ? "bg-teal/20" : "bg-dark-800"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        tier.color === "teal"
                          ? "text-teal"
                          : tier.color === "purple"
                          ? "text-purple"
                          : "text-gold"
                      }`}
                    />
                  </div>

                  {/* Amount + label */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-3xl font-bold ${
                          isFeatured ? "text-teal" : "text-gray-100"
                        }`}
                      >
                        {tier.amount}
                      </span>
                      <span className="text-gray-500 text-sm">/ {tier.frequency}</span>
                    </div>
                    <p className="text-gray-300 font-semibold mt-0.5">{tier.label}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {tier.description}
                  </p>

                  {/* Impact pill */}
                  <div className="text-xs text-teal/70 font-mono bg-teal/5 border border-teal/20 rounded-full px-3 py-1 w-fit">
                    {tier.impact}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="https://ko-fi.com/ohanarecovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`mt-auto text-center py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                      isFeatured
                        ? "bg-gradient-to-r from-teal to-purple text-white shadow-lg shadow-teal/20"
                        : "bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white border border-dark-700 hover:border-teal/30"
                    }`}
                  >
                    {isFeatured ? "Become a Founding Member" : `Give ${tier.amount}`}
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Transparency section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark-900/40 border border-dark-700 rounded-2xl p-8 mb-10"
        >
          <h3 className="text-xl font-bold text-gray-100 mb-2 text-center">
            Where it goes
          </h3>
          <p className="text-gray-400 text-sm text-center mb-6">
            $200/month keeps everything running. Here&apos;s the honest breakdown.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Meeting infrastructure", detail: "Video hosting, reliability tools", amount: "~$35/mo" },
              { label: "Platform & hosting", detail: "Frontend, backend, database", amount: "~$55/mo" },
              { label: "Growth & reserve", detail: "Scaling for more members", amount: "~$110/mo" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-dark-800/60 rounded-xl p-4 border border-dark-700"
              >
                <p className="text-teal font-semibold text-lg">{item.amount}</p>
                <p className="text-gray-300 text-sm font-medium mt-0.5">{item.label}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Ohana Recovery is community-funded. We will never have ads, sell data,
            or lock recovery resources behind a paywall. Free. Always.
          </p>
          <p className="text-gray-600 text-xs mt-3">Mahalo for your kōkua 🌺</p>
        </motion.div>
      </div>
    </section>
  )
}
