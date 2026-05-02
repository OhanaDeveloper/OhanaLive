'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X, Clock, Zap } from 'lucide-react'
import Fuse from 'fuse.js'
import type { Worksheet } from '../data/types'
import { ALL_WORKSHEETS } from '../data/worksheets/index'
import { CATEGORY_MAP, FRAMEWORK_LABELS } from '../data/categories'

const fuse = new Fuse(ALL_WORKSHEETS, {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'subtitle', weight: 2 },
    { name: 'tags', weight: 2 },
    { name: 'description', weight: 1.5 },
  ],
  threshold: 0.35,
  includeScore: true,
})

const RECENT_KEY = 'ohana-recent-worksheets'
const MAX_RECENT = 5

function getRecent(): string[] {
  try { return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]') } catch { return [] }
}
function addRecent(id: string) {
  const prev = getRecent().filter(i => i !== id)
  localStorage.setItem(RECENT_KEY, JSON.stringify([id, ...prev].slice(0, MAX_RECENT)))
}

interface Props {
  onSelect: (worksheet: Worksheet) => void
}

export default function SearchCommand({ onSelect }: Props) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(0)
  const [recent, setRecent] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const results = query.trim()
    ? fuse.search(query).slice(0, 8).map(r => r.item)
    : ALL_WORKSHEETS.filter(w => w.featured).slice(0, 6)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(o => !o)
        setQuery('')
        setCursor(0)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
      setRecent(getRecent())
    }
  }, [open])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setCursor(c => Math.min(c + 1, results.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setCursor(c => Math.max(c - 1, 0)) }
    if (e.key === 'Enter' && results[cursor]) { handleSelect(results[cursor]) }
  }

  const handleSelect = useCallback((w: Worksheet) => {
    addRecent(w.id)
    setOpen(false)
    setQuery('')
    onSelect(w)
  }, [onSelect])

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50) }}
        className="flex items-center gap-2 rounded-xl border border-dark-700 bg-dark-900 px-3 py-2
                   text-sm text-gray-400 hover:text-gray-200 hover:border-dark-600 transition-colors w-full"
        aria-label="Search worksheets (⌘K)"
      >
        <Search className="w-4 h-4 flex-shrink-0" />
        <span className="flex-1 text-left">Search 108 worksheets…</span>
        <kbd className="hidden sm:flex items-center gap-0.5 rounded border border-dark-700 bg-dark-800
                        px-1.5 py-0.5 text-[10px] font-mono text-gray-500">
          ⌘K
        </kbd>
      </button>

      {/* Palette */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className="fixed left-1/2 top-[15%] z-50 w-full max-w-xl -translate-x-1/2
                         rounded-2xl border border-dark-700 shadow-2xl shadow-black/60 overflow-hidden"
              style={{ backgroundColor: 'rgba(15,15,15,0.98)' }}
              role="dialog"
              aria-label="Worksheet search"
            >
              {/* Input */}
              <div className="flex items-center gap-3 border-b border-dark-800 px-4 py-3">
                <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => { setQuery(e.target.value); setCursor(0) }}
                  onKeyDown={handleKeyDown}
                  placeholder="Search worksheets, topics, frameworks…"
                  className="flex-1 bg-transparent text-sm text-gray-100 placeholder-gray-600 outline-none"
                  aria-label="Search worksheets"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="text-gray-600 hover:text-gray-400">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto py-2" role="listbox">
                {!query.trim() && (
                  <p className="px-4 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                    Featured
                  </p>
                )}
                {results.length === 0 && (
                  <p className="px-4 py-6 text-center text-sm text-gray-500">No worksheets found.</p>
                )}
                {results.map((w, i) => {
                  const cat = CATEGORY_MAP[w.category]
                  return (
                    <button
                      key={w.id}
                      role="option"
                      aria-selected={cursor === i}
                      onClick={() => handleSelect(w)}
                      onMouseEnter={() => setCursor(i)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors
                                  ${cursor === i ? 'bg-dark-800' : 'hover:bg-dark-900'}`}
                    >
                      <span
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-base"
                        style={{ backgroundColor: `${w.color}18` }}
                      >
                        {w.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-100 truncate">{w.title}</p>
                        <p className="text-xs text-gray-500 truncate">{cat?.label} · {w.estimatedMinutes} min</p>
                      </div>
                      <span className="text-[10px] text-gray-600 capitalize flex-shrink-0">{w.difficulty}</span>
                    </button>
                  )
                })}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-dark-800 px-4 py-2">
                <div className="flex items-center gap-3 text-[10px] text-gray-600">
                  <span>↑↓ navigate</span>
                  <span>↵ open</span>
                  <span>esc close</span>
                </div>
                <span className="text-[10px] text-gray-600">108 worksheets</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
