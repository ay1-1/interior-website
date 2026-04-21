import { categories } from "@/lib/products"
import { CategoryCard } from "@/components/category-card"

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 sm:mb-24">
          <div data-aos="fade-right" className="max-w-2xl">
            <span className="text-primary font-bold text-[12px] tracking-[0.5em] uppercase mb-6 block">
              Curated Collections
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[0.9] tracking-tighter">
              Explore By <br/> 
              <span className="italic text-primary relative">
                Category
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/10 rounded-full" />
              </span>
            </h2>
          </div>
          <div className="md:text-right" data-aos="fade-left" data-aos-delay="100">
            <p className="text-muted-foreground text-sm max-w-[280px] font-light leading-relaxed mb-6 md:ml-auto">
              Our masterfully designed collection categorized to help you find the perfect piece for your sanctuary.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Item 1: Large Featured (Living Room) */}
          <div className="md:col-span-8 md:row-span-2" data-aos="fade-right">
            <CategoryCard
              name={categories[0].name}
              image={categories[0].image}
              href={`/products?category=${encodeURIComponent(categories[0].slug)}`}
              className="h-full w-full"
            />
          </div>

          {/* Item 2: Square/Tall (Bedroom) */}
          <div className="md:col-span-4 md:row-span-1" data-aos="fade-left" data-aos-delay="100">
            <CategoryCard
              name={categories[1].name}
              image={categories[1].image}
              href={`/products?category=${encodeURIComponent(categories[1].slug)}`}
              className="h-full w-full"
            />
          </div>

          {/* Item 3: Wide/Standard (Center Rugs) */}
          <div className="md:col-span-4 md:row-span-1" data-aos="fade-up" data-aos-delay="200">
            <CategoryCard
              name={categories[2].name}
              image={categories[2].image}
              href={`/products?category=${encodeURIComponent(categories[2].slug)}`}
              className="h-full w-full"
            />
          </div>

          {/* Item 4: Long Banner (Runners) */}
          <div className="md:col-span-12 md:row-span-1" data-aos="fade-up" data-aos-delay="300">
            <CategoryCard
              name={categories[3].name}
              image={categories[3].image}
              href={`/products?category=${encodeURIComponent(categories[3].slug)}`}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
