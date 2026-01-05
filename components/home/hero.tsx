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
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleSlideChange = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 30 },
            opacity: { duration: 0.8 },
            scale: { duration: 1.2 },
          }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "easeOut" }}
          >
            <Image
              src={heroSlides[current].image || "/placeholder.svg"}
              alt={heroSlides[current].title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-10" />

      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-start text-left text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[1px] bg-white/40" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-white/90 flex items-center gap-2">
                <Sparkles size={14} className="text-white/70" />
                {heroSlides[current].subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {heroSlides[current].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="text-base md:text-lg font-light mb-12 max-w-xl text-white/85 leading-relaxed tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {heroSlides[current].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link href="/collections">
                <Button className="group relative overflow-hidden rounded-none px-12 py-7 bg-white text-black hover:bg-white transition-all duration-500 uppercase tracking-[0.25em] text-[11px] font-bold border-2 border-white">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Collections
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-0 group-hover:opacity-100 z-0" style={{ color: 'white' }} />
                </Button>
              </Link>

              <Link href="/order-samples">
                <Button
                  variant="outline"
                  className="group relative overflow-hidden rounded-none px-12 py-7 border-2 border-white/40 text-white hover:border-white transition-all duration-500 uppercase tracking-[0.25em] text-[11px] font-bold bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black"
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

      {/* Progress Indicators */}
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
                className={cn("absolute left-0 top-0 h-full bg-white")}
                initial={{ width: "0%" }}
                animate={{ width: i === current ? "100%" : "0%" }}
                transition={{ duration: i === current ? 5 : 0.5, ease: "linear" }}
              />
            </div>
            <span
              className={cn(
                "ml-3 w-2 h-2 rounded-full transition-all duration-300",
                i === current ? "bg-white scale-100" : "bg-white/30 scale-75 group-hover:bg-white/50",
              )}
            />
          </button>
        ))}
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  )
}