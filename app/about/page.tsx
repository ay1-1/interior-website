import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Double Crown Interiors",
  description:
    "Learn about Double Crown Interiors - your trusted source for premium luxury rugs, carpets, and runners in Lagos, Nigeria.",
}

const values = [
  "Premium quality materials and craftsmanship",
  "Curated collection of unique designs",
  "Competitive and transparent pricing",
  "Exceptional customer service",
  "Fast and reliable nationwide delivery",
  "Easy ordering via WhatsApp",
]

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Our Story
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              About Double Crown Interiors
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Welcome to Double Crown Interiors, your premier destination for
                luxury rugs, carpets, and runners in Nigeria. Based in Lagos, we
                have been transforming homes across the nation with our exquisite
                collection of premium floor coverings.
              </p>
              <p>
                Our journey began with a simple mission: to bring world-class
                interior elegance to Nigerian homes. We believe that every space
                deserves the finest touch, and our carefully curated selection
                reflects our commitment to quality and style.
              </p>
              <p>
                At Double Crown Interiors, we understand that a rug is more than
                just a floor covering – it&apos;s a statement piece that brings
                warmth, character, and sophistication to any room. That&apos;s why we
                source only the finest materials and partner with skilled artisans
                to deliver products that exceed expectations.
              </p>
            </div>
          </div>
          <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80"
              alt="Double Crown Interiors showroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-20 mb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="relative aspect-square rounded-2xl overflow-hidden"
              data-aos="fade-up"
            >
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                alt="Premium rug collection"
                fill
                className="object-cover"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <span className="text-primary font-medium text-sm tracking-wide uppercase">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-8">
                What Sets Us Apart
              </h2>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
            Our Location
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Visit our showroom at Zeelux Mall, 1 Alh Arole Close, Ogudu, Kosofe,
            Lagos, Nigeria. Experience our collection firsthand and let our team
            help you find the perfect piece for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-primary hover:bg-gold-dark text-primary-foreground"
            >
              <Link href="/contact">
                Get Directions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href="https://wa.me/2347031988727?text=Hello%20I%20want%20to%20order%20a%20rug"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-background mb-4 text-balance">
              Ready to Explore Our Collection?
            </h2>
            <p className="text-background/70 mb-8 text-lg">
              Browse our premium selection of rugs, carpets, and runners. Find
              the perfect piece to transform your space.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-gold-dark text-primary-foreground text-base px-10"
            >
              <Link href="/products">
                View Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
