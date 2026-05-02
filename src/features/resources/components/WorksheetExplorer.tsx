'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Filter, X, ChevronDown } from 'lucide-react'
import type { Worksheet } from '../data/types'
import { CATEGORIES } from '../data/categories'
import { useWorksheetSearch, type DifficultyFilter, type DurationFilter } from '../hooks/useWorksheetSearch'
import { useAllProgress } from '../hooks/useWorksheetProgress'
import WorksheetCard from './WorksheetCard'
import WorksheetViewer from './WorksheetViewer'
import SearchCommand from './SearchCommand'

const DURATION_LABELS: Record<DurationFilter, string> = {
  all: 'Any length',
  short: '≤5 min',
  medium: '5-15 min',
  long: '15-30 min',
  extended: '30+ min',
}

const DIFFICULTY_LABELS: Record<DifficultyFilter, string> = {
  all: 'Any level',
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

export default function WorksheetExplorer() {
  const { results, filters, setQuery, setCategory, setDifficulty, setDuration, clearFilters, hasActiveFilters } =
    useWorksheetSearch()
  const allProgress = useAllProgress()
  const [activeWorksheet, setActiveWorksheet] = useState<Worksheet | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  return (
    <>
      <div className="space-y-6">
        {/* Search */}
        <SearchCommand onSelect={setActiveWorksheet} />

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setCategory('all')}
            className={`flex-shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors
                        ${filters.category === 'all'
                          ? 'border-teal/50 bg-teal/15 text-teal'
                          : 'border-dark-700 bg-dark-900 text-gray-400 hover:border-dark-600 hover:text-gray-200'}`}
          >
            All ({results.length})
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs
                          font-medium transition-colors
                          ${filters.category === cat.id
                            ? 'border-teal/50 bg-teal/15 text-teal'
                            : 'border-dark-700 bg-dark-900 text-gray-400 hover:border-dark-600 hover:text-gray-200'}`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Difficulty */}
          <div className="relative">
            <select
              value={filters.difficulty}
              onChange={e => setDifficulty(e.target.value as DifficultyFilter)}
              className="appearance-none rounded-xl border border-dark-700 bg-dark-900 px-3 py-1.5 pr-7
                         text-xs text-gray-400 cursor-pointer hover:border-dark-600 focus:outline-none
                         focus:border-teal/40 transition-colors"
            >
              {(Object.keys(DIFFICULTY_LABELS) as DifficultyFilter[]).map(d => (
                <option key={d} value={d}>{DIFFICULTY_LABELS[d]}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500" />
          </div>

          {/* Duration */}
          <div className="relative">
            <select
              value={filters.duration}
              onChange={e => setDuration(e.target.value as DurationFilter)}
              className="appearance-none rounded-xl border border-dark-700 bg-dark-900 px-3 py-1.5 pr-7
                         text-xs text-gray-400 cursor-pointer hover:border-dark-600 focus:outline-none
                         focus:border-teal/40 transition-colors"
            >
              {(Object.keys(DURATION_LABELS) as DurationFilter[]).map(d => (
                <option key={d} value={d}>{DURATION_LABELS[d]}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500" />
          </div>

          {/* Clear */}
          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={clearFilters}
              className="flex items-center gap-1.5 rounded-xl border border-dark-700 bg-dark-900 px-3 py-1.5
                         text-xs text-gray-500 hover:text-gray-300 hover:border-dark-600 transition-colors"
            >
              <X className="w-3 h-3" />
              Clear
            </motion.button>
          )}

          {/* Count */}
          <span className="ml-auto text-xs text-gray-600">
            {results.length} worksheet{results.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Grid */}
        {results.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <span className="text-4xl">🔍</span>
            <p className="text-gray-400 text-sm">No worksheets match your filters.</p>
            <button
              onClick={clearFilters}
              className="text-teal text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {results.map((w, i) => (
                <WorksheetCard
                  key={w.id}
                  worksheet={w}
                  index={i}
                  isCompleted={!!allProgress[w.id]?.completedAt}
                  isStarted={!!allProgress[w.id] && !allProgress[w.id]?.completedAt}
                  onOpen={setActiveWorksheet}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Viewer */}
      <AnimatePresence>
        {activeWorksheet && (
          <WorksheetViewer
            key={activeWorksheet.id}
            worksheet={activeWorksheet}
            onClose={() => setActiveWorksheet(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
