'use client'

import { useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronDown } from 'lucide-react'
import type { Worksheet } from '../data/types'
import { useWorksheetSearch, type DifficultyFilter, type DurationFilter } from '../hooks/useWorksheetSearch'
import { useAllProgress } from '../hooks/useWorksheetProgress'
import { ALL_WORKSHEETS } from '../data/worksheets/index'
import WorksheetCard from './WorksheetCard'
import WorksheetViewer from './WorksheetViewer'
import SearchCommand from './SearchCommand'
import CategoryOrbit from './CategoryOrbit'

const DURATION_LABELS: Record<DurationFilter, string> = {
  all: 'Any length',
  short: '≤5 min',
  medium: '5–15 min',
  long: '15–30 min',
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

  // Randomized on mount, stable for the session
  const randomized12 = useMemo(
    () => [...ALL_WORKSHEETS].sort(() => Math.random() - 0.5).slice(0, 12),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const displayedResults = hasActiveFilters ? results : randomized12

  return (
    <>
      <div className="space-y-8">
        {/* 3D Category Orbit */}
        <CategoryOrbit active={filters.category} onSelect={setCategory} />

        {/* Search + filters row */}
        <div className="space-y-3">
          <SearchCommand onSelect={setActiveWorksheet} />

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
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-600" />
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
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-600" />
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
              {displayedResults.length} worksheet{displayedResults.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Grid */}
        {displayedResults.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <span className="text-4xl">🔍</span>
            <p className="text-gray-400 text-sm">No worksheets match your filters.</p>
            <button onClick={clearFilters} className="text-teal text-sm hover:underline">
              Clear filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {displayedResults.map((w, i) => (
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
