"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react"
import { useState, useRef } from "react"

const collections = [
  {
    name: "Terrene Collection",
    description: "Raw textures and organic pigments.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=2070&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    tag: "HANDCRAFTED",
    number: "01",
    finish: "Matte",
  },
  {
    name: "Linear Stone",
    description: "Architectural precision in basalt.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2080&auto=format&fit=crop",
    tag: "MINIMALIST",
    number: "02",
    finish: "Honed",
  },
  {
    name: "Glazed Origin",
    description: "Vibrant hues with high-gloss finish.",
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2080&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=2070&auto=format&fit=crop",
    tag: "EDITORIAL",
    number: "03",
    finish: "Glazed",
  },
  {
    name: "Artisan Ceramic",
    description: "Heritage meets contemporary design.",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=2070&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=2070&auto=format&fit=crop",
    tag: "PREMIUM",
    number: "04",
    finish: "Polished",
  },
  {
    name: "Mosaic Fusion",
    description: "Contemporary patterns with traditional craft.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=2070&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    tag: "MODERN",
    number: "05",
    finish: "Textured",
  },
  {
    name: "Terra Essence",
    description: "Earthy tones with refined elegance.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2080&auto=format&fit=crop",
    tag: "CLASSIC",
    number: "06",
    finish: "Natural",
  },
  {
    name: "Luxe Marble",
    description: "Premium marble with stunning veining.",
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2080&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=2070&auto=format&fit=crop",
    tag: "LUXURY",
    number: "07",
    finish: "High-Gloss",
  },
  {
    name: "Stone Heritage",
    description: "Timeless beauty in natural stone.",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=2070&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=2070&auto=format&fit=crop",
    tag: "HERITAGE",
    number: "08",
    finish: "Rustic",
  },
]

const infiniteCollections = [...collections, ...collections, ...collections]

export default function FeaturedCollections() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      className="pt-16 pb-10 bg-[#F7F5F2] relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-6 max-w-[1600px] relative">

        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-zinc-400" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
                Featured Collections
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-[1.08] tracking-tight whitespace-nowrap">
              Architectural{" "}
              <span className="text-zinc-400 font-light italic relative inline-block">
                Excellence
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
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-sm font-light">
              Premium ceramic and stone tiles crafted for discerning architects
              and designers worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold hidden md:block">
              {collections.length} Collections
            </span>
            <Link
              href="/collections"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-zinc-900 text-white hover:bg-zinc-700 transition-all duration-300"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold">Explore All</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* ── ANIMATED DIVIDER ── */}
        <motion.div
          className="w-full h-[1px] bg-zinc-200 mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
        />

        {/* ── INFINITE MARQUEE ── */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F7F5F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F7F5F2] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-5 py-3"
            animate={{ x: isPaused ? undefined : [0, -2464] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 46, ease: "linear" },
            }}
          >
            {infiniteCollections.map((col, idx) => (
              <CollectionCard
                key={`${col.name}-${idx}`}
                collection={col}
                isHovered={hoveredIndex === idx}
                onEnter={() => setHoveredIndex(idx)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </motion.div>
        </div>

        {/* ── BOTTOM META ── */}
        <motion.div
          className="mt-8 flex items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold">
            Hover to pause · Click to explore
          </p>
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-1 h-1 rounded-full bg-zinc-300" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────
   CARD COMPONENT
───────────────────────────── */
function CollectionCard({
  collection,
  isHovered,
  onEnter,
  onLeave,
}: {
  collection: (typeof collections)[0]
  isHovered: boolean
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <motion.div
      className="group cursor-pointer flex-shrink-0 relative bg-white border-2 border-zinc-200 overflow-hidden hover:border-zinc-800 hover:shadow-xl transition-all duration-300"
      style={{ width: "272px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 h-[2.5px] w-0 group-hover:w-full bg-zinc-900 transition-all duration-500 z-30" />

      {/* Big faint background number (Moved to Top-Right per Process Style) */}
      <div className="absolute top-2 right-3 text-[64px] font-black leading-none select-none pointer-events-none z-[1] text-zinc-100 group-hover:text-zinc-200 transition-colors duration-500 tracking-tighter opacity-80">
        {collection.number}
      </div>

      {/* ── IMAGE ── */}
      <div className="relative overflow-hidden bg-zinc-100" style={{ aspectRatio: "4/5" }}>
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={isHovered ? collection.hoverImage : collection.image}
            alt={collection.name}
            fill
            className="object-cover"
            sizes="272px"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* TAG */}
        <div className="absolute top-3.5 left-3.5 z-20">
          <span className="inline-block px-2.5 py-1 bg-white text-zinc-900 text-[8px] uppercase tracking-[0.25em] font-black">
            {collection.tag}
          </span>
        </div>

        {/* Finish Badge — reveals on hover */}
        <motion.div
          className="absolute bottom-3.5 left-3.5 z-20"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.28 }}
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-zinc-900 text-[8px] uppercase tracking-[0.2em] font-bold">
            <Sparkles size={9} className="text-zinc-500" />
            {collection.finish}
          </span>
        </motion.div>

        {/* Arrow CTA */}
        <motion.div
          className="absolute bottom-3.5 right-3.5 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.25 }}
        >
          <div className="w-9 h-9 bg-white flex items-center justify-center shadow-md">
            <ArrowUpRight size={15} className="text-zinc-900" />
          </div>
        </motion.div>
      </div>

      {/* ── CONTENT BLOCK ── */}
      <div className="relative z-10 p-5 bg-white">
        {/* Step label (from process style) */}
        <span className="block text-[10px] font-bold tracking-[0.3em] text-[#DE802B] uppercase mb-1.5">
          Series {collection.number}
        </span>

        {/* TITLE — bold, on its own line */}
        <h3 className="text-[15px] font-black text-zinc-900 uppercase tracking-wide leading-snug mb-3 group-hover:text-[#134E8E] transition-colors duration-300">
          {collection.name}
        </h3>

        {/* ANIMATED DIVIDER — w-8 → w-14 on hover (from process style) */}
        <div className="h-[1.5px] w-8 bg-zinc-200 group-hover:w-14 group-hover:bg-[#DE802B] transition-all duration-500" />
      </div>

      {/* Corner triangle accent */}
      <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-zinc-50 group-hover:border-b-zinc-900/10 transition-colors duration-300 z-20" />
    </motion.div>
  )
}