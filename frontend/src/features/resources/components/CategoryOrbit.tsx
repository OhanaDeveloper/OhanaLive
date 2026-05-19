'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CATEGORIES } from '../data/categories'
import { ALL_WORKSHEETS } from '../data/worksheets/index'
import type { CategoryFilter } from '../hooks/useWorksheetSearch'

interface Props {
  active: CategoryFilter
  onSelect: (category: CategoryFilter) => void
}

const ITEMS: Array<{ id: CategoryFilter; label: string; icon: string; color: string; count: number }> = [
  { id: 'all', label: 'All', icon: '✦', color: '#14b8a6', count: ALL_WORKSHEETS.length },
  ...CATEGORIES.map(c => ({
    id: c.id as CategoryFilter,
    label: c.label,
    icon: c.icon,
    color: c.color,
    count: ALL_WORKSHEETS.filter(w => w.category === c.id).length,
  })),
]

export default function CategoryOrbit({ active, onSelect }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Scroll active item into view when it changes
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    const activeEl = container.querySelector('[data-active="true"]') as HTMLElement
    if (!activeEl) return
    const containerRect = container.getBoundingClientRect()
    const elRect = activeEl.getBoundingClientRect()
    const offset = elRect.left - containerRect.left - containerRect.width / 2 + elRect.width / 2
    container.scrollBy({ left: offset, behavior: 'smooth' })
  }, [active])

  return (
    <div className="relative">
      {/* Fade masks */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 z-10"
        style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 z-10"
        style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }}
      />

      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto px-4 pb-1 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ITEMS.map(item => {
          const isActive = item.id === active
          return (
            <motion.button
              key={item.id}
              data-active={isActive}
              onClick={() => onSelect(item.id)}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 flex flex-col items-center gap-1.5 rounded-2xl border px-4 py-3
                         transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1
                         focus-visible:ring-teal"
              style={{
                borderColor: isActive ? `${item.color}55` : 'transparent',
                backgroundColor: isActive ? `${item.color}10` : 'rgba(255,255,255,0.02)',
                boxShadow: isActive ? `0 0 18px -4px ${item.color}35` : 'none',
                minWidth: '80px',
              }}
              aria-pressed={isActive}
              aria-label={`Filter by ${item.label}`}
            >
              <span className="text-xl leading-none">{item.icon}</span>
              <span
                className="text-xs font-medium leading-none whitespace-nowrap"
                style={{ color: isActive ? item.color : '#9ca3af' }}
              >
                {item.label}
              </span>
              <span className="text-[10px] leading-none" style={{ color: isActive ? `${item.color}99` : '#4b5563' }}>
                {item.count}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
