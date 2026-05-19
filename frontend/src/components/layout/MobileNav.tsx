"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import clsx from "clsx"
import { Home, BookOpen, FileText, Heart, UserCircle2 } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

const staticNavItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Story", href: "/story", icon: BookOpen },
    { label: "Toolkit", href: "/toolkit", icon: FileText },
    { label: "Support", href: "/support", icon: Heart },
]

export default function MobileNav() {
    const pathname = usePathname()
    const { isAuthenticated, user } = useAuth()

    const authItem = {
        label: isAuthenticated ? (user?.public_handle || "Me") : "Login",
        href: isAuthenticated ? "/dashboard" : "/login",
        icon: UserCircle2,
    }

    const navItems = [...staticNavItems, authItem]

    // Hide mobile nav on auth pages
    if (pathname.startsWith('/login') || pathname.startsWith('/signup') || pathname.startsWith('/forgot-password') || pathname.startsWith('/reset-password')) {
        return null
    }

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-dark-900/95 backdrop-blur-lg border-t-2 border-dark-700 md:hidden z-50 safe-area-bottom">
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map(({ label, href, icon: Icon }) => {
                    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))

                    return (
                        <Link
                            key={href}
                            href={href}
                            className="relative flex flex-col items-center justify-center gap-1 flex-1 h-full group"
                        >
                            <div className="relative">
                                <Icon
                                    className={clsx(
                                        "w-5 h-5 transition-all duration-300",
                                        isActive ? "text-teal scale-110" : "text-gray-400 group-hover:text-teal group-hover:scale-105"
                                    )}
                                />
                                {isActive && (
                                    <motion.div
                                        layoutId="mobile-indicator"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal rounded-full"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </div>
                            <span
                                className={clsx(
                                    "text-[10px] font-medium transition-colors duration-300",
                                    isActive ? "text-teal" : "text-gray-400 group-hover:text-teal"
                                )}
                            >
                                {label}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
