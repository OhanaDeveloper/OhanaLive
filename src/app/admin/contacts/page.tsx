"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface MalamaContact {
  id: string
  malama: {
    id: string
    public_handle: string
    first_name: string
    avatar_url?: string
    pronouns?: string
  }
  emergency_phone?: string
  backup_email?: string
  preferred_contact: "phone" | "email" | "both"
  available_days: string[]
  max_meetings_per_week: number
  notes?: string
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<MalamaContact[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      setLoading(true)
      // For now, show empty state - will connect to real API when auth is implemented
      setContacts([])
    } catch (error) {
      console.error("Failed to fetch contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.malama.public_handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.malama.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getDayAbbreviation = (day: string) => {
    return day.substring(0, 3).toUpperCase()
  }

  const allDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-black to-dark-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin" className="text-teal hover:text-teal-light mb-4 inline-block">
            ← Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-teal">Mālama Contacts</h1>
          <p className="text-gray-400 mt-2">View emergency contacts and crew availability</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or handle..."
            className="w-full px-6 py-4 bg-dark-800/60 backdrop-blur-md border border-dark-700 rounded-xl text-white focus:border-teal outline-none"
          />
        </div>

        {/* Contacts Grid */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-dark-800/40 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : filteredContacts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-dark-800/40 backdrop-blur-md border border-dark-700 rounded-2xl"
          >
            <p className="text-6xl mb-4">👥</p>
            <p className="text-gray-400 text-xl mb-2">
              {searchQuery ? "No contacts found" : "No Mālama contacts yet"}
            </p>
            <p className="text-gray-500 text-sm">
              {searchQuery
                ? "Try a different search term"
                : "Mālama crew contact information will appear here"}
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredContacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-dark-800/60 backdrop-blur-md border border-dark-700 rounded-2xl p-6 hover:border-teal/30 transition-all"
              >
                {/* Header with Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  {contact.malama.avatar_url ? (
                    <img
                      src={contact.malama.avatar_url}
                      alt={contact.malama.public_handle}
                      className="w-16 h-16 rounded-full border-2 border-teal/30 object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full border-2 border-teal/30 bg-dark-700 flex items-center justify-center">
                      <span className="text-2xl text-teal">
                        {contact.malama.first_name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {contact.malama.public_handle}
                    </h3>
                    <p className="text-gray-400 text-sm">{contact.malama.first_name}</p>
                    {contact.malama.pronouns && (
                      <p className="text-gray-500 text-xs">({contact.malama.pronouns})</p>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  {contact.emergency_phone && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📱</span>
                      <span className="text-gray-300">{contact.emergency_phone}</span>
                    </div>
                  )}
                  {contact.backup_email && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">✉️</span>
                      <span className="text-gray-300 text-sm break-all">
                        {contact.backup_email}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">💬</span>
                    <span className="text-gray-300 capitalize">
                      Prefers: {contact.preferred_contact}
                    </span>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Available Days</p>
                  <div className="flex gap-2 flex-wrap">
                    {allDays.map((day) => {
                      const isAvailable = contact.available_days.includes(day)
                      return (
                        <span
                          key={day}
                          className={`px-3 py-1 rounded-lg text-xs font-medium ${
                            isAvailable
                              ? "bg-teal/20 text-teal border border-teal/30"
                              : "bg-dark-900/50 text-gray-600 border border-dark-700"
                          }`}
                        >
                          {getDayAbbreviation(day)}
                        </span>
                      )
                    })}
                  </div>
                </div>

                {/* Max Meetings */}
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Max Meetings Per Week</p>
                  <span className="px-4 py-2 bg-dark-900/50 border border-dark-700 rounded-lg text-teal font-semibold">
                    {contact.max_meetings_per_week} meetings
                  </span>
                </div>

                {/* Notes */}
                {contact.notes && (
                  <div className="p-4 bg-dark-900/50 border border-dark-700 rounded-xl">
                    <p className="text-gray-400 text-sm mb-1">Notes</p>
                    <p className="text-gray-300 text-sm">{contact.notes}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg border border-teal/30 text-sm font-medium"
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 text-sm"
                  >
                    Message
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
