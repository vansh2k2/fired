"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const samples = [
  { name: "Sienna Rust", color: "#A0522D", image: "/terracotta-tile-sample.jpg" },
  { name: "Basalt Grey", color: "#4A4A4A", image: "/grey-stone-tile-sample.jpg" },
  { name: "Desert Sand", color: "#EDC9AF", image: "/placeholder.svg?height=300&width=300" },
  { name: "Oceanic Glaze", color: "#4682B4", image: "/placeholder.svg?height=300&width=300" },
  { name: "Verde Moss", color: "#556B2F", image: "/placeholder.svg?height=300&width=300" },
  { name: "Arctic White", color: "#F0F8FF", image: "/placeholder.svg?height=300&width=300" },
]

export function SamplePreview() {
  return (
    <section className="py-32 border-t">
      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Sample the Textures</h2>
          <p className="text-muted-foreground font-light max-w-md">
            Order your complimentary sample pack today and feel the quality of Firedclay first-hand.
          </p>
        </div>
        <Button className="rounded-none bg-primary text-white px-10 py-6 uppercase text-xs tracking-[0.2em]">
          Order Free Samples
        </Button>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            className="flex gap-8 px-6 cursor-grab active:cursor-grabbing"
          >
            {samples.map((sample, i) => (
              <motion.div
                key={sample.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-64 group"
              >
                <div className="aspect-square relative mb-4 overflow-hidden border border-border group-hover:border-primary transition-colors duration-500">
                  <Image src={sample.image || "/placeholder.svg"} alt={sample.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="text-white border-white text-[10px] uppercase rounded-none px-4 py-2 hover:bg-white hover:text-black bg-transparent"
                    >
                      Add to Pack
                    </Button>
                  </div>
                </div>
                <h4 className="text-sm font-medium uppercase tracking-widest text-center">{sample.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
