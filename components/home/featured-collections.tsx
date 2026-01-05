"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const collections = [
  {
    name: "Terrene Collection",
    description: "Raw textures and organic pigments.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=2070&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    tag: "HANDCRAFTED",
  },
  {
    name: "Linear Stone",
    description: "Architectural precision in basalt.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2080&auto=format&fit=crop",
    tag: "MINIMALIST",
  },
  {
    name: "Glazed Origin",
    description: "Vibrant hues with high-gloss finish.",
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2080&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=2070&auto=format&fit=crop",
    tag: "EDITORIAL",
  },
  {
    name: "Artisan Ceramic",
    description: "Heritage meets contemporary design.",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=2070&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=2070&auto=format&fit=crop",
    tag: "PREMIUM",
  },
  {
    name: "Mosaic Fusion",
    description: "Contemporary patterns with traditional craft.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=2070&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    tag: "MODERN",
  },
  {
    name: "Terra Essence",
    description: "Earthy tones with refined elegance.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2080&auto=format&fit=crop",
    tag: "CLASSIC",
  },
  {
    name: "Luxe Marble",
    description: "Premium marble with stunning veining.",
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2080&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=2070&auto=format&fit=crop",
    tag: "LUXURY",
  },
  {
    name: "Stone Heritage",
    description: "Timeless beauty in natural stone.",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=2070&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=2070&auto=format&fit=crop",
    tag: "HERITAGE",
  },
]

export default function FeaturedCollections() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const itemsPerView = 4

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (collections.length - itemsPerView + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (collections.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (collections.length - itemsPerView + 1)) % (collections.length - itemsPerView + 1))
  }

  const visibleCollections = collections.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-sm uppercase tracking-[0.25em] text-zinc-600 font-semibold mb-3 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              OUR RANGES
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold leading-[1.1] text-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Curated{" "}
              <span className="italic font-light text-zinc-500">Masterpieces</span>
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-900 text-zinc-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-900 text-zinc-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <Link
              href="/collections"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold pb-2 border-b-2 border-zinc-900 hover:border-zinc-600 transition-all duration-300 text-zinc-900"
            >
              VIEW ALL
              <ArrowRight
                size={14}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {visibleCollections.map((collection, index) => (
                <motion.div
                  key={`${collection.name}-${currentIndex + index}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setIsHovered(currentIndex + index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-zinc-100 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 opacity-60 pointer-events-none z-10" 
                         style={{
                           backgroundImage: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                           animation: 'shine 3s infinite'
                         }} 
                    />
                    
                    <motion.div
                      className="absolute inset-0"
                      animate={{ scale: isHovered === currentIndex + index ? 1.1 : 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <AnimatePresence mode="wait">
                        {isHovered === currentIndex + index ? (
                          <motion.div
                            key="hover"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={collection.hoverImage}
                              alt={`${collection.name} detail`}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="default"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={collection.image}
                              alt={collection.name}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                    
                    <motion.div 
                      className="absolute top-4 left-4 z-30"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm text-zinc-900 text-[11px] uppercase tracking-[0.2em] font-semibold shadow-md">
                        {collection.tag}
                      </span>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30"
                    >
                      <div className="flex items-center gap-2 text-white">
                        <span className="text-xs uppercase tracking-wider font-semibold">Explore</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    <h3 className="text-lg font-bold mb-1.5 group-hover:text-zinc-600 transition-colors duration-300 text-zinc-900">
                      {collection.name}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {collection.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: collections.length - itemsPerView + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-zinc-900' : 'w-1.5 bg-zinc-300 hover:bg-zinc-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>
    </section>
  )
}