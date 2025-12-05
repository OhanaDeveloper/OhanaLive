"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Background() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Parallax transforms for layered depth
  const yLayer1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const yLayer2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const yLayer3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Layer 1: Deep parallax - Teal bursts (fastest) */}
      <motion.div style={{ y: yLayer1 }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-radial from-teal-500/40 via-teal-600/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0.7, 0.4],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/5 w-[28rem] h-[28rem] bg-gradient-radial from-teal-400/50 via-cyan-500/25 to-transparent rounded-full blur-3xl"
        />
      </motion.div>

      {/* Layer 2: Medium parallax - Purple & Gold accents (medium) */}
      <motion.div style={{ y: yLayer2 }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.35, 0.65, 0.35],
            rotate: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-purple-500/45 via-purple-600/22 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.7, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/4 left-1/4 w-[26rem] h-[26rem] bg-gradient-radial from-amber-400/40 via-yellow-500/20 to-transparent rounded-full blur-3xl"
        />
      </motion.div>

      {/* Layer 3: Foreground parallax - Accent bursts (slowest) */}
      <motion.div style={{ y: yLayer3 }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-radial from-teal-300/55 via-cyan-400/28 to-transparent rounded-full blur-3xl"
        />
      </motion.div>

      {/* Subtle ambient particles */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 35%, rgba(20, 184, 166, 0.3) 2px, transparent 2px),
                           radial-gradient(circle at 75% 65%, rgba(168, 85, 247, 0.25) 2.5px, transparent 2.5px),
                           radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.2) 2px, transparent 2px),
                           radial-gradient(circle at 85% 25%, rgba(20, 184, 166, 0.3) 3px, transparent 3px),
                           radial-gradient(circle at 20% 75%, rgba(168, 85, 247, 0.2) 2px, transparent 2px)`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  )
}
