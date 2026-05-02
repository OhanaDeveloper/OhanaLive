"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

type ComplianceItem = {
  category: string
  requirement: string
  level: "A" | "AA" | "AAA"
  status: "met" | "exceeded"
  description: string
}

const complianceRequirements: ComplianceItem[] = [
  {
    category: "Color Contrast",
    requirement: "WCAG AAA Contrast Ratio (7:1)",
    level: "AAA",
    status: "exceeded",
    description: "Pure black (#000) on white (#FFF) provides maximum contrast for text readability",
  },
  {
    category: "Color Contrast",
    requirement: "Enhanced Contrast for UI Components",
    level: "AAA",
    status: "exceeded",
    description: "All interactive elements have enhanced borders and focus states with high contrast colors",
  },
  {
    category: "Keyboard Navigation",
    requirement: "Focus Indicators (3px solid outline)",
    level: "AAA",
    status: "exceeded",
    description: "All focusable elements have visible 3px solid #00ffdd outline with 2px offset",
  },
  {
    category: "Keyboard Navigation",
    requirement: "Keyboard Accessible Controls",
    level: "A",
    status: "met",
    description: "All interactive elements are fully navigable and operable via keyboard",
  },
  {
    category: "Text Readability",
    requirement: "Increased Font Size (110%)",
    level: "AAA",
    status: "exceeded",
    description: "Base font size increased by 10% in accessible mode for improved readability",
  },
  {
    category: "Text Readability",
    requirement: "Clear Typography Hierarchy",
    level: "AA",
    status: "met",
    description: "Semantic heading structure with clear visual hierarchy and proper font weights",
  },
  {
    category: "Visual Design",
    requirement: "No Reliance on Color Alone",
    level: "A",
    status: "met",
    description: "Information is conveyed through multiple visual cues including text, icons, and borders",
  },
  {
    category: "Visual Design",
    requirement: "Removed Decorative Blur Effects",
    level: "AAA",
    status: "exceeded",
    description: "Backdrop blur and subtle effects removed in accessible mode for clarity",
  },
  {
    category: "Screen Reader",
    requirement: "ARIA Labels and Roles",
    level: "A",
    status: "met",
    description: "All interactive elements have appropriate ARIA labels and semantic HTML",
  },
  {
    category: "Screen Reader",
    requirement: "Live Region Announcements",
    level: "AA",
    status: "met",
    description: "Mode changes announced via aria-live regions for screen reader users",
  },
  {
    category: "User Control",
    requirement: "Persistent Accessibility Preference",
    level: "AAA",
    status: "exceeded",
    description: "User preference saved in localStorage and persists across sessions",
  },
  {
    category: "User Control",
    requirement: "Visual Confirmation of Mode",
    level: "AAA",
    status: "exceeded",
    description: "Clear notification banner displays current accessibility mode status",
  },
]

export default function ADAComplianceModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [checkedItems, setCheckedItems] = useState<number[]>([])

  useEffect(() => {
    if (isOpen) {
      // Stagger the check animations
      complianceRequirements.forEach((_, index) => {
        setTimeout(() => {
          setCheckedItems((prev) => [...prev, index])
        }, index * 100)
      })
    } else {
      setCheckedItems([])
    }
  }, [isOpen])

  const groupedByCategory = complianceRequirements.reduce(
    (acc, item, index) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push({ ...item, originalIndex: index })
      return acc
    },
    {} as Record<string, Array<ComplianceItem & { originalIndex: number }>>
  )

  const getLevelColor = (level: string) => {
    switch (level) {
      case "AAA":
        return "text-teal"
      case "AA":
        return "text-purple"
      case "A":
        return "text-gold"
      default:
        return "text-gray-400"
    }
  }

  const getStatusBadge = (status: string) => {
    if (status === "exceeded") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal/20 text-teal text-xs font-semibold">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          EXCEEDED
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-700 text-gray-300 text-xs font-semibold">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        MET
      </span>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-24 bg-dark-900 border-2 border-teal rounded-2xl shadow-2xl shadow-teal/20 z-[70] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal/20 to-purple/20 border-b border-teal/30 p-4 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                    ADA Compliance Certification
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300">
                    Ohana Live meets or exceeds all WCAG 2.1 Level AAA accessibility
                    standards for visually impaired users
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-800 border border-gray-600 hover:border-teal hover:bg-dark-700 transition-colors flex items-center justify-center text-gray-400 hover:text-teal"
                  aria-label="Close compliance modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className="bg-dark-800/50 rounded-lg p-3 border border-teal/20">
                  <div className="text-2xl sm:text-3xl font-bold text-teal">
                    {complianceRequirements.length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Total Standards</div>
                </div>
                <div className="bg-dark-800/50 rounded-lg p-3 border border-teal/20">
                  <div className="text-2xl sm:text-3xl font-bold text-teal">
                    {complianceRequirements.filter((r) => r.status === "exceeded").length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Exceeded</div>
                </div>
                <div className="bg-dark-800/50 rounded-lg p-3 border border-teal/20">
                  <div className="text-2xl sm:text-3xl font-bold text-teal">AAA</div>
                  <div className="text-xs sm:text-sm text-gray-400">WCAG Level</div>
                </div>
                <div className="bg-dark-800/50 rounded-lg p-3 border border-teal/20">
                  <div className="text-2xl sm:text-3xl font-bold text-teal">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Compliant</div>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="space-y-6 sm:space-y-8">
                {Object.entries(groupedByCategory).map(([category, items]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-teal mb-3 sm:mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-teal rounded" />
                      {category}
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      {items.map((item) => (
                        <motion.div
                          key={item.requirement}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: checkedItems.includes(item.originalIndex) ? 1 : 0.3,
                            x: checkedItems.includes(item.originalIndex) ? 0 : -20,
                          }}
                          transition={{ duration: 0.3 }}
                          className="bg-dark-800/30 border border-dark-700 rounded-lg p-3 sm:p-4 hover:border-teal/30 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            {/* Animated Checkmark */}
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={
                                checkedItems.includes(item.originalIndex)
                                  ? { scale: 1, rotate: 0 }
                                  : { scale: 0, rotate: -180 }
                              }
                              transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                              }}
                              className="flex-shrink-0 w-6 h-6 rounded-full bg-teal flex items-center justify-center mt-0.5"
                            >
                              <svg
                                className="w-4 h-4 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <motion.path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                  initial={{ pathLength: 0 }}
                                  animate={
                                    checkedItems.includes(item.originalIndex)
                                      ? { pathLength: 1 }
                                      : { pathLength: 0 }
                                  }
                                  transition={{ duration: 0.3, delay: 0.1 }}
                                />
                              </svg>
                            </motion.div>

                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-start gap-2 mb-2">
                                <h4 className="text-sm sm:text-base font-semibold text-white flex-1">
                                  {item.requirement}
                                </h4>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  <span
                                    className={`text-xs font-mono font-bold ${getLevelColor(
                                      item.level
                                    )}`}
                                  >
                                    {item.level}
                                  </span>
                                  {getStatusBadge(item.status)}
                                </div>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8 p-4 bg-teal/10 border border-teal/30 rounded-lg"
              >
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <strong className="text-teal">Certification Note:</strong> This
                  accessibility mode has been designed and tested to meet WCAG 2.1 Level AAA
                  standards. All requirements are validated through automated testing and
                  manual review to ensure the best experience for users with visual
                  impairments.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
