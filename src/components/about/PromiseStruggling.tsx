"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

const promises = [
  "We will answer when you call.",
  "We will listen without judgment.",
  "We will meet you where you are.",
  "We will never give up on you.",
  "We will hold hope when you can't.",
]

export default function PromiseStruggling() {
  const ref = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"])

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Dramatic gradient background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/20 to-transparent"
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-accent/30 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-400/80 text-sm font-mono tracking-widest uppercase mb-4 block">
            To Those Still Struggling
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Our Promise to You
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            If you're in the thick of it right now — if the nights feel endless and
            the weight feels unbearable — these words are for you.
          </p>
        </motion.div>

        {/* Promise cards with stagger */}
        <div className="space-y-4">
          {promises.map((promise, i) => (
            <motion.div
              key={promise}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className={`relative p-6 rounded-xl border transition-all duration-300 cursor-default ${
                  hoveredIndex === i
                    ? "bg-accent/10 border-accent/50 shadow-lg shadow-accent/10"
                    : "bg-gray-900/30 border-gray-800"
                }`}
              >
                {/* Number indicator */}
                <motion.span
                  animate={{
                    scale: hoveredIndex === i ? 1.2 : 1,
                    color: hoveredIndex === i ? "#10b981" : "#4b5563",
                  }}
                  className="absolute -left-2 top-1/2 -translate-y-1/2 text-6xl font-black opacity-20"
                >
                  {i + 1}
                </motion.span>

                <div className="flex items-center gap-4 ml-8">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === i ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-3 h-3 rounded-full ${
                      hoveredIndex === i ? "bg-accent" : "bg-gray-600"
                    }`}
                  />
                  <p
                    className={`text-xl md:text-2xl font-medium transition-colors ${
                      hoveredIndex === i ? "text-gray-100" : "text-gray-400"
                    }`}
                  >
                    {promise}
                  </p>
                </div>

                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent to-transparent origin-left"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-gray-300 italic">
            "You are not alone. You never were."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
