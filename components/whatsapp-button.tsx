'use client'

import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/2347031988727?text=Hello%20I%20want%20to%20order%20a%20rug"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-sticky flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-soft-lg transition-all hover:scale-110 active:scale-95"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Link>
  )
}
