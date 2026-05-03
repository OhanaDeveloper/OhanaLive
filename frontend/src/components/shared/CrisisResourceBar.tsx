"use client"

import { Phone, MessageCircle } from "lucide-react"

export default function CrisisResourceBar() {
  return (
    <div className="fixed left-1/2 top-2 z-[70] -translate-x-1/2 px-3">
      <div className="flex items-center gap-2 rounded-full border border-dark-700 bg-black/80 px-3 py-1.5 text-[11px] font-medium text-gray-300 shadow-lg backdrop-blur-md sm:text-xs">
        <span className="hidden text-gray-500 sm:inline">Crisis?</span>
        <a href="tel:988" className="inline-flex items-center gap-1 text-gray-200 hover:text-teal">
          <Phone className="h-3 w-3" aria-hidden="true" />
          Call 988
        </a>
        <span className="text-gray-600">or</span>
        <a href="sms:741741&body=HOME" className="inline-flex items-center gap-1 text-gray-200 hover:text-teal">
          <MessageCircle className="h-3 w-3" aria-hidden="true" />
          Text HOME to 741741
        </a>
      </div>
    </div>
  )
}

