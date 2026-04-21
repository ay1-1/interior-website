import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { AOSProvider } from '@/components/aos-provider'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Double Crown Interiors | Premium Luxury Rugs, Carpets & Runners',
  description: 'Transform your space with luxury rugs, carpets & runners. Premium quality with fast nationwide delivery across Nigeria. Shop our collection today.',
  keywords: ['luxury rugs', 'carpets', 'runners', 'interior decor', 'Lagos', 'Nigeria', 'home decor'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d7a3e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} font-sans bg-background`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <AOSProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AOSProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
