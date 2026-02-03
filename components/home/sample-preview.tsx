"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Eye, ExternalLink, Download, X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

const samples = [
  { 
    id: 1,
    name: "Everscape", 
    colors: ["#E8E4D9", "#D4CFC4", "#C2BDB2", "#B0ABA0", "#9E998E", "#8C877C"],
    allColors: ["#E8E4D9", "#D4CFC4", "#C2BDB2", "#B0ABA0", "#9E998E", "#8C877C", "#7A756A", "#686358", "#565146", "#444034"],
    colorCount: 10,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80",
    size: "10 Sizes",
    finishes: ["External 20mm", "Structured"],
    finishCount: 2,
    description: "Contemporary outdoor collection with natural stone aesthetics"
  },
  { 
    id: 2,
    name: "Moda", 
    colors: ["#1A1A1A", "#B8B8B8", "#989898", "#787878"],
    allColors: ["#1A1A1A", "#B8B8B8", "#989898", "#787878", "#585858", "#383838"],
    colorCount: 6,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    size: "1 Size",
    finishes: ["Matt", "Gloss"],
    finishCount: 2,
    description: "Bold terrazzo-inspired porcelain tiles"
  },
  { 
    id: 3,
    name: "Spectre", 
    colors: ["#F5F5F5", "#F0E8DC", "#E8D4C8", "#D4E8DC", "#E0E0E0"],
    allColors: ["#F5F5F5", "#F0E8DC", "#E8D4C8", "#D4E8DC", "#E0E0E0", "#C8C8C8", "#B4B4B4", "#A0A0A0"],
    colorCount: 8,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    size: "1 Size",
    finishes: ["Iridescent", "Gloss", "Matt"],
    finishCount: 2,
    description: "Iridescent glazed tiles with subtle color shifts"
  },
  { 
    id: 4,
    name: "Agra", 
    colors: ["#C8C8C8", "#B4A898", "#8C9C7C", "#7C8C8C", "#1A1A1A"],
    allColors: ["#C8C8C8", "#B4A898", "#8C9C7C", "#7C8C8C", "#1A1A1A", "#989898", "#787878", "#585858", "#383838"],
    colorCount: 9,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752734-bd1a20394012?w=800&q=80",
    size: "1 Size",
    finishes: ["Matt"],
    finishCount: 3,
    description: "Minimalist vertical tiles with clean lines"
  },
  { 
    id: 5,
    name: "Enna", 
    colors: ["#D4A898", "#8C6C5C", "#1A4A3A", "#2A5A5A", "#1A1A1A"],
    allColors: ["#D4A898", "#8C6C5C", "#1A4A3A", "#2A5A5A", "#1A1A1A"],
    colorCount: 5,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    size: "1 Size",
    finishes: ["Gloss"],
    finishCount: 1,
    description: "Rich textured tiles with artisan finish"
  },
  { 
    id: 6,
    name: "Cassini", 
    colors: ["#E8DCC8", "#D4C8B4", "#C8B8A0", "#B4A88C", "#A09878"],
    allColors: ["#E8DCC8", "#D4C8B4", "#C8B8A0", "#B4A88C", "#A09878", "#8C8464", "#787050"],
    colorCount: 7,
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752229-250ed79c35cc?w=800&q=80",
    size: "4 Sizes",
    finishes: ["Matt", "Honed", "External 20mm"],
    finishCount: 3,
    description: "Classic stone-look porcelain with natural variation"
  },
  { 
    id: 7,
    name: "Brix", 
    colors: ["#F5F5F5", "#E8E8E8", "#D4D4D4", "#B8B8B8", "#989898"],
    allColors: ["#F5F5F5", "#E8E8E8", "#D4D4D4", "#B8B8B8", "#989898", "#787878", "#585858"],
    colorCount: 7,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    size: "3 Sizes",
    finishes: ["Gloss"],
    finishCount: 1,
    description: "Modern brick-style ceramic tiles"
  },
  { 
    id: 8,
    name: "Tuscany", 
    colors: ["#D4A898", "#C89878", "#B88868", "#A87858"],
    allColors: ["#D4A898", "#C89878", "#B88868", "#A87858", "#986848", "#885838"],
    colorCount: 6,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    size: "2 Sizes",
    finishes: ["Lappato", "Grip"],
    finishCount: 2,
    description: "Rustic Italian countryside aesthetics"
  },
]

export function SamplePreview() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedSample, setSelectedSample] = useState<number | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [expandedColors, setExpandedColors] = useState<number | null>(null)
  const { addItem } = useCart()

  // Infinite smooth scroll
  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const cardWidth = 320 // card width + gap
        const totalWidth = cardWidth * samples.length
        const newPosition = prev + 1
        
        // Reset seamlessly when reaching halfway point
        if (newPosition >= totalWidth) {
          return 0
        }
        return newPosition
      })
    }, 30)

    return () => clearInterval(interval)
  }, [isPlaying])

  const handlePrevious = () => {
    setScrollPosition((prev) => Math.max(0, prev - 320))
  }

  const handleNext = () => {
    setScrollPosition((prev) => prev + 320)
  }

  const handleAddToBasket = (sample: typeof samples[0], e: React.MouseEvent) => {
    e.stopPropagation()
    addItem({
      id: sample.id.toString(),
      name: sample.name,
      color: sample.colors[0],
      size: sample.size,
      image: sample.image,
      finish: sample.finishes[0]
    })
  }

  const selectedSampleData = samples.find(s => s.id === selectedSample)

  const handleModalPrevious = () => {
    if (selectedSample === null) return
    const currentIdx = samples.findIndex(s => s.id === selectedSample)
    const newIdx = currentIdx === 0 ? samples.length - 1 : currentIdx - 1
    setSelectedSample(samples[newIdx].id)
  }

  const handleModalNext = () => {
    if (selectedSample === null) return
    const currentIdx = samples.findIndex(s => s.id === selectedSample)
    const newIdx = currentIdx === samples.length - 1 ? 0 : currentIdx + 1
    setSelectedSample(samples[newIdx].id)
  }

  // Triple the samples for seamless infinite loop
  const infiniteSamples = [...samples, ...samples, ...samples]

  return (
    <>
      <section className="py-20 border-t border-zinc-200 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1600px]">
          {/* Header */}
          <div className="mb-14 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-zinc-200 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.span 
                className="inline-block text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold border-b border-zinc-900 pb-2 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Experience Quality
              </motion.span>
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-zinc-900 mb-3 tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Sample the <span className="text-zinc-400 italic font-light">Textures</span>
              </motion.h2>
              <motion.p 
                className="text-zinc-600 text-xs max-w-md leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Order your complimentary sample pack today and feel the quality of Firedclay first-hand.
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button className="group rounded-none bg-zinc-900 hover:bg-zinc-700 text-white px-8 py-5 uppercase text-[9px] tracking-[0.3em] font-bold transition-all duration-300">
                Order Free Samples
                <ArrowRight size={13} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-end gap-3 mb-6">
            <button
              onClick={handlePrevious}
              className="p-2 border border-zinc-300 hover:bg-zinc-100 transition-colors duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-zinc-300 hover:bg-zinc-100 transition-colors duration-300"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 border border-zinc-300 hover:bg-zinc-100 transition-colors duration-300"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>

          {/* Infinite Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex gap-6 transition-transform"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                willChange: 'transform'
              }}
            >
              {infiniteSamples.map((sample, index) => (
                <div
                  key={`${sample.id}-${index}`}
                  className="flex-shrink-0 w-[calc(25%-18px)] min-w-[280px]"
                  onMouseEnter={() => setHoveredId(sample.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Card */}
                  <div className="bg-white border border-zinc-200 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                    {/* Image with Hover Change */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                      {/* Default Image */}
                      <Image
                        src={sample.image}
                        alt={sample.name}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          hoveredId === sample.id ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                        }`}
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      
                      {/* Hover Image */}
                      <Image
                        src={sample.hoverImage}
                        alt={`${sample.name} alternate`}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          hoveredId === sample.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      
                      {/* Hover Overlay with Icons */}
                      <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                        hoveredId === sample.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="absolute top-4 right-4 flex gap-2">
                          <button className="p-2 bg-white rounded-full hover:bg-zinc-100 transition-colors">
                            <Heart size={16} />
                          </button>
                          <button 
                            onClick={() => setSelectedSample(sample.id)}
                            className="p-2 bg-white rounded-full hover:bg-zinc-100 transition-colors"
                          >
                            <Eye size={16} />
                          </button>
                          <button className="p-2 bg-white rounded-full hover:bg-zinc-100 transition-colors">
                            <ExternalLink size={16} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      {/* Title */}
                      <h3 className="text-base font-semibold mb-3">{sample.name}</h3>

                      {/* Specifications */}
                      <div className="flex items-center gap-4 text-xs text-zinc-600 mb-3 flex-wrap">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                          {sample.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                          {sample.colorCount} Colours
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {sample.finishCount} Finish{sample.finishCount > 1 ? 'es' : ''}
                        </span>
                      </div>

                      {/* Colors */}
                      <div className="mb-3">
                        <div className="flex items-center gap-1 flex-wrap">
                          {(expandedColors === sample.id ? sample.allColors : sample.colors).map((color, idx) => (
                            <div
                              key={idx}
                              className="w-6 h-6 rounded-full border border-zinc-300"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                          {sample.colorCount > sample.colors.length && (
                            <button
                              onClick={() => setExpandedColors(expandedColors === sample.id ? null : sample.id)}
                              className="text-xs text-zinc-600 hover:text-zinc-900 ml-1 font-semibold"
                            >
                              {expandedColors === sample.id ? '−' : `+${sample.colorCount - sample.colors.length}`}
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Finishes */}
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {sample.finishes.map((finish, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 border border-zinc-300 text-[10px] uppercase tracking-wider"
                          >
                            {finish}
                          </span>
                        ))}
                      </div>

                      {/* Add to Basket */}
                      <button
                        onClick={(e) => handleAddToBasket(sample, e)}
                        className="w-full text-sm text-zinc-600 hover:text-zinc-900 border-b border-zinc-300 pb-1 text-left transition-colors"
                      >
                        Add Sample to Basket →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedSample !== null && selectedSampleData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedSample(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedSample(null)}
              className="absolute top-4 right-4 z-50 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleModalPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleModalNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square bg-zinc-100">
                  <Image
                    src={selectedSampleData.image}
                    alt={selectedSampleData.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col">
                  <h3 className="text-2xl font-bold mb-1">{selectedSampleData.name}</h3>
                  <p className="text-sm text-zinc-600 mb-6">Porcelain Tiles</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500 w-20">Size</span>
                      <span className="text-sm">{selectedSampleData.size}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500 w-20">Colours</span>
                      <div className="flex gap-1 flex-wrap">
                        {selectedSampleData.allColors.map((color, idx) => (
                          <div
                            key={idx}
                            className="w-5 h-5 rounded-full border border-zinc-300"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs text-zinc-500 w-20">Finishes</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedSampleData.finishes.map((finish, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-zinc-900 text-white text-xs uppercase"
                          >
                            {finish}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 mb-6">{selectedSampleData.description}</p>

                  <div className="mt-auto space-y-3">
                    <Button 
                      onClick={(e) => {
                        handleAddToBasket(selectedSampleData, e)
                        setSelectedSample(null)
                      }}
                      className="w-full bg-zinc-900 hover:bg-zinc-700 text-white py-6 rounded-none"
                    >
                      Order Samples →
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="rounded-none">
                        <Download size={14} className="mr-2" />
                        Download Image
                      </Button>
                      <Button variant="outline" className="rounded-none">
                        <Download size={14} className="mr-2" />
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}