"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"
import { cn } from "@/lib/utils"

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
    <div className="min-h-screen bg-white">
      {/* Editorial Header */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:60px_60px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl" data-aos="fade-right">
            <span className="text-white font-bold text-[11px] tracking-[0.5em] uppercase mb-6 block border-l-2 border-white/20 pl-4 opacity-70">
              Signature Collections
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1] mb-8 tracking-tighter uppercase">
              Curated <br/> <span className="italic text-white/80">Excellence</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl text-pretty">
              Discover our masterfully handcrafted rugs, where traditional artistry meets contemporary elegance.
              Each piece is a testament to timeless luxury.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -translate-y-12 relative z-20">
        {/* Category Filter - High End Tab Style */}
        <div 
          className="bg-white/80 backdrop-blur-2xl border border-primary/5 p-2 rounded-full shadow-soft-xl flex overflow-x-auto no-scrollbar gap-1 mb-16 scroll-smooth"
          data-aos="fade-up"
        >
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap",
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "text-primary/40 hover:text-primary hover:bg-primary/5"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid - 3 Columns for larger appearance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {filteredProducts.map((product, index) => (
            <div key={product.id} data-aos="fade-up" data-aos-delay={index * 50}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-32 bg-secondary/10 rounded-[40px] mb-24 border border-dashed border-primary/10">
            <p className="text-primary/40 text-sm font-bold uppercase tracking-widest">
              No pieces found in this category.
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
      <div className="min-h-screen bg-white pt-48 flex justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-primary/10 border-t-primary animate-spin" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Loading Collection</span>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
