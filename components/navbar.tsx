"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

import { usePathname } from "next/navigation"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navbar appearance depends on scroll AND current page
  const shouldShowBackground = isScrolled || !isHomePage
  const navbarTextColor = (isScrolled || !isHomePage) ? "text-primary" : "text-white"

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      shouldShowBackground 
        ? "bg-white/90 backdrop-blur-xl border-b border-primary/10 shadow-soft py-3" 
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          {/* Logo - Compact Image Only */}
          <Link href="/" className="flex items-center gap-2 shrink-0 hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Double Crown Interiors"
              width={60}
              height={60}
              className="h-10 w-auto transition-all duration-300"
              priority
            />
            <span className={cn(
              "text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-300",
              navbarTextColor
            )}>
              Double Crown
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[14px] font-bold uppercase tracking-[0.2em] transition-all relative group",
                  shouldShowBackground ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500",
                  !shouldShowBackground && "bg-white"
                )}></span>
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              radius="full"
              size="sm"
              className={cn(
                "gap-2 font-bold uppercase text-[12px] tracking-[0.1em] px-8 h-12 transition-all duration-300",
                shouldShowBackground 
                  ? "bg-primary text-white" 
                  : "bg-white text-primary hover:bg-white/90"
              )}
            >
              <a
                href="https://wa.me/2347031988727?text=Hello%20I%20want%20to%20order%20a%20rug"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "p-2 rounded-full transition-colors",
                    shouldShowBackground ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10"
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] bg-white p-0">
                <SheetHeader className="p-6 border-b border-primary/5">
                  <SheetTitle className="text-left text-primary font-bold">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-bold text-primary hover:bg-primary/5 px-4 py-3 rounded-lg transition-all uppercase tracking-widest"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-6 px-4">
                    <Button asChild radius="full" className="w-full text-[10px] tracking-widest py-4 h-auto uppercase">
                      <a
                        href="https://wa.me/2347031988727?text=Hello%20I%20want%20to%20order%20a%20rug"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
