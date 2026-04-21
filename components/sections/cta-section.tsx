import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-[#fafafa] rounded-[40px] border border-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
            {/* Left Column: Atmospheric Image */}
            <div className="relative h-72 lg:h-auto min-h-[400px]">
              <Image
                src="/images/luxury-rug-hero.jpg"
                alt="Bespoke Interior Design"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>

            {/* Right Column: Refined Content */}
            <div className="p-12 md:p-20 flex flex-col justify-center bg-white">
              <div data-aos="fade-left">
                <span className="text-primary font-bold text-[11px] tracking-[0.5em] uppercase mb-8 block">
                  Exclusive Service
                </span>
                <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-[1] mb-8 tracking-tighter uppercase">
                  Bespoke <br/> <span className="italic text-primary">Consultations</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-md font-light leading-relaxed mb-12">
                  Elevate your sanctuary with our handcrafted collections. 
                  Contact our lead designers for a personalized quote tailored to your architectural vision.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <Button
                    asChild
                    size="lg"
                    radius="full"
                    className="bg-primary hover:bg-primary/95 text-white font-bold uppercase tracking-[0.2em] text-[12px] px-12 h-16 shadow-xl transition-all duration-500 rounded-full"
                  >
                    <a
                      href="https://wa.me/2347031988727?text=Hello%20I%20want%20to%20request%20a%20consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request a Quote
                    </a>
                  </Button>
                  
                  <div className="flex flex-col">
                    <span className="text-foreground font-bold text-[14px]">Direct Line</span>
                    <span className="text-muted-foreground text-[13px]">+234 (0) 703 198 8727</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
