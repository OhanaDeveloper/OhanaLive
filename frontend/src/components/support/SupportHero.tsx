"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function SupportHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  return (
    <div ref={ref} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-teal/12 rounded-full blur-3xl"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple/8 rounded-full blur-3xl"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </motion.div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-teal/80 text-sm font-mono tracking-widest uppercase mb-6"
        >
          Kōkua · Be Part of It
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-5xl md:text-7xl font-bold text-gray-100 leading-tight"
        >
          Ohana stays open
          <br className="hidden md:block" />
          <span className="text-teal"> because people show up.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
        >
          If you want to be part of how it stays open, here&apos;s how.
        </motion.p>
      </motion.div>
    </div>
  )
}
