"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 z-10 p-12"
            >
              <div className="w-full h-full relative overflow-hidden border-[20px] border-white shadow-2xl">
                <Image src="/craftsman-making-clay-tiles.jpg" alt="Craftsmanship" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-primary/10 -z-0"
            />
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-6 block">OUR STORY</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
              Honoring the <br /> <span className="italic">Origin</span> of Form
            </h2>
            <p className="text-lg font-light text-muted-foreground mb-8 leading-relaxed">
              At Firedclay Originals, we believe that architecture is born from the earth. Our tiles are not just
              surfaces; they are a dialogue between heritage craftsmanship and modern aesthetic vision.
            </p>
            <p className="text-muted-foreground font-light mb-10 leading-relaxed">
              Founded in 1984, our journey began in a small kiln in the heart of Europe. Today, we supply the world's
              most renowned architects with tiles that define space through texture and tone.
            </p>
            <Button
              variant="outline"
              className="rounded-none border-foreground px-8 py-6 uppercase text-xs tracking-widest hover:bg-foreground hover:text-background transition-colors bg-transparent"
            >
              Discover Our Philosophy
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
