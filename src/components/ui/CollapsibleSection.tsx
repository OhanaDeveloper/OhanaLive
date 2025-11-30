"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import type { ReactNode } from "react"

interface CollapsibleSectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}

export default function CollapsibleSection({
  title,
  subtitle,
  children,
  defaultOpen = true,
  className = "",
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Clickable Header */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full group"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex items-center justify-between mb-8 bg-dark-900/30 backdrop-blur-sm border border-dark-800 rounded-xl p-6 hover:border-teal/30 transition-colors">
            <div className="text-left">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-100 mb-2 group-hover:text-teal transition-colors"
                layout
              >
                {title}
              </motion.h2>
              {subtitle && (
                <p className="text-gray-400 text-lg">{subtitle}</p>
              )}
            </div>

            {/* Animated Chevron */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-shrink-0 ml-4"
            >
              <svg
                className="w-8 h-8 text-teal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </div>
        </motion.button>

        {/* Collapsible Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.4,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  },
                  opacity: {
                    duration: 0.3,
                    delay: 0.1,
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.3,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  },
                  opacity: {
                    duration: 0.2,
                  },
                },
              }}
              className="overflow-hidden"
            >
              <div className="pb-4">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
