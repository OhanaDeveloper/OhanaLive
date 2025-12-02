"use client"

import { useState, useEffect } from "react"
import type { ReactNode } from "react"
import Navigation from "@/components/layout/Navigation"
import MobileNav from "@/components/layout/MobileNav"
import Footer from "@/components/layout/Footer"
import Background from "@/components/layout/Background"
import RotatingLogo from "@/components/layout/RotatingLogo"
import AccessibilityToggle from "@/components/ui/AccessibilityToggle"
import { AuthProvider } from "@/contexts/AuthContext"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function ClientLayout({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <AuthProvider>
            <Background />
            <header className="fixed top-0 left-0 w-full p-4 justify-center z-50 hidden md:flex">
                <Navigation />
            </header>

            {/* Lotus logo with branding - top left corner */}
            <Link
                href="/"
                className="fixed top-6 left-6 z-50 opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
                <RotatingLogo size={60} showText={true} />
            </Link>

            {/* Accessibility Toggle - bottom right corner */}
            <AccessibilityToggle />

            <main className="pt-16 p-4 pb-20 md:pb-4">
                {mounted ? (
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                ) : (
                    <div style={{ opacity: 0 }}>{children}</div>
                )}
            </main>

            {/* Footer */}
            <Footer />

            {/* Mobile sticky bottom nav */}
            <MobileNav />
        </AuthProvider>
    )
}