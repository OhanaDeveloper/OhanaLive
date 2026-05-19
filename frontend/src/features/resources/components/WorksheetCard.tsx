'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Clock, Zap, CheckCircle2, Circle, ArrowRight } from 'lucide-react'
import type { Worksheet } from '../data/types'
import { CATEGORY_MAP } from '../data/categories'
import TherapyBadge from './TherapyBadge'

interface Props {
  worksheet: Worksheet
  index: number
  isCompleted?: boolean
  isStarted?: boolean
  onOpen: (worksheet: Worksheet) => void
}

const DIFFICULTY_STYLES = {
  beginner: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  intermediate: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  advanced: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
} as const

export default function WorksheetCard({ worksheet, index, isCompleted, isStarted, onOpen }: Props) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const category = CATEGORY_MAP[worksheet.category]

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 8
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -8
    setTilt({ x, y })
  }, [])

  const handleMouseLeave = useCallback(() => setTilt({ x: 0, y: 0 }), [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.3) }}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col rounded-2xl bg-dark-900 hover:bg-dark-900/80 cursor-pointer overflow-hidden"
      onClick={() => onOpen(worksheet)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onOpen(worksheet)}
      aria-label={`Open ${worksheet.title} worksheet`}
    >
      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          boxShadow: `0 0 40px -8px ${worksheet.color}40`,
        }}
      />

      {/* Color accent bar */}
      <div
        className="h-1 w-full flex-shrink-0"
        style={{ backgroundColor: worksheet.color }}
      />

      <div className="flex flex-col gap-3 p-4 flex-1">
        {/* Icon + completion */}
        <div className="flex items-start justify-between">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl text-xl flex-shrink-0"
            style={{ backgroundColor: `${worksheet.color}18` }}
          >
            {worksheet.icon}
          </div>
          <div className="flex items-center gap-1.5">
            {isCompleted ? (
              <CheckCircle2 className="w-4 h-4 text-teal" aria-label="Completed" />
            ) : isStarted ? (
              <Circle className="w-4 h-4 text-amber-400" aria-label="In progress" />
            ) : null}
            {worksheet.isNew && (
              <span className="text-[10px] font-semibold bg-teal/15 text-teal border border-teal/20 rounded-full px-2 py-0.5">
                NEW
              </span>
            )}
          </div>
        </div>

        {/* Title + subtitle */}
        <div>
          <h3 className="text-sm font-semibold text-gray-100 leading-snug group-hover:text-white transition-colors">
            {worksheet.title}
          </h3>
          <p className="mt-0.5 text-xs text-gray-500 leading-snug">{worksheet.subtitle}</p>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium capitalize ${DIFFICULTY_STYLES[worksheet.difficulty]}`}
          >
            {worksheet.difficulty}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-gray-500">
            <Clock className="w-3 h-3" />
            {worksheet.estimatedMinutes} min
          </span>
          {category && (
            <span className="flex items-center gap-1 text-[10px] text-gray-500">
              {category.icon} {category.label}
            </span>
          )}
        </div>

        {/* Framework badges */}
        <div className="flex flex-wrap gap-1">
          {worksheet.therapeuticFramework.slice(0, 3).map(f => (
            <TherapyBadge key={f} framework={f} />
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-gray-600">
            {isCompleted ? 'Completed' : isStarted ? 'In progress' : `${worksheet.sections.length} sections`}
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-teal group-hover:gap-2 transition-all">
            {isCompleted ? 'Review' : isStarted ? 'Continue' : 'Start'}
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}
