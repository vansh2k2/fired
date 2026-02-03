'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const collections = [
  {
    id: 1,
    name: 'Porto Venere',
    defaultImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80',
    description: 'Classic Italian terracotta textures',
    color: 'from-amber-900/20 to-orange-800/20'
  },
  {
    id: 2,
    name: 'Barceloneta',
    defaultImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description: 'Mediterranean coastal elegance',
    color: 'from-blue-900/20 to-cyan-800/20'
  },
  {
    id: 3,
    name: 'Crete',
    defaultImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    description: 'Aegean minimalist aesthetics',
    color: 'from-stone-900/20 to-amber-800/20'
  },
  {
    id: 4,
    name: 'Dolomiti',
    defaultImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600566752734-bd1a20394012?w=800&q=80',
    description: 'Alpine inspired natural stone',
    color: 'from-slate-900/20 to-gray-800/20'
  },
  {
    id: 5,
    name: 'Santorini',
    defaultImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    description: 'White-washed island charm',
    color: 'from-sky-900/20 to-blue-800/20'
  },
  {
    id: 6,
    name: 'Amalfi',
    defaultImage: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600566752229-250ed79c35cc?w=800&q=80',
    description: 'Luxurious coastal sophistication',
    color: 'from-emerald-900/20 to-teal-800/20'
  },
  {
    id: 7,
    name: 'Mykonos',
    defaultImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    description: 'Greek island sophistication',
    color: 'from-blue-900/20 to-white/20'
  },
  {
    id: 8,
    name: 'Tuscany',
    defaultImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    description: 'Rustic Italian countryside',
    color: 'from-amber-800/20 to-yellow-700/20'
  }
]

export function CollectionsInDevelopment() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Items to show based on screen size
  const itemsToShow = isMobile ? 2 : 4

  // Auto-rotate collections
  useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = collections.length - itemsToShow
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 4000)
    
    return () => clearInterval(timer)
  }, [isPaused, itemsToShow])

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = collections.length - itemsToShow
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = collections.length - itemsToShow
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  const visibleCollections = collections.slice(currentIndex, currentIndex + itemsToShow)

  return (
    <section 
      className="py-16 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-[1500px] relative z-10">
        {/* Header - Styled like About Preview */}
        <motion.div 
          className="mb-12 border-b border-zinc-200 pb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-center">
            <motion.span 
              className="inline-block text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold border-b border-zinc-900 pb-2 mb-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Coming Soon
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-zinc-900 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Collections In{" "}
              <span className="text-zinc-400 italic font-light">Development</span>
            </motion.h2>
            
            <motion.p 
              className="text-sm text-zinc-600 leading-relaxed mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              These collections are not yet in production. At Firedclay Originals our creativity is always in motion.
            </motion.p>
          </div>
        </motion.div>

        {/* Collections Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute left-0 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-zinc-900 text-zinc-900 hover:text-white shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110 border border-zinc-200"
            aria-label="Previous collections"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="hidden lg:flex absolute right-0 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-zinc-900 text-zinc-900 hover:text-white shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110 border border-zinc-200"
            aria-label="Next collections"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Collections Grid - Tile Shape */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {visibleCollections.map((collection, index) => (
                <motion.div
                  key={`${collection.id}-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredId(collection.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Tile Card */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    {/* Image Layer with Change on Hover */}
                    <div className="relative w-full h-full">
                      {/* Default Image */}
                      <Image
                        src={collection.defaultImage}
                        alt={collection.name}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          hoveredId === collection.id ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                        }`}
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      
                      {/* Hover Image */}
                      <Image
                        src={collection.hoverImage}
                        alt={`${collection.name} alternate`}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          hoveredId === collection.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-40 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4">
                      {/* Collection Name */}
                      <motion.h3 
                        className="text-white text-lg md:text-xl font-light tracking-wide mb-1.5 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {collection.name}
                      </motion.h3>
                      
                      {/* Description - Shows on Hover */}
                      <motion.p 
                        className={`text-white/90 text-xs md:text-sm font-light leading-relaxed transition-all duration-500 ${
                          hoveredId === collection.id 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                      >
                        {collection.description}
                      </motion.p>
                      
                      {/* Decorative Line */}
                      <motion.div 
                        className={`mt-3 h-[1px] bg-white/50 transition-all duration-500 ${
                          hoveredId === collection.id ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>

                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-transparent border-r-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2.5 mt-10">
          {Array.from({ length: collections.length - itemsToShow + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'bg-zinc-900 w-12' 
                  : 'bg-zinc-300 hover:bg-zinc-400 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}