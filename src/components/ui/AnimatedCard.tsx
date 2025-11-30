"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

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
  const ref = useRef<HTMLDivElement>(null)

  // Magnetic cursor effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-teal/20 hover:border-teal/50 transition-all group ${className}`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal/0 via-teal/5 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div style={{ transform: "translateZ(50px)" }} className="relative">
        {icon && (
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 text-5xl"
          >
            {icon}
          </motion.div>
        )}
        <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-teal transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
