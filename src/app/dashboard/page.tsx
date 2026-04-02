"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion"
import { useAuth } from "@/contexts/AuthContext"
import { api } from "@/lib/api"
import { MEETING_INFO } from "@/lib/meetings"
import {
  Heart,
  Calendar,
  Clock,
  Megaphone,
  User,
  BookOpen,
  Users,
  PenLine,
  Plus,
  RotateCcw,
  Check,
  X,
  ExternalLink,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

// ─── Types ────────────────────────────────────────────────────────────────────

interface SobrietyDate {
  id: string
  substance: string
  sober_since: string
  notes?: string
}

interface Announcement {
  id: string
  title: string
  content: string
  created_at: string
}

// ─── Animated Counter ─────────────────────────────────────────────────────────

function DayCounter({ days }: { days: number }) {
  const count = useMotionValue(0)
  const display = useTransform(count, (v) => Math.floor(v).toLocaleString())

  useEffect(() => {
    const controls = animate(count, days, { duration: 1.8, ease: "easeOut" })
    return controls.stop
  }, [days, count])

  return <motion.span>{display}</motion.span>
}

function getDaysSince(dateStr: string): number {
  const start = new Date(dateStr)
  const now = new Date()
  return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// ─── Sobriety Widget ──────────────────────────────────────────────────────────

function SobrietyWidget() {
  const [dates, setDates] = useState<SobrietyDate[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [confirmRestartId, setConfirmRestartId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [savedId, setSavedId] = useState<string | null>(null)
  const [newDate, setNewDate] = useState({ substance: "", sober_since: "", notes: "" })

  const loadDates = useCallback(async () => {
    const res = await api.getSobrietyDates()
    if (res.data) setDates(res.data)
    setLoading(false)
  }, [])

  useEffect(() => { loadDates() }, [loadDates])

  const handleAdd = async () => {
    if (!newDate.substance || !newDate.sober_since) return
    setSaving(true)
    const res = await api.addSobrietyDate(newDate)
    if (res.data) {
      setDates((prev) => [...prev, res.data])
      setSavedId(res.data.id)
      setNewDate({ substance: "", sober_since: "", notes: "" })
      setShowAddForm(false)
      setTimeout(() => setSavedId(null), 2000)
    }
    setSaving(false)
  }

  const handleRestart = async (id: string) => {
    const res = await api.restartSobrietyDate(id)
    if (res.data) {
      setDates((prev) => prev.map((d) => (d.id === id ? res.data : d)))
    }
    setConfirmRestartId(null)
  }

  return (
    <div className="bg-dark-900/60 backdrop-blur-md border border-dark-700 rounded-2xl p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-100">Sobriety</h2>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => setShowAddForm((v) => !v)}
          className="flex items-center gap-1.5 text-xs text-teal border border-teal/30 px-3 py-1.5 rounded-lg hover:bg-teal/10 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Add date
        </motion.button>
      </div>

      {/* Add form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="bg-dark-800/60 border border-teal/20 rounded-xl p-4 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Substance (e.g. alcohol)"
                value={newDate.substance}
                onChange={(e) => setNewDate((d) => ({ ...d, substance: e.target.value }))}
                className="bg-dark-700 border border-dark-600 text-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:border-teal/50"
              />
              <input
                type="date"
                value={newDate.sober_since}
                onChange={(e) => setNewDate((d) => ({ ...d, sober_since: e.target.value }))}
                className="bg-dark-700 border border-dark-600 text-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal/50"
              />
              <textarea
                placeholder="Notes (optional)"
                value={newDate.notes}
                onChange={(e) => setNewDate((d) => ({ ...d, notes: e.target.value }))}
                rows={2}
                className="bg-dark-700 border border-dark-600 text-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:border-teal/50 resize-none"
              />
              <div className="flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAdd}
                  disabled={saving || !newDate.substance || !newDate.sober_since}
                  className="flex-1 bg-teal text-white py-2 rounded-lg text-sm font-semibold disabled:opacity-40 hover:bg-teal-light transition-colors"
                >
                  {saving ? "Saving…" : "Save"}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-dark-700 transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading */}
      {loading && (
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="h-20 bg-dark-800 rounded-xl animate-pulse" />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && dates.length === 0 && !showAddForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <Heart className="w-8 h-8 text-teal/40 mx-auto mb-3" />
          <p className="text-gray-400 text-sm mb-1">No dates logged yet.</p>
          <p className="text-gray-500 text-xs">Tracking your journey is a gift to yourself.</p>
        </motion.div>
      )}

      {/* Date entries */}
      <div className="space-y-3">
        <AnimatePresence>
          {dates.map((entry) => {
            const days = getDaysSince(entry.sober_since)
            const isSaved = savedId === entry.id
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`rounded-xl p-4 border transition-colors ${
                  isSaved
                    ? "bg-teal/10 border-teal/40"
                    : "bg-dark-800/60 border-dark-700 hover:border-dark-600"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-200 capitalize">{entry.substance}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Since {formatDate(entry.sober_since)}</p>
                  </div>

                  {/* Day counter */}
                  <div className="text-right">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-teal">
                        <DayCounter days={days} />
                      </span>
                      <span className="text-xs text-gray-500">days</span>
                    </div>
                  </div>
                </div>

                {/* Restart */}
                <AnimatePresence mode="wait">
                  {confirmRestartId === entry.id ? (
                    <motion.div
                      key="confirm"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-dark-700 overflow-hidden"
                    >
                      <p className="text-xs text-gray-400 mb-2">Restart this counter?</p>
                      <div className="flex gap-2">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleRestart(entry.id)}
                          className="flex items-center gap-1 text-xs bg-purple/20 text-purple border border-purple/30 px-3 py-1.5 rounded-lg hover:bg-purple/30 transition-colors"
                        >
                          <Check className="w-3 h-3" /> Yes, restart
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setConfirmRestartId(null)}
                          className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 px-3 py-1.5 rounded-lg hover:bg-dark-700 transition-colors"
                        >
                          <X className="w-3 h-3" /> Keep it
                        </motion.button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="restart-btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setConfirmRestartId(entry.id)}
                      className="mt-3 flex items-center gap-1 text-xs text-gray-600 hover:text-gray-400 transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" /> Restart counter
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ─── Meeting Widget ────────────────────────────────────────────────────────────

function MeetingWidget() {
  const [timeLeft, setTimeLeft] = useState("")
  const [isLive, setIsLive] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { startHour, endHour, timeZone, zoomLink } = MEETING_INFO

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const pacificNow = new Date(now.toLocaleString("en-US", { timeZone }))

      let start = new Date(pacificNow)
      start.setHours(startHour, 0, 0, 0)

      let end = new Date(pacificNow)
      if (endHour < startHour) end.setDate(end.getDate() + 1)
      end.setHours(endHour, 0, 0, 0)

      if (pacificNow >= start && pacificNow <= end) {
        setIsLive(true)
        setTimeLeft("Live now")
      } else {
        setIsLive(false)
        if (pacificNow > start) start.setDate(start.getDate() + 1)
        const diff = start.getTime() - pacificNow.getTime()
        const h = Math.floor(diff / (1000 * 60 * 60))
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const s = Math.floor((diff % (1000 * 60)) / 1000)
        setTimeLeft(`${h}h ${m}m ${s}s`)
      }
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [startHour, endHour, timeZone])

  return (
    <div className="bg-dark-900/60 backdrop-blur-md border border-dark-700 rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-teal" />
        <h2 className="text-lg font-bold text-gray-100">Tonight&apos;s Meeting</h2>
        {isLive && (
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="ml-auto text-xs bg-teal/20 text-teal border border-teal/40 px-2 py-0.5 rounded-full font-semibold"
          >
            LIVE
          </motion.span>
        )}
      </div>

      <div className="text-center py-4">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
          {isLive ? "In progress" : "Starts in"}
        </p>
        {mounted ? (
          <motion.p
            key={timeLeft}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            className={`text-3xl font-mono font-bold ${isLive ? "text-teal" : "text-gray-100"}`}
          >
            {timeLeft}
          </motion.p>
        ) : (
          <div className="h-9 w-40 mx-auto bg-dark-700 rounded-lg animate-pulse" />
        )}
        <p className="text-xs text-gray-500 mt-2">11 PM – 3 AM Pacific · Every night</p>
      </div>

      <motion.a
        href={zoomLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
          isLive
            ? "bg-teal text-white shadow-lg shadow-teal/20"
            : "bg-dark-800 text-gray-300 border border-dark-700 hover:border-teal/30 hover:text-white"
        }`}
      >
        <ExternalLink className="w-4 h-4" />
        {isLive ? "Join Now" : "Open Zoom"}
      </motion.a>
    </div>
  )
}

// ─── Announcements Widget ──────────────────────────────────────────────────────

function AnnouncementsWidget() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getAnnouncements().then((res) => {
      if (res.data) setAnnouncements(res.data.slice(0, 3))
      setLoading(false)
    })
  }, [])

  return (
    <div className="bg-dark-900/60 backdrop-blur-md border border-dark-700 rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Megaphone className="w-4 h-4 text-purple" />
        <h2 className="text-lg font-bold text-gray-100">Announcements</h2>
      </div>

      {loading && (
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="h-14 bg-dark-800 rounded-xl animate-pulse" />
          ))}
        </div>
      )}

      {!loading && announcements.length === 0 && (
        <div className="text-center py-6">
          <Megaphone className="w-6 h-6 text-gray-600 mx-auto mb-2" />
          <p className="text-gray-500 text-sm">Nothing new right now.</p>
        </div>
      )}

      <div className="space-y-3">
        {announcements.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-dark-800/60 border border-dark-700 rounded-xl p-4"
          >
            <p className="text-sm font-semibold text-gray-200">{item.title}</p>
            <p className="text-xs text-gray-400 mt-1 line-clamp-2">{item.content}</p>
            <p className="text-xs text-gray-600 mt-2">
              {new Date(item.created_at).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── Profile Card ─────────────────────────────────────────────────────────────

function ProfileCard({ user }: { user: { public_handle: string; first_name: string; profile: { bio: string; avatar: string | null } } }) {
  return (
    <div className="bg-dark-900/60 backdrop-blur-md border border-dark-700 rounded-2xl p-6 flex items-center gap-5">
      {/* Avatar */}
      <div className="flex-shrink-0">
        {user.profile.avatar ? (
          <img
            src={user.profile.avatar}
            alt={user.public_handle}
            className="w-16 h-16 rounded-full border-2 border-teal/30 object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full border-2 border-teal/30 bg-gradient-to-br from-teal/20 to-purple/20 flex items-center justify-center">
            <span className="text-2xl font-bold text-teal">
              {(user.public_handle || user.first_name || "?")[0].toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-gray-100 truncate">@{user.public_handle}</p>
        {user.profile.bio && (
          <p className="text-sm text-gray-400 mt-0.5 line-clamp-2">{user.profile.bio}</p>
        )}
      </div>

      {/* Edit link */}
      <Link href="/profile/edit">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          className="flex-shrink-0 p-2 rounded-lg border border-dark-700 hover:border-teal/30 hover:bg-teal/5 transition-colors"
        >
          <PenLine className="w-4 h-4 text-gray-400 hover:text-teal transition-colors" />
        </motion.div>
      </Link>
    </div>
  )
}

// ─── Quick Links ──────────────────────────────────────────────────────────────

const quickLinks = [
  { label: "Resources", desc: "Worksheets & guides", href: "/resources", icon: BookOpen, color: "teal" },
  { label: "Mālama Crew", desc: "Meet the hosts", href: "/crew", icon: Users, color: "purple" },
  { label: "Share Your Story", desc: "Inspire the ʻOhana", href: "/forms/story", icon: PenLine, color: "gold" },
  { label: "Recovery Network", desc: "Find your path", href: "/support", icon: Heart, color: "teal" },
]

function QuickLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {quickLinks.map((link, i) => {
        const Icon = link.icon
        return (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
          >
            <Link href={link.href}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-dark-900/60 border border-dark-700 hover:border-teal/30 rounded-xl p-4 flex flex-col gap-2 cursor-pointer transition-colors"
                style={{ willChange: "transform", transform: "translateZ(0)" }}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className={`w-4 h-4 ${
                      link.color === "teal"
                        ? "text-teal"
                        : link.color === "purple"
                        ? "text-purple"
                        : "text-gold"
                    }`}
                  />
                  <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-gray-400 transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-200">{link.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}

// ─── Dashboard Page ────────────────────────────────────────────────────────────

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function DashboardPage() {
  const { user, isLoading, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login")
    }
  }, [isLoading, isAuthenticated, router])

  // Loading skeleton
  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-dark-950 px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="h-12 w-64 bg-dark-800 rounded-xl animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-dark-800 rounded-2xl animate-pulse" />
            <div className="space-y-4">
              <div className="h-44 bg-dark-800 rounded-2xl animate-pulse" />
              <div className="h-44 bg-dark-800 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const displayName = user.public_handle || user.first_name || "friend"
  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : hour < 21 ? "Good evening" : "Welcome back"

  return (
    <div className="min-h-screen bg-dark-950 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Greeting */}
        <motion.div
          custom={0}
          variants={sectionVariants}
          initial="hidden"
          animate="show"
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-teal/80 text-sm font-mono tracking-widest uppercase mb-1">
              Your space
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
              {greeting},{" "}
              <span className="text-teal">@{displayName}</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          >
            <Heart className="w-8 h-8 text-teal/40" fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* Profile card */}
        <motion.div custom={1} variants={sectionVariants} initial="hidden" animate="show">
          <ProfileCard user={user} />
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sobriety — left */}
          <motion.div custom={2} variants={sectionVariants} initial="hidden" animate="show">
            <SobrietyWidget />
          </motion.div>

          {/* Meeting + Announcements — right */}
          <div className="flex flex-col gap-6">
            <motion.div custom={3} variants={sectionVariants} initial="hidden" animate="show">
              <MeetingWidget />
            </motion.div>
            <motion.div custom={4} variants={sectionVariants} initial="hidden" animate="show">
              <AnnouncementsWidget />
            </motion.div>
          </div>
        </div>

        {/* Quick links */}
        <motion.div custom={5} variants={sectionVariants} initial="hidden" animate="show">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-gray-500" />
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Quick links
            </h2>
          </div>
          <QuickLinks />
        </motion.div>

      </div>
    </div>
  )
}
