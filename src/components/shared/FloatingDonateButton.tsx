"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

export default function FloatingDonateButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Show button after 20 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 20000) // 20 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    window.location.href = '/give'
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
              >
                <div className="bg-dark-900 border border-teal/30 px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm text-gray-300">
                    Fund the <span className="text-teal font-semibold">ʻOhana</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">$7 keeps one night running 🌺</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Pulsing glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-teal to-purple rounded-full blur-xl opacity-60"
            />

            {/* Main button */}
            <div className="relative bg-gradient-to-br from-teal to-purple p-4 rounded-full shadow-2xl">
              <Heart
                className="w-6 h-6 text-white"
                fill={isHovered ? "white" : "none"}
              />
            </div>

            {/* Ripple effect on hover */}
            {isHovered && (
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 border-2 border-teal rounded-full"
              />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
