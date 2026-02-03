"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/luxury-bathroom-tiles.jpg",
    alt: "Luxury Bathroom Tiles",
    title: "Contemporary Elegance",
    description: "Modern bathroom design featuring premium ceramic tiles",
    size: "large"
  },
  {
    id: 2,
    src: "/tile-texture-detail.jpg",
    alt: "Tile Texture Detail",
    title: "Artisan Craftsmanship",
    description: "Close-up of handcrafted tile textures",
    size: "regular"
  },
  {
    id: 3,
    src: "/minimalist-tile-layout.jpg",
    alt: "Minimalist Tile Layout",
    title: "Minimalist Design",
    description: "Clean lines and geometric patterns",
    size: "regular"
  },
  {
    id: 4,
    src: "/tall-tile-project.jpg",
    alt: "Tall Tile Project",
    title: "Vertical Statement",
    description: "Floor-to-ceiling tile installation",
    size: "large"
  },
  {
    id: 5,
    src: "/wide-tile-space.jpg",
    alt: "Wide Tile Space",
    title: "Spacious Living",
    description: "Open concept with large format tiles",
    size: "regular"
  },
  {
    id: 6,
    src: "/luxury-bathroom-tiles.jpg",
    alt: "Kitchen Backsplash",
    title: "Kitchen Excellence",
    description: "Designer kitchen with custom tile work",
    size: "large"
  },
  {
    id: 7,
    src: "/tile-texture-detail.jpg",
    alt: "Outdoor Patio",
    title: "Outdoor Living",
    description: "Weather-resistant outdoor tile solutions",
    size: "regular"
  },
  {
    id: 8,
    src: "/minimalist-tile-layout.jpg",
    alt: "Commercial Space",
    title: "Commercial Design",
    description: "High-traffic commercial installations",
    size: "regular"
  }
]

export function HomeGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImage === null) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    setSelectedImage(galleryImages[newIndex].id)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(galleryImages[newIndex].id)
  }

  const selectedImageData = galleryImages.find(img => img.id === selectedImage)

  return (
    <>
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-6 max-w-[1500px] relative z-10">
          {/* Header */}
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
                Gallery
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-zinc-900 leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Inspired{" "}
                <span className="text-zinc-400 italic font-light">Spaces</span>
              </motion.h2>
              
              <motion.p 
                className="text-sm text-zinc-600 leading-relaxed mt-4 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Experience how Firedclay Originals transforms environments through texture, light, and architectural geometry.
              </motion.p>
            </div>
          </motion.div>

          {/* Masonry Grid */}
          <div className="max-w-7xl mx-auto">
            {/* Desktop: Asymmetric Masonry Grid */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-6 auto-rows-[280px]">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={`group cursor-pointer ${
                    image.size === 'large' 
                      ? 'lg:col-span-2 lg:row-span-2' 
                      : 'lg:col-span-1 lg:row-span-1'
                  }`}
                  onMouseEnter={() => setHoveredId(image.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative w-full h-full overflow-hidden bg-zinc-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Image */}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-white text-xl md:text-2xl font-light tracking-wide mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {image.title}
                      </h3>
                      
                      <p className="text-white/90 text-sm font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {image.description}
                      </p>
                      
                      {/* View Button Hint */}
                      <div className="mt-4 flex items-center gap-2 text-white/80 text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <span>Click to view</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile & Tablet: 2-Column Grid */}
            <div className="grid grid-cols-2 lg:hidden gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 shadow-lg active:shadow-2xl transition-all duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <h3 className="text-white text-base font-light tracking-wide">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-300"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="mt-6 text-center">
                <h3 className="text-white text-2xl font-light tracking-wide mb-2">
                  {selectedImageData.title}
                </h3>
                <p className="text-white/80 text-sm font-light">
                  {selectedImageData.description}
                </p>
              </div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {galleryImages.findIndex(img => img.id === selectedImage) + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}