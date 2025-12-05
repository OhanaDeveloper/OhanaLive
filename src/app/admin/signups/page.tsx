"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface SignUp {
  id: string
  malama: {
    id: string
    public_handle: string
    first_name: string
    avatar_url?: string
  }
  requested_date: string
  status: string
  message?: string
  created_at: string
}

export default function AdminSignUpsPage() {
  const [signups, setSignups] = useState<SignUp[]>([])
  const [loading, setLoading] = useState(true)
  const [processingId, setProcessingId] = useState<string | null>(null)

  useEffect(() => {
    fetchSignUps()
  }, [])

  const fetchSignUps = async () => {
    try {
      setLoading(true)
      // For now, show empty state - will connect to real API when auth is implemented
      setSignups([])
    } catch (error) {
      console.error("Failed to fetch sign-ups:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (signupId: string) => {
    setProcessingId(signupId)
    // TODO: Call API to approve sign-up
    setTimeout(() => {
      setProcessingId(null)
      fetchSignUps()
    }, 1000)
  }

  const handleDecline = async (signupId: string) => {
    setProcessingId(signupId)
    // TODO: Call API to decline sign-up
    setTimeout(() => {
      setProcessingId(null)
      fetchSignUps()
    }, 1000)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`
    return "Just now"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-black to-dark-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin" className="text-teal hover:text-teal-light mb-4 inline-block">
            ← Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-teal">Sign-Up Requests</h1>
          <p className="text-gray-400 mt-2">Review and approve Mālama hosting requests</p>
        </div>

        {/* Requests List */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-48 bg-dark-800/40 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : signups.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-dark-800/40 backdrop-blur-md border border-dark-700 rounded-2xl"
          >
            <p className="text-6xl mb-4">✋</p>
            <p className="text-gray-400 text-xl mb-2">No pending sign-up requests</p>
            <p className="text-gray-500 text-sm">
              Mālama requests to host meetings will appear here
            </p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence>
              {signups.map((signup, index) => (
                <motion.div
                  key={signup.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-dark-800/60 backdrop-blur-md border border-dark-700 rounded-2xl p-8 hover:border-teal/30 transition-all"
                >
                  <div className="flex items-start gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      {signup.malama.avatar_url ? (
                        <img
                          src={signup.malama.avatar_url}
                          alt={signup.malama.public_handle}
                          className="w-20 h-20 rounded-full border-2 border-teal/30 object-cover"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-full border-2 border-teal/30 bg-dark-700 flex items-center justify-center">
                          <span className="text-3xl text-teal">
                            {signup.malama.first_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {signup.malama.public_handle}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            Requested {getTimeAgo(signup.created_at)}
                          </p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                          Pending Review
                        </span>
                      </div>

                      {/* Requested Date */}
                      <div className="mb-4 p-4 bg-dark-900/50 border border-teal/20 rounded-xl">
                        <p className="text-gray-500 text-sm mb-1">Requested Date</p>
                        <p className="text-xl font-semibold text-teal">
                          {formatDate(signup.requested_date)}
                        </p>
                      </div>

                      {/* Message */}
                      {signup.message && (
                        <div className="mb-6">
                          <p className="text-gray-500 text-sm mb-2">Message from Mālama:</p>
                          <p className="text-gray-300 italic">"{signup.message}"</p>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleApprove(signup.id)}
                          disabled={processingId === signup.id}
                          className="flex-1 px-6 py-3 bg-teal hover:bg-teal-light rounded-xl font-semibold text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {processingId === signup.id ? "Processing..." : "✓ Approve & Assign"}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleDecline(signup.id)}
                          disabled={processingId === signup.id}
                          className="flex-1 px-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl font-semibold border border-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {processingId === signup.id ? "Processing..." : "✗ Decline"}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}
