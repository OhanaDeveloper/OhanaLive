"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type AnimationType = "fade" | "slide" | "zoom" | "flip"

interface SectionWrapperProps {
    id?: string
    title?: string
    subtitle?: string
    className?: string
    animation?: AnimationType
    children: ReactNode
}

const variants: Record<AnimationType, any> = {
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slide: {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    },
    zoom: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    flip: {
        hidden: { opacity: 0, rotateY: 90 },
        visible: { opacity: 1, rotateY: 0 },
    },
}

export default function SectionWrapper({
                                           id,
                                           title,
                                           subtitle,
                                           className = "",
                                           animation = "fade",
                                           children,
                                       }: SectionWrapperProps) {
    const variant = variants[animation]

    return (
        <section
            id={id}
            className={`relative flex flex-col items-center justify-center min-h-screen w-full px-6 py-16 text-center ${className}`}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                variants={variant}
                className="max-w-3xl mx-auto space-y-6"
            >
                {title && (
                    <h2 className="text-3xl md:text-5xl font-bold text-accent tracking-tight">
                        {title}
                    </h2>
                )}
                {subtitle && (
                    <p className="text-sm md:text-lg text-gray-300">{subtitle}</p>
                )}

                <div className="mt-10">{children}</div>
            </motion.div>
        </section>
    )
}