"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import clsx from "clsx"
import { useAuth } from "@/contexts/AuthContext"

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Journey", href: "/story" },
    { label: "Guides", href: "/crew" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
]

export default function Navigation() {
    const pathname = usePathname()
    const { isAuthenticated, logout, user } = useAuth()

    const handleLogout = () => {
        logout()
        window.location.href = '/' // Redirect to home after logout
    }

    return (
        <nav className="flex gap-6 text-sm md:text-base font-medium items-center">
            {navItems.map(({ label, href }) => (
                <Link key={href} href={href} className="relative">
          <span
              className={clsx(
                  "transition-colors duration-300 hover:text-teal",
                  pathname === href ? "text-teal" : "text-light"
              )}
          >
            {label}
          </span>
                    {pathname === href && (
                        <motion.div
                            layoutId="underline"
                            className="absolute left-0 -bottom-1 h-[2px] w-full bg-teal"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                </Link>
            ))}

            {/* Auth links */}
            <div className="ml-4 flex gap-3 items-center border-l border-gray-600 pl-6">
                {isAuthenticated ? (
                    <>
                        <span className="text-xs text-gray-400">
                            Hi, {user?.public_handle || user?.first_name || 'User'}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="text-sm px-4 py-2 rounded-lg bg-ohana-ocean/20 hover:bg-ohana-ocean/40 text-light transition-colors"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            href="/login"
                            className={clsx(
                                "transition-colors duration-300 hover:text-teal",
                                pathname === "/login" ? "text-teal" : "text-light"
                            )}
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-ohana-teal to-ohana-ocean text-white hover:shadow-lg transition-all"
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    )
}