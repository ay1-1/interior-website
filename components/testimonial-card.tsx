import { Star, Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  review: string
  rating: number
}

export function TestimonialCard({ name, location, review, rating }: TestimonialCardProps) {
  return (
    <div
      className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
      data-aos="fade-up"
    >
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "fill-accent text-accent" : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      <div className="mb-6 relative">
        <Quote className="w-8 h-8 text-accent/15 mb-3" />
        <p className="text-foreground leading-relaxed font-medium italic">{`"${review}"`}</p>
      </div>
      <div className="pt-6 border-t border-border">
        <p className="font-semibold text-foreground text-base">{name}</p>
        <p className="text-sm text-muted-foreground font-medium">{location}</p>
      </div>
    </div>
  )
}
