"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

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

// Duplicate collections for infinite loop
const infiniteCollections = [...collections, ...collections, ...collections]

export default function FeaturedCollections() {
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1600px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6 border-b border-zinc-200 pb-8">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4 border-b border-zinc-900 pb-1.5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Featured Collections
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-zinc-900 leading-[1.1] tracking-tight mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Architectural <span className="text-zinc-400">Excellence</span>
            </motion.h2>
            <motion.p
              className="text-sm text-zinc-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Premium ceramic and stone tiles crafted for discerning architects and designers worldwide.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/collections"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold">Explore All</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Infinite Marquee Carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: isPaused ? undefined : [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {infiniteCollections.map((collection, index) => (
              <motion.div
                key={`${collection.name}-${index}`}
                className="group cursor-pointer flex-shrink-0"
                style={{ width: '280px' }}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-zinc-100">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ 
                      scale: isHovered === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {isHovered === index ? (
                      <Image
                        src={collection.hoverImage}
                        alt={`${collection.name} detail`}
                        fill
                        className="object-cover"
                        sizes="280px"
                      />
                    ) : (
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        className="object-cover"
                        sizes="280px"
                      />
                    )}
                  </motion.div>
                  
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1.5 bg-white text-zinc-900 text-[8px] uppercase tracking-[0.25em] font-black">
                      {collection.tag}
                    </span>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100"
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ 
                      x: isHovered === index ? 0 : -15,
                      opacity: isHovered === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-10 h-10 bg-white flex items-center justify-center">
                      <ArrowRight size={18} className="text-zinc-900" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Text Content */}
                <div>
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-zinc-900 mb-1.5 tracking-tight group-hover:text-zinc-600 transition-colors duration-300">
                      {collection.name}
                    </h3>
                    <div className="w-8 h-0.5 bg-zinc-900 group-hover:w-full transition-all duration-500" />
                  </div>
                  <p className="text-zinc-600 text-xs leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}