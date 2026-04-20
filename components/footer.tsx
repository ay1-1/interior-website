import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, MapPin, MessageCircle } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Double Crown Interiors"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">
                  Double Crown
                </span>
                <span className="text-xs text-background/70">
                  Interiors
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Transform your space with our premium collection of luxury rugs, carpets, and runners. Quality craftsmanship you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <a
                  href="tel:+2347031988727"
                  className="text-background/70 hover:text-accent transition-colors text-sm font-medium"
                >
                  +234 703 198 8727
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/2347031988727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-accent transition-colors text-sm font-medium"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-background/70 text-sm font-medium">
                  Zeelux Mall, 1 Alh Arole Close, Ogudu, Kosofe, Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
              Follow Us
            </h3>
            <a
              href="https://www.instagram.com/doublecrown_interiors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-background/70 hover:text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Instagram className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-background/50 uppercase tracking-wider">Instagram</span>
                <span className="text-sm font-medium">@doublecrown_interiors</span>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              &copy; {new Date().getFullYear()} Double Crown Interiors. All rights reserved.
            </p>
            <p className="text-background/50 text-xs">
              Premium Luxury Rugs, Carpets & Runners | Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
