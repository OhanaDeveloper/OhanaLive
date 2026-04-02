"use client"

import Link from "next/link"
import { Heart, Phone, FileText, Users, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="relative bg-dark-950 border-t-2 border-dark-700 mt-12 pb-20 md:pb-0">
            {/* Mobile: Simplified footer */}
            <div className="md:hidden max-w-7xl mx-auto px-6 py-8">
                <div className="text-center space-y-6">
                    {/* Tagline */}
                    <div>
                        <h3 className="text-teal font-semibold text-lg mb-2">
                            ʻOhana means family
                        </h3>
                        <p className="text-sm text-gray-400">
                            Nobody gets left behind or forgotten.
                        </p>
                    </div>

                    {/* Ko-fi Support - Prominent */}
                    <div className="py-6">
                        <a
                            href="https://ko-fi.com/ohanarecovery"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-purple text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-teal/20 transition-all duration-300 group font-semibold"
                        >
                            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" fill="white" />
                            <span>Support Us</span>
                        </a>
                        <p className="text-xs text-gray-500 mt-3">
                            Community-funded • Mahalo 🌺
                        </p>
                    </div>

                    {/* Quick links - compact grid */}
                    <div className="border-t border-dark-700 pt-6">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-xs mx-auto">
                            <Link href="/about" className="text-sm text-gray-400 hover:text-teal transition-colors text-left">
                                About
                            </Link>
                            <Link href="/resources" className="text-sm text-gray-400 hover:text-teal transition-colors text-right">
                                Resources
                            </Link>
                            <Link href="/story" className="text-sm text-gray-400 hover:text-teal transition-colors text-left">
                                Story
                            </Link>
                            <Link href="/forms/contact" className="text-sm text-gray-400 hover:text-teal transition-colors text-right">
                                Contact
                            </Link>
                            <Link href="/crew" className="text-sm text-gray-400 hover:text-teal transition-colors text-left">
                                Mālama
                            </Link>
                            <Link href="/privacy" className="text-sm text-gray-400 hover:text-teal transition-colors text-right">
                                Privacy
                            </Link>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-4 text-xs text-gray-500">
                        © {new Date().getFullYear()} Ohana Recovery
                        <br />
                        Free. Always.
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

                {/* Three Column Layout */}
                <div className="grid grid-cols-3 gap-12 mb-10">
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
                                <Link href="/about" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/story" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/crew" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Mālama Crew
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="/give" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Give
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
                                <Link href="/#meeting" className="text-gray-400 hover:text-teal transition-colors text-sm">
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
                                <Link href="/support" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Recovery Network
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Get Involved */}
                    <div className="text-center">
                        <h3 className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">Get Involved</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/forms/volunteer" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Become Mālama
                                </Link>
                            </li>
                            <li>
                                <Link href="/forms/story" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Share Your Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/forms/contact" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Ko-fi Support - Centered */}
                <div className="pt-8 border-t border-dark-700 text-center">
                    <a
                        href="https://ko-fi.com/ohanarecovery"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-purple text-white px-10 py-4 rounded-xl hover:shadow-lg hover:shadow-teal/20 transition-all duration-300 group font-semibold text-lg"
                    >
                        <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" fill="white" />
                        <span>Support Us</span>
                    </a>
                    <p className="text-sm text-gray-400 mt-4 mb-6">
                        Community-funded • ~$200/month • Mahalo for your kōkua 🌺
                    </p>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-dark-700 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>
                        © {new Date().getFullYear()} Ohana Recovery. Free. Always.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-teal transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-teal transition-colors">
                            Terms
                        </Link>
                        <Link href="/independence" className="hover:text-teal transition-colors">
                            Independence
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
