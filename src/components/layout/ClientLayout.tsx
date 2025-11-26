"use client"

import { useState, useEffect } from "react"
import type { ReactNode } from "react"
import Navigation from "@/components/layout/Navigation"
import Background from "@/components/layout/Background"
import RotatingLogo from "@/components/layout/RotatingLogo"
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
        <>
            <Background />
            <header className="fixed top-0 left-0 w-full p-4 flex justify-center z-50">
                <Navigation />
            </header>

            {/* Lotus logo - top left corner */}
            <Link
                href="/"
                className="fixed top-6 left-6 z-50 opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
                <RotatingLogo size={80} />
            </Link>
            <main className="pt-20 p-6">
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
        </>
    )
}