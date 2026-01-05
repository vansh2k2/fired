"use client"

import { motion } from "framer-motion"

export function CollectionsHero() {
  return (
    <section className="py-32 container mx-auto px-6 border-b">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6 block">
          DESIGNER'S CHOICE 2025
        </span>
        <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8">
          The <span className="italic">Architectural</span> <br /> Ranges
        </h1>
        <p className="text-xl font-light text-muted-foreground max-w-2xl leading-relaxed">
          Explore our expansive portfolio of premium tile ranges, where each collection tells a unique story of texture,
          color, and craftsmanship.
        </p>
      </motion.div>
    </section>
  )
}
