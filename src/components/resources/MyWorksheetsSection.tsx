"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { worksheets } from "@/lib/worksheets"
import {
  getAllWorksheetResponses,
  getWorksheetProgress,
  deleteWorksheetResponse,
  exportAllData,
  clearAllWorksheetData,
} from "@/lib/worksheetStorage"
import type { WorksheetResponse } from "@/lib/worksheetStorage"
import WorksheetModal from "./WorksheetModal"

export default function MyWorksheetsSection() {
  const [responses, setResponses] = useState<Record<string, WorksheetResponse>>({})
  const [selectedWorksheetId, setSelectedWorksheetId] = useState<string | null>(null)
  const [showClearConfirm, setShowClearConfirm] = useState(false)

  // Load responses on mount and set up refresh
  useEffect(() => {
    loadResponses()

    // Listen for storage changes (from modal saves)
    const handleStorage = () => loadResponses()
    window.addEventListener("storage", handleStorage)

    // Also refresh periodically
    const interval = setInterval(loadResponses, 2000)

    return () => {
      window.removeEventListener("storage", handleStorage)
      clearInterval(interval)
    }
  }, [])

  const loadResponses = () => {
    setResponses(getAllWorksheetResponses())
  }

  const progress = getWorksheetProgress(worksheets)
  const responseArray = Object.values(responses)

  const handleExport = () => {
    const data = exportAllData()
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `ohana-worksheets-backup-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleDelete = (worksheetId: string) => {
    if (confirm("Are you sure you want to delete this worksheet response?")) {
      deleteWorksheetResponse(worksheetId)
      loadResponses()
    }
  }

  const handleClearAll = () => {
    clearAllWorksheetData()
    setShowClearConfirm(false)
    loadResponses()
  }

  if (responseArray.length === 0) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-900/50 border border-dark-800 rounded-2xl p-12"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-100 mb-3">
              No Worksheets Yet
            </h3>
            <p className="text-gray-400 mb-6">
              Start a worksheet from the Resources page to see your progress here.
            </p>
            <a
              href="/resources"
              className="inline-block px-6 py-3 bg-teal hover:bg-teal-light text-white font-semibold rounded-lg transition-colors"
            >
              Browse Worksheets
            </a>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-100 mb-6">
            My Worksheets
          </h2>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-dark-900/50 border border-dark-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal mb-1">
                {progress.totalStarted}
              </div>
              <div className="text-gray-400 text-sm">Worksheets Started</div>
            </div>

            <div className="bg-dark-900/50 border border-dark-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal mb-1">
                {progress.totalCompleted}
              </div>
              <div className="text-gray-400 text-sm">Worksheets Completed</div>
            </div>

            <div className="bg-dark-900/50 border border-dark-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal mb-1">
                {progress.totalStarted > 0
                  ? Math.round(
                      (progress.totalCompleted / progress.totalStarted) * 100
                    )
                  : 0}
                %
              </div>
              <div className="text-gray-400 text-sm">Completion Rate</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-dark-800 hover:bg-dark-700 text-gray-300 rounded-lg text-sm font-medium transition-colors"
            >
              💾 Export Backup
            </button>
            <button
              onClick={() => setShowClearConfirm(true)}
              className="px-4 py-2 bg-red-900/20 hover:bg-red-900/30 text-red-400 border border-red-900/50 rounded-lg text-sm font-medium transition-colors"
            >
              🗑️ Clear All Data
            </button>
          </div>

          {/* Clear confirmation */}
          {showClearConfirm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 p-4 bg-red-900/20 border border-red-900/50 rounded-lg"
            >
              <p className="text-red-400 text-sm mb-3">
                Are you sure? This will permanently delete all your worksheet
                responses. This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleClearAll}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Yes, Delete Everything
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-4 py-2 bg-dark-800 hover:bg-dark-700 text-gray-300 rounded-lg text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Worksheet list */}
        <div className="space-y-4">
          {responseArray
            .sort(
              (a, b) =>
                new Date(b.lastSavedAt).getTime() -
                new Date(a.lastSavedAt).getTime()
            )
            .map((response, index) => {
              const worksheet = worksheets.find(
                (w) => w.id === response.worksheetId
              )
              if (!worksheet) return null

              const isCompleted = !!response.completedAt
              const answeredCount = Object.keys(response.responses).filter(
                (key) => response.responses[key]?.trim()
              ).length

              return (
                <motion.div
                  key={response.worksheetId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-dark-900/50 border border-dark-800 rounded-xl p-6 hover:border-dark-700 transition-colors"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="text-4xl flex-shrink-0">{worksheet.icon}</div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-bold text-gray-100">
                          {worksheet.title}
                        </h3>
                        {isCompleted && (
                          <span className="text-xs px-2 py-1 rounded-full bg-teal/20 text-teal border border-teal/30 flex-shrink-0">
                            ✓ Completed
                          </span>
                        )}
                      </div>

                      <p className="text-gray-400 text-sm mb-3">
                        {answeredCount} / {worksheet.preview.length} questions
                        answered
                      </p>

                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <span>
                          Started:{" "}
                          {new Date(response.startedAt).toLocaleDateString()}
                        </span>
                        {isCompleted && (
                          <span>
                            Completed:{" "}
                            {new Date(response.completedAt!).toLocaleDateString()}
                          </span>
                        )}
                        <span>
                          Last saved:{" "}
                          {new Date(response.lastSavedAt).toLocaleDateString()}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <button
                          onClick={() =>
                            setSelectedWorksheetId(response.worksheetId)
                          }
                          style={{ backgroundColor: worksheet.color }}
                          className="px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                          {isCompleted ? "View" : "Continue"} →
                        </button>
                        <button
                          onClick={() => handleDelete(response.worksheetId)}
                          className="px-4 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-red-400 text-sm font-medium transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
        </div>
      </div>

      {/* Modal for viewing/editing */}
      {selectedWorksheetId && (
        <WorksheetModal
          worksheet={worksheets.find((w) => w.id === selectedWorksheetId)!}
          isOpen={!!selectedWorksheetId}
          onClose={() => {
            setSelectedWorksheetId(null)
            loadResponses()
          }}
        />
      )}
    </section>
  )
}
