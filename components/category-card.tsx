import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  name: string
  image: string
  href: string
  className?: string
}

export function CategoryCard({ name, image, href, className }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block rounded-[32px] overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-white/10",
        className || "aspect-[4/5]"
      )}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="image-hover-zoom object-cover transition-transform duration-700"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      
      {/* Product Count Badge */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
          <span className="text-white text-[12px] font-bold uppercase tracking-widest">12+ Items</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
        <div className="overflow-hidden">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
            {name}
          </h3>
        </div>
        <span className="inline-flex items-center gap-2 text-white/70 text-[12px] font-bold uppercase tracking-[0.2em] group-hover:text-white transition-all duration-300">
          <span>Explore Collection</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
        </span>
      </div>
    </Link>
  )
}
