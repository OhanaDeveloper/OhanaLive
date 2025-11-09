"use client"

import Navigation from "@/components/layout/Navigation"
import Background from "@/components/layout/Background"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <>
            <Background />
            <header className="fixed top-0 left-0 w-full p-4 flex justify-center z-50">
                <Navigation />
            </header>
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