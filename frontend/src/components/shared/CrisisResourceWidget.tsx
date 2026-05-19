"use client"

import { useState } from "react"
import { Phone, MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function CrisisResourceWidget() {
  const [isExpanded, setIsExpanded] = useState(false)

  // Mobile: top-right, panel drops down below the button (flex-col).
  // Desktop: bottom-right, stacked with Settings + Meeting; panel rises above (flex-col-reverse).
  return (
    <div className="fixed right-4 z-[70] flex flex-col items-end gap-2 top-[calc(env(safe-area-inset-top)+1rem)] md:top-auto md:right-6 md:bottom-44 md:flex-col-reverse">
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center h-12 w-12 rounded-full bg-black/80 text-teal hover:bg-black shadow-lg transition-colors duration-200"
        aria-label="Crisis resources"
      >
        {isExpanded ? <X className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
      </motion.button>

      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            className="rounded-2xl bg-black/95 shadow-xl p-4 w-64"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-200">Crisis Support</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3">
              <a
                href="tel:988"
                className="flex items-center gap-3 p-2 rounded-lg bg-dark-700/50 text-gray-200 hover:bg-dark-700 hover:text-teal transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-gray-400">Call</div>
                  <div className="text-sm font-medium">988 Suicide &amp; Crisis</div>
                </div>
              </a>

              <a
                href="sms:741741&body=HOME"
                className="flex items-center gap-3 p-2 rounded-lg bg-dark-700/50 text-gray-200 hover:bg-dark-700 hover:text-teal transition-colors"
              >
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-gray-400">Text</div>
                  <div className="text-sm font-medium">HOME to 741741</div>
                </div>
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              Available 24/7 for free. Confidential support whenever you need it.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
