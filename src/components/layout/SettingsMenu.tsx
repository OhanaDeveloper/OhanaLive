"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, User, Info, Settings, ChevronDown } from "lucide-react"
import ADAComplianceModal from "@/components/ui/ADAComplianceModal"

export default function SettingsMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAccessibleMode, setIsAccessibleMode] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showComplianceModal, setShowComplianceModal] = useState(false)

  // Load accessibility preference
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

  const toggleAccessibility = () => {
    const newMode = !isAccessibleMode
    setIsAccessibleMode(newMode)
    setShowNotification(true)
    localStorage.setItem("accessible-mode", String(newMode))
    applyAccessibleMode(newMode)
    setTimeout(() => setShowNotification(false), 3000)
  }

  return (
    <>
      {/* Settings Menu - Top Right on mobile, Bottom Right on desktop */}
      <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50">
        {/* Main Settings Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 bg-gradient-to-br from-dark-900 to-dark-800 backdrop-blur-sm border-2 border-dark-700 rounded-full shadow-2xl flex items-center justify-center group hover:border-teal/50 transition-colors"
          aria-label="Open settings menu"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Settings className="w-6 h-6 text-gray-300 group-hover:text-teal transition-colors" />
          </motion.div>

          {/* Pulse effect when menu is closed */}
          {!isMenuOpen && (
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full border-2 border-teal"
            />
          )}
        </motion.button>

        {/* Expanded Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-20 right-0 w-72 md:w-80 bg-dark-900/95 backdrop-blur-md border-2 border-dark-700 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-teal/10 to-purple/10 border-b border-dark-700 px-6 py-4">
                <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-teal" />
                  Settings
                </h3>
                <p className="text-xs text-gray-400 mt-1">Customize your experience</p>
              </div>

              {/* Menu Items */}
              <div className="divide-y divide-dark-700">
                {/* Accessibility Toggle */}
                <motion.button
                  onClick={toggleAccessibility}
                  whileHover={{ backgroundColor: "rgba(20, 184, 166, 0.05)" }}
                  className="w-full flex items-center gap-4 px-6 py-4 transition-colors text-left"
                  aria-label={isAccessibleMode ? "Disable Accessible Mode" : "Enable Accessible Mode"}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal/10 group-hover:bg-teal/20 transition-colors flex-shrink-0">
                    <User className="w-6 h-6 text-teal" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-100">Accessibility Mode</div>
                    <div className="text-xs text-gray-400">
                      {isAccessibleMode ? "High Contrast: On" : "High Contrast: Off"}
                    </div>
                  </div>
                  <div className={`w-12 h-6 rounded-full transition-colors flex-shrink-0 ${
                    isAccessibleMode ? "bg-teal" : "bg-dark-700"
                  }`}>
                    <motion.div
                      animate={{ x: isAccessibleMode ? 24 : 0 }}
                      className="w-6 h-6 bg-white rounded-full shadow-lg"
                    />
                  </div>
                </motion.button>

                {/* ADA Compliance Info */}
                <motion.button
                  onClick={() => setShowComplianceModal(true)}
                  whileHover={{ backgroundColor: "rgba(168, 85, 247, 0.05)" }}
                  className="w-full flex items-center gap-4 px-6 py-4 transition-colors text-left"
                  aria-label="View ADA Compliance Information"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple/10 group-hover:bg-purple/20 transition-colors flex-shrink-0">
                    <Info className="w-6 h-6 text-purple" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-100">ADA Compliance</div>
                    <div className="text-xs text-gray-400">View certification info</div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                </motion.button>

              </div>

              {/* Footer */}
              <div className="bg-dark-800/50 px-6 py-3 text-center">
                <p className="text-xs text-gray-500">
                  Made with care for everyone
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
