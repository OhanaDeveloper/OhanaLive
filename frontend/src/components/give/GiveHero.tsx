"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function GiveHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      {/* Parallax orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-teal/15 rounded-full blur-3xl"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal/10 rounded-full blur-3xl"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-teal/80 text-sm font-mono tracking-widest uppercase mb-6"
        >
          Kōkua · Support
        </motion.span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="block text-gray-100"
          >
            Fund the
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="block text-teal"
          >
            ʻOhana
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-4"
        >
          Every night of meetings costs about $7. That&apos;s it.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-base text-gray-500 max-w-xl mx-auto"
        >
          No grants. No sponsors. No agenda. Just community members who show up
          for each other, and supporters who keep the lights on.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs uppercase tracking-widest">See how to help</span>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-teal rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
