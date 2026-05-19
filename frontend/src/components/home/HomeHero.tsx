"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import Link from "next/link"
import LotusBreath from "@/components/ui/LotusBreath"
import { Calendar, Clock, Users } from "lucide-react"
import HomeMeetingCTA from "@/components/home/HomeMeetingCTA"

export default function HomeHero() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.88])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  // Scrub ocean video with scroll
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (video.duration) video.currentTime = progress * video.duration
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const letters = "OHANA".split("")

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Ocean wave video */}
      <div className="absolute inset-0 z-0">
        <motion.video
          ref={videoRef}
          style={{ scale: imageScale, opacity: 0.28 }}
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
          src="https://cdn.coverr.co/videos/coverr-ocean-waves-at-night-8347/1080p.mp4"
          muted
          playsInline
          loop={false}
          preload="auto"
        />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple/5 rounded-full blur-3xl"
        />
      </div>

      {/* Palm fronds */}
      <motion.div
        style={{ y: ySlow }}
        className="absolute inset-0 pointer-events-none z-[2]"
      >
        {/* Right frond */}
        <motion.div
          animate={{
            rotateZ: [-2, 4, -2],
            x: [0, 25, 0],
          }}
          transition={{
            rotateZ: { duration: 7, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ transformOrigin: "center bottom" }}
          className="absolute top-0 right-[-5%] opacity-30"
        >
          <svg width="400" height="600" viewBox="0 0 400 600" fill="none">
            <defs>
              <linearGradient id="hh-palm1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0d9488" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0f766e" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path d="M200 580 Q195 300 200 40" stroke="url(#hh-palm1)" strokeWidth="6" fill="none" strokeLinecap="round"/>
            {[...Array(12)].map((_, i) => {
              const y = 80 + i * 40
              const curve = 50 + i * 5
              return (
                <g key={i}>
                  <path d={`M200 ${y} Q${150 - curve} ${y - 10} ${50 - curve} ${y + 5}`} stroke="url(#hh-palm1)" strokeWidth={4 - i * 0.2} fill="none" strokeLinecap="round" opacity={0.9 - i * 0.05} />
                  <path d={`M200 ${y} Q${250 + curve} ${y - 10} ${350 + curve} ${y + 5}`} stroke="url(#hh-palm1)" strokeWidth={4 - i * 0.2} fill="none" strokeLinecap="round" opacity={0.9 - i * 0.05} />
                </g>
              )
            })}
          </svg>
        </motion.div>

        {/* Left frond */}
        <motion.div
          animate={{
            rotateZ: [2, -3, 2],
            x: [0, -20, 0],
          }}
          transition={{
            rotateZ: { duration: 8, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ transformOrigin: "center bottom", transform: "rotateY(180deg)" }}
          className="absolute bottom-0 left-[-5%] opacity-20"
        >
          <svg width="360" height="560" viewBox="0 0 360 560" fill="none">
            <defs>
              <linearGradient id="hh-palm2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5eead4" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M180 540 Q178 280 180 35" stroke="url(#hh-palm2)" strokeWidth="5" fill="none" strokeLinecap="round"/>
            {[...Array(11)].map((_, i) => {
              const y = 70 + i * 42
              const curve = 45 + i * 4
              return (
                <g key={i}>
                  <path d={`M180 ${y} Q${135 - curve} ${y - 8} ${40 - curve} ${y + 3}`} stroke="url(#hh-palm2)" strokeWidth={3.5 - i * 0.2} fill="none" strokeLinecap="round" opacity={0.85 - i * 0.05} />
                  <path d={`M180 ${y} Q${225 + curve} ${y - 8} ${320 + curve} ${y + 3}`} stroke="url(#hh-palm2)" strokeWidth={3.5 - i * 0.2} fill="none" strokeLinecap="round" opacity={0.85 - i * 0.05} />
                </g>
              )
            })}
          </svg>
        </motion.div>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Lotus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-6"
        >
          <LotusBreath size={80} showText={false} />
        </motion.div>

        {/* OHANA letter animation */}
        <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-4 mb-3">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: 80, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 100, damping: 10 }}
              whileHover={{ scale: 1.2, color: "#14b8a6", textShadow: "0 0 40px rgba(20,184,166,0.5)" }}
              className="text-[2.8rem] sm:text-6xl md:text-8xl font-black text-gray-100 cursor-default"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Recovery gradient subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-teal via-teal-400 to-purple bg-clip-text text-transparent">
            Recovery
          </span>
        </motion.div>

        {/* Hawaiian definition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-4 space-y-1"
        >
          <p className="text-lg text-gray-400 font-light">/oʊˈhɑːnə/ · Hawaiian: family, in an extended sense</p>
          <p className="text-base text-teal/70 font-mono tracking-widest uppercase">
            Nobody gets left behind or forgotten
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-5 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
        >
          A safe space for connection, healing, and growth.
          Real recovery. Real community. No judgment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-5 mt-8 mb-8"
        >
          <HomeMeetingCTA />
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/toolkit"
              className="inline-flex items-center justify-center gap-2 bg-dark-900/60 hover:bg-dark-800/70 text-gray-300 hover:text-gray-100 font-medium text-sm md:text-base px-5 py-2.5 rounded-xl transition-all backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Free Toolkit
            </Link>
          </motion.div>
        </motion.div>

        {/* Meeting info cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: Calendar, label: "Every Night", value: "365 Days/Year", accent: "teal" },
            { icon: Clock, label: "Meeting Time", value: "11 PM – 3 AM PT", accent: "gold" },
            { icon: Users, label: "Community", value: "Always Welcome", accent: "purple" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group bg-dark-900/50 backdrop-blur-sm rounded-xl p-5 transition-all"
            >
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  item.accent === "gold"
                    ? "bg-gradient-to-br from-gold/0 via-gold/10 to-transparent"
                    : item.accent === "purple"
                      ? "bg-gradient-to-br from-purple/0 via-purple/10 to-transparent"
                      : "bg-gradient-to-br from-teal/0 via-teal/10 to-transparent"
                }`}
              />
              <div className="relative z-10">
                <item.icon
                  className={`w-6 h-6 mx-auto mb-2 ${
                    item.accent === "gold"
                      ? "text-gold"
                      : item.accent === "purple"
                        ? "text-purple"
                        : "text-teal"
                  }`}
                />
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
