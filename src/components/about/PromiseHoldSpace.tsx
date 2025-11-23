"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const pillars = [
  {
    icon: "🌈",
    title: "Every Identity",
    description: "LGBTQ+, straight, questioning — all are embraced here.",
  },
  {
    icon: "🌍",
    title: "Every Background",
    description: "Race, culture, religion, none — diversity is our strength.",
  },
  {
    icon: "🛤️",
    title: "Every Path",
    description: "12-step, SMART, therapy, your own way — all roads are valid.",
  },
  {
    icon: "📍",
    title: "Every Stage",
    description: "Day one or decade ten — your journey is honored here.",
  },
  {
    icon: "💔",
    title: "Every Struggle",
    description: "Substances, behaviors, mental health — pain is pain.",
  },
  {
    icon: "✨",
    title: "Every Victory",
    description: "Big or small, we celebrate every step forward together.",
  },
]

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10, scale: 1.03 }}
      className="relative group"
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.1 : 0.8,
        }}
        className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl transition-all duration-500"
      />

      <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-accent/40 transition-all duration-300">
        {/* Animated icon */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="text-4xl mb-4"
        >
          {pillar.icon}
        </motion.div>

        <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-accent transition-colors">
          {pillar.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {pillar.description}
        </p>

        {/* Corner accent */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5,
          }}
          className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default function PromiseHoldSpace() {
  return (
    <section className="py-32 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#10b981_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent/80 text-sm font-mono tracking-widest uppercase mb-4 block">
            Our Commitment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            We Hold Space for{" "}
            <motion.span
              initial={{ backgroundSize: "0% 3px" }}
              whileInView={{ backgroundSize: "100% 3px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-r from-accent to-accent bg-no-repeat bg-bottom"
            >
              All
            </motion.span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This is not a space of conditions. It's a space of unconditional belonging.
            Whoever you are, wherever you've been, there's room for you here.
          </p>
        </motion.div>

        {/* Pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Central message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 max-w-2xl"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-5xl mb-4"
            >
              🏠
            </motion.div>
            <p className="text-xl text-gray-200 font-medium mb-2">
              "Come as you are, not as you think you should be."
            </p>
            <p className="text-gray-500 text-sm">
              — The Ohana Promise
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
