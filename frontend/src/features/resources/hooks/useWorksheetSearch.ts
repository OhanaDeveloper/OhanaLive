'use client'

import { useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import type { Worksheet, WorksheetCategory } from '../data/types'
import { ALL_WORKSHEETS } from '../data/worksheets/index'

export type DifficultyFilter = 'all' | 'beginner' | 'intermediate' | 'advanced'
export type DurationFilter = 'all' | 'short' | 'medium' | 'long' | 'extended'
export type CategoryFilter = 'all' | WorksheetCategory

export interface WorksheetFilters {
  category: CategoryFilter
  difficulty: DifficultyFilter
  duration: DurationFilter
  query: string
}

const fuse = new Fuse(ALL_WORKSHEETS, {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'subtitle', weight: 2 },
    { name: 'tags', weight: 2 },
    { name: 'description', weight: 1.5 },
    { name: 'therapeuticFramework', weight: 1 },
  ],
  threshold: 0.35,
  includeScore: true,
})

function matchesDuration(minutes: number, filter: DurationFilter): boolean {
  if (filter === 'all') return true
  if (filter === 'short') return minutes <= 5
  if (filter === 'medium') return minutes > 5 && minutes <= 15
  if (filter === 'long') return minutes > 15 && minutes <= 30
  if (filter === 'extended') return minutes > 30
  return true
}

export function useWorksheetSearch(initial?: Partial<WorksheetFilters>) {
  const [filters, setFilters] = useState<WorksheetFilters>({
    category: 'all',
    difficulty: 'all',
    duration: 'all',
    query: '',
    ...initial,
  })

  const results = useMemo(() => {
    let base: Worksheet[]

    if (filters.query.trim()) {
      base = fuse.search(filters.query).map(r => r.item)
    } else {
      base = ALL_WORKSHEETS
    }

    return base.filter(w => {
      if (filters.category !== 'all' && w.category !== filters.category) return false
      if (filters.difficulty !== 'all' && w.difficulty !== filters.difficulty) return false
      if (!matchesDuration(w.estimatedMinutes, filters.duration)) return false
      return true
    })
  }, [filters])

  const setQuery = (query: string) => setFilters(f => ({ ...f, query }))
  const setCategory = (category: CategoryFilter) => setFilters(f => ({ ...f, category }))
  const setDifficulty = (difficulty: DifficultyFilter) => setFilters(f => ({ ...f, difficulty }))
  const setDuration = (duration: DurationFilter) => setFilters(f => ({ ...f, duration }))
  const clearFilters = () => setFilters({ category: 'all', difficulty: 'all', duration: 'all', query: '' })

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.difficulty !== 'all' ||
    filters.duration !== 'all' ||
    filters.query.trim().length > 0

  return { results, filters, setQuery, setCategory, setDifficulty, setDuration, clearFilters, hasActiveFilters }
}
