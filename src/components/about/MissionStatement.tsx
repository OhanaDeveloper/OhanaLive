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

  return (
    <section ref={ref} className="py-32 px-4 relative">
      {/* Decorative elements */}
      <motion.div
        style={{ opacity }}
        className="absolute top-20 left-10 w-20 h-20 border border-accent/20 rounded-full"
      />
      <motion.div
        style={{ opacity }}
        className="absolute bottom-20 right-10 w-32 h-32 border border-accent/10 rounded-full"
      />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-accent/80 text-sm font-mono tracking-widest uppercase mb-6"
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
              className="absolute bottom-2 left-0 h-3 bg-accent/30 -z-0"
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
              className="absolute bottom-2 left-0 h-3 bg-accent/30 -z-0"
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
          We exist to create a sanctuary for those navigating recovery — a place where
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
          className="grid grid-cols-3 gap-8 mt-16"
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
                className="text-4xl md:text-5xl font-bold text-accent mb-2"
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
