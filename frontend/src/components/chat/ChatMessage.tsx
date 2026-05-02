'use client'

import { motion } from 'framer-motion'

interface ChatMessageProps {
  role: 'user' | 'assistant'
  content: string
  isStreaming?: boolean
}

export default function ChatMessage({ role, content, isStreaming }: ChatMessageProps) {
  const isUser = role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${
          isUser
            ? 'bg-teal/15 border border-teal/25 text-gray-100 rounded-br-sm'
            : 'bg-dark-800/80 border border-dark-700/60 text-gray-200 rounded-bl-sm'
        }`}
      >
        {content}
        {isStreaming && (
          <span className="inline-block w-0.5 h-3.5 ml-0.5 bg-teal/70 animate-pulse rounded-sm align-middle" />
        )}
      </div>
    </motion.div>
  )
}
