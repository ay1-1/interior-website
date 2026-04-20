import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CategoryCardProps {
  name: string
  image: string
  href: string
}

export function CategoryCard({ name, image, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/3] rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="image-hover-zoom object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-2xl font-bold mb-3 text-balance leading-tight">{name}</h3>
        <span className="inline-flex items-center gap-2 text-white/90 text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
          Explore
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  )
}
