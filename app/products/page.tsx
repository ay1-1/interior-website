"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"

function ProductsContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "All"
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products
    }
    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  const allCategories = ["All", ...categories.map((c) => c.slug)]

  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Our Collection
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Premium Rugs & Carpets
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Browse our exclusive collection of luxury rugs, carpets, and runners.
            Each piece is carefully selected for quality and elegance.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-primary hover:bg-gold-dark text-primary-foreground"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Our Collection
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Premium Rugs & Carpets
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse text-muted-foreground">Loading products...</div>
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
