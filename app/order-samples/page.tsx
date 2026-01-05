"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Trash2, ArrowRight, ArrowLeft, Info } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const sampleTiles = [
  {
    id: "t1",
    collection: "Heritage",
    name: "Classic Terracotta",
    image: "/terracotta-tile-sample.jpg",
    finish: "Matte",
    origin: "Tuscany, Italy",
  },
  {
    id: "t2",
    collection: "Basalt",
    name: "Architectural Graphite",
    image: "/grey-stone-tile-sample.jpg",
    finish: "Honed",
    origin: "Belgium",
  },
  {
    id: "t3",
    collection: "Vitreous",
    name: "Glazed Emerald",
    image: "/luxury-glazed-tiles.jpg",
    finish: "High Gloss",
    origin: "Valencia, Spain",
  },
  {
    id: "t4",
    collection: "Sediment",
    name: "Bone Limestone",
    image: "/modern-stone-tiles.jpg",
    finish: "Brushed",
    origin: "Portugal",
  },
  {
    id: "t5",
    collection: "Obsidian",
    name: "Midnight Slate",
    image: "/dark-stone-tile-close-up.jpg",
    finish: "Natural Cleft",
    origin: "Wales, UK",
  },
  {
    id: "t6",
    collection: "Alabaster",
    name: "Ivory Ceramic",
    image: "/minimalist-tile-layout.jpg",
    finish: "Satin",
    origin: "Limoges, France",
  },
]

export default function OrderSamplesPage() {
  const [step, setStep] = useState(1)
  const { items, addItem, removeItem, clearCart, setIsOpen } = useCart()
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

  return (
    <div className="pt-40 pb-32 bg-background min-h-screen">
      <div className="container mx-auto px-8 max-w-7xl">
        <header className="mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-6 block">
            PROFESSIONAL SERVICES
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">
            Order <span className="italic font-light">Free Samples</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Architectural samples are provided free of charge to design professionals. Select up to 4 specimens for your
            project moodboard.
          </p>
        </header>

        <div className="max-w-xs mx-auto mb-20">
          <div className="h-[2px] w-full bg-border relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary"
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <div className="flex justify-between mt-4">
              {[1, 2, 3].map((s) => (
                <span
                  key={s}
                  className={cn(
                    "text-[8px] uppercase tracking-widest font-bold transition-colors duration-500",
                    step >= s ? "text-primary" : "text-muted-foreground",
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {sampleTiles.map((tile) => {
                    const isInCart = items.some((i) => i.id === tile.id)
                    return (
                      <div key={tile.id} className="group">
                        <div className="relative aspect-square mb-6 overflow-hidden bg-secondary/20">
                          <Image
                            src={tile.image || "/placeholder.svg"}
                            alt={tile.name}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />
                          <button
                            onClick={() => {
                              if (!isInCart) {
                                addItem({
                                  id: tile.id,
                                  name: tile.name,
                                  image: tile.image,
                                  color: "Standard",
                                  size: "Specimen",
                                })
                                setIsOpen(true)
                              }
                            }}
                            className={cn(
                              "absolute bottom-0 left-0 w-full py-4 uppercase text-[10px] tracking-widest font-bold transition-all duration-500 transform",
                              isInCart
                                ? "bg-primary text-white translate-y-0"
                                : "bg-white text-black translate-y-full group-hover:translate-y-0",
                            )}
                          >
                            {isInCart ? "Selected" : "Add to Tray"}
                          </button>
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                              {tile.collection}
                            </span>
                            <h3 className="font-serif text-lg">{tile.name}</h3>
                          </div>
                          <span className="text-[10px] text-muted-foreground italic">{tile.finish}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="sticky top-40 bg-white p-10 border border-border/50 shadow-sm">
                  <h3 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-primary">Your Selection</h3>
                  {items.length === 0 ? (
                    <div className="py-12 text-center border-y border-dashed border-border mb-12">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Tray Empty</p>
                    </div>
                  ) : (
                    <div className="space-y-6 mb-12">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4 items-center group">
                          <div className="w-12 h-12 relative grayscale group-hover:grayscale-0 transition-all">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] uppercase tracking-widest font-bold truncate">{item.name}</p>
                            <p className="text-[9px] text-muted-foreground">Architectural Specimen</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">
                      <span>Total Samples</span>
                      <span>{items.length} / 4</span>
                    </div>
                    <Button
                      disabled={items.length === 0}
                      onClick={handleNext}
                      className="w-full rounded-none h-16 uppercase text-[10px] font-bold tracking-[0.2em]"
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
                className="grid grid-cols-1 lg:grid-cols-3 gap-16 bg-white p-12 lg:p-20 border border-border/50 shadow-lg"
              >
                <div className="lg:col-span-2 space-y-12">
                  <div className="space-y-8">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2 group">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground group-focus-within:text-primary transition-colors">
                          First Name
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-primary transition-colors text-sm font-medium"
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground group-focus-within:text-primary transition-colors">
                          Last Name
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-primary transition-colors text-sm font-medium"
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2 group">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground group-focus-within:text-primary transition-colors">
                          Email Address
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-primary transition-colors text-sm font-medium"
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground group-focus-within:text-primary transition-colors">
                          Company / Studio
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-primary transition-colors text-sm font-medium"
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Dispatch Address</h3>
                    <div className="space-y-2 group">
                      <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground group-focus-within:text-primary transition-colors">
                        Full Shipping Address
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-primary transition-colors text-sm font-medium"
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2 group">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground group-focus-within:text-primary transition-colors">
                          City
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-primary transition-colors text-sm font-medium"
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground group-focus-within:text-primary transition-colors">
                          Postcode
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-primary transition-colors text-sm font-medium"
                          onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1 space-y-12">
                  <div className="bg-secondary/20 p-8 space-y-6">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                      <Info size={14} className="text-primary" /> Atelier Policy
                    </h4>
                    <p className="text-[11px] leading-relaxed text-muted-foreground font-light">
                      Samples are dispatched via Express Courier within 24 hours. Professional verification may be
                      required for studio orders.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 pt-12">
                    <Button
                      type="submit"
                      className="w-full rounded-none h-16 uppercase text-[10px] font-bold tracking-[0.2em]"
                    >
                      Request Dispatch
                    </Button>
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
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
              <div className="w-24 h-24 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-12">
                <CheckCircle2 size={48} className="text-primary" />
              </div>
              <h2 className="text-5xl font-serif mb-8 leading-tight">
                Your Samples are <br /> <span className="italic font-light">Being Prepared</span>
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-16 text-lg">
                Thank you, {formData.firstName}. We have received your architectural sample request for{" "}
                {formData.company}. A tracking number will be sent to {formData.email} shortly.
              </p>
              <Link href="/">
                <Button
                  variant="outline"
                  className="rounded-none px-16 py-8 uppercase text-[10px] font-bold tracking-[0.3em] border-foreground/20 hover:bg-foreground hover:text-background transition-all bg-transparent"
                >
                  Return to Main Studio
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
