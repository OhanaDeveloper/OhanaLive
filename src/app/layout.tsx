import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Ubuntu } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
        default: "Ohana Recovery",
        template: "%s | Ohana Recovery",
    },
    description:
        "Ohana Recovery: a safe space for connection, healing, and growth in recovery. Join our nightly meetings at 8pm PT.",
    openGraph: {
        title: "Ohana Recovery",
        description:
            "A safe space for connection, healing, and growth in recovery. Join our nightly meetings at 8pm PT.",
        url: "https://ohanarecovery.org",
        siteName: "Ohana Recovery",
        images: [
            {
                url: "/lotus-logo.png",
                width: 1200,
                height: 630,
                alt: "Ohana Recovery - Lotus Logo",
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
        <SpeedInsights />
        </body>
        </html>
    )
}
