"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function MissionStatement() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  // Gentle glow based on scroll position - peaks when section is centered
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.3, 0.5, 0.3, 0]
  )

  return (
    <section ref={ref} className="py-16 px-4 relative overflow-hidden">
      {/* Peaceful scroll-based ambient glow */}
      <motion.div
        style={{
          y,
          opacity: glowOpacity,
        }}
        className="absolute top-20 left-10 w-48 h-48 bg-gradient-radial from-amber-500/30 via-orange-500/15 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
          opacity: glowOpacity,
        }}
        className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-radial from-teal-400/30 via-cyan-500/15 to-transparent rounded-full blur-3xl"
      />

      {/* Additional gentle ambient light */}
      <motion.div
        style={{
          y,
          opacity: glowOpacity,
        }}
        className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-radial from-rose-400/20 via-pink-500/10 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-teal/80 text-sm font-mono tracking-widest uppercase mb-6"
        >
          Our Mission
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-gray-100 mb-8 leading-tight"
        >
          To be the{" "}
          <span className="relative inline-block">
            <span className="relative z-10">light</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-2 left-0 h-3 bg-teal/30 -z-0"
            />
          </span>{" "}
          in the{" "}
          <span className="relative inline-block">
            <span className="relative z-10">darkest hours</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-2 left-0 h-3 bg-teal/30 -z-0"
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
        >
          We exist to create a sanctuary for those navigating recovery, a place where
          vulnerability is strength, where silence is broken by understanding, and where
          no one has to face the night alone. Through authentic connection and radical
          acceptance, we build bridges from isolation to community.
        </motion.p>

        {/* Stats/Impact row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-8 mt-10"
        >
          {[
            { number: "365", label: "Nights a Year" },
            { number: "4", label: "Hours Every Night" },
            { number: "∞", label: "People Welcome" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                className="text-4xl md:text-5xl font-bold text-teal mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
