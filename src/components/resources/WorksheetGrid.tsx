"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { worksheets, worksheetCategories, type WorksheetCategory } from "@/lib/worksheets"
import WorksheetCard from "./WorksheetCard"

type FilterOption = "all" | WorksheetCategory

export default function WorksheetGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredWorksheets = worksheets.filter((worksheet) => {
    const matchesCategory = activeFilter === "all" || worksheet.category === activeFilter
    const matchesSearch =
      searchQuery === "" ||
      worksheet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worksheet.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categories: { key: FilterOption; label: string; icon: string }[] = [
    { key: "all", label: "All", icon: "📚" },
    ...Object.entries(worksheetCategories).map(([key, value]) => ({
      key: key as WorksheetCategory,
      label: value.label,
      icon: value.icon,
    })),
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search worksheets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-900/50 border border-dark-800 rounded-xl py-3 px-4 pl-12 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal/50 transition-colors"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-xl font-medium transition-all text-sm ${
                activeFilter === category.key
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {activeFilter === category.key && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-teal/20 border border-teal/50 rounded-xl"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 text-sm mb-8"
        >
          Showing {filteredWorksheets.length} worksheet
          {filteredWorksheets.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Worksheet grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredWorksheets.map((worksheet, index) => (
              <motion.div
                key={worksheet.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <WorksheetCard worksheet={worksheet} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredWorksheets.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-gray-400">No worksheets found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveFilter("all")
              }}
              className="mt-4 text-teal hover:text-teal-light transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
