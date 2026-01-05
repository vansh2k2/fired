"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCart } from "@/hooks/use-cart"

const tiles = [
  {
    id: 1,
    name: "Terrene Rustica",
    collection: "Terrene",
    image: "/terracotta-tile-sample.jpg",
    hoverImage: "/earthy-textured-tiles.jpg",
    colors: ["#A0522D", "#8B4513", "#D2691E"],
    sizes: ["20x20cm", "30x60cm", "60x60cm"],
    finishes: ["Matt", "Textured"],
  },
  {
    id: 2,
    name: "Basaltine Linear",
    collection: "Linear Stone",
    image: "/grey-stone-tile-sample.jpg",
    hoverImage: "/modern-stone-tiles.jpg",
    colors: ["#4A4A4A", "#2F4F4F", "#708090"],
    sizes: ["10x60cm", "30x60cm", "60x120cm"],
    finishes: ["Honed", "Flamed"],
  },
  {
    id: 3,
    name: "Vitreous Emerald",
    collection: "Glazed Origin",
    image: "/luxury-glazed-tiles.jpg",
    hoverImage: "/colored-tile-reflection.jpg",
    colors: ["#006400", "#2E8B57", "#3CB371"],
    sizes: ["10x10cm", "15x15cm"],
    finishes: ["Gloss", "Crackle"],
  },
  {
    id: 4,
    name: "Urban Concrete",
    collection: "Architectural",
    image: "/minimalist-tile-layout.jpg",
    hoverImage: "/tile-texture-detail.jpg",
    colors: ["#BEBEBE", "#D3D3D3", "#A9A9A9"],
    sizes: ["60x60cm", "80x80cm", "120x120cm"],
    finishes: ["Natural", "Lappato"],
  },
  // Add more tiles as needed
]

export function TileGrid() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Terrene", "Linear Stone", "Glazed Origin", "Architectural"]
  const { addItem } = useCart()

  const filteredTiles = filter === "All" ? tiles : tiles.filter((t) => t.collection === filter)

  const handleAddSample = (tile: any) => {
    addItem({
      id: `${tile.id}-${tile.colors[0]}-${tile.sizes[0]}`,
      name: tile.name,
      image: tile.image,
      color: "Default Color", // In a real app, this would be selected
      size: tile.sizes[0],
      quantity: 1,
    })
  }

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="flex flex-wrap gap-8 mb-20 border-b pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-primary",
              filter === cat ? "text-primary border-b border-primary pb-2" : "text-muted-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredTiles.map((tile) => (
            <motion.div
              key={tile.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden mb-6 shine-hover">
                <Image
                  src={tile.image || "/placeholder.svg"}
                  alt={tile.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <Image
                  src={tile.hoverImage || "/placeholder.svg"}
                  alt={tile.name}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-md p-4">
                  <Button
                    onClick={() => handleAddSample(tile)}
                    className="w-full rounded-none bg-primary text-white text-[10px] uppercase tracking-widest py-6"
                  >
                    Add Sample
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                  {tile.collection}
                </span>
                <h3 className="text-xl font-serif">{tile.name}</h3>

                <div className="flex gap-2 mt-2">
                  {tile.colors.map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tile.sizes.map((size) => (
                    <span key={size} className="text-[9px] uppercase tracking-widest border border-border px-2 py-1">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
