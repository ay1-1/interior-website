import { Button } from "@/components/ui/button"
import { Phone, MapPin, MessageCircle, Instagram, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Double Crown Interiors",
  description:
    "Get in touch with Double Crown Interiors. Visit our showroom in Lagos or order via WhatsApp for premium rugs, carpets, and runners.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    content: "+234 703 198 8727",
    href: "tel:+2347031988727",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Zeelux Mall, 1 Alh Arole Close, Ogudu, Kosofe, Lagos, Nigeria",
    href: "https://maps.google.com/?q=Zeelux+Mall+Ogudu+Lagos+Nigeria",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@doublecrown_interiors",
    href: "https://www.instagram.com/doublecrown_interiors",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Sat: 9:00 AM - 7:00 PM",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Have questions about our products? Ready to place an order? We&apos;d love
            to hear from you. Reach out via WhatsApp for the fastest response!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-xl"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <h3 className="font-semibold text-foreground mb-2">
                Order via WhatsApp
              </h3>
              <p className="text-muted-foreground mb-4">
                The fastest way to order! Send us a message on WhatsApp and
                we&apos;ll respond immediately.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-gold-dark text-primary-foreground w-full sm:w-auto"
              >
                <a
                  href="https://wa.me/2347031988727?text=Hello%20I%20want%20to%20order%20a%20rug"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Find Us
            </h2>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.461453668529!2d3.3917!3d6.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzUnMDAuMCJOIDPCsDIzJzMwLjEiRQ!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Double Crown Interiors Location"
                className="absolute inset-0"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Located at Zeelux Mall, Ogudu, Lagos. Easily accessible with
              ample parking available.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-secondary rounded-2xl p-8 md:p-12" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                How do I place an order?
              </h3>
              <p className="text-muted-foreground text-sm">
                Simply browse our products and click the &quot;Order via WhatsApp&quot;
                button. We&apos;ll respond immediately to confirm your order and
                arrange delivery.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Do you deliver nationwide?
              </h3>
              <p className="text-muted-foreground text-sm">
                Yes! We deliver to all states in Nigeria. Delivery times and
                costs vary by location. Contact us for specific details.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Can I visit your showroom?
              </h3>
              <p className="text-muted-foreground text-sm">
                Absolutely! Visit us at Zeelux Mall in Ogudu, Lagos. Our team
                will be happy to help you find the perfect rug.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-muted-foreground text-sm">
                We accept bank transfers, cash payments, and mobile payments.
                Payment details will be provided when you place your order.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
