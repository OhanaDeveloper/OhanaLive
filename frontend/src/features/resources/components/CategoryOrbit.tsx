'use client'

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
  return (
    <div className="flex flex-wrap justify-center gap-2 px-4 pb-1">
      {ITEMS.map(item => {
        const isActive = item.id === active
        return (
          <motion.button
            key={item.id}
            data-active={isActive}
            onClick={() => onSelect(item.id)}
            whileTap={{ scale: 0.95 }}
            className="flex min-w-[80px] flex-col items-center gap-1.5 rounded-2xl border px-4 py-3
                       transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1
                       focus-visible:ring-teal"
            style={{
              borderColor: isActive ? `${item.color}55` : 'transparent',
              backgroundColor: isActive ? `${item.color}10` : 'rgba(255,255,255,0.02)',
              boxShadow: isActive ? `0 0 18px -4px ${item.color}35` : 'none',
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
  )
}
