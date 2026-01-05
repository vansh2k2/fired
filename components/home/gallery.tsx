"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  { src: "/luxury-bathroom-tiles.jpg", size: "large" },
  { src: "/tile-texture-detail.jpg", size: "small" },
  { src: "/minimalist-tile-layout.jpg", size: "small" },
  { src: "/tall-tile-project.jpg", size: "tall" },
  { src: "/wide-tile-space.jpg", size: "wide" },
]

export function HomeGallery() {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Inspired Spaces</h2>
        <p className="text-muted-foreground max-w-xl mx-auto font-light">
          Experience how Firedclay Originals transforms environments through texture, light, and architectural geometry.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[1000px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative shine-hover group overflow-hidden"
          >
            <Image
              src={images[0].src || "/placeholder.svg"}
              alt="Luxury Space"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 relative shine-hover group overflow-hidden"
          >
            <Image
              src={images[1].src || "/placeholder.svg"}
              alt="Detail"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-2 relative shine-hover group overflow-hidden"
          >
            <Image
              src={images[3].src || "/placeholder.svg"}
              alt="Tall Project"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 md:row-span-1 relative shine-hover group overflow-hidden"
          >
            <Image
              src={images[2].src || "/placeholder.svg"}
              alt="Layout"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
