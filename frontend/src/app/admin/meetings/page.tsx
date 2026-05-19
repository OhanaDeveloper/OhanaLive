"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface Meeting {
  id: string
  date: string
  start_time: string
  end_time: string
  host?: {
    id: string
    public_handle: string
    first_name: string
  }
  theme?: string
  status: string
  attendee_count: number
}

export default function AdminMeetingsPage() {
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("upcoming")

  useEffect(() => {
    fetchMeetings()
  }, [filter])

  const fetchMeetings = async () => {
    try {
      setLoading(true)
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "https://ohanalive-backend-production.up.railway.app"
      const response = await fetch(`${apiBase}/api/recovery/meetings/`)
      if (response.ok) {
        const data = await response.json()
        setMeetings(data.results || [])
      }
    } catch (error) {
      console.error("Failed to fetch meetings:", error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "in_progress":
        return "bg-teal/20 text-teal border-teal/30"
      case "completed":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      case "cancelled":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-dark-700/20 text-gray-400 border-dark-700/30"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":")
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-black to-dark-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link href="/admin" className="text-teal hover:text-teal-light mb-4 inline-block">
              ← Back to Dashboard
            </Link>
            <h1 className="text-4xl font-bold text-teal">Meeting Management</h1>
            <p className="text-gray-400 mt-2">View and manage all meetings</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-teal hover:bg-teal-light rounded-xl font-semibold text-white shadow-lg"
          >
            + New Meeting
          </motion.button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-3">
          {(["all", "upcoming", "past"] as const).map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === filterOption
                  ? "bg-teal text-white"
                  : "bg-dark-800 text-gray-400 hover:bg-dark-700"
              }`}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </button>
          ))}
        </div>

        {/* Meetings List */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-32 bg-dark-800/40 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : meetings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-3xl mb-2">📅</p>
            <p className="text-gray-400 text-lg">No meetings found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {meetings.map((meeting, index) => (
              <motion.div
                key={meeting.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-dark-800/60 backdrop-blur-md border border-dark-700 rounded-xl p-6 hover:border-teal/30 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* Date & Time */}
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-white">
                        {formatDate(meeting.date)}
                      </h3>
                      <span className="text-gray-400">
                        {formatTime(meeting.start_time)} - {formatTime(meeting.end_time)}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          meeting.status
                        )}`}
                      >
                        {meeting.status}
                      </span>
                    </div>

                    {/* Host & Theme */}
                    <div className="space-y-2">
                      {meeting.host ? (
                        <p className="text-gray-300">
                          <span className="text-gray-500">Host:</span>{" "}
                          <span className="text-teal font-medium">
                            {meeting.host.public_handle}
                          </span>
                        </p>
                      ) : (
                        <p className="text-yellow-500">⚠️ No host assigned</p>
                      )}
                      {meeting.theme && (
                        <p className="text-gray-300">
                          <span className="text-gray-500">Theme:</span> {meeting.theme}
                        </p>
                      )}
                      <p className="text-gray-400 text-sm">
                        {meeting.attendee_count} attendees
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg border border-teal/30"
                    >
                      Edit
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg border border-red-500/30"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
