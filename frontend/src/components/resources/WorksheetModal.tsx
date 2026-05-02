"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { pdf } from "@react-pdf/renderer"
import type { Worksheet } from "@/lib/worksheets"
import {
  getWorksheetResponse,
  saveWorksheetResponse,
} from "@/lib/worksheetStorage"
import WorksheetPDF from "./WorksheetPDF"

interface WorksheetModalProps {
  worksheet: Worksheet
  isOpen: boolean
  onClose: () => void
}

export default function WorksheetModal({
  worksheet,
  isOpen,
  onClose,
}: WorksheetModalProps) {
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState("")
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  // Load existing responses when modal opens
  useEffect(() => {
    if (isOpen) {
      const existing = getWorksheetResponse(worksheet.id)
      if (existing?.responses) {
        setResponses(existing.responses)
      } else {
        setResponses({})
      }
    }
  }, [isOpen, worksheet.id])

  // Auto-save every 10 seconds if there are changes
  useEffect(() => {
    if (!isOpen) return

    const interval = setInterval(() => {
      if (Object.keys(responses).length > 0) {
        handleSave(false)
      }
    }, 10000) // Auto-save every 10 seconds

    return () => clearInterval(interval)
  }, [responses, isOpen])

  const handleResponseChange = (index: number, value: string) => {
    setResponses((prev) => ({
      ...prev,
      [index]: value,
    }))
  }

  const handleSave = async (showMessage: boolean = true) => {
    setIsSaving(true)
    saveWorksheetResponse(worksheet.id, responses, false)

    if (showMessage) {
      setSaveMessage("Progress saved!")
      setTimeout(() => setSaveMessage(""), 2000)
    }

    setIsSaving(false)
  }

  const handleComplete = () => {
    saveWorksheetResponse(worksheet.id, responses, true)
    setSaveMessage("Worksheet completed! ✓")
    setTimeout(() => {
      onClose()
    }, 1500)
  }

  const handleDownloadPDF = async (includeResponses: boolean) => {
    setIsGeneratingPDF(true)

    try {
      const pdfDoc = (
        <WorksheetPDF
          worksheet={worksheet}
          responses={includeResponses ? responses : undefined}
          completedAt={includeResponses ? new Date().toISOString() : undefined}
        />
      )

      const blob = await pdf(pdfDoc).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${worksheet.id}-${includeResponses ? "completed" : "blank"}.pdf`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      setSaveMessage(`PDF downloaded! ${includeResponses ? "📄" : "📋"}`)
      setTimeout(() => setSaveMessage(""), 2000)
    } catch (error) {
      console.error("Error generating PDF:", error)
      setSaveMessage("Error generating PDF")
      setTimeout(() => setSaveMessage(""), 2000)
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  if (!isOpen) return null

  const totalPrompts = worksheet.preview.length
  const answeredPrompts = Object.keys(responses).filter(
    (key) => responses[key]?.trim()
  ).length
  const progressPercent = Math.round((answeredPrompts / totalPrompts) * 100)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-dark-900 border border-dark-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="p-6 border-b border-dark-800"
              style={{
                background: `linear-gradient(135deg, ${worksheet.color}15 0%, transparent 100%)`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{worksheet.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-100">
                      {worksheet.title}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                      {worksheet.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-200 text-3xl leading-none transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-400">
                    Progress: {answeredPrompts} / {totalPrompts} questions
                  </span>
                  <span className="text-xs font-medium text-teal">
                    {progressPercent}%
                  </span>
                </div>
                <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    className="h-full bg-teal"
                    style={{ backgroundColor: worksheet.color }}
                  />
                </div>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[calc(90vh-280px)] p-6 space-y-6">
              {worksheet.preview.map((prompt, index) => (
                <div key={index} className="space-y-2">
                  <label className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        backgroundColor: `${worksheet.color}20`,
                        color: worksheet.color,
                      }}
                    >
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-200 mb-2 font-medium">
                        {prompt}
                      </p>
                      <textarea
                        value={responses[index] || ""}
                        onChange={(e) =>
                          handleResponseChange(index, e.target.value)
                        }
                        placeholder="Type your response here..."
                        className="w-full bg-dark-800 border border-dark-700 rounded-lg p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal/50 transition-colors resize-none"
                        rows={4}
                      />
                    </div>
                  </label>
                </div>
              ))}
            </div>

            {/* Footer with actions */}
            <div className="p-6 border-t border-dark-800 bg-dark-950">
              {/* Save message */}
              <AnimatePresence>
                {saveMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-4 text-center text-sm text-teal"
                  >
                    {saveMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* Save Progress */}
                <motion.button
                  onClick={() => handleSave(true)}
                  disabled={isSaving}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2.5 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 text-sm font-medium transition-colors disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : "💾 Save"}
                </motion.button>

                {/* Download Blank PDF */}
                <motion.button
                  onClick={() => handleDownloadPDF(false)}
                  disabled={isGeneratingPDF}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2.5 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 text-sm font-medium transition-colors disabled:opacity-50"
                >
                  {isGeneratingPDF ? "..." : "📋 Blank PDF"}
                </motion.button>

                {/* Download with Responses */}
                <motion.button
                  onClick={() => handleDownloadPDF(true)}
                  disabled={isGeneratingPDF || answeredPrompts === 0}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2.5 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 text-sm font-medium transition-colors disabled:opacity-50"
                >
                  {isGeneratingPDF ? "..." : "📄 My PDF"}
                </motion.button>

                {/* Complete */}
                <motion.button
                  onClick={handleComplete}
                  disabled={answeredPrompts === 0}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: worksheet.color }}
                  className="px-4 py-2.5 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-30"
                >
                  ✓ Complete
                </motion.button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-3">
                Your responses are saved locally on your device. Auto-saves
                every 10 seconds.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
