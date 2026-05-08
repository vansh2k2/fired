"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ShoppingBag, Menu, X, LogOut, User, Package, Settings, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCart } from "@/hooks/use-cart"
import { AnimatePresence, motion } from "framer-motion"
import { useAuth } from "@/contexts/AuthContext"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const { items, setIsOpen: setCartOpen } = useCart()
  const { user, logout } = useAuth()

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

  const leftNavLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    // { name: "Projects", href: "/projects" },
    // { name: "Departments", href: "/departments" },
  ]

  const rightNavLinks = [
    // { name: "Company", href: "/company" },
    { name: "Downloads", href: "/downloads" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out",
          isHome && !isScrolled
            ? "bg-transparent py-4"
            : "bg-white/95 backdrop-blur-md py-2 border-b border-black/5 shadow-sm",
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 lg:-ml-24">
            {/* Left Navigation Links - Flexible container */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-7 flex-1 max-w-[380px] justify-end">
              {leftNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[11px] xl:text-[13px] uppercase tracking-[0.1em] xl:tracking-[0.15em] font-medium transition-all duration-300 relative group whitespace-nowrap",
                    isHome && !isScrolled ? "text-white/95 hover:text-white" : "text-black hover:text-black/70",
                  )}
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full",
                    isHome && !isScrolled ? "bg-white" : "bg-black"
                  )} />
                </Link>
              ))}
            </div>

            {/* Centered Logo - Fixed width */}
            <Link
              href="/"
              className={cn(
                "transition-all duration-500 hover:opacity-80 flex-shrink-0",
              )}
            >
              {isHome && !isScrolled ? (
                <div className="flex flex-col items-center min-w-[120px] xl:min-w-[160px]">
                  <span 
                    className="text-xl xl:text-2xl font-bold tracking-tight text-white"
                    style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: '0.02em' }}
                  >
                    FIREDCLAY
                  </span>
                  <span 
                    className="text-[9px] xl:text-[11px] font-light tracking-[0.3em] text-white/70 -mt-1"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    ORIGINALS
                  </span>
                </div>
              ) : (
                <div className="min-w-[120px] xl:min-w-[160px] flex justify-center">
                  <img 
                    src="/logo.png" 
                    alt="Firedclay Originals" 
                    className="h-12 xl:h-16 w-auto object-contain"
                  />
                </div>
              )}
            </Link>

            {/* Right Navigation Links - Flexible container */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-7 flex-1 max-w-[380px]">
              {rightNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[11px] xl:text-[13px] uppercase tracking-[0.1em] xl:tracking-[0.15em] font-medium transition-all duration-300 relative group whitespace-nowrap",
                    isHome && !isScrolled ? "text-white/95 hover:text-white" : "text-black hover:text-black/70",
                  )}
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full",
                    isHome && !isScrolled ? "bg-white" : "bg-black"
                  )} />
                </Link>
              ))}
            </div>

            {/* Right Side Icons - Positioned to the right */}
            <div
              className={cn(
                "flex items-center gap-4 xl:gap-6 ml-auto lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 transition-colors duration-300",
                isHome && !isScrolled ? "text-white" : "text-black",
              )}
            >
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:opacity-70 transition-opacity"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button 
                onClick={() => setCartOpen(true)} 
                className="relative hover:opacity-70 transition-opacity"
                aria-label="Shopping cart"
              >
                <ShoppingBag size={19} />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {items.length}
                  </span>
                )}
              </button>
              <Link href="/order-samples">
                <Button
                  variant="outline"
                  className={cn(
                    "hidden xl:flex rounded-none uppercase text-[11px] tracking-[0.12em] font-semibold px-5 h-9 transition-all duration-300",
                    isHome && !isScrolled
                      ? "border-white/40 text-white hover:bg-white hover:text-black bg-transparent"
                      : "border-black text-black hover:bg-black hover:text-white bg-transparent",
                  )}
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Order Samples
                </Button>
              </Link>
              {/* ── Auth area: logged-in user OR hanging Login ── */}
              {user ? (
                /* User is logged in → show name + dropdown */
                <div className="relative hidden sm:flex items-center">
                  <button
                    onClick={() => setIsUserMenuOpen(v => !v)}
                    className={cn(
                      "flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 px-3 py-2 border group",
                      isHome && !isScrolled
                        ? "border-white/30 text-white hover:bg-white/10"
                        : "border-black/15 text-black hover:border-black/40"
                    )}
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    <div className={cn(
                      "w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-black",
                      isHome && !isScrolled ? "bg-white text-black" : "bg-black text-white"
                    )}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span>{user.name.split(" ")[0]}</span>
                  </button>

                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full right-0 mt-2 w-48 bg-white border border-black/10 shadow-xl z-50"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        <div className="px-4 py-3 border-b border-black/8">
                          <p className="text-[11px] font-bold text-black uppercase tracking-wider">{user.name}</p>
                          <p className="text-[10px] text-black/40 mt-0.5">{user.phone}</p>
                        </div>
                        <div className="py-1">
                          <Link
                            href="/account"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-black hover:bg-zinc-50 transition-colors border-b border-black/5"
                          >
                            <User size={14} className="text-zinc-400" />
                            View Account
                          </Link>
                          <Link
                            href="/account?tab=orders"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-black hover:bg-zinc-50 transition-colors border-b border-black/5"
                          >
                            <Package size={14} className="text-zinc-400" />
                            Manage Orders
                          </Link>
                          <Link
                            href="/account?tab=orders"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-black hover:bg-zinc-50 transition-colors border-b border-black/5"
                          >
                            <ShoppingBag size={14} className="text-zinc-400" />
                            Order History
                          </Link>
                          <button
                            onClick={() => { logout(); setIsUserMenuOpen(false) }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <LogOut size={14} />
                            Logout
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Not logged in → Hanging swing Login button */
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="hidden xl:flex relative justify-center items-end self-stretch pb-0"
                  style={{ marginTop: "-2px" }}
                >
                  <motion.div
                    animate={{ rotate: [-2.5, 2.5, -2.5] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="relative origin-top flex flex-col items-center"
                  >
                    <span className={cn(
                      "block w-[2px] h-[20px] transition-colors duration-300",
                      isHome && !isScrolled ? "bg-white/60" : "bg-red-400/60"
                    )} />
                    <Link href="/login">
                      <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "relative px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] border-2 flex items-center gap-2 overflow-hidden transition-all duration-500 group font-['Roboto',sans-serif]",
                          isHome && !isScrolled
                            ? "border-red-500 text-white"
                            : "border-red-500 text-red-600"
                        )}
                      >
                        {/* Light red hover fill */}
                        <span className="absolute inset-0 bg-red-50 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        <span className={cn(
                          "relative z-10 transition-colors duration-300",
                          isHome && !isScrolled
                            ? "text-white group-hover:text-red-600"
                            : "text-red-600"
                        )}>
                          Login
                        </span>
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              )}
              <button 
                className="xl:hidden flex items-center justify-center p-2" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
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
              aria-label="Close search"
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
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                  autoFocus
                />
              </div>
              <motion.p 
                className="text-sm text-black/50 mt-6 uppercase tracking-wider" 
                style={{ fontFamily: "'Roboto', sans-serif" }}
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
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    Menu
                  </span>
                  <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="flex flex-col space-y-1 px-6">
                    {[...leftNavLinks, ...rightNavLinks].map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-base uppercase tracking-[0.12em] font-medium py-3 border-b border-black/5 hover:text-primary transition-colors"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-6 px-6 flex flex-col gap-3">
                    <Link href="/order-samples" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button 
                        className="w-full rounded-none uppercase text-xs tracking-[0.15em] font-semibold h-11 bg-black hover:bg-black/90"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        Order Free Samples
                      </Button>
                    </Link>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button 
                        variant="outline"
                        className="w-full rounded-none uppercase text-xs tracking-[0.15em] font-semibold h-11 border-black text-black hover:bg-black hover:text-white bg-transparent"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        Login
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="p-6 border-t bg-gray-50">
                  <p 
                    className="text-xs text-black/50 uppercase tracking-wider"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
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