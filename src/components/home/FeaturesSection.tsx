"use client"

import { motion } from "framer-motion"
import { Moon, Users, Shield, Heart } from "lucide-react"
import AnimatedCard from "@/components/ui/AnimatedCard"

const features = [
  {
    title: "Every Night",
    description: "Meetings run 11 PM – 3 AM Pacific, 365 nights a year. No sign-up, no pressure.",
    icon: <Moon className="w-10 h-10 text-teal" aria-hidden="true" />,
  },
  {
    title: "Real Community",
    description: "Candid conversation with people who actually get it. No judgment, no preaching.",
    icon: <Users className="w-10 h-10 text-purple" aria-hidden="true" />,
  },
  {
    title: "Safe Space",
    description: "A place to show up as you are. Share what you want, or just listen.",
    icon: <Shield className="w-10 h-10 text-teal" aria-hidden="true" />,
  },
  {
    title: "Nobody Left Behind",
    description: "ʻOhana means family. You belong here whether it's your first night or your thousandth.",
    icon: <Heart className="w-10 h-10 text-purple" aria-hidden="true" />,
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
            Why Ohana Recovery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built on the belief that recovery happens in community, not in isolation.
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
