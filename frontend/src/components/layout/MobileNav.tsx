"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { Home, BookOpen, FileText, Heart, Settings } from "lucide-react"
import { useSettingsStore } from "@/lib/settingsStore"

const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Story", href: "/story", icon: BookOpen },
    { label: "Toolkit", href: "/toolkit", icon: FileText },
    { label: "Support", href: "/support", icon: Heart },
]

export default function MobileNav() {
    const pathname = usePathname()
    const { isOpen: settingsOpen, toggle: toggleSettings } = useSettingsStore()

    if (pathname.startsWith('/login') || pathname.startsWith('/signup') || pathname.startsWith('/forgot-password') || pathname.startsWith('/reset-password')) {
        return null
    }

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 md:hidden z-50"
            style={{
                backgroundColor: '#1a1a1a',
                backgroundImage: 'linear-gradient(rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.2))',
                paddingBottom: 'env(safe-area-inset-bottom)',
                touchAction: 'manipulation',
            }}
        >
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map(({ label, href, icon: Icon }) => {
                    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))

                    return (
                        <Link
                            key={href}
                            href={href}
                            className="relative flex flex-col items-center justify-center gap-1 flex-1 h-full"
                        >
                            <div className="relative">
                                <Icon
                                    className={clsx(
                                        "w-5 h-5 transition-colors",
                                        isActive ? "text-teal" : "text-gray-400"
                                    )}
                                />
                                {isActive && (
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal rounded-full" />
                                )}
                            </div>
                            <span
                                className={clsx(
                                    "text-[10px] font-medium transition-colors",
                                    isActive ? "text-teal" : "text-gray-400"
                                )}
                            >
                                {label}
                            </span>
                        </Link>
                    )
                })}

                {/* Settings — opens the shared SettingsMenu panel */}
                <button
                    type="button"
                    onClick={toggleSettings}
                    aria-expanded={settingsOpen}
                    aria-label="Open settings"
                    className="relative flex flex-col items-center justify-center gap-1 flex-1 h-full"
                >
                    <div className="relative">
                        <Settings
                            className={clsx(
                                "w-5 h-5 transition-colors",
                                settingsOpen ? "text-teal" : "text-gray-400"
                            )}
                        />
                        {settingsOpen && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal rounded-full" />
                        )}
                    </div>
                    <span
                        className={clsx(
                            "text-[10px] font-medium transition-colors",
                            settingsOpen ? "text-teal" : "text-gray-400"
                        )}
                    >
                        Settings
                    </span>
                </button>
            </div>
        </nav>
    )
}
