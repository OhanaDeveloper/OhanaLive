"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type RotatingLogoProps = {
  size?: number
  className?: string
}

export default function RotatingLogo({ size = 40, className = "" }: RotatingLogoProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
      }}
      animate={{ rotateY: 360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Image
        src="/lotus-logo.png"
        alt="Ohana Live"
        fill
        className="object-contain"
        priority
        unoptimized
      />
    </motion.div>
  )
}
