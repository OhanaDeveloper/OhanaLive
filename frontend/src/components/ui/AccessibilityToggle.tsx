"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ADAComplianceModal from "./ADAComplianceModal"

export default function AccessibilityToggle() {
  const [isAccessibleMode, setIsAccessibleMode] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showComplianceModal, setShowComplianceModal] = useState(false)

  // Load preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("accessible-mode")
    if (saved === "true") {
      setIsAccessibleMode(true)
      applyAccessibleMode(true)
    }
  }, [])

  const applyAccessibleMode = (enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add("accessible-mode")
    } else {
      document.documentElement.classList.remove("accessible-mode")
    }
  }

  const toggleMode = () => {
    const newMode = !isAccessibleMode
    setIsAccessibleMode(newMode)
    setShowNotification(true)
    localStorage.setItem("accessible-mode", String(newMode))
    applyAccessibleMode(newMode)

    // Hide notification after 3 seconds
    setTimeout(() => setShowNotification(false), 3000)
  }

  return (
    <>
      {/* Button Group */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Compliance Info Button */}
        <motion.button
          onClick={() => setShowComplianceModal(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-dark-900 border-2 border-purple rounded-full p-3 shadow-lg hover:shadow-purple/30 transition-shadow group relative"
          aria-label="View ADA Compliance Information"
          title="View ADA Compliance Certification"
        >
          {/* Info Icon */}
          <svg
            className="w-5 h-5 text-purple"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark-900 border border-purple text-purple text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            ADA Compliance Info
          </span>
        </motion.button>

        {/* Toggle Button */}
        <motion.button
          onClick={toggleMode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-dark-900 border-2 border-teal rounded-full p-4 shadow-lg hover:shadow-teal/30 transition-shadow group relative"
          aria-label={
            isAccessibleMode
              ? "Disable Accessible Mode"
              : "Enable Accessible Mode"
          }
          title={
            isAccessibleMode
              ? "Disable Accessible Mode (High Contrast)"
              : "Enable Accessible Mode (High Contrast)"
          }
        >
          {/* Accessibility Icon */}
          <svg
            className="w-6 h-6 text-teal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
            <circle cx="12" cy="12" r="10" strokeWidth={2} />
          </svg>
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark-900 border border-teal text-teal text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {isAccessibleMode ? "Standard Mode" : "Accessible Mode"}
          </span>
        </motion.button>
      </div>

      {/* Notification Banner */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-teal text-black px-6 py-3 rounded-lg shadow-xl font-semibold flex items-center gap-3"
            role="alert"
            aria-live="polite"
          >
            {isAccessibleMode ? (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Accessible Mode Enabled - WCAG AAA Compliant</span>
              </>
            ) : (
              <span>Standard Mode Restored</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compliance Modal */}
      <ADAComplianceModal
        isOpen={showComplianceModal}
        onClose={() => setShowComplianceModal(false)}
      />
    </>
  )
}
