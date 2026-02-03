"use client"

import { motion } from "framer-motion"

export function MarqueeSection() {
  const words = ["ARCHITECTURAL TILES", "FIRED CLAY", "EUROPEAN DESIGN", "NATURAL TEXTURES", "ATELIER CRAFT"]

  return (
    <section className="py-6 bg-zinc-900 overflow-hidden border-y border-zinc-700">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="flex gap-12 items-center pr-12"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {words.map((word, index) => (
                <div key={`${word}-${index}`} className="flex items-center gap-12">
                  <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase text-white/90">
                    {word}
                  </span>
                  <span className="text-zinc-500 text-2xl font-light">/</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}