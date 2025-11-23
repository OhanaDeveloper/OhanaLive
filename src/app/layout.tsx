import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"
import ClientLayout from "@/components/layout/ClientLayout"

export const metadata: Metadata = {
    title: {
        default: "Ohana Live",
        template: "%s | Ohana Live",
    },
    description:
        "Ohana Live — a minimalist, responsive, and interactive experience for recovery, community, and technology.",
    openGraph: {
        title: "Ohana Live",
        description:
            "A living platform that merges recovery and technology into a seamless, immersive experience.",
        url: "https://ohana-live.vercel.app",
        siteName: "Ohana Live",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Ohana Live",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    themeColor: "#1a0a2e",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-32x32.png",
        apple: "/apple-touch-icon.png",
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-purple-950 text-light antialiased">
        <ClientLayout>{children}</ClientLayout>
        </body>
        </html>
    )
}