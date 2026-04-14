"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight, Sparkles } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop",
    subtitle: "EST. 1984 — EUROPEAN CRAFT",
    title: "Architectural Purity",
    description: "Handcrafted terracotta tiles that bring the soul of the earth into modern architectural spaces.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    subtitle: "THE ATELIER COLLECTION",
    title: "Timeless Textures",
    description: "A symphony of stone-inspired finishes designed for contemporary sanctuaries and minimalist living.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    subtitle: "SUSTAINABLE ARTISTRY",
    title: "Defined Geometry",
    description: "Redefining the standard of premium surfaces through uncompromising durability and natural elegance.",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleSlideChange = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={true}>
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1.8, ease: "easeInOut" },
          }}
          className="absolute inset-0 z-0"
        >
          {/* Main Image with dramatic 'Teeda' (Slanted) Diagonal Pan & Zoom */}
          <motion.div
            className="absolute inset-0 origin-center scale-110"
            initial={{ scale: 1.0, rotate: 0, x: 0, y: 0 }}
            animate={{ 
              scale: 1.35, 
              rotate: 3.5, 
              x: [0, 20, 40],
              y: [0, -10, -20]
            }}
            transition={{ 
              duration: 10, 
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <Image
              src={heroSlides[current].image || "/placeholder.svg"}
              alt={heroSlides[current].title}
              fill
              className="object-cover brightness-[0.85]"
              priority
            />
          </motion.div>

          {/* Premium Ambient Overlays */}
          <div className="absolute inset-0 bg-black/15 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 z-10" />
          
          {/* Subtle Dynamic Grain Overlay */}
          <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center pt-32 pb-10 md:pt-0 md:pb-0 items-start text-left text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              }
            }}
            className="max-w-3xl"
          >
            {/* Subtitle - Emerging from Baseline */}
            <div className="overflow-hidden mb-6">
              <motion.div
                variants={{
                  initial: { y: 100, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { y: 30, opacity: 0 }
                }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <span className="w-12 h-[1px] bg-white/40" />
                <span className="text-xs uppercase tracking-[0.4em] font-semibold text-white/90 flex items-center gap-2">
                  <Sparkles size={14} className="text-white/70" />
                  {heroSlides[current].subtitle}
                </span>
              </motion.div>
            </div>

            {/* Title - Powerful Rise from Bottom */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                variants={{
                  initial: { y: 150, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { y: 40, opacity: 0 }
                }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {heroSlides[current].title}
              </motion.h1>
            </div>

            {/* Description - Soft Fade-up */}
            <div className="overflow-hidden mb-12">
              <motion.p
                variants={{
                  initial: { y: 80, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { y: 20, opacity: 0 }
                }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm md:text-lg font-light max-w-xl text-white/75 leading-relaxed tracking-wide"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {heroSlides[current].description}
              </motion.p>
            </div>

            {/* Buttons - Staggered Rise */}
            <motion.div
              variants={{
                initial: { y: 50, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { opacity: 0 }
              }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link href="/collections">
                <Button 
                  className="group relative overflow-hidden rounded-none px-6 py-4 md:px-10 md:py-6 bg-white text-black hover:bg-white transition-all duration-500 uppercase tracking-[0.25em] text-[10px] font-bold border border-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Collections
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white z-20 pointer-events-none px-6 py-4 md:px-10 md:py-6">
                     Explore Collections
                     <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>

              <Link href="/order-samples">
                <Button
                  variant="outline"
                  className="group relative overflow-hidden rounded-none px-6 py-4 md:px-10 md:py-6 border border-white/40 text-white hover:border-white transition-all duration-500 uppercase tracking-[0.25em] text-[10px] font-bold bg-white/5 backdrop-blur-md hover:bg-white hover:text-black"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Order Free Samples
                    <Sparkles size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modern Progress Dots */}
      <div className="absolute bottom-16 right-12 z-30 flex flex-col gap-6">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSlideChange(i)}
            className="group relative flex items-center justify-end"
          >
            <motion.span
              className="absolute right-0 text-[10px] font-semibold text-white/0 group-hover:text-white/70 transition-all duration-300 mr-16 uppercase tracking-wider"
              whileHover={{ x: -10 }}
            >
              0{i + 1}
            </motion.span>
            <div className="relative w-16 h-[2px] bg-white/20 overflow-hidden">
              <motion.span
                className="absolute left-0 top-0 h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: i === current ? "100%" : "0%" }}
                transition={{ duration: i === current ? 6 : 0.5, ease: "linear" }}
              />
            </div>
            <span
              className={cn(
                "ml-3 w-2 h-2 rounded-full transition-all duration-300",
                i === current ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-white/30 scale-75 group-hover:bg-white/50",
              )}
            />
          </button>
        ))}
      </div>

      {/* Cinematic Bottom Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </section>
  )
}