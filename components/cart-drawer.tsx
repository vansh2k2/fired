"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Trash2, ArrowRight, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import Link from "next/link"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-background border-l z-[101] flex flex-col"
          >
            <div className="p-8 border-b flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-serif">Sample Pack</h2>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-1">
                  Your Architectural Selections
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag size={48} strokeWidth={1} className="mb-4" />
                  <p className="text-sm uppercase tracking-widest">Your sample pack is empty</p>
                </div>
              ) : (
                <div className="space-y-10">
                  {items.map((item) => (
                    <motion.div layout key={item.id} className="flex gap-6 items-start group">
                      <div className="relative w-24 aspect-square flex-shrink-0 border overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-serif text-lg leading-tight mb-1">{item.name}</h4>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-3">
                          {item.color} • {item.size}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[10px] uppercase tracking-[0.2em] font-bold text-destructive flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-8 border-t bg-secondary/20">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">
                    Total Items
                  </p>
                  <p className="text-xl font-serif">{items.length} Samples</p>
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-primary italic">
                  Free Shipping Included
                </p>
              </div>
              <Link href="/order-samples">
                <Button
                  disabled={items.length === 0}
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-none py-8 uppercase tracking-[0.3em] text-xs font-bold"
                >
                  Confirm Selection <ArrowRight size={16} className="ml-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
