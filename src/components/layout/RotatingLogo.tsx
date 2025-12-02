"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { memo } from "react"

type RotatingLogoProps = {
  size?: number
  className?: string
  showText?: boolean
}

function RotatingLogoComponent({ size = 40, className = "", showText = false }: RotatingLogoProps) {
  // Gentle breathing/blooming animation
  const breathAnimation = {
    scale: [1, 1.08, 1],
    opacity: [0.85, 1, 0.85],
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Lotus with breathing animation */}
      <motion.div
        className="relative"
        style={{
          width: size,
          height: size,
          willChange: 'transform, opacity',
        }}
        animate={breathAnimation}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <Image
          src="/lotus-logo.png"
          alt="Ohana Recovery - Lotus Symbol"
          fill
          className="object-contain drop-shadow-lg"
          priority
          unoptimized
        />
      </motion.div>

      {/* Optional "Ohana Recovery" text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col"
        >
          <span className="font-bold text-xl text-light tracking-tight">
            Ohana
          </span>
          <span className="font-light text-sm text-teal/80 tracking-widest uppercase">
            Recovery
          </span>
        </motion.div>
      )}
    </div>
  )
}

// Memoize to prevent unnecessary re-renders
export default memo(RotatingLogoComponent)
