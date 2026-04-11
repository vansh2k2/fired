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
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuad = (t: number) => t * (2 - t)
      setCount(Math.floor(easeOutQuad(progress) * end))
      if (progress < 1) requestAnimationFrame(animate)
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
    <div ref={ref} className="flex flex-col gap-1">
      <p className="text-4xl font-black text-zinc-900 tabular-nums tracking-tight">{count}+</p>
      <div className="w-6 h-px bg-amber-500 mb-1" />
      <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-semibold">{label}</p>
    </div>
  )
}

export function AboutPreview() {
  return (
    <>
      <section className="about-section py-20 overflow-hidden bg-white relative">

        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 40px),
              repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 40px)`
          }}
        />

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">

          {/* ─── Header ─── */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-amber-500" />
              <span className="text-[13px] uppercase tracking-[0.45em] text-amber-600 font-extrabold">
                Our Story
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 leading-[1.05] tracking-tight">
              Honoring the{" "}
              <span className="text-zinc-300 font-light italic relative inline-block">
                Origin of Form
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full h-2"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.path
                    d="M2 10C60 2, 140 2, 198 10"
                    stroke="#000"
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
              </span>
            </h2>
            <div className="mt-6 w-full h-px bg-zinc-100" />
          </motion.div>

          {/* ─── Main Grid ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* ── Left: Image ── */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image container */}
              <div className="relative aspect-square overflow-hidden bg-zinc-100 shadow-2xl shadow-zinc-200">
                <Image
                  src="/craftsman-making-clay-tiles.jpg"
                  alt="Craftsmanship"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Bottom left caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/50 text-[8px] uppercase tracking-[0.35em] font-medium mb-1">Master Artisan</p>
                  <p className="text-white text-sm font-light leading-snug">
                    Hand-shaping clay tiles using<br />traditional European methods
                  </p>
                </div>
              </div>

              {/* Year badge — offset top-right */}
              <motion.div
                className="absolute -top-4 -right-4 z-20 bg-zinc-900 text-white px-5 py-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8, y: -12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.5, type: "spring", stiffness: 100 }}
              >
                <p className="text-[7px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-0.5">Since</p>
                <p className="text-2xl font-black leading-none">1984</p>
              </motion.div>

              {/* Decorative accent line */}
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-amber-500"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              />
            </motion.div>

            {/* ── Right: Content ── */}
            <motion.div
              className="lg:col-span-7 space-y-6 lg:pt-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Body text */}
              <div className="space-y-4">
                <p className="text-xl text-zinc-800 leading-relaxed font-medium">
                  At Firedclay Originals, we believe that architecture is born from the earth. Our tiles are not just
                  surfaces — they are a dialogue between heritage craftsmanship and modern aesthetic vision.
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                  Founded in 1984, our journey began in a small kiln in the heart of Europe. Today, we supply the world's
                  most renowned architects with tiles that define space through texture and tone.
                </p>
              </div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 py-4 border-t border-b border-zinc-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.5 }}
              >
                <Counter end={40} label="Years of Excellence" />
                <Counter end={500} label="Unique Collections" />
                <Counter end={80} label="Countries Served" />
              </motion.div>

              {/* Feature cards */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    title: "Heritage Craft",
                    desc: "Time-honored techniques passed through generations of master artisans.",
                    delay: 0.7,
                  },
                  {
                    title: "Modern Design",
                    desc: "Contemporary aesthetics engineered for today's iconic architecture.",
                    delay: 0.8,
                  },
                ].map(({ title, desc, delay }) => (
                  <motion.div
                    key={title}
                    className="group relative p-5 border border-amber-300 bg-white shadow-md shadow-amber-50"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay }}
                  >
                    <div className="w-5 h-0.5 bg-amber-500 mb-3" />
                    <h4 className="text-xs font-black text-zinc-900 uppercase tracking-widest mb-2">{title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed font-light">{desc}</p>
                    {/* corner accent */}
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-zinc-200 group-hover:border-amber-300 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant="outline"
                    className="group rounded-none border-2 border-zinc-900 px-8 py-5 uppercase text-[9px] tracking-[0.35em] font-bold hover:bg-zinc-900 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    Discover Our Philosophy
                    <ArrowRight
                      size={12}
                      className="ml-2.5 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}