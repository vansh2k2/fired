"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

// Counter Animation Hook
function useCounter(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    
    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuad = (t: number) => t * (2 - t)
      const currentCount = Math.floor(easeOutQuad(progress) * (end - startValue) + startValue)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, shouldStart])

  return count
}

function Counter({ end, label }: { end: number; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCounter(end, 2000, isInView)

  return (
    <div ref={ref}>
      <p className="text-3xl font-bold text-zinc-900 mb-1.5">{count}+</p>
      <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 font-semibold">{label}</p>
    </div>
  )
}

export function AboutPreview() {
  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-[1500px]">
        {/* Header */}
        <motion.div 
          className="mb-12 border-b border-zinc-200 pb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold border-b border-zinc-900 pb-2 mb-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Story
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-zinc-900 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Honoring the{" "}
            <span className="text-zinc-400 italic font-light">Origin</span>
            {" "}of Form
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Image Side - Takes 2 columns */}
          <motion.div 
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="relative aspect-[4/3] overflow-hidden bg-zinc-100"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image 
                src="/craftsman-making-clay-tiles.jpg" 
                alt="Craftsmanship" 
                fill 
                className="object-cover" 
              />
              {/* Overlay gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              
              {/* Year Badge */}
              <motion.div 
                className="absolute top-6 left-6 z-10"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="bg-white px-4 py-2.5 shadow-lg">
                  <p className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Since</p>
                  <p className="text-2xl font-bold text-zinc-900">1984</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Corner */}
            <motion.div 
              className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-zinc-900 translate-x-2 translate-y-2"
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: 1,
                type: "spring",
                stiffness: 80
              }}
            />
          </motion.div>

          {/* Content Side - Takes 3 columns */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.p 
                className="text-lg text-zinc-800 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                At Firedclay Originals, we believe that architecture is born from the earth. Our tiles are not just
                surfaces; they are a dialogue between heritage craftsmanship and modern aesthetic vision.
              </motion.p>
              <motion.p 
                className="text-sm text-zinc-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Founded in 1984, our journey began in a small kiln in the heart of Europe. Today, we supply the world's
                most renowned architects with tiles that define space through texture and tone.
              </motion.p>
            </motion.div>

            {/* Stats Grid with Auto Counters */}
            <motion.div
              className="grid grid-cols-3 gap-8 py-6 border-y border-zinc-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Counter end={40} label="Years of Excellence" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Counter end={500} label="Unique Collections" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Counter end={80} label="Countries Served" />
              </motion.div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.div 
                  className="w-8 h-0.5 bg-zinc-900"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                />
                <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wide">Heritage Craft</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">Time-honored techniques passed through generations</p>
              </motion.div>
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.div 
                  className="w-8 h-0.5 bg-zinc-900"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                />
                <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wide">Modern Design</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">Contemporary aesthetics for today's architecture</p>
              </motion.div>
            </motion.div>

            {/* Button */}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="group rounded-none border-2 border-zinc-900 px-7 py-4 uppercase text-[9px] tracking-[0.3em] font-bold hover:bg-zinc-900 hover:text-white transition-all duration-300 bg-transparent"
                >
                  Discover Our Philosophy
                  <ArrowRight size={13} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}