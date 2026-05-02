'use client'

import { useState, useEffect, useCallback } from 'react'
import type { WorksheetSaveData } from '../data/types'

const STORAGE_KEY = 'ohana-worksheets'

function load(): Record<string, WorksheetSaveData> {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function save(data: Record<string, WorksheetSaveData>) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function useWorksheetProgress(worksheetId: string) {
  const [saveData, setSaveData] = useState<WorksheetSaveData | null>(null)
  const [responses, setResponses] = useState<Record<string, string>>({})

  useEffect(() => {
    const all = load()
    const existing = all[worksheetId] ?? null
    setSaveData(existing)
    setResponses(existing?.responses ?? {})
  }, [worksheetId])

  const saveResponses = useCallback(
    (newResponses: Record<string, string>, completed = false) => {
      const all = load()
      const now = new Date().toISOString()
      const updated: WorksheetSaveData = {
        worksheetId,
        responses: newResponses,
        startedAt: all[worksheetId]?.startedAt ?? now,
        lastSavedAt: now,
        ...(completed ? { completedAt: now } : {}),
      }
      all[worksheetId] = updated
      save(all)
      setSaveData(updated)
      setResponses(newResponses)
    },
    [worksheetId]
  )

  const clearProgress = useCallback(() => {
    const all = load()
    delete all[worksheetId]
    save(all)
    setSaveData(null)
    setResponses({})
  }, [worksheetId])

  const isStarted = saveData !== null
  const isCompleted = !!saveData?.completedAt

  return { saveData, responses, setResponses, saveResponses, clearProgress, isStarted, isCompleted }
}

export function useAllProgress(): Record<string, WorksheetSaveData> {
  const [all, setAll] = useState<Record<string, WorksheetSaveData>>({})

  useEffect(() => {
    setAll(load())
    const handler = () => setAll(load())
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])

  return all
}
