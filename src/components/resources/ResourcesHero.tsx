"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ResourcesHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1920&q=80"
          alt="Journal and pen"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/90 to-dark-950" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-teal/80 text-sm font-mono tracking-widest uppercase mb-4"
        >
          Free Resources
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-gray-100 mb-6"
        >
          Recovery{" "}
          <span className="text-teal">Worksheets</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Practical tools for your journey. Download, print, and use these
          worksheets to support your recovery, completely free.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-12 mt-12"
        >
          {[
            { number: "12", label: "Worksheets" },
            { number: "6", label: "Categories" },
            { number: "100%", label: "Free" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                className="text-3xl font-bold text-teal"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
