"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import LotusBreath from "@/components/ui/LotusBreath"
import { Calendar, Clock, Users, Video } from "lucide-react"
import { MEETING_INFO } from "@/lib/meetings"

export default function HomeHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple/5 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Breathing Lotus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <LotusBreath size={120} showText={false} />
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-gray-100"
            >
              Welcome to
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="block bg-gradient-to-r from-teal via-teal-400 to-purple bg-clip-text text-transparent"
            >
              Ohana Recovery
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8"
          >
            A safe space for connection, healing, and growth.
            Real recovery. Real community. No judgment.
          </motion.p>

          {/* Hawaiian subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-teal/60 font-mono tracking-widest uppercase mb-10"
          >
            ʻOhana means family · Nobody gets left behind
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href={MEETING_INFO.zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{ willChange: "transform" }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal to-teal-dark text-dark-950 font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-teal/20 hover:shadow-teal/40 transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Video className="w-5 h-5" aria-hidden="true" />
              Join Tonight's Meeting
            </motion.a>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 bg-dark-900/60 border border-dark-700 hover:border-teal/40 text-gray-300 hover:text-gray-100 font-medium text-lg px-8 py-4 rounded-xl transition-all backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Free Worksheets
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Meeting Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: Calendar, label: "Every Night", value: "365 Days/Year" },
            { icon: Clock, label: "Meeting Time", value: "11 PM – 3 AM PT" },
            { icon: Users, label: "Community", value: "Always Welcome" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-5 hover:border-teal/50 transition-all"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal/0 via-teal/5 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <item.icon className="w-6 h-6 text-teal mx-auto mb-2" />
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm font-semibold text-gray-200">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  )
}
