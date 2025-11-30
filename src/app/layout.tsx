import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Ubuntu } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ClientLayout from "@/components/layout/ClientLayout"

const ubuntu = Ubuntu({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ubuntu',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://ohanarecovery.org'),
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
        url: "https://ohanarecovery.org",
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
    icons: {
        icon: [
            { url: "/icon?v=2" },
        ],
        apple: [
            { url: "/apple-icon?v=2" },
        ],
    },
}

export const viewport: Viewport = {
    themeColor: "#0a0a0a",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning className={ubuntu.variable}>
        <body className="min-h-screen bg-black text-gray-100 antialiased font-ubuntu">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        </body>
        </html>
    )
}
