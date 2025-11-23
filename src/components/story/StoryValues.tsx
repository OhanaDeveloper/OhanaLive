"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const values = [
  {
    icon: "🌙",
    title: "Present When It Matters",
    description:
      "The hardest hours deserve the most support. We show up when the rest of the world sleeps.",
  },
  {
    icon: "🔥",
    title: "Raw Authenticity",
    description:
      "No scripts, no formulas. Just real people sharing real experiences without pretense.",
  },
  {
    icon: "🤝",
    title: "Radical Welcome",
    description:
      "Every path to recovery is valid. We meet people where they are, not where we think they should be.",
  },
  {
    icon: "🏠",
    title: "Ohana Spirit",
    description:
      "Family means nobody gets left behind. Or forgotten. This is the heart of everything we do.",
  },
]

function ValueCard({ value }: { value: typeof values[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [10, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rotate, opacity }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-purple-900/60 backdrop-blur-sm border border-purple-800 rounded-2xl p-8 h-full hover:border-accent/30 transition-colors duration-300">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-5xl mb-6 inline-block"
        >
          {value.icon}
        </motion.div>

        <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-accent transition-colors">
          {value.title}
        </h3>

        <p className="text-gray-400 leading-relaxed">
          {value.description}
        </p>

        {/* Decorative corner */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-700/50 rounded-tr-lg opacity-0 group-hover:opacity-100 group-hover:border-accent/30 transition-all duration-300" />
      </div>
    </motion.div>
  )
}

export default function StoryValues() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent/80 text-sm font-mono tracking-widest uppercase mb-4 block">
            What We Believe
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These aren&apos;t just words on a page. They&apos;re the principles that guide
            every meeting, every conversation, every connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
