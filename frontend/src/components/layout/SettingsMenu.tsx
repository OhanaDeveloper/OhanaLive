"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { User, Info, Settings, ChevronDown, LogIn, UserCircle2 } from "lucide-react"
import ADAComplianceModal from "@/components/ui/ADAComplianceModal"
import { useSettingsStore } from "@/lib/settingsStore"
import { useAuth } from "@/contexts/AuthContext"

export default function SettingsMenu() {
  const { isOpen, toggle, close } = useSettingsStore()
  const [isAccessibleMode, setIsAccessibleMode] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showComplianceModal, setShowComplianceModal] = useState(false)
  const { isAuthenticated, user } = useAuth()

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
      {/* Desktop-only floating gear. On mobile the trigger lives in MobileNav. */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 bg-gradient-to-br from-dark-900 to-dark-800 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center group transition-colors"
          aria-label="Open settings menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Settings className="w-6 h-6 text-gray-300 group-hover:text-teal transition-colors" />
          </motion.div>
        </motion.button>

        {/* Desktop panel: anchored to the gear bubble */}
        <AnimatePresence>
          {isOpen && (
            <SettingsPanel
              className="absolute bottom-20 right-0 w-80"
              isAccessibleMode={isAccessibleMode}
              toggleAccessibility={toggleAccessibility}
              onOpenCompliance={() => setShowComplianceModal(true)}
              onClose={close}
              isAuthenticated={isAuthenticated}
              userHandle={user?.public_handle}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Mobile panel: anchored to the bottom nav (above the 64px nav bar + safe area). */}
      <div className="md:hidden">
        <AnimatePresence>
          {isOpen && (
            <SettingsPanel
              className="fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-1.5rem)] max-w-sm"
              style={{ bottom: "calc(env(safe-area-inset-bottom) + 4.5rem)" }}
              isAccessibleMode={isAccessibleMode}
              toggleAccessibility={toggleAccessibility}
              onOpenCompliance={() => setShowComplianceModal(true)}
              onClose={close}
              isAuthenticated={isAuthenticated}
              userHandle={user?.public_handle}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Tap-to-close backdrop on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="settings-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Notification banner */}
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
              <span>Accessible Mode Enabled · WCAG AAA</span>
            ) : (
              <span>Standard Mode Restored</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <ADAComplianceModal
        isOpen={showComplianceModal}
        onClose={() => setShowComplianceModal(false)}
      />
    </>
  )
}

type PanelProps = {
  className?: string
  style?: React.CSSProperties
  isAccessibleMode: boolean
  toggleAccessibility: () => void
  onOpenCompliance: () => void
  onClose: () => void
  isAuthenticated: boolean
  userHandle?: string
}

function SettingsPanel({
  className = "",
  style,
  isAccessibleMode,
  toggleAccessibility,
  onOpenCompliance,
  onClose,
  isAuthenticated,
  userHandle,
}: PanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className={`bg-dark-900/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden ${className}`}
      style={style}
      role="dialog"
      aria-label="Settings"
    >
      <div className="bg-gradient-to-r from-teal/10 to-purple/10 px-6 py-4">
        <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
          <Settings className="w-5 h-5 text-teal" />
          Settings
        </h3>
        <p className="text-xs text-gray-400 mt-1">Customize your experience</p>
      </div>

      <div className="divide-y divide-dark-700">
        {/* Auth row */}
        <Link
          href={isAuthenticated ? "/dashboard" : "/login"}
          onClick={onClose}
          className="w-full flex items-center gap-4 px-6 py-4 transition-colors text-left hover:bg-teal/5"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal/10 flex-shrink-0">
            {isAuthenticated ? (
              <UserCircle2 className="w-6 h-6 text-teal" />
            ) : (
              <LogIn className="w-6 h-6 text-teal" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-gray-100">
              {isAuthenticated ? "My account" : "Sign in"}
            </div>
            <div className="text-xs text-gray-400 truncate">
              {isAuthenticated ? `@${userHandle ?? "you"}` : "Save progress across devices"}
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90 flex-shrink-0" />
        </Link>

        {/* Accessibility toggle */}
        <button
          onClick={toggleAccessibility}
          className="w-full flex items-center gap-4 px-6 py-4 transition-colors text-left hover:bg-teal/5"
          aria-label={isAccessibleMode ? "Disable accessible mode" : "Enable accessible mode"}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal/10 flex-shrink-0">
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
        </button>

        {/* ADA Compliance info */}
        <button
          onClick={onOpenCompliance}
          className="w-full flex items-center gap-4 px-6 py-4 transition-colors text-left hover:bg-purple/5"
          aria-label="View ADA compliance information"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple/10 flex-shrink-0">
            <Info className="w-6 h-6 text-purple" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-gray-100">ADA Compliance</div>
            <div className="text-xs text-gray-400">View certification info</div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
        </button>
      </div>

      <div className="bg-dark-800/50 px-6 py-3 text-center">
        <p className="text-xs text-gray-500">Made with care for everyone</p>
      </div>
    </motion.div>
  )
}
