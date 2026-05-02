'use client'

import { useState, useCallback, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { CATEGORIES } from '../data/categories'
import type { WorksheetCategory } from '../data/types'
import type { CategoryFilter } from '../hooks/useWorksheetSearch'
import { ALL_WORKSHEETS } from '../data/worksheets/index'

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

const RADIUS = 320   // carousel radius in px
const ITEM_COUNT = ITEMS.length
const ANGLE_STEP = (2 * Math.PI) / ITEM_COUNT
const VISIBLE_ARC = Math.PI * 0.65  // how wide the visible fan is

function getAngleForIndex(index: number, offset: number): number {
  return index * ANGLE_STEP - offset
}

export default function CategoryOrbit({ active, onSelect }: Props) {
  const activeIdx = ITEMS.findIndex(i => i.id === active)
  const offsetRef = useRef(activeIdx * ANGLE_STEP)
  const [offset, setOffset] = useState(offsetRef.current)
  const dragStart = useRef<{ x: number; startOffset: number } | null>(null)

  const rotateTo = useCallback((idx: number) => {
    const target = idx * ANGLE_STEP
    // Animate smoothly
    const startVal = offsetRef.current
    const diff = target - startVal
    let frames = 0
    const totalFrames = 28
    const tick = () => {
      frames++
      const progress = frames / totalFrames
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = startVal + diff * ease
      offsetRef.current = current
      setOffset(current)
      if (frames < totalFrames) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [])

  const handleSelect = useCallback((item: typeof ITEMS[0], idx: number) => {
    rotateTo(idx)
    onSelect(item.id)
  }, [rotateTo, onSelect])

  // Touch/mouse drag to spin
  const handlePointerDown = (e: React.PointerEvent) => {
    dragStart.current = { x: e.clientX, startOffset: offsetRef.current }
  }
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragStart.current) return
    const dx = e.clientX - dragStart.current.x
    const newOffset = dragStart.current.startOffset - (dx / 220) * Math.PI
    offsetRef.current = newOffset
    setOffset(newOffset)
  }
  const handlePointerUp = () => {
    if (!dragStart.current) return
    // Snap to nearest
    const normalized = ((offsetRef.current % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
    const nearest = Math.round(normalized / ANGLE_STEP) % ITEM_COUNT
    const target = Math.round(offsetRef.current / ANGLE_STEP) * ANGLE_STEP
    offsetRef.current = target
    setOffset(target)
    onSelect(ITEMS[((nearest % ITEM_COUNT) + ITEM_COUNT) % ITEM_COUNT].id)
    dragStart.current = null
  }

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '140px' }}>
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, var(--color-dark-950, #0a0a0a), transparent)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, var(--color-dark-950, #0a0a0a), transparent)' }} />

      <div
        className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ perspective: '600px' }}
      >
        {ITEMS.map((item, idx) => {
          const angle = getAngleForIndex(idx, offset)
          // Only render items within visible arc
          const normalizedAngle = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
          const frontAngle = normalizedAngle > Math.PI ? normalizedAngle - 2 * Math.PI : normalizedAngle
          if (Math.abs(frontAngle) > VISIBLE_ARC) return null

          const x = Math.sin(frontAngle) * RADIUS
          const z = Math.cos(frontAngle) * 120
          const scale = 0.55 + (Math.cos(frontAngle) * 0.5 + 0.5) * 0.55
          const opacity = 0.3 + (Math.cos(frontAngle) * 0.5 + 0.5) * 0.7
          const isActive = item.id === active

          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item, idx)}
              className="absolute flex flex-col items-center gap-1.5 transition-none focus-visible:outline-none"
              style={{
                transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                opacity,
                zIndex: Math.round(z + 200),
                willChange: 'transform',
              }}
              aria-label={`Filter by ${item.label}`}
              aria-pressed={isActive}
            >
              <div
                className="flex flex-col items-center gap-1.5 rounded-2xl border px-4 py-3 transition-colors"
                style={{
                  borderColor: isActive ? `${item.color}60` : 'rgba(255,255,255,0.06)',
                  backgroundColor: isActive ? `${item.color}12` : 'rgba(255,255,255,0.03)',
                  boxShadow: isActive ? `0 0 20px -4px ${item.color}40` : 'none',
                  minWidth: '90px',
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span
                  className="text-xs font-medium whitespace-nowrap"
                  style={{ color: isActive ? item.color : '#9ca3af' }}
                >
                  {item.label}
                </span>
                <span className="text-[10px] text-gray-600">{item.count}</span>
              </div>

              {/* Active indicator dot */}
              {isActive && (
                <div
                  className="h-1 w-1 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Center glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 blur-xl"
        style={{ backgroundColor: '#14b8a620' }}
      />
    </div>
  )
}
