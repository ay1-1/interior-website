import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function FeaturedProductsSection() {
  const featuredProducts = products.slice(0, 3)

  return (
    <section className="py-20 sm:py-24 bg-white relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-12 mb-16 sm:mb-24">
          <div data-aos="fade-right">
            <span className="text-primary font-bold text-[12px] tracking-[0.5em] uppercase mb-6 block">
              Signature Pieces
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tighter">
              Our Best <br/> <span className="italic text-primary">Sellers</span>
            </h2>
          </div>
          <Button
            asChild
            radius="full"
            variant="outline"
            className="border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white w-fit px-12 py-7 h-auto transition-all duration-500 rounded-full"
            data-aos="fade-left"
          >
            <Link href="/products" className="text-[11px] font-bold tracking-[0.2em] uppercase">
              View All Pieces
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {featuredProducts.map((product, index) => (
            <div key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
