"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { LogOut, LayoutDashboard } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export default function AuthButtons() {
    const pathname = usePathname()
    const { isAuthenticated, logout, user } = useAuth()

    const handleLogout = () => {
        logout()
        window.location.href = "/"
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="fixed top-6 right-6 z-50 hidden md:flex items-center gap-2"
        >
            <AnimatePresence mode="wait">
                {isAuthenticated ? (
                    <motion.div
                        key="authed"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 bg-dark-900/70 backdrop-blur-sm border border-teal/20 hover:border-teal/50 text-gray-300 hover:text-teal px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium shadow-lg max-w-[160px]"
                        >
                            <LayoutDashboard className="w-3.5 h-3.5 flex-shrink-0" />
                            <span className="truncate">{user?.public_handle || user?.first_name || "Dashboard"}</span>
                        </Link>
                        <motion.button
                            onClick={handleLogout}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center w-10 h-10 bg-dark-900/70 backdrop-blur-sm border border-dark-700 hover:border-red-500/40 text-gray-500 hover:text-red-400 rounded-xl transition-all duration-200 shadow-lg"
                            title="Logout"
                        >
                            <LogOut className="w-3.5 h-3.5" />
                        </motion.button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="guest"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <Link
                            href="/login"
                            className="bg-dark-900/70 backdrop-blur-sm border border-dark-700 hover:border-teal/40 text-gray-400 hover:text-gray-100 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg"
                        >
                            Login
                        </Link>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Link
                                href="/signup"
                                className="bg-gradient-to-r from-teal to-purple text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-teal/20 hover:shadow-teal/35 transition-shadow duration-200"
                            >
                                Sign Up
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
