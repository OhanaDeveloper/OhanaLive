"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"

export default function AboutHero() {
  const letters = "OHANA".split("")
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Tuned parallax values (62.9844% intensity)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "62.9844%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.88])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.25])

  // Parallax layers for depth (adjusted ratios)
  const yFast = useTransform(scrollYProgress, [0, 1], ["0%", "90%"])
  const yMedium = useTransform(scrollYProgress, [0, 1], ["0%", "45%"])
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  // Control video playback based on scroll
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (video.duration) {
        // Scrub video forward/backward based on scroll position
        const targetTime = progress * video.duration
        video.currentTime = targetTime
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Scroll-controlled ocean wave video with transparency */}
      <div className="absolute inset-0 z-0">
        <motion.video
          ref={videoRef}
          style={{
            scale: imageScale,
            opacity: 0.3
          }}
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
          src="https://cdn.coverr.co/videos/coverr-ocean-waves-at-night-8347/1080p.mp4"
          muted
          playsInline
          loop={false}
          preload="auto"
        />
      </div>

      {/* CHILL HAWAIIAN VIBES - JUST PALMS AND PEACEFUL STUFF */}

      {/* Depth Layer 4 - Near: Photo-realistic Palm Fronds with wind simulation */}
      <motion.div
        style={{
          y: ySlow,
          rotateZ: useTransform(scrollYProgress, [0, 1], [0, -5]),
        }}
        className="absolute inset-0 pointer-events-none z-20"
      >
        {/* Right Palm Frond */}
        <motion.div
          animate={{
            rotateZ: [-2, 4, -2],
            x: [0, 25, 0],
            rotateY: [0, -8, 0],
          }}
          transition={{
            rotateZ: { duration: 7, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 11, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(200px)",
            transformOrigin: "center bottom",
          }}
          className="absolute top-0 right-[-5%] opacity-40"
        >
          <svg width="400" height="600" viewBox="0 0 400 600" fill="none">
            <defs>
              <linearGradient id="palmGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0d9488" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0f766e" stopOpacity="0.4" />
              </linearGradient>
              <filter id="palmShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
                <feOffset dx="5" dy="10" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.6"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#palmShadow)" opacity="0.8">
              <path d="M200 580 Q195 300 200 40" stroke="url(#palmGradient1)" strokeWidth="6" fill="none" strokeLinecap="round"/>
              {[...Array(12)].map((_, i) => {
                const y = 80 + i * 40
                const curve = 50 + i * 5
                return (
                  <g key={i}>
                    <path
                      d={`M200 ${y} Q${150 - curve} ${y - 10} ${50 - curve} ${y + 5}`}
                      stroke="url(#palmGradient1)"
                      strokeWidth={4 - i * 0.2}
                      fill="none"
                      strokeLinecap="round"
                      opacity={0.9 - i * 0.05}
                    />
                    <path
                      d={`M200 ${y} Q${250 + curve} ${y - 10} ${350 + curve} ${y + 5}`}
                      stroke="url(#palmGradient1)"
                      strokeWidth={4 - i * 0.2}
                      fill="none"
                      strokeLinecap="round"
                      opacity={0.9 - i * 0.05}
                    />
                  </g>
                )
              })}
            </g>
          </svg>
        </motion.div>

        {/* Left Palm Frond */}
        <motion.div
          animate={{
            rotateZ: [2, -3, 2],
            x: [0, -20, 0],
            rotateY: [0, 6, 0],
          }}
          transition={{
            rotateZ: { duration: 8, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(180px) rotateY(180deg)",
            transformOrigin: "center bottom",
          }}
          className="absolute bottom-0 left-[-5%] opacity-30"
        >
          <svg width="360" height="560" viewBox="0 0 360 560" fill="none">
            <defs>
              <linearGradient id="palmGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5eead4" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <g filter="url(#palmShadow)" opacity="0.8">
              <path d="M180 540 Q178 280 180 35" stroke="url(#palmGradient2)" strokeWidth="5" fill="none" strokeLinecap="round"/>
              {[...Array(11)].map((_, i) => {
                const y = 70 + i * 42
                const curve = 45 + i * 4
                return (
                  <g key={i}>
                    <path
                      d={`M180 ${y} Q${135 - curve} ${y - 8} ${40 - curve} ${y + 3}`}
                      stroke="url(#palmGradient2)"
                      strokeWidth={3.5 - i * 0.2}
                      fill="none"
                      strokeLinecap="round"
                      opacity={0.85 - i * 0.05}
                    />
                    <path
                      d={`M180 ${y} Q${225 + curve} ${y - 8} ${320 + curve} ${y + 3}`}
                      stroke="url(#palmGradient2)"
                      strokeWidth={3.5 - i * 0.2}
                      fill="none"
                      strokeLinecap="round"
                      opacity={0.85 - i * 0.05}
                    />
                  </g>
                )
              })}
            </g>
          </svg>
        </motion.div>
      </motion.div>


      {/* Main Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
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
            Hawaiian: meaning family, in an extended sense
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-8"
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs uppercase tracking-widest">Discover our story</span>
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
