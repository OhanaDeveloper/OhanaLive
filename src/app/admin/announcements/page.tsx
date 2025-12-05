"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface Announcement {
  id: string
  author: {
    id: string
    public_handle: string
    first_name: string
  }
  title: string
  content: string
  priority: "low" | "normal" | "high" | "urgent"
  is_pinned: boolean
  created_at: string
  updated_at: string
}

export default function AdminAnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    priority: "normal" as const,
  })

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  const fetchAnnouncements = async () => {
    try {
      setLoading(true)
      // For now, show empty state - will connect to real API when auth is implemented
      setAnnouncements([])
    } catch (error) {
      console.error("Failed to fetch announcements:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async () => {
    // TODO: Call API to create announcement
    console.log("Creating announcement:", newAnnouncement)
    setShowCreateForm(false)
    setNewAnnouncement({ title: "", content: "", priority: "normal" })
  }

  const handleTogglePin = async (announcementId: string) => {
    // TODO: Call API to toggle pin
    console.log("Toggling pin:", announcementId)
  }

  const handleArchive = async (announcementId: string) => {
    // TODO: Call API to archive
    console.log("Archiving:", announcementId)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "high":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "normal":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "low":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-dark-700/20 text-gray-400 border-dark-700/30"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
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
            <h1 className="text-4xl font-bold text-teal">Announcements</h1>
            <p className="text-gray-400 mt-2">Create and manage community announcements</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="px-6 py-3 bg-teal hover:bg-teal-light rounded-xl font-semibold text-white shadow-lg"
          >
            {showCreateForm ? "✕ Cancel" : "+ New Announcement"}
          </motion.button>
        </div>

        {/* Create Form */}
        <AnimatePresence>
          {showCreateForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 overflow-hidden"
            >
              <div className="bg-dark-800/60 backdrop-blur-md border border-teal/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Create New Announcement</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Title</label>
                    <input
                      type="text"
                      value={newAnnouncement.title}
                      onChange={(e) =>
                        setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-xl text-white focus:border-teal outline-none"
                      placeholder="Announcement title..."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Content</label>
                    <textarea
                      value={newAnnouncement.content}
                      onChange={(e) =>
                        setNewAnnouncement({ ...newAnnouncement, content: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-xl text-white focus:border-teal outline-none resize-none"
                      placeholder="Announcement content..."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Priority</label>
                    <select
                      value={newAnnouncement.priority}
                      onChange={(e) =>
                        setNewAnnouncement({
                          ...newAnnouncement,
                          priority: e.target.value as any,
                        })
                      }
                      className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-xl text-white focus:border-teal outline-none"
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCreate}
                    className="w-full px-6 py-3 bg-teal hover:bg-teal-light rounded-xl font-semibold text-white shadow-lg"
                  >
                    Create Announcement
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Announcements List */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-40 bg-dark-800/40 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : announcements.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-dark-800/40 backdrop-blur-md border border-dark-700 rounded-2xl"
          >
            <p className="text-6xl mb-4">📢</p>
            <p className="text-gray-400 text-xl mb-2">No announcements yet</p>
            <p className="text-gray-500 text-sm">
              Create your first announcement to share with the community
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-dark-800/60 backdrop-blur-md border rounded-2xl p-6 hover:border-teal/30 transition-all ${
                  announcement.is_pinned ? "border-teal/50" : "border-dark-700"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {announcement.is_pinned && <span className="text-2xl">📌</span>}
                    <div>
                      <h3 className="text-xl font-bold text-white">{announcement.title}</h3>
                      <p className="text-gray-400 text-sm">
                        By {announcement.author.public_handle} •{" "}
                        {formatDate(announcement.created_at)}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                      announcement.priority
                    )}`}
                  >
                    {announcement.priority}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 whitespace-pre-wrap">{announcement.content}</p>

                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTogglePin(announcement.id)}
                    className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg border border-teal/30 text-sm"
                  >
                    {announcement.is_pinned ? "Unpin" : "Pin"}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 text-sm"
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleArchive(announcement.id)}
                    className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg border border-red-500/30 text-sm"
                  >
                    Archive
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
