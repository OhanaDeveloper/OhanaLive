"use client"

import Link from "next/link"
import { Heart, Phone, Users } from "lucide-react"

export default function Footer() {
    return (
        <footer className="relative bg-dark-950 border-t-2 border-dark-700 mt-12 pb-20 md:pb-0">
            {/* Mobile: Simplified footer */}
            <div className="md:hidden max-w-7xl mx-auto px-6 py-8">
                <div className="space-y-7 text-center">
                    {/* Tagline */}
                    <div>
                        <h3 className="text-teal font-semibold text-lg mb-2">
                            ʻOhana means family
                        </h3>
                        <p className="text-sm text-gray-400">
                            Nobody gets left behind or forgotten.
                        </p>
                    </div>

                    {/* Support CTA - Prominent */}
                    <div>
                        <Link
                            href="/support"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-purple text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-teal/20 transition-all duration-300 group font-semibold"
                        >
                            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" fill="white" />
                            <span>Support Us</span>
                        </Link>
                        <p className="text-xs text-gray-500 mt-3">
                            Community-funded • Mahalo
                        </p>
                    </div>

                    {/* Three sections, mirroring desktop */}
                    <div className="border-t border-dark-700 pt-6 space-y-6">
                        <div>
                            <h4 className="text-teal text-xs font-semibold uppercase tracking-wider mb-3">Navigate</h4>
                            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-400">
                                <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                                <Link href="/story" className="hover:text-teal transition-colors">Story</Link>
                                <Link href="/toolkit" className="hover:text-teal transition-colors">Toolkit</Link>
                                <Link href="/support" className="hover:text-teal transition-colors">Support</Link>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-teal text-xs font-semibold uppercase tracking-wider mb-3">Get Help</h4>
                            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-400">
                                <Link href="/meeting" className="hover:text-teal transition-colors">Join Meeting</Link>
                                <Link href="/recovery-network" className="hover:text-teal transition-colors">Recovery Network</Link>
                                <a
                                    href="https://988lifeline.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-teal transition-colors"
                                >
                                    988 Lifeline
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Legal + disclaimer */}
                    <div className="pt-4 border-t border-dark-700 text-xs text-gray-500 space-y-2">
                        <Link href="/privacy" className="hover:text-teal transition-colors">Privacy</Link>
                        <p>© {new Date().getFullYear()} Ohana Recovery — Free. Always.</p>
                        <p className="text-gray-600 max-w-xs mx-auto">
                            Peer-led support. Not a substitute for emergency care, medical advice, therapy, or professional treatment.
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop: Full footer */}
            <div className="hidden md:block max-w-7xl mx-auto px-6 py-12">
                {/* Tagline */}
                <div className="text-center mb-10">
                    <h3 className="text-teal font-semibold text-2xl mb-2">
                        ʻOhana means family
                    </h3>
                    <p className="text-gray-400">
                        Nobody gets left behind or forgotten.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-2 gap-16 mb-10">
                    {/* Column 1: Navigate */}
                    <div className="text-center">
                        <h3 className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">Navigate</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/story" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/toolkit" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Toolkit
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Get Help */}
                    <div className="text-center">
                        <h3 className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">Get Help</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-center gap-2">
                                <Users className="w-4 h-4 text-teal flex-shrink-0" />
                                <Link href="/meeting" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Join Meeting (11pm PT)
                                </Link>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Phone className="w-4 h-4 text-purple flex-shrink-0" />
                                <a
                                    href="https://988lifeline.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal transition-colors text-sm"
                                >
                                    Crisis Hotline (988)
                                </a>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Heart className="w-4 h-4 text-purple flex-shrink-0" />
                                <Link href="/recovery-network" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Recovery Network
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Ko-fi Support - Centered */}
                <div className="pt-8 border-t border-dark-700 text-center">
                    <Link
                        href="/support"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-purple text-white px-10 py-4 rounded-xl hover:shadow-lg hover:shadow-teal/20 transition-all duration-300 group font-semibold text-lg"
                    >
                        <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" fill="white" />
                        <span>Support Us</span>
                    </Link>
                    <p className="text-sm text-gray-400 mt-4 mb-6">
                        Community-funded • ~$200/month • Mahalo for your kōkua
                    </p>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-dark-700 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <div>
                        <p>© {new Date().getFullYear()} Ohana Recovery. Free. Always.</p>
                        <p className="mt-1 text-gray-600 max-w-sm">
                            Ohana Recovery is peer-led support and not a substitute for emergency care, medical advice, therapy, or professional treatment.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-teal transition-colors">
                            Privacy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
