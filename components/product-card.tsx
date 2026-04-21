import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  size: string
  image: string
  category?: string
}

export function ProductCard({ name, size, image, category }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello, I want to order the ${name} (${size})`
  )
  const whatsappUrl = `https://wa.me/2347031988727?text=${whatsappMessage}`

  return (
    <div
      className="group relative bg-[#1e4d2b] rounded-[40px] overflow-hidden border-none transition-all duration-700 flex flex-col aspect-[4/5] hover:-translate-y-2 hover:shadow-soft-xl"
      data-aos="fade-up"
    >
      {/* Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={name}
          fill
          className="image-hover-zoom object-cover transition-all duration-1000 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {category && (
          <div className="absolute top-6 left-6 z-10">
            <span className="bg-white text-primary text-[9px] font-bold px-4 py-2 uppercase tracking-widest rounded-full">
              {category}
            </span>
          </div>
        )}
      </div>
      
      {/* Hover Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-8 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-[#1e4d2b]/60 backdrop-blur-sm">
        <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">{size}</p>
        <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-8 text-balance uppercase">
          {name}
        </h3>
        
        <Button
          asChild
          radius="full"
          className="bg-white text-primary hover:bg-white/90 font-bold uppercase text-[12px] tracking-[0.3em] px-10 py-6 h-auto transition-all duration-500 rounded-full"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Order Now
          </a>
        </Button>
      </div>
    </div>
  )
}
