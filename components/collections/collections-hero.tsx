"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function CollectionsHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <section ref={ref} className="relative min-h-[50vh] overflow-hidden bg-[#E8E4D9]">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80')",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-6 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-neutral-900">
            Architectural Tiles for Commercial Spaces
          </h1>
          <p className="text-base font-light text-neutral-700 max-w-2xl leading-relaxed">
            Since 1983, Parkside has been at the forefront of tile design and specification. With an expertly curated
            selection of porcelain, ceramic, and natural stone tiles, we offer an unparalleled range that meets the highest
            standards of both aesthetics and performance. Most of our tile samples are available with free next day
            delivery.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}