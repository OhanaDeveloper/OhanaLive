"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, User, Info } from "lucide-react"
import ADAComplianceModal from "@/components/ui/ADAComplianceModal"

export default function Toolbar() {
  const [isAccessibleMode, setIsAccessibleMode] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showComplianceModal, setShowComplianceModal] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Load accessibility preference
  useEffect(() => {
    const saved = localStorage.getItem("accessible-mode")
    if (saved === "true") {
      setIsAccessibleMode(true)
      applyAccessibleMode(true)
    }
  }, [])

  // Show donate button after 20 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 20000)
    return () => clearTimeout(timer)
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

  const handleDonate = () => {
    window.open('https://ko-fi.com/ohanarecovery', '_blank')
  }

  return (
    <>
      {/* Unified Toolbar - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-900/90 backdrop-blur-sm border-2 border-dark-700 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Toolbar Items */}
          <div className="flex flex-col divide-y divide-dark-700">
            {/* Accessibility Toggle */}
            <motion.button
              onClick={toggleAccessibility}
              whileHover={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-5 py-4 transition-colors group"
              aria-label={isAccessibleMode ? "Disable Accessible Mode" : "Enable Accessible Mode"}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal/10 group-hover:bg-teal/20 transition-colors">
                <User className="w-5 h-5 text-teal" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-100">Accessibility</div>
                <div className="text-xs text-gray-400">
                  {isAccessibleMode ? "High Contrast On" : "Standard Mode"}
                </div>
              </div>
            </motion.button>

            {/* ADA Compliance Info */}
            <motion.button
              onClick={() => setShowComplianceModal(true)}
              whileHover={{ backgroundColor: "rgba(168, 85, 247, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-5 py-4 transition-colors group"
              aria-label="View ADA Compliance Information"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple/10 group-hover:bg-purple/20 transition-colors">
                <Info className="w-5 h-5 text-purple" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-100">ADA Compliance</div>
                <div className="text-xs text-gray-400">View Certification</div>
              </div>
            </motion.button>

            {/* Donate Button - Appears after 20s */}
            <AnimatePresence>
              {isVisible && (
                <motion.button
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  onClick={handleDonate}
                  whileHover={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-5 py-4 transition-colors group"
                  aria-label="Support Ohana Recovery on Ko-fi"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal to-purple">
                    <Heart className="w-5 h-5 text-white" fill="white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-gray-100">Support Us</div>
                    <div className="text-xs text-gray-400">Ko-fi Donations</div>
                  </div>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
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
