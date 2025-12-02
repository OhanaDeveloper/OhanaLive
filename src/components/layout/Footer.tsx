"use client"

import Link from "next/link"
import { Heart, Phone, FileText, Users, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="relative bg-dark-950 border-t-2 border-dark-700 mt-12 pb-20 md:pb-0">
            {/* Mobile: Simplified footer */}
            <div className="md:hidden max-w-7xl mx-auto px-6 py-6">
                <div className="text-center space-y-4">
                    <h3 className="text-teal font-semibold text-lg">
                        ʻOhana means family
                    </h3>
                    <p className="text-sm text-gray-400 max-w-sm mx-auto">
                        Nobody gets left behind or forgotten.
                    </p>

                    {/* Quick links - horizontal */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Link href="/about" className="text-xs text-gray-400 hover:text-teal transition-colors">
                            About
                        </Link>
                        <Link href="/story" className="text-xs text-gray-400 hover:text-teal transition-colors">
                            Story
                        </Link>
                        <Link href="/crew" className="text-xs text-gray-400 hover:text-teal transition-colors">
                            Mālama
                        </Link>
                        <Link href="/resources" className="text-xs text-gray-400 hover:text-teal transition-colors">
                            Resources
                        </Link>
                        <Link href="/forms/contact" className="text-xs text-gray-400 hover:text-teal transition-colors">
                            Contact
                        </Link>
                    </div>

                    <div className="pt-6 border-t border-dark-700">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Ohana Recovery. Free. Always.
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop: Full footer */}
            <div className="hidden md:block max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-4 gap-8">
                    {/* Column 1: Navigation */}
                    <div>
                        <h3 className="text-teal font-semibold text-lg mb-4">Navigate</h3>
                        <ul className="space-y-3">
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
                                    Mālama
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: A Soft Place to Fall */}
                    <div>
                        <h3 className="text-teal font-semibold text-lg mb-4">A Soft Place to Fall</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Users className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                                <Link href="/#meeting" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Join a Meeting
                                </Link>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="w-4 h-4 text-purple mt-0.5 flex-shrink-0" />
                                <a
                                    href="https://988lifeline.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal transition-colors text-sm"
                                >
                                    Crisis Hotlines
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                                <Link href="/resources" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Recovery Tools
                                </Link>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                                <Link href="/forms/contact" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Get Involved */}
                    <div>
                        <h3 className="text-teal font-semibold text-lg mb-4">Get Involved</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Users className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                                <Link href="/forms/volunteer" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Become Mālama
                                </Link>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                                <Link href="/forms/story" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Share Your Story
                                </Link>
                            </li>
                            <li className="flex items-start gap-2">
                                <Heart className="w-4 h-4 text-purple mt-0.5 flex-shrink-0" />
                                <Link href="/support" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Recovery Network
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal/Social */}
                    <div>
                        <h3 className="text-teal font-semibold text-lg mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/independence" className="text-gray-400 hover:text-teal transition-colors text-sm">
                                    Our Independence
                                </Link>
                            </li>
                        </ul>

                        {/* Social links placeholder */}
                        <div className="mt-6">
                            <p className="text-xs text-gray-500">
                                Social links coming soon
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 pt-6 border-t border-dark-700 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Ohana Recovery. Free. Always.
                    </p>
                </div>
            </div>
        </footer>
    )
}
