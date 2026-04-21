import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CategoriesSection } from "@/components/sections/categories-section"
import { FeaturedProductsSection } from "@/components/sections/featured-products-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import {
  MessageCircle,
  Truck,
  Shield,
  Star,
  Clock,
  ArrowRight,
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Handcrafted rugs made from the finest materials for lasting elegance.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Fast and reliable delivery to any location across Nigeria.",
  },
  {
    icon: Star,
    title: "Trusted by Customers",
    description: "Hundreds of satisfied customers trust us for their interior needs.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Quick WhatsApp responses and excellent customer support.",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary pt-32 pb-20 md:pt-40 md:pb-24">
        {/* Subtle background texture */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:60px_60px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Content */}
            <div className="text-left" data-aos="fade-right">
              <span className="inline-block !text-white font-bold mb-6 tracking-[0.6em] text-[11px] uppercase opacity-60">
                Premium Boutique Design
              </span>
              <h1 className="!text-white leading-[1.1] mb-8 text-balance font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
                Exquisite Spaces, <br/> <span className="italic opacity-80">Timeless</span> Luxury
              </h1>
              <p className="text-base md:text-lg md:leading-relaxed !text-white mb-10 max-w-md font-light opacity-80 text-pretty">
                Nigeria's premier destination for handcrafted luxury rugs. Elevate your interior with our signature collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  asChild
                  size="lg"
                  radius="full"
                  className="bg-white hover:bg-white/95 text-primary font-bold uppercase tracking-[0.2em] text-[12px] px-12 h-16 shadow-2xl transition-all duration-500"
                >
                  <Link href="/products">
                    Explore Now
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  radius="full"
                  className="border-white/20 bg-transparent hover:bg-white/10 text-white font-bold uppercase tracking-[0.2em] text-[12px] px-12 h-16 border-2 transition-all duration-500"
                >
                  <a
                    href="https://wa.me/2347031988727?text=Hello%20I%20want%20to%20order%20a%20rug"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get in Touch
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column: 3-Image Static Stack */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="hero-card-stack">
                <div className="hero-card">
                  <Image
                    src="/images/luxury-rug-hero.jpg"
                    alt="Luxury Interior 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="hero-card">
                  <Image
                    src="/images/living-room-rug.jpg"
                    alt="Luxury Interior 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="hero-card">
                  <Image
                    src="/images/bedroom-rug.jpg"
                    alt="Luxury Interior 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Bar (Brand Details Below Hero) */}
      <section className="bg-white border-b border-primary/5 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4 group">
                <div className="p-3 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-primary/60 uppercase tracking-[0.2em]">{feature.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CategoriesSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
