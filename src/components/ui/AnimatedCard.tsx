"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedCardProps {
  title: string
  description: string
  icon?: ReactNode
  delay?: number
  className?: string
}

export default function AnimatedCard({
  title,
  description,
  icon,
  delay = 0,
  className = "",
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className={`bg-purple-900/50 backdrop-blur-sm border border-purple-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transition-all ${className}`}
    >
      {icon && (
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl text-accent"
        >
          {icon}
        </motion.div>
      )}
      <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}
