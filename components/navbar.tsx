"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCart } from "@/hooks/use-cart"
import { AnimatePresence, motion } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const { items, setIsOpen: setCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
    }
    
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Projects", href: "/projects" },
    { name: "Departments", href: "/departments" },
    { name: "Company", href: "/company" },
    { name: "Downloads", href: "/downloads" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out",
          isHome && !isScrolled
            ? "bg-transparent py-8 translate-y-0"
            : "bg-white/95 backdrop-blur-md py-2 border-b border-black/5 shadow-sm translate-y-0",
        )}
        style={{
          transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
          animation: isScrolled ? 'slideDown 0.5s ease-out' : 'none'
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "transition-all duration-500 hover:opacity-80 mr-16",
            )}
          >
            {isHome && !isScrolled ? (
              <div className="flex flex-col items-start">
                <span 
                  className="text-2xl font-bold tracking-tight text-white"
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}
                >
                  FIREDCLAY
                </span>
                <span 
                  className="text-[11px] font-light tracking-[0.3em] text-white/70 -mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  ORIGINALS
                </span>
              </div>
            ) : (
              <img 
                src="/logo.png" 
                alt="Firedclay Originals" 
                className="h-20 w-auto object-contain"
              />
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-7 mr-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 relative group",
                  isHome && !isScrolled ? "text-white/95 hover:text-white" : "text-black/75 hover:text-black",
                )}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full",
                  isHome && !isScrolled ? "bg-white" : "bg-black"
                )} />
              </Link>
            ))}
          </div>

          <div
            className={cn(
              "flex items-center gap-6 transition-colors duration-300",
              isHome && !isScrolled ? "text-white" : "text-black",
            )}
          >
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:opacity-70 transition-opacity"
            >
              <Search size={20} />
            </button>
            <button onClick={() => setCartOpen(true)} className="relative hover:opacity-70 transition-opacity">
              <ShoppingBag size={19} />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {items.length}
                </span>
              )}
            </button>
            <Link href="/order-samples">
              <Button
                variant="outline"
                className={cn(
                  "hidden sm:flex rounded-none uppercase text-[11px] tracking-[0.12em] font-semibold px-6 h-10 transition-all duration-300",
                  isHome && !isScrolled
                    ? "border-white/40 text-white hover:bg-white hover:text-black bg-transparent"
                    : "border-black text-black hover:bg-black hover:text-white bg-transparent",
                )}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Order Samples
              </Button>
            </Link>
            <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-white z-[60] flex items-center justify-center"
          >
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 text-black/60 hover:text-black transition-colors hover:rotate-90 duration-300"
            >
              <X size={32} />
            </motion.button>
            
            <motion.div 
              className="w-full max-w-3xl px-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="flex items-center border-b-2 border-black pb-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Search size={28} className="text-black/40 mr-4" />
                </motion.div>
                <input
                  type="text"
                  placeholder="Search for tiles, collections, projects..."
                  className="flex-1 text-2xl outline-none bg-transparent placeholder:text-black/30"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  autoFocus
                />
              </div>
              <motion.p 
                className="text-sm text-black/50 mt-6 uppercase tracking-wider" 
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                Popular searches: Terracotta, Handmade tiles, Wall tiles, Floor tiles
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <span 
                    className="text-lg font-semibold tracking-wider uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Menu
                  </span>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="flex flex-col space-y-1 px-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-base uppercase tracking-[0.12em] font-medium py-4 border-b border-black/5 hover:text-primary transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-8 px-6">
                    <Link href="/order-samples" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button 
                        className="w-full rounded-none uppercase text-xs tracking-[0.15em] font-semibold h-12 bg-black hover:bg-black/90"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Order Free Samples
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="p-6 border-t bg-gray-50">
                  <p 
                    className="text-xs text-black/50 uppercase tracking-wider"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Est. 1984 — European Craft
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}