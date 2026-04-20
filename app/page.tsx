import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { CategoryCard } from "@/components/category-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { products, categories, testimonials } from "@/lib/products"
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
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background to-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/luxury-rug-hero.jpg"
            alt="Luxury living room with premium rug"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="inline-block text-primary font-semibold mb-6 tracking-widest text-sm uppercase">
              Double Crown Interiors
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 text-balance">
              Transform Your Space with Luxury Rugs & Carpets
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl">
              Discover our exquisite collection of premium handcrafted rugs, carpets, and runners. Elevate your home with timeless elegance and unmatched quality. Fast nationwide delivery across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-[#246332] text-primary-foreground text-base px-8 py-6 h-auto shadow-soft-lg hover:shadow-lg"
              >
                <Link href="/products" className="gap-2">
                  Shop Collection
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-white bg-white/10 hover:bg-white hover:text-foreground text-white text-base px-8 py-6 h-auto"
              >
                <a
                  href="https://wa.me/2347031988727?text=Hello%20I%20want%20to%20order%20a%20rug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20" data-aos="fade-up">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Our Collection
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4">
              Shop by Category
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={category.slug} data-aos="zoom-in" data-aos-delay={index * 50}>
                <CategoryCard
                  name={category.name}
                  image={category.image}
                  href={`/products?category=${encodeURIComponent(category.slug)}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16 sm:mb-20">
            <div data-aos="fade-up">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                Best Sellers
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4">
                Featured Products
              </h2>
            </div>
            <Button
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit px-8 py-6 h-auto gap-2 shadow-sm hover:shadow-md"
              data-aos="fade-up"
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} data-aos="zoom-in" data-aos-delay={index * 100}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 sm:py-32 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20" data-aos="fade-up">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Why Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4">
              Why Choose Double Crown Interiors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-8 bg-background rounded-lg shadow-soft hover:shadow-soft-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20" data-aos="fade-up">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} data-aos="fade-up" data-aos-delay={index * 100}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-background mb-6 text-balance leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-background/70 mb-10 text-lg leading-relaxed">
              Get in touch with us today and let us help you find the perfect rug for your home. Experience our premium collection and fast nationwide delivery.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-[#246332] text-primary-foreground text-base px-10 py-6 h-auto shadow-soft-lg hover:shadow-lg gap-2"
            >
              <a
                href="https://wa.me/2347031988727?text=Hello%20I%20want%20to%20order%20a%20rug"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Order Now via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
