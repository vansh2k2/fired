"use client"

import { motion } from "framer-motion"

export function MarqueeSection() {
  const words = ["ARCHITECTURAL TILES", "FIRED CLAY", "EUROPEAN DESIGN", "NATURAL TEXTURES", "ATELIER CRAFT"]

  return (
    <section className="py-12 bg-background overflow-hidden border-y border-border/30">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="flex gap-16 items-center pr-16"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {words.map((word) => (
                <span
                  key={word}
                  className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase text-foreground/20"
                >
                  {word} <span className="text-primary/40 ml-16">/</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
