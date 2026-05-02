'use client'

import { useState, useRef } from 'react'
import { Send } from 'lucide-react'

interface ChatInputProps {
  onSend: (text: string) => void
  disabled: boolean
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSend = () => {
    const text = value.trim()
    if (!text || disabled) return
    setValue('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
    onSend(text)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleInput = () => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 112)}px`
  }

  return (
    <div className="flex items-end gap-2 px-3 py-3 border-t border-dark-800 flex-shrink-0">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        disabled={disabled}
        placeholder="Say something..."
        rows={1}
        className="flex-1 resize-none bg-dark-800/60 border border-dark-700 rounded-xl
                   px-3 py-2 text-sm text-gray-100 placeholder-gray-600
                   focus:outline-none focus:border-teal/40 transition-colors
                   disabled:opacity-40 leading-relaxed"
        style={{ maxHeight: '112px' }}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        aria-label="Send message"
        className="flex-shrink-0 w-9 h-9 rounded-xl bg-teal/15 border border-teal/25
                   flex items-center justify-center hover:bg-teal/25 transition-colors
                   disabled:opacity-30 disabled:cursor-not-allowed
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal
                   focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <Send className="w-4 h-4 text-teal" aria-hidden="true" />
      </button>
    </div>
  )
}
