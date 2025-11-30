"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import clsx from "clsx"

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Journey", href: "/story" },
    { label: "Guides", href: "/crew" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
]

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav className="flex gap-6 text-sm md:text-base font-medium">
            {navItems.map(({ label, href }) => (
                <Link key={href} href={href} className="relative">
          <span
              className={clsx(
                  "transition-colors duration-300 hover:text-teal",
                  pathname === href ? "text-teal" : "text-light"
              )}
          >
            {label}
          </span>
                    {pathname === href && (
                        <motion.div
                            layoutId="underline"
                            className="absolute left-0 -bottom-1 h-[2px] w-full bg-teal"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                </Link>
            ))}
        </nav>
    )
}