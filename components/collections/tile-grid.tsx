"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCart } from "@/hooks/use-cart"
import { Eye, Heart, X, ChevronLeft, ChevronRight, Download, ChevronDown } from "lucide-react"

const tiles = [
  {
    id: 1,
    name: "Adger",
    collection: "Ceramic",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80",
    colors: ["#FFFFFF", "#F5F5F5", "#A9A9A9", "#D3D3D3", "#CD853F"],
    allColors: ["#FFFFFF", "#F5F5F5", "#A9A9A9", "#D3D3D3", "#CD853F", "#8B4513", "#A0522D", "#D2691E", "#DEB887", "#F4A460", "#DAA520"],
    colorCount: 11,
    sizes: ["1 Size"],
    finishes: ["Gloss", "Matt"],
    finishCount: 2,
    description: "Contemporary outdoor collection with natural stone aesthetics",
  },
  {
    id: 2,
    name: "Agra",
    collection: "Engineered Stone",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    colors: ["#C8C8C8", "#B4A898", "#8C9C7C", "#7C8C8C", "#1A1A1A"],
    allColors: ["#C8C8C8", "#B4A898", "#8C9C7C", "#7C8C8C", "#1A1A1A", "#8B6914", "#654321", "#36454F", "#D4A574"],
    colorCount: 9,
    sizes: ["1 Size"],
    finishes: ["Matt"],
    finishCount: 1,
    description: "Bold terrazzo-inspired porcelain tiles with modern appeal",
  },
  {
    id: 3,
    name: "Alicante",
    collection: "Marble",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    colors: ["#D2B48C", "#CD853F", "#8B6914", "#00008B", "#008B8B"],
    allColors: ["#D2B48C", "#CD853F", "#8B6914", "#00008B", "#008B8B", "#DEB887", "#F5DEB3"],
    colorCount: 7,
    sizes: ["9 Sizes"],
    finishes: ["Matt", "Gloss"],
    finishCount: 2,
    description: "Iridescent glazed tiles with subtle color shifts",
  },
  {
    id: 4,
    name: "Apex",
    collection: "Porcelain",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752734-bd1a20394012?w=800&q=80",
    colors: ["#D3D3D3", "#C0C0C0", "#8B4513", "#556B2F", "#3E2723"],
    allColors: ["#D3D3D3", "#C0C0C0", "#8B4513", "#556B2F", "#3E2723", "#A9A9A9"],
    colorCount: 6,
    sizes: ["1 Size"],
    finishes: ["Gloss"],
    finishCount: 1,
    description: "Minimalist vertical tiles with clean lines",
  },
  {
    id: 5,
    name: "Marble Essence",
    collection: "Ceramic",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    colors: ["#F5F5F5", "#E8E8E8", "#FFFFFF"],
    allColors: ["#F5F5F5", "#E8E8E8", "#FFFFFF", "#FAFAFA", "#F0F0F0"],
    colorCount: 5,
    sizes: ["3 Sizes"],
    finishes: ["Polished", "Honed"],
    finishCount: 2,
    description: "Rich textured tiles with artisan finish",
  },
  {
    id: 6,
    name: "Slate Supreme",
    collection: "Engineered Stone",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752229-250ed79c35cc?w=800&q=80",
    colors: ["#2F4F4F", "#36454F", "#434343"],
    allColors: ["#2F4F4F", "#36454F", "#434343", "#28282B", "#353535"],
    colorCount: 5,
    sizes: ["2 Sizes"],
    finishes: ["Natural", "Textured"],
    finishCount: 2,
    description: "Classic stone-look porcelain with natural variation",
  },
  {
    id: 7,
    name: "Glossy Metro",
    collection: "Marble",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    colors: ["#FFFFFF", "#F0F0F0", "#E0E0E0"],
    allColors: ["#FFFFFF", "#F0F0F0", "#E0E0E0", "#D3D3D3", "#C0C0C0"],
    colorCount: 5,
    sizes: ["3 Sizes"],
    finishes: ["Gloss", "Matt"],
    finishCount: 2,
    description: "Modern brick-style ceramic tiles",
  },
  {
    id: 8,
    name: "Travertine Classic",
    collection: "Porcelain",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    colors: ["#D2B48C", "#DEB887", "#F5DEB3"],
    allColors: ["#D2B48C", "#DEB887", "#F5DEB3", "#FFE4B5", "#FFEFD5"],
    colorCount: 5,
    sizes: ["2 Sizes"],
    finishes: ["Tumbled", "Filled"],
    finishCount: 2,
    description: "Rustic Italian countryside aesthetics",
  },
  {
    id: 9,
    name: "Porcelain Black",
    collection: "Ceramic",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    colors: ["#1A1A1A", "#000000", "#0D0D0D"],
    allColors: ["#1A1A1A", "#000000", "#0D0D0D", "#141414", "#262626"],
    colorCount: 5,
    sizes: ["3 Sizes"],
    finishes: ["Polished", "Matt"],
    finishCount: 2,
    description: "Bold and dramatic black porcelain tiles",
  },
  {
    id: 10,
    name: "Wood Effect Oak",
    collection: "Engineered Stone",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752734-bd1a20394012?w=800&q=80",
    colors: ["#D2691E", "#8B4513", "#A0522D"],
    allColors: ["#D2691E", "#8B4513", "#A0522D", "#CD853F", "#DEB887"],
    colorCount: 5,
    sizes: ["3 Sizes"],
    finishes: ["Matt", "Grip"],
    finishCount: 2,
    description: "Authentic wood look with porcelain durability",
  },
  {
    id: 11,
    name: "Mosaic Art",
    collection: "Marble",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    colors: ["#4169E1", "#1E90FF", "#00BFFF"],
    allColors: ["#4169E1", "#1E90FF", "#00BFFF", "#87CEEB", "#87CEFA"],
    colorCount: 5,
    sizes: ["3 Sizes"],
    finishes: ["Gloss", "Iridescent"],
    finishCount: 2,
    description: "Decorative mosaic tiles for feature walls",
  },
  {
    id: 12,
    name: "Limestone Natural",
    collection: "Porcelain",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752229-250ed79c35cc?w=800&q=80",
    colors: ["#F5F5DC", "#EEE8AA", "#F0E68C"],
    allColors: ["#F5F5DC", "#EEE8AA", "#F0E68C", "#FAFAD2", "#FFFACD"],
    colorCount: 5,
    sizes: ["2 Sizes"],
    finishes: ["Honed", "Tumbled"],
    finishCount: 2,
    description: "Natural limestone with authentic texture",
  },
]

const filterCategories = {
  Material: ["Ceramic", "Engineered Stone", "Marble", "Porcelain", "Quartz"],
  Category: ["Mosaic Tiles", "Wall Tiles", "Floor Tiles", "Bespoke Ranges", "External 20mm Porcelain Tiles"],
  Colour: ["Beige", "Black", "Blue", "Brown", "Copper", "Cream", "Green", "Grey", "Orange", "Pink"],
  Style: ["Modern", "Classic", "Rustic", "Contemporary"],
}

export function TileGrid() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedTile, setSelectedTile] = useState<number | null>(null)
  const [expandedColors, setExpandedColors] = useState<number | null>(null)
  const { addItem } = useCart()

  const handleAddSample = (tile: typeof tiles[0], e: React.MouseEvent) => {
    e.stopPropagation()
    addItem({
      id: tile.id.toString(),
      name: tile.name,
      image: tile.image,
      color: tile.colors[0],
      size: tile.sizes[0],
      finish: tile.finishes[0],
    })
  }

  const selectedTileData = tiles.find((t) => t.id === selectedTile)

  const handleModalPrevious = () => {
    if (selectedTile === null) return
    const currentIdx = tiles.findIndex((t) => t.id === selectedTile)
    const newIdx = currentIdx === 0 ? tiles.length - 1 : currentIdx - 1
    setSelectedTile(tiles[newIdx].id)
  }

  const handleModalNext = () => {
    if (selectedTile === null) return
    const currentIdx = tiles.findIndex((t) => t.id === selectedTile)
    const newIdx = currentIdx === tiles.length - 1 ? 0 : currentIdx + 1
    setSelectedTile(tiles[newIdx].id)
  }

  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header - Like About Section */}
          <div className="pt-16 pb-8 border-b border-neutral-200">
            <motion.span 
              className="inline-block text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold border-b border-neutral-900 pb-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Collections
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Our Products
            </motion.h2>
          </div>

          {/* Filter Bar */}
          <div className="border-b border-neutral-200 py-4 mb-8">
            <div className="flex flex-wrap gap-6 items-center justify-end">
              {Object.entries(filterCategories).map(([categoryName, options]) => (
                <div key={categoryName} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === categoryName ? null : categoryName)}
                    className="text-xs uppercase tracking-wider text-neutral-700 hover:text-neutral-900 flex items-center gap-1.5 transition-colors"
                  >
                    {categoryName}
                    <ChevronDown 
                      className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        openDropdown === categoryName && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {openDropdown === categoryName && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 bg-white border border-neutral-200 shadow-lg z-50 min-w-[200px] max-h-[300px] overflow-y-auto"
                      >
                        {options.map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-50 cursor-pointer text-sm text-neutral-700"
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 border-neutral-300 rounded"
                            />
                            {option}
                          </label>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <button className="text-xs uppercase tracking-wider text-neutral-700 hover:text-neutral-900 flex items-center gap-2 border border-neutral-300 px-4 py-2 transition-colors">
                All Filters
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
            <AnimatePresence mode="popLayout">
              {tiles.map((tile) => (
                <motion.div
                  key={tile.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onMouseEnter={() => setHoveredId(tile.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group"
                >
                  {/* Card */}
                  <div className="bg-white overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 cursor-pointer mb-4">
                      <Image
                        src={tile.image}
                        alt={tile.name}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          hoveredId === tile.id ? "opacity-0 scale-110" : "opacity-100 scale-100"
                        }`}
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <Image
                        src={tile.hoverImage}
                        alt={`${tile.name} alternate`}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          hoveredId === tile.id ? "opacity-100 scale-100" : "opacity-0 scale-110"
                        }`}
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />

                      {/* Hover Icons */}
                      <div
                        className={`absolute top-3 right-3 flex gap-2 transition-opacity duration-300 ${
                          hoveredId === tile.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <button className="p-2 bg-white rounded-full hover:bg-neutral-100 transition-colors shadow-md">
                          <Heart size={14} />
                        </button>
                        <button
                          onClick={() => setSelectedTile(tile.id)}
                          className="p-2 bg-white rounded-full hover:bg-neutral-100 transition-colors shadow-md"
                        >
                          <Eye size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-neutral-900">{tile.name}</h3>

                      {/* Specifications */}
                      <div className="flex items-center gap-3 text-xs text-neutral-600 mb-3">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            />
                          </svg>
                          {tile.sizes[0]}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                          </svg>
                          {tile.colorCount} Colours
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {tile.finishCount} Finish{tile.finishCount > 1 ? "es" : ""}
                        </span>
                      </div>

                      {/* Colors */}
                      <div className="mb-3">
                        <div className="flex items-center gap-1 flex-wrap">
                          {(expandedColors === tile.id ? tile.allColors : tile.colors).map((color, idx) => (
                            <div
                              key={idx}
                              className="w-5 h-5 rounded-full border border-neutral-300"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                          {tile.colorCount > tile.colors.length && (
                            <button
                              onClick={() => setExpandedColors(expandedColors === tile.id ? null : tile.id)}
                              className="text-xs text-neutral-600 hover:text-neutral-900 ml-1 font-semibold"
                            >
                              {expandedColors === tile.id ? "−" : `+${tile.colorCount - tile.colors.length}`}
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Finishes */}
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {tile.finishes.map((finish, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 border border-neutral-300 text-[10px] uppercase tracking-wider"
                          >
                            {finish}
                          </span>
                        ))}
                      </div>

                      {/* Add to Sample */}
                      <button
                        onClick={(e) => handleAddSample(tile, e)}
                        className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1"
                      >
                        Add Sample to Basket
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal - Smaller Size */}
      <AnimatePresence>
        {selectedTile !== null && selectedTileData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedTile(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTile(null)}
              className="absolute top-6 right-6 z-50 p-2 text-neutral-800 bg-white hover:bg-neutral-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleModalPrevious()
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 bg-white hover:bg-neutral-100 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleModalNext()
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 bg-white hover:bg-neutral-100 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Modal Content - Reduced Size */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full bg-white max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-5">
                {/* Image - Takes 3 columns */}
                <div className="relative aspect-square bg-neutral-100 md:col-span-3">
                  <Image src={selectedTileData.image} alt={selectedTileData.name} fill className="object-cover" />

                  {/* Navigation Dots at Bottom */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    <button className="w-10 h-10 bg-white hover:bg-neutral-100 flex items-center justify-center">
                      <ChevronLeft size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white hover:bg-neutral-100 flex items-center justify-center">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Details - Takes 2 columns */}
                <div className="p-6 flex flex-col md:col-span-2 overflow-y-auto max-h-[85vh]">
                  <h3 className="text-xl font-medium mb-1">{selectedTileData.name}</h3>
                  <p className="text-xs text-neutral-600 mb-5">Porcelain Tiles</p>

                  <div className="space-y-3 mb-5">
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      <span>{selectedTileData.sizes[0]}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                      <span>{selectedTileData.colorCount} Colours</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>
                        {selectedTileData.finishCount} Finish{selectedTileData.finishCount > 1 ? "es" : ""}
                      </span>
                    </div>
                  </div>

                  {/* Order Samples Section */}
                  <div className="mb-5">
                    <h4 className="font-medium mb-3 text-sm">Order Samples</h4>
                    <div className="grid grid-cols-4 gap-1.5 max-h-32 overflow-y-auto">
                      {selectedTileData.allColors.map((color, idx) => (
                        <button
                          key={idx}
                          className="relative aspect-square border border-neutral-300 hover:border-neutral-900 transition-colors"
                          style={{ backgroundColor: color }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors">
                            <Download size={12} className="text-white opacity-0 hover:opacity-100" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Finishes */}
                  <div className="mb-5">
                    <h4 className="font-medium mb-2 text-xs">Finishes</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTileData.finishes.map((finish, idx) => (
                        <button key={idx} className="px-3 py-1.5 border border-neutral-300 text-xs hover:bg-neutral-100 transition-colors">
                          {finish}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto space-y-2.5">
                    <Button
                      onClick={(e) => {
                        handleAddSample(selectedTileData, e)
                        setSelectedTile(null)
                      }}
                      className="w-full bg-neutral-700 hover:bg-neutral-900 text-white py-5 rounded-none flex items-center justify-center gap-2 text-sm"
                    >
                      Order Samples
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>

                    <p className="text-[10px] text-neutral-600 text-center leading-relaxed">
                      UK Stocked samples are available with <strong>free next day delivery</strong> when orders are placed before 12pm.
                    </p>

                    <div className="grid grid-cols-2 gap-1.5">
                      <Button variant="outline" className="rounded-none text-[10px] py-2">
                        <Download size={10} className="mr-1.5" />
                        Download Image
                      </Button>
                      <Button variant="outline" className="rounded-none text-[10px] py-2">
                        <Download size={10} className="mr-1.5" />
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}