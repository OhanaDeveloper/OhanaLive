"use client"

import type { ReactNode } from "react"
import Navigation from "@/components/layout/Navigation"
import Background from "@/components/layout/Background"
import RotatingLogo from "@/components/layout/RotatingLogo"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function ClientLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname()

    return (
        <>
            <Background />
            <header className="fixed top-0 left-0 w-full p-4 flex justify-center z-50">
                <Navigation />
            </header>

            {/* Subtle rotating logo in bottom left corner */}
            <Link
                href="/"
                className="fixed bottom-6 left-6 z-40 opacity-60 hover:opacity-90 transition-opacity duration-500"
            >
                <RotatingLogo size={64} />
            </Link>
            <main className="pt-20 p-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
        </>
    )
}