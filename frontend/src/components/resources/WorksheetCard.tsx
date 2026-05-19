"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import type { Worksheet } from "@/lib/worksheets"
import WorksheetModal from "./WorksheetModal"
import { getWorksheetResponse } from "@/lib/worksheetStorage"

interface WorksheetCardProps {
  worksheet: Worksheet
  index: number
}

export default function WorksheetCard({ worksheet, index }: WorksheetCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Check if this worksheet has been started
  const savedResponse = getWorksheetResponse(worksheet.id)
  const isStarted = savedResponse !== null
  const isCompleted = savedResponse?.completedAt !== undefined

  const difficultyColors = {
    beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  }

  const handleStartWorksheet = () => {
    setIsModalOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.02 : 0.95,
        }}
        style={{ backgroundColor: worksheet.color }}
        className="absolute inset-0 rounded-2xl blur-xl transition-all duration-500"
      />

      <motion.div
        whileHover={{ y: -5 }}
        className="relative bg-dark-900/70 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-dark-900 transition-colors"
      >
        {/* Header with color accent */}
        <div
          className="h-2 w-full"
          style={{ backgroundColor: worksheet.color }}
        />

        <div className="p-6">
          {/* Top row: Icon and badges */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl relative"
            >
              {worksheet.icon}
              {isCompleted && (
                <span className="absolute -top-1 -right-1 text-lg">✓</span>
              )}
            </motion.div>

            <div className="flex gap-2 flex-wrap justify-end">
              {isCompleted && (
                <span className="text-xs px-2 py-1 rounded-full bg-teal/20 text-teal border border-teal/30">
                  Completed
                </span>
              )}
              {isStarted && !isCompleted && (
                <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                  In Progress
                </span>
              )}
              <span
                className={`text-xs px-2 py-1 rounded-full border ${difficultyColors[worksheet.difficulty]}`}
              >
                {worksheet.difficulty}
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-dark-800 text-gray-400">
                {worksheet.timeEstimate}
              </span>
            </div>
          </div>

          {/* Title and description */}
          <h3 className="text-xl font-bold text-gray-100 mb-2">
            {worksheet.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {worksheet.description}
          </p>

          {/* Action buttons */}
          <div className="flex gap-3">
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-2 px-4 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 text-sm font-medium transition-colors"
            >
              {isExpanded ? "Hide Preview" : "Preview"}
            </motion.button>

            <motion.button
              onClick={handleStartWorksheet}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundColor: worksheet.color }}
              className="flex-1 py-2 px-4 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span>{isStarted ? (isCompleted ? "View" : "Continue") : "Start"}</span>
              <span>→</span>
            </motion.button>
          </div>
        </div>

        {/* Expandable preview */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="border-t border-dark-800 pt-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                    Preview Prompts
                  </p>
                  <ul className="space-y-2">
                    {worksheet.preview.map((prompt, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                          style={{
                            backgroundColor: `${worksheet.color}20`,
                            color: worksheet.color,
                          }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-gray-300">{prompt}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Interactive worksheet modal */}
      <WorksheetModal
        worksheet={worksheet}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.div>
  )
}
