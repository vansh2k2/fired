'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const collections = [
  {
    id: 1,
    name: 'Porto Venere',
    defaultImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80',
    description: 'Classic Italian terracotta textures',
    origin: 'Italy',
    tag: 'Terracotta',
  },
  {
    id: 2,
    name: 'Barceloneta',
    defaultImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description: 'Mediterranean coastal elegance',
    origin: 'Spain',
    tag: 'Stone',
  },
  {
    id: 3,
    name: 'Crete',
    defaultImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    description: 'Aegean minimalist aesthetics',
    origin: 'Greece',
    tag: 'Marble',
  },
  {
    id: 4,
    name: 'Dolomiti',
    defaultImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600566752734-bd1a20394012?w=800&q=80',
    description: 'Alpine inspired natural stone',
    origin: 'Italy',
    tag: 'Natural Stone',
  },
  {
    id: 5,
    name: 'Santorini',
    defaultImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    description: 'White-washed island charm',
    origin: 'Greece',
    tag: 'Limestone',
  },
  {
    id: 6,
    name: 'Amalfi',
    defaultImage: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600566752229-250ed79c35cc?w=800&q=80',
    description: 'Luxurious coastal sophistication',
    origin: 'Italy',
    tag: 'Glazed',
  },
  {
    id: 7,
    name: 'Mykonos',
    defaultImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    description: 'Greek island sophistication',
    origin: 'Greece',
    tag: 'Ceramic',
  },
  {
    id: 8,
    name: 'Tuscany',
    defaultImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    description: 'Rustic Italian countryside',
    origin: 'Italy',
    tag: 'Clay',
  },
]

export function CollectionsInDevelopment() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const itemsToShow = isMobile ? 2 : 4
  const maxIndex = collections.length - itemsToShow

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [isPaused, maxIndex])

  const handleNext = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  const handlePrev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))

  const visibleCollections = collections.slice(currentIndex, currentIndex + itemsToShow)

  return (
    <section
      className="cid-section py-20 relative overflow-hidden"
      style={{ background: "#F7F5F2" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background texture matching Featured Collections */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">

          {/* ── Header ── */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: '#DE802B' }} />
              <span className="text-xs uppercase tracking-[0.45em] font-bold" style={{ color: '#DE802B' }}>
                Coming Soon
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 leading-[1.05] tracking-tight">
                  Collections In{' '}
                  <em className="text-zinc-400 font-light relative inline-block" style={{ fontStyle: 'italic' }}>
                    Development
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full h-3"
                      viewBox="0 0 200 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.path
                        d="M2 10C60 2, 140 2, 198 10"
                        stroke="#DE802B"
                        strokeWidth="3"
                        strokeLinecap="round"
                        variants={{
                          hidden: { pathLength: 0, opacity: 0 },
                          visible: { 
                            pathLength: 1, 
                            opacity: 1,
                            transition: { 
                              pathLength: { duration: 1.2, ease: "easeOut", delay: 0.6 },
                              opacity: { duration: 0.3, delay: 0.6 }
                            }
                          }
                        }}
                      />
                    </motion.svg>
                  </em>
                </h2>
                <p className="text-sm text-zinc-500 font-light leading-relaxed mt-3 max-w-lg">
                  These collections are not yet in production. Our creativity is always in motion — shaping the future of architectural surfaces.
                </p>
              </div>

              {/* Desktop nav arrows */}
              <div className="hidden lg:flex items-center gap-3 pb-1">
                <button
                  onClick={handlePrev}
                  className="group flex items-center justify-center w-11 h-11 border border-zinc-300 bg-white hover:border-zinc-900 hover:bg-zinc-900 transition-all duration-300"
                  aria-label="Previous"
                >
                  <ArrowLeft size={15} className="text-zinc-500 group-hover:text-white transition-colors duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="group flex items-center justify-center w-11 h-11 border border-zinc-900 bg-zinc-900 transition-all duration-300"
                  style={{}}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#DE802B'; (e.currentTarget as HTMLElement).style.borderColor = '#DE802B' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#171717'; (e.currentTarget as HTMLElement).style.borderColor = '#171717' }}
                  aria-label="Next"
                >
                  <ArrowRight size={15} className="text-white" />
                </button>
                <span className="ml-2 text-[10px] uppercase tracking-[0.35em] text-zinc-400 font-medium tabular-nums">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="mt-8 w-full h-px bg-zinc-200" />
          </motion.div>

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            <AnimatePresence mode="popLayout">
              {visibleCollections.map((collection, index) => (
                <motion.div
                  key={`${collection.id}-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredId(collection.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* White card */}
                  <div className="bg-white shadow-sm group-hover:shadow-lg transition-all duration-400 overflow-hidden">

                    {/* Square image */}
                    <div className="relative aspect-square overflow-hidden bg-zinc-100">
                      <Image
                        src={collection.defaultImage}
                        alt={collection.name}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          hoveredId === collection.id ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                        }`}
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <Image
                        src={collection.hoverImage}
                        alt={`${collection.name} alternate`}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          hoveredId === collection.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />

                      {/* Material tag — top left */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[7px] uppercase tracking-[0.3em] text-white font-semibold bg-zinc-900/75 px-2 py-1 backdrop-blur-sm">
                          {collection.tag}
                        </span>
                      </div>

                      {/* Orange bottom bar on hover */}
                      <div
                        className="absolute bottom-0 left-0 h-[3px] transition-all duration-500"
                        style={{
                          background: '#DE802B',
                          width: hoveredId === collection.id ? '100%' : '0%'
                        }}
                      />
                    </div>

                    {/* Text content */}
                    <div className="px-4 pt-3.5 pb-4">
                      {/* Origin + index row */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[8px] uppercase tracking-[0.35em] font-bold" style={{ color: '#DE802B' }}>
                          {collection.origin}
                        </span>
                        <span className="text-[8px] text-zinc-300 font-light tabular-nums">
                          {String(currentIndex + index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="text-sm md:text-base font-bold text-zinc-900 tracking-tight leading-snug mb-2">
                        {collection.name}
                      </h3>

                      {/* Orange accent line */}
                      <div className="w-6 h-px mb-2" style={{ background: '#DE802B' }} />

                      {/* Description */}
                      <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
                        {collection.description}
                      </p>

                      {/* Footer row — Preview only on hover */}
                      <div className="flex items-center justify-end mt-3.5 pt-3 border-t border-zinc-100">
                        <div
                          className={`flex items-center gap-1 transition-all duration-300 ${
                            hoveredId === collection.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'
                          }`}
                        >
                          <span className="text-[8px] uppercase tracking-[0.3em] font-bold" style={{ color: '#DE802B' }}>Preview</span>
                          <ArrowRight size={8} style={{ color: '#DE802B' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ── Pagination ── */}
          <div className="flex items-center justify-between mt-10">
            {/* Mobile nav */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={handlePrev}
                className="group flex items-center justify-center w-9 h-9 border border-zinc-300 bg-white hover:border-zinc-900 hover:bg-zinc-900 transition-all duration-300"
              >
                <ArrowLeft size={13} className="text-zinc-500 group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={handleNext}
                className="group flex items-center justify-center w-9 h-9 border border-zinc-900 bg-zinc-900 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
              >
                <ArrowRight size={13} className="text-white" />
              </button>
            </div>

            {/* Progress bars */}
            <div className="flex items-center gap-1.5 lg:mx-auto">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-[3px] rounded-none transition-all duration-400 ${
                    i === currentIndex ? 'w-10' : 'bg-zinc-300 hover:bg-zinc-400 w-4'
                  }`}
                  style={i === currentIndex ? { background: '#DE802B', width: '40px' } : {}}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Mobile counter */}
            <span className="flex lg:hidden text-[10px] uppercase tracking-[0.3em] text-zinc-400 tabular-nums">
              {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </section>
    )
  }