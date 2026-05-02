'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Save, ChevronLeft, ChevronRight, CheckCircle2, Printer, Shield } from 'lucide-react'
import type { Worksheet } from '../data/types'
import { CATEGORY_MAP } from '../data/categories'
import { useWorksheetProgress } from '../hooks/useWorksheetProgress'
import WorksheetFieldInput from './WorksheetField'
import TherapyBadge from './TherapyBadge'

interface Props {
  worksheet: Worksheet
  onClose: () => void
}

export default function WorksheetViewer({ worksheet, onClose }: Props) {
  const [sectionIdx, setSectionIdx] = useState(0)
  const [saveMsg, setSaveMsg] = useState('')
  const autoSaveTimer = useRef<ReturnType<typeof setInterval> | null>(null)
  const { responses, setResponses, saveResponses, isCompleted } = useWorksheetProgress(worksheet.id)
  const category = CATEGORY_MAP[worksheet.category]

  const section = worksheet.sections[sectionIdx]
  const totalSections = worksheet.sections.length
  const progress = Math.round((sectionIdx / Math.max(totalSections - 1, 1)) * 100)

  const getFieldValue = (fieldId: string) => responses[`${sectionIdx}:${fieldId}`] ?? ''
  const setFieldValue = (fieldId: string, value: string) => {
    setResponses(prev => ({ ...prev, [`${sectionIdx}:${fieldId}`]: value }))
  }

  const handleSave = useCallback(() => {
    saveResponses(responses)
    setSaveMsg('Saved ✓')
    setTimeout(() => setSaveMsg(''), 2000)
  }, [responses, saveResponses])

  const handleComplete = useCallback(() => {
    saveResponses(responses, true)
    setSaveMsg('Completed ✓')
    setTimeout(() => onClose(), 1500)
  }, [responses, saveResponses, onClose])

  const handlePrint = useCallback(() => {
    const printContent = document.getElementById('worksheet-print-root')
    if (!printContent) {
      // Build print content dynamically
      const el = document.createElement('div')
      el.id = 'worksheet-print-root'
      el.className = 'worksheet-print'
      el.innerHTML = `
        <div class="worksheet-print-header">
          <span class="worksheet-print-brand">Ohana Recovery</span>
          <span style="color:#ccc;font-size:12px">· Recovery Worksheet</span>
        </div>
        <div style="font-size:28px;margin-bottom:4px">${worksheet.icon}</div>
        <h1 class="worksheet-print-title">${worksheet.title}</h1>
        <p class="worksheet-print-subtitle">${worksheet.subtitle}</p>
        <div class="worksheet-print-meta">
          <span>${worksheet.difficulty}</span>
          <span>·</span>
          <span>${worksheet.estimatedMinutes} min</span>
          <span>·</span>
          <span>${worksheet.therapeuticFramework.join(', ')}</span>
        </div>
        ${worksheet.sections.map((s, si) => `
          <div class="worksheet-print-section">
            <div class="worksheet-print-section-title">${s.title}</div>
            <div class="worksheet-print-instructions">${s.content.replace(/\n/g, '<br>')}</div>
            ${(s.fields ?? []).map(f => `
              <div class="worksheet-print-field-label">${f.label}</div>
              ${['textarea', 'freewrite'].includes(f.type) || f.type === 'textarea'
                ? ['', '', '', ''].map(() => `<div class="worksheet-print-lines"></div>`).join('')
                : `<div class="worksheet-print-lines"></div>`
              }
            `).join('')}
          </div>
        `).join('')}
        <div class="worksheet-print-footer">
          <span>ohanarecovery.org · ${new Date().toLocaleDateString()}</span>
          <span>All responses are private</span>
        </div>
      `
      document.body.appendChild(el)
      window.print()
      document.body.removeChild(el)
    } else {
      window.print()
    }
  }, [worksheet])

  // Auto-save every 30 seconds
  useEffect(() => {
    autoSaveTimer.current = setInterval(handleSave, 30_000)
    return () => { if (autoSaveTimer.current) clearInterval(autoSaveTimer.current) }
  }, [handleSave])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet */}
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative z-10 flex flex-col rounded-t-3xl sm:rounded-2xl border border-dark-700
                   shadow-2xl shadow-black/60 w-full sm:max-w-2xl overflow-hidden"
        style={{
          backgroundColor: 'rgba(12,12,12,0.98)',
          maxHeight: 'min(90dvh, 700px)',
        }}
      >
        {/* Progress bar */}
        <div className="h-1 w-full bg-dark-800 flex-shrink-0">
          <motion.div
            className="h-full bg-teal"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-dark-800 flex-shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span
              className="text-xl flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl"
              style={{ backgroundColor: `${worksheet.color}18` }}
            >
              {worksheet.icon}
            </span>
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-gray-100 truncate">{worksheet.title}</h2>
              <p className="text-xs text-gray-500">
                Section {sectionIdx + 1} of {totalSections}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-300 transition-colors w-8 h-8 flex items-center
                       justify-center rounded-lg hover:bg-dark-800 flex-shrink-0"
            aria-label="Close worksheet"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Privacy notice */}
        <div className="flex items-center gap-2 px-5 py-2 bg-dark-900/50 border-b border-dark-800/60 flex-shrink-0">
          <Shield className="w-3 h-3 text-teal/60 flex-shrink-0" />
          <span className="text-xs text-gray-600">Saved locally · never uploaded · clears when you clear browser data</span>
        </div>

        {/* Section content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={sectionIdx}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              {/* Section title */}
              <div>
                <h3 className="text-base font-semibold text-gray-100">{section.title}</h3>
                {section.content && (
                  <p className="mt-1.5 text-sm text-gray-400 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                )}
              </div>

              {/* Fields */}
              {section.fields && section.fields.length > 0 && (
                <div className="space-y-4">
                  {section.fields.map(field => (
                    <WorksheetFieldInput
                      key={field.id}
                      field={field}
                      value={getFieldValue(field.id)}
                      onChange={v => setFieldValue(field.id, v)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-dark-800 flex-shrink-0 gap-3">
          {/* Left: save */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 rounded-xl border border-dark-700 bg-dark-800
                         px-3 py-1.5 text-xs text-gray-400 hover:text-gray-200 hover:border-dark-600 transition-colors"
            >
              <Save className="w-3 h-3" />
              Save
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-xl border border-dark-700 bg-dark-800
                         px-3 py-1.5 text-xs text-gray-400 hover:text-gray-200 hover:border-dark-600 transition-colors"
              title="Print worksheet"
            >
              <Printer className="w-3 h-3" />
              Print
            </button>
            {saveMsg && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs text-teal"
              >
                {saveMsg}
              </motion.span>
            )}
          </div>

          {/* Right: nav */}
          <div className="flex items-center gap-2">
            {sectionIdx > 0 && (
              <button
                onClick={() => setSectionIdx(i => i - 1)}
                className="flex items-center gap-1 rounded-xl border border-dark-700 bg-dark-800
                           px-3 py-1.5 text-xs text-gray-400 hover:text-gray-200 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Back
              </button>
            )}
            {sectionIdx < totalSections - 1 ? (
              <button
                onClick={() => { handleSave(); setSectionIdx(i => i + 1) }}
                className="flex items-center gap-1 rounded-xl bg-teal px-4 py-1.5 text-xs font-medium
                           text-dark-950 hover:bg-teal-light transition-colors"
              >
                Next
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleComplete}
                className="flex items-center gap-1.5 rounded-xl bg-teal px-4 py-1.5 text-xs font-semibold
                           text-dark-950 hover:bg-teal-light transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                {isCompleted ? 'Update' : 'Complete'}
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
