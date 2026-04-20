import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Star } from "lucide-react"

interface ProductCardProps {
  name: string
  price: string
  size: string
  image: string
  category?: string
}

export function ProductCard({ name, price, size, image, category }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello, I want to order the ${name} (${size}) - ${price}`
  )
  const whatsappUrl = `https://wa.me/2347031988727?text=${whatsappMessage}`

  return (
    <div
      className="product-card group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg border border-border transition-all duration-300 flex flex-col h-full"
      data-aos="zoom-in"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="image-hover-zoom object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {category && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
            {category}
          </span>
        )}
        <div className="absolute top-4 right-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
          ))}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-foreground text-lg mb-2 line-clamp-2 leading-tight">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 font-medium">{size}</p>
        <div className="flex items-baseline gap-2 mb-6 mt-auto">
          <p className="text-primary font-bold text-2xl">{price}</p>
        </div>
        <Button
          asChild
          className="w-full bg-primary hover:bg-[#246332] text-primary-foreground gap-2 font-semibold py-3 h-auto rounded-lg shadow-sm hover:shadow-md"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            Order Now
          </a>
        </Button>
      </div>
    </div>
  )
}
