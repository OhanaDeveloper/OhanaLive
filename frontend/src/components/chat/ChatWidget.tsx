'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import ChatWindow from './ChatWindow'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [showCallout, setShowCallout] = useState(false)

  useEffect(() => {
    const show = setTimeout(() => setShowCallout(true), 2000)
    return () => clearTimeout(show)
  }, [])

  useEffect(() => {
    if (!showCallout) return
    const hide = setTimeout(() => setShowCallout(false), 6000)
    return () => clearTimeout(hide)
  }, [showCallout])

  const handleToggle = () => {
    setShowCallout(false)
    setOpen(prev => !prev)
  }

  return (
    <div className="fixed bottom-20 left-3 md:bottom-6 md:left-6 z-50 flex flex-col items-start">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            style={{ transformOrigin: 'bottom left' }}
            className="mb-3"
          >
            <ChatWindow onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Intro callout */}
      <AnimatePresence>
        {showCallout && !open && (
          <motion.button
            key="callout"
            onClick={handleToggle}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-3 ml-1 text-left"
            aria-label="Open peer support chat"
          >
            <div
              className="relative rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm
                         border border-teal/30 text-gray-200 leading-snug"
              style={{ backgroundColor: 'rgba(10,10,10,0.92)', maxWidth: '200px' }}
            >
              struggling tonight?
              <br />
              <span className="text-gray-400 text-xs">anonymous peer support chat · no logs</span>
              <br />
              <span className="text-teal/80">we're here.</span>
              {/* Arrow pointing down-left toward the button */}
              <span
                className="absolute -bottom-[7px] left-4 w-3 h-3 border-b border-l border-teal/30 rotate-[-45deg]"
                style={{ backgroundColor: 'rgba(10,10,10,0.92)' }}
                aria-hidden="true"
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleToggle}
        aria-label={open ? 'Close peer support chat' : 'Open peer support chat'}
        aria-expanded={open}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-teal to-teal-dark
                   shadow-lg shadow-black/40 hover:shadow-teal/30
                   flex items-center justify-center transition-shadow
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal
                   focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5 text-dark-950" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-5 h-5 text-dark-950" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
