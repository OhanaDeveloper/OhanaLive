"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { memo } from "react"

interface LotusBreathProps {
    size?: number
    className?: string
    showText?: boolean
}

function LotusBreathComponent({ size = 120, className = "", showText = false }: LotusBreathProps) {
    // Breathing animation: inhale (4s) → hold (2s) → exhale (4s) → hold (2s) = 12s cycle
    const breathingAnimation = {
        scale: [1, 1.15, 1.15, 1, 1],
        opacity: [0.7, 1, 1, 0.7, 0.7],
        rotate: [0, 5, 5, 0, 0],
    }

    const glowAnimation = {
        opacity: [0.3, 0.7, 0.7, 0.3, 0.3],
        scale: [1, 1.3, 1.3, 1, 1],
    }

    return (
        <div className={`relative flex flex-col items-center justify-center ${className}`}>
            {/* Glow effect behind lotus */}
            <motion.div
                className="absolute rounded-full bg-gradient-to-r from-teal/20 via-purple/20 to-teal/20 blur-2xl"
                style={{
                    width: size * 1.5,
                    height: size * 1.5,
                    willChange: 'opacity, transform',
                }}
                animate={glowAnimation}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: [0.4, 0.0, 0.2, 1], // Smooth easing
                    times: [0, 0.33, 0.5, 0.83, 1],
                }}
            />

            {/* Lotus image */}
            <motion.div
                className="relative z-10"
                animate={breathingAnimation}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: [0.4, 0.0, 0.2, 1],
                    times: [0, 0.33, 0.5, 0.83, 1],
                }}
                style={{ willChange: 'transform, opacity' }}
            >
                <Image
                    src="/lotus-logo.png"
                    alt="Lotus - Symbol of recovery and renewal"
                    width={size}
                    height={size}
                    className="drop-shadow-2xl"
                    priority
                />
            </motion.div>

            {/* Optional breathing guide text */}
            {showText && (
                <motion.p
                    className="mt-6 text-sm font-mono text-teal/60 tracking-widest uppercase"
                    animate={{
                        opacity: [0.4, 1, 1, 0.4, 0.4],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: [0.4, 0.0, 0.2, 1],
                        times: [0, 0.33, 0.5, 0.83, 1],
                    }}
                >
                    <motion.span
                        key="breathe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0, 0] }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            times: [0, 0.05, 0.45, 0.5, 1],
                        }}
                    >
                        Breathe
                    </motion.span>
                </motion.p>
            )}
        </div>
    )
}

// Memoize to prevent unnecessary re-renders
export default memo(LotusBreathComponent)
