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
      className="bg-white border border-primary/5 rounded-[32px] p-10 shadow-soft hover:shadow-soft-lg transition-all duration-500 group relative"
      data-aos="fade-up"
    >
      <div className="flex gap-1 mb-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      <div className="mb-8 relative z-10">
        <Quote className="w-10 h-10 text-primary/10 absolute -top-4 -left-4 -z-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
        <p className="text-foreground leading-relaxed font-medium italic">{`"${review}"`}</p>
      </div>
      <div className="pt-6 border-t border-border">
        <p className="font-semibold text-foreground text-base">{name}</p>
        <p className="text-sm text-muted-foreground font-medium">{location}</p>
      </div>
    </div>
  )
}
