"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface DashboardStats {
  upcomingMeetings: number
  pendingSignups: number
  activeMalama: number
  recentAnnouncements: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    upcomingMeetings: 0,
    pendingSignups: 0,
    activeMalama: 0,
    recentAnnouncements: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch real stats from API
    setTimeout(() => {
      setStats({
        upcomingMeetings: 7,
        pendingSignups: 3,
        activeMalama: 12,
        recentAnnouncements: 2,
      })
      setLoading(false)
    }, 500)
  }, [])

  const adminSections = [
    {
      title: "Meetings",
      description: "View and manage upcoming meetings",
      href: "/admin/meetings",
      icon: "📅",
      color: "from-teal/20 to-teal-light/20 border-teal/30",
      stat: stats.upcomingMeetings,
      statLabel: "upcoming",
    },
    {
      title: "Sign-Up Requests",
      description: "Review Mālama hosting requests",
      href: "/admin/signups",
      icon: "✋",
      color: "from-accent/20 to-yellow-500/20 border-accent/30",
      stat: stats.pendingSignups,
      statLabel: "pending",
    },
    {
      title: "Announcements",
      description: "Create and manage announcements",
      href: "/admin/announcements",
      icon: "📢",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      stat: stats.recentAnnouncements,
      statLabel: "active",
    },
    {
      title: "Mālama Contacts",
      description: "View emergency contacts and availability",
      href: "/admin/contacts",
      icon: "👥",
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      stat: stats.activeMalama,
      statLabel: "total",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-black to-dark-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-teal mb-4">Admin Dashboard</h1>
          <p className="text-gray-400 text-lg">
            Manage meetings, announcements, and Mālama crew
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={section.href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-8 rounded-2xl border-2 bg-gradient-to-br ${section.color} backdrop-blur-sm transition-all hover:shadow-2xl hover:shadow-teal/10 group`}
                >
                  {/* Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-300 mb-6">{section.description}</p>

                  {/* Stats Badge */}
                  {!loading && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="absolute top-6 right-6 bg-dark-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                    >
                      <span className="text-3xl font-bold text-teal">
                        {section.stat}
                      </span>
                      <span className="text-gray-400 text-sm ml-2">
                        {section.statLabel}
                      </span>
                    </motion.div>
                  )}

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-6 h-6 text-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-dark-800/40 backdrop-blur-md border border-dark-700 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-teal">{stats.upcomingMeetings}</p>
              <p className="text-gray-400 text-sm">Upcoming Meetings</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">{stats.pendingSignups}</p>
              <p className="text-gray-400 text-sm">Pending Sign-Ups</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400">{stats.recentAnnouncements}</p>
              <p className="text-gray-400 text-sm">Active Announcements</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">{stats.activeMalama}</p>
              <p className="text-gray-400 text-sm">Mālama Crew</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
