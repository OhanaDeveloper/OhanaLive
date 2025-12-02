"use client"

import { motion } from "framer-motion"
import AnimatedCard from "@/components/ui/AnimatedCard"

const features = [
  {
    title: "Nightly Meetings",
    description: "Connect every night from 11 PM to 3 AM Pacific. No sign-up required.",
    icon: "🌙",
  },
  {
    title: "Real Community",
    description: "Authentic conversations with people who understand. No judgment.",
    icon: "🤝",
  },
  {
    title: "Safe Space",
    description: "A place to share, listen, and grow together in recovery.",
    icon: "🛡️",
  },
  {
    title: "Always Welcome",
    description: "Ohana means family. Nobody gets left behind or forgotten.",
    icon: "💚",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
            What Makes Us Different
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built on the belief that recovery happens in community, not isolation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
