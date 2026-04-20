export interface Product {
  id: string
  name: string
  price: string
  size: string
  image: string
  category: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Persian Rug",
    price: "₦185,000",
    size: "200cm x 300cm",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80",
    category: "Living Room",
  },
  {
    id: "2",
    name: "Modern Geometric Center Rug",
    price: "₦95,000",
    size: "150cm x 200cm",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    category: "Center Rugs",
  },
  {
    id: "3",
    name: "Luxury Shaggy Bedroom Rug",
    price: "₦78,000",
    size: "120cm x 180cm",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    category: "Bedroom",
  },
  {
    id: "4",
    name: "Elegant Hallway Runner",
    price: "₦65,000",
    size: "80cm x 300cm",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    category: "Runners",
  },
  {
    id: "5",
    name: "Traditional Oriental Rug",
    price: "₦220,000",
    size: "250cm x 350cm",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80",
    category: "Living Room",
  },
  {
    id: "6",
    name: "Minimalist Gray Center Rug",
    price: "₦85,000",
    size: "160cm x 230cm",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
    category: "Center Rugs",
  },
  {
    id: "7",
    name: "Plush Velvet Bedroom Carpet",
    price: "₦120,000",
    size: "180cm x 250cm",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
    category: "Bedroom",
  },
  {
    id: "8",
    name: "Classic Wool Runner",
    price: "₦75,000",
    size: "70cm x 250cm",
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=800&q=80",
    category: "Runners",
  },
  {
    id: "9",
    name: "Bohemian Area Rug",
    price: "₦145,000",
    size: "200cm x 280cm",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    category: "Living Room",
  },
  {
    id: "10",
    name: "Abstract Art Center Rug",
    price: "₦110,000",
    size: "170cm x 240cm",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
    category: "Center Rugs",
  },
  {
    id: "11",
    name: "Soft Touch Bedroom Mat",
    price: "₦45,000",
    size: "100cm x 150cm",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    category: "Bedroom",
  },
  {
    id: "12",
    name: "Moroccan Pattern Runner",
    price: "₦88,000",
    size: "80cm x 320cm",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    category: "Runners",
  },
]

export const categories = [
  {
    name: "Living Room Rugs",
    slug: "Living Room",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    name: "Bedroom Rugs",
    slug: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    name: "Center Rugs",
    slug: "Center Rugs",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    name: "Runners",
    slug: "Runners",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
]

export const testimonials = [
  {
    name: "Chioma Adeyemi",
    location: "Lagos, Nigeria",
    review: "The quality of the rug I ordered exceeded my expectations. My living room looks absolutely stunning now. Delivery was also super fast!",
    rating: 5,
  },
  {
    name: "Emeka Okonkwo",
    location: "Abuja, Nigeria",
    review: "Double Crown Interiors delivered exactly what I wanted. The customer service was excellent and they helped me choose the perfect carpet for my space.",
    rating: 5,
  },
  {
    name: "Aisha Mohammed",
    location: "Port Harcourt, Nigeria",
    review: "I've ordered twice from them and both times the quality has been amazing. Their rugs are truly premium and worth every naira.",
    rating: 5,
  },
]
