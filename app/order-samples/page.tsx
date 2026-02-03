"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Trash2, ArrowRight, ArrowLeft, Info, X, Eye, Heart, ExternalLink, Download, ChevronLeft, ChevronRight } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const sampleTiles = [
  {
    id: "t1",
    collection: "Heritage Terracotta",
    name: "Classic Terracotta",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752734-bd1a20394012?w=800&q=80",
    finish: "Matte",
    origin: "Tuscany, Italy",
    colors: ["#C67C5C", "#B86B4A", "#A85A38", "#984926"],
    colorCount: 4,
    size: "2 Sizes",
    finishes: ["Matte", "Textured"],
    finishCount: 2,
    description: "Warm terracotta tiles with authentic Italian craftsmanship and natural texture variations.",
  },
  {
    id: "t2",
    collection: "Basalt Stone",
    name: "Architectural Graphite",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752229-250ed79c35cc?w=800&q=80",
    finish: "Honed",
    origin: "Belgium",
    colors: ["#4A4A4A", "#3A3A3A", "#2A2A2A", "#1A1A1A"],
    colorCount: 4,
    size: "3 Sizes",
    finishes: ["Honed", "Polished", "Textured"],
    finishCount: 3,
    description: "Contemporary basalt-inspired tiles with sophisticated grey tones and modern aesthetics.",
  },
  {
    id: "t3",
    collection: "Vitreous Glaze",
    name: "Glazed Emerald",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    finish: "High Gloss",
    origin: "Valencia, Spain",
    colors: ["#2A5A4A", "#1A4A3A", "#0A3A2A", "#1A5A5A"],
    colorCount: 4,
    size: "1 Size",
    finishes: ["High Gloss", "Satin"],
    finishCount: 2,
    description: "Rich emerald glazed tiles with stunning high-gloss finish and vibrant color depth.",
  },
  {
    id: "t4",
    collection: "Sediment Limestone",
    name: "Bone Limestone",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    finish: "Brushed",
    origin: "Portugal",
    colors: ["#E8E0D0", "#D8D0C0", "#C8C0B0", "#B8B0A0"],
    colorCount: 4,
    size: "4 Sizes",
    finishes: ["Brushed", "Honed", "Tumbled"],
    finishCount: 3,
    description: "Natural limestone with warm beige tones and organic sediment patterns.",
  },
  {
    id: "t5",
    collection: "Obsidian Slate",
    name: "Midnight Slate",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    finish: "Natural Cleft",
    origin: "Wales, UK",
    colors: ["#2A2A3A", "#1A1A2A", "#0A0A1A", "#3A3A4A"],
    colorCount: 4,
    size: "2 Sizes",
    finishes: ["Natural Cleft", "Honed"],
    finishCount: 2,
    description: "Dramatic dark slate with natural texture and authentic Welsh stone character.",
  },
  {
    id: "t6",
    collection: "Alabaster Ceramic",
    name: "Ivory Ceramic",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    finish: "Satin",
    origin: "Limoges, France",
    colors: ["#F8F8F0", "#F0F0E8", "#E8E8E0", "#E0E0D8"],
    colorCount: 4,
    size: "3 Sizes",
    finishes: ["Satin", "Matte", "Gloss"],
    finishCount: 3,
    description: "Elegant ivory ceramic with soft satin finish and timeless French sophistication.",
  },
  {
    id: "t7",
    collection: "Azure Collection",
    name: "Ocean Blue Ceramic",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
    finish: "Gloss",
    origin: "Santorini, Greece",
    colors: ["#4A7A9A", "#3A6A8A", "#2A5A7A", "#1A4A6A"],
    colorCount: 4,
    size: "2 Sizes",
    finishes: ["Gloss", "Matte"],
    finishCount: 2,
    description: "Mediterranean-inspired blue tiles capturing the essence of Aegean waters.",
  },
  {
    id: "t8",
    collection: "Sunset Collection",
    name: "Amber Clay",
    image: "https://images.unsplash.com/photo-1600566752229-250ed79c35cc?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80",
    finish: "Textured",
    origin: "Morocco",
    colors: ["#D89860", "#C88850", "#B87840", "#A86830"],
    colorCount: 4,
    size: "3 Sizes",
    finishes: ["Textured", "Smooth", "Rustic"],
    finishCount: 3,
    description: "Warm amber tiles with rich clay tones and handcrafted Moroccan textures.",
  },
]

export default function OrderSamplesPage() {
  const [step, setStep] = useState(1)
  const { items, addItem, removeItem, clearCart, setIsOpen } = useCart()
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedSample, setSelectedSample] = useState<string | null>(null)
  const [expandedColors, setExpandedColors] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    address: "",
    city: "",
    postcode: "",
    projectType: "Residential",
  })

  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
    setTimeout(() => clearCart(), 1500)
  }

  const handleAddToBasket = (tile: typeof sampleTiles[0], e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (items.length >= 4) {
      alert("Maximum 4 samples allowed")
      return
    }
    addItem({
      id: tile.id,
      name: tile.name,
      image: tile.image,
      color: tile.colors[0],
      size: "Specimen",
    })
    setIsOpen(true)
  }

  const selectedSampleData = sampleTiles.find(s => s.id === selectedSample)

  const handleModalPrevious = () => {
    if (selectedSample === null) return
    const currentIdx = sampleTiles.findIndex(s => s.id === selectedSample)
    const newIdx = currentIdx === 0 ? sampleTiles.length - 1 : currentIdx - 1
    setSelectedSample(sampleTiles[newIdx].id)
  }

  const handleModalNext = () => {
    if (selectedSample === null) return
    const currentIdx = sampleTiles.findIndex(s => s.id === selectedSample)
    const newIdx = currentIdx === sampleTiles.length - 1 ? 0 : currentIdx + 1
    setSelectedSample(sampleTiles[newIdx].id)
  }

  return (
    <>
      <div className="pt-40 pb-32 bg-zinc-50 min-h-screen">
        <div className="container mx-auto px-8 max-w-7xl">
          <header className="mb-20 text-center">
            <motion.span 
              className="inline-block text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold border-b border-zinc-900 pb-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional Services
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 text-zinc-900 tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Order <span className="text-zinc-400 italic font-light">Free Samples</span>
            </motion.h1>
            <motion.p 
              className="text-zinc-600 text-xs max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Architectural samples are provided free of charge to design professionals. Select up to 4 specimens for your
              project moodboard.
            </motion.p>
          </header>

          <div className="max-w-xs mx-auto mb-20">
            <div className="h-[2px] w-full bg-zinc-200 relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-zinc-900"
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <div className="flex justify-between mt-4">
                {[1, 2, 3].map((s) => (
                  <span
                    key={s}
                    className={cn(
                      "text-[8px] uppercase tracking-widest font-bold transition-colors duration-500",
                      step >= s ? "text-zinc-900" : "text-zinc-400",
                    )}
                  >
                    Step 0{s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-4 gap-16"
              >
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sampleTiles.map((tile) => {
                      const isInCart = items.some((i) => i.id === tile.id)
                      return (
                        <div 
                          key={tile.id} 
                          className="group"
                          onMouseEnter={() => setHoveredId(tile.id)}
                          onMouseLeave={() => setHoveredId(null)}
                        >
                          {/* Card */}
                          <div className="bg-white border border-zinc-200 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300">
                            {/* Image with Hover */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                              {/* Default Image */}
                              <Image
                                src={tile.image}
                                alt={tile.name}
                                fill
                                className={`object-cover transition-all duration-700 ${
                                  hoveredId === tile.id ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                                }`}
                                sizes="(max-width: 768px) 100vw, 25vw"
                              />
                              
                              {/* Hover Image */}
                              <Image
                                src={tile.hoverImage}
                                alt={`${tile.name} alternate`}
                                fill
                                className={`object-cover transition-all duration-700 ${
                                  hoveredId === tile.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                                }`}
                                sizes="(max-width: 768px) 100vw, 25vw"
                              />
                              
                              {/* Hover Overlay */}
                              <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                                hoveredId === tile.id ? 'opacity-100' : 'opacity-0'
                              }`}>
                                <div className="absolute top-3 right-3 flex gap-2">
                                  <button className="p-2 bg-white rounded-full hover:bg-zinc-100 transition-colors">
                                    <Heart size={14} />
                                  </button>
                                  <button 
                                    onClick={() => setSelectedSample(tile.id)}
                                    className="p-2 bg-white rounded-full hover:bg-zinc-100 transition-colors"
                                  >
                                    <Eye size={14} />
                                  </button>
                                  <button className="p-2 bg-white rounded-full hover:bg-zinc-100 transition-colors">
                                    <ExternalLink size={14} />
                                  </button>
                                </div>
                              </div>

                              {/* Selected Badge */}
                              {isInCart && (
                                <div className="absolute top-3 left-3 bg-zinc-900 text-white px-3 py-1 text-[9px] uppercase tracking-wider font-bold">
                                  Selected
                                </div>
                              )}
                            </div>

                            {/* Card Content */}
                            <div className="p-4">
                              {/* Collection Label */}
                              <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-400 font-bold block mb-1">
                                {tile.collection}
                              </span>
                              
                              {/* Title */}
                              <h3 className="text-sm font-semibold mb-3 text-zinc-900">{tile.name}</h3>

                              {/* Specifications */}
                              <div className="flex items-center gap-3 text-[10px] text-zinc-500 mb-3 flex-wrap">
                                <span className="flex items-center gap-1">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                  </svg>
                                  {tile.size}
                                </span>
                                <span className="flex items-center gap-1">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                  </svg>
                                  {tile.colorCount} Colours
                                </span>
                              </div>

                              {/* Colors */}
                              <div className="mb-3">
                                <div className="flex items-center gap-1 flex-wrap">
                                  {tile.colors.map((color, idx) => (
                                    <div
                                      key={idx}
                                      className="w-5 h-5 rounded-full border border-zinc-300 shadow-sm"
                                      style={{ backgroundColor: color }}
                                    />
                                  ))}
                                </div>
                              </div>

                              {/* Finishes */}
                              <div className="flex gap-2 mb-4 flex-wrap">
                                {tile.finishes.slice(0, 2).map((finish, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-1 border border-zinc-300 text-[9px] uppercase tracking-wider"
                                  >
                                    {finish}
                                  </span>
                                ))}
                              </div>

                              {/* Add to Basket Button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  if (!isInCart) {
                                    handleAddToBasket(tile, e)
                                  }
                                }}
                                disabled={isInCart}
                                className={cn(
                                  "w-full text-[10px] uppercase tracking-wider font-bold py-2 transition-all duration-300",
                                  isInCart 
                                    ? "bg-zinc-900 text-white cursor-default" 
                                    : "bg-transparent text-zinc-600 hover:text-zinc-900 border border-zinc-300 hover:border-zinc-900"
                                )}
                              >
                                {isInCart ? "In Basket" : "Add Sample →"}
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                  <div className="sticky top-40 bg-white p-8 border border-zinc-200 shadow-sm">
                    <h3 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-zinc-900">Your Selection</h3>
                    {items.length === 0 ? (
                      <div className="py-12 text-center border-y border-dashed border-zinc-200 mb-12">
                        <p className="text-[10px] uppercase tracking-widest text-zinc-400">Basket Empty</p>
                      </div>
                    ) : (
                      <div className="space-y-6 mb-12">
                        {items.map((item) => (
                          <div key={item.id} className="flex gap-4 items-center group">
                            <div className="w-12 h-12 relative">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] uppercase tracking-widest font-bold truncate text-zinc-900">{item.name}</p>
                              <p className="text-[9px] text-zinc-500">Architectural Specimen</p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-zinc-400 hover:text-zinc-900 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-4">
                        <span>Total Samples</span>
                        <span className="text-zinc-900">{items.length} / 4</span>
                      </div>
                      <Button
                        disabled={items.length === 0}
                        onClick={handleNext}
                        className="w-full rounded-none h-14 uppercase text-[10px] font-bold tracking-[0.2em] bg-zinc-900 hover:bg-zinc-700"
                      >
                        Shipping Details <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </aside>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl mx-auto"
              >
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-16 bg-white p-12 lg:p-20 border border-zinc-200 shadow-lg"
                >
                  <div className="lg:col-span-2 space-y-12">
                    <div className="space-y-8">
                      <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                          <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 group-focus-within:text-zinc-900 transition-colors">
                            First Name
                          </label>
                          <input
                            required
                            type="text"
                            className="w-full bg-transparent border-b border-zinc-200 py-4 outline-none focus:border-zinc-900 transition-colors text-sm font-medium"
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2 group">
                          <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 group-focus-within:text-zinc-900 transition-colors">
                            Last Name
                          </label>
                          <input
                            required
                            type="text"
                            className="w-full bg-transparent border-b border-zinc-200 py-4 outline-none focus:border-zinc-900 transition-colors text-sm font-medium"
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                          <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 group-focus-within:text-zinc-900 transition-colors">
                            Email Address
                          </label>
                          <input
                            required
                            type="email"
                            className="w-full bg-transparent border-b border-zinc-200 py-4 outline-none focus:border-zinc-900 transition-colors text-sm font-medium"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2 group">
                          <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 group-focus-within:text-zinc-900 transition-colors">
                            Company / Studio
                          </label>
                          <input
                            required
                            type="text"
                            className="w-full bg-transparent border-b border-zinc-200 py-4 outline-none focus:border-zinc-900 transition-colors text-sm font-medium"
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900">Dispatch Address</h3>
                      <div className="space-y-2 group">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 group-focus-within:text-zinc-900 transition-colors">
                          Full Shipping Address
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-transparent border-b border-zinc-200 py-4 outline-none focus:border-zinc-900 transition-colors text-sm font-medium"
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                          <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 group-focus-within:text-zinc-900 transition-colors">
                            City
                          </label>
                          <input
                            required
                            type="text"
                            className="w-full bg-transparent border-b border-zinc-200 py-4 outline-none focus:border-zinc-900 transition-colors text-sm font-medium"
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2 group">
                          <label className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 group-focus-within:text-zinc-900 transition-colors">
                            Postcode
                          </label>
                          <input
                            required
                            type="text"
                            className="w-full bg-transparent border-b border-zinc-200 py-4 outline-none focus:border-zinc-900 transition-colors text-sm font-medium"
                            onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1 space-y-12">
                    <div className="bg-zinc-50 p-8 space-y-6 border border-zinc-200">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                        <Info size={14} className="text-zinc-900" /> Atelier Policy
                      </h4>
                      <p className="text-[11px] leading-relaxed text-zinc-600 font-light">
                        Samples are dispatched via Express Courier within 24 hours. Professional verification may be
                        required for studio orders.
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 pt-12">
                      <Button
                        type="submit"
                        className="w-full rounded-none h-16 uppercase text-[10px] font-bold tracking-[0.2em] bg-zinc-900 hover:bg-zinc-700"
                      >
                        Request Dispatch
                      </Button>
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-[9px] uppercase tracking-[0.3em] font-bold text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center gap-2"
                      >
                        <ArrowLeft size={12} /> Back to Selection
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-32 max-w-2xl mx-auto"
              >
                <div className="w-24 h-24 border-2 border-zinc-900 rounded-full flex items-center justify-center mx-auto mb-12">
                  <CheckCircle2 size={48} className="text-zinc-900" />
                </div>
                <h2 className="text-5xl font-bold mb-8 leading-tight text-zinc-900">
                  Your Samples are <br /> <span className="text-zinc-400 italic font-light">Being Prepared</span>
                </h2>
                <p className="text-zinc-600 font-light leading-relaxed mb-16 text-lg">
                  Thank you, {formData.firstName}. We have received your architectural sample request for{" "}
                  {formData.company}. A tracking number will be sent to {formData.email} shortly.
                </p>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="rounded-none px-16 py-8 uppercase text-[10px] font-bold tracking-[0.3em] border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all bg-transparent"
                  >
                    Return to Main Studio
                  </Button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSample !== null && selectedSampleData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedSample(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedSample(null)}
              className="absolute top-4 right-4 z-50 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleModalPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleModalNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square bg-zinc-100">
                  <Image
                    src={selectedSampleData.image}
                    alt={selectedSampleData.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2">
                    {selectedSampleData.collection}
                  </span>
                  <h3 className="text-2xl font-bold mb-1 text-zinc-900">{selectedSampleData.name}</h3>
                  <p className="text-sm text-zinc-500 mb-6">{selectedSampleData.origin}</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500 w-20 uppercase tracking-wider">Size</span>
                      <span className="text-sm font-medium">{selectedSampleData.size}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500 w-20 uppercase tracking-wider">Colours</span>
                      <div className="flex gap-1 flex-wrap">
                        {selectedSampleData.colors.map((color, idx) => (
                          <div
                            key={idx}
                            className="w-6 h-6 rounded-full border border-zinc-300 shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs text-zinc-500 w-20 uppercase tracking-wider">Finishes</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedSampleData.finishes.map((finish, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-zinc-900 text-white text-xs uppercase tracking-wider"
                          >
                            {finish}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 mb-6 leading-relaxed">{selectedSampleData.description}</p>

                  <div className="mt-auto space-y-3">
                    <Button 
                      onClick={(e) => {
                        handleAddToBasket(selectedSampleData, e)
                        setSelectedSample(null)
                      }}
                      className="w-full bg-zinc-900 hover:bg-zinc-700 text-white py-6 rounded-none uppercase text-[10px] tracking-wider font-bold"
                    >
                      Order Samples →
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="rounded-none border-zinc-300 text-[10px] uppercase tracking-wider">
                        <Download size={14} className="mr-2" />
                        Image
                      </Button>
                      <Button variant="outline" className="rounded-none border-zinc-300 text-[10px] uppercase tracking-wider">
                        <Download size={14} className="mr-2" />
                        Brochure
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