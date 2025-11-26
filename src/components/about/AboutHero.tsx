"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  const letters = "OHANA".split("")

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Animated letter title */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              whileHover={{
                scale: 1.2,
                color: "#14b8a6",
                textShadow: "0 0 40px rgba(16,185,129,0.5)",
              }}
              className="text-6xl md:text-9xl font-black text-gray-100 cursor-default"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-2xl md:text-3xl text-gray-400 font-light">
            /oʊˈhɑːnə/
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-teal"
          >
            Hawaiian — meaning family, in an extended sense
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-12"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          &ldquo;Ohana means family. Family means{" "}
          <motion.span
            initial={{ color: "#d1d5db" }}
            animate={{ color: "#14b8a6" }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="font-semibold"
          >
            nobody gets left behind
          </motion.span>
          {" "}or forgotten.&rdquo;
        </motion.p>
      </div>
    </section>
  )
}
