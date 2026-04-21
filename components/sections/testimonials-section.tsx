import { TestimonialCard } from "@/components/testimonial-card"
import { testimonials } from "@/lib/products"

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 max-w-2xl mx-auto" data-aos="fade-up">
          <span className="text-primary font-bold text-[12px] tracking-[0.4em] uppercase mb-4 block">
            Client Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
            Trusted by Modern <span className="italic text-primary">Esthetes</span>
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Read what our clients have to say about their experience upgrading their interiors with Double Crown.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name} 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
              className={index === 1 ? "md:translate-y-8" : ""} // Staggered masonry effect
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
