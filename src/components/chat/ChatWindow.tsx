'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatWindowProps {
  onClose: () => void
}

const WELCOME =
  "hey. whatever you're dealing with, you can say it here. no names, no logs, no judgment."

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isStreaming, setIsStreaming] = useState(false)
  const [streamingContent, setStreamingContent] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streamingContent])

  const sendMessage = async (text: string) => {
    if (isStreaming) return

    const userMessage: Message = { role: 'user', content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsStreaming(true)
    setStreamingContent('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      if (!res.ok || !res.body) throw new Error('Stream failed')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let full = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        full += decoder.decode(value, { stream: true })
        setStreamingContent(full)
      }

      if (full) {
        setMessages(prev => [...prev, { role: 'assistant', content: full }])
      }
      setStreamingContent('')
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "having trouble connecting. give it a sec and try again." },
      ])
      setStreamingContent('')
    } finally {
      setIsStreaming(false)
    }
  }

  return (
    <div
      className="flex flex-col bg-dark-950 border border-teal/20 rounded-2xl
                 shadow-2xl shadow-black/60 overflow-hidden"
      style={{ width: 'min(360px, calc(100vw - 1.5rem))', maxHeight: 'min(580px, calc(100dvh - 8rem))' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-dark-800 flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-100">Ohana Recovery</span>
          <span className="text-xs text-teal/50 font-mono tracking-wider">· peer support</span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="text-gray-500 hover:text-gray-300 transition-colors w-7 h-7 flex items-center
                     justify-center rounded-lg hover:bg-dark-800 text-lg leading-none
                     focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal"
        >
          ×
        </button>
      </div>

      {/* Privacy bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-dark-900/50 border-b border-dark-800/60 flex-shrink-0">
        <Shield className="w-3 h-3 text-teal/70 flex-shrink-0" aria-hidden="true" />
        <p className="text-xs text-gray-500 leading-snug">
          100% anonymous · no logs · no accounts · chat clears when you close it
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth overscroll-contain">
        <ChatMessage role="assistant" content={WELCOME} />

        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}

        {/* Live streaming message */}
        {isStreaming && streamingContent && (
          <ChatMessage role="assistant" content={streamingContent} isStreaming />
        )}

        {/* Typing indicator — shows before first streamed char arrives */}
        {isStreaming && !streamingContent && (
          <div className="flex items-center gap-1.5 px-1 py-1">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.14, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-teal/40"
              />
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} disabled={isStreaming} />
    </div>
  )
}
