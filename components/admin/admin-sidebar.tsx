"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, Layers, ImageIcon, FileEdit, LogOut, X, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Sample Orders", href: "/admin/orders", icon: Package },
  { name: "Tiles Management", href: "/admin/tiles", icon: Layers },
  { name: "Collections", href: "/admin/collections", icon: ImageIcon },
  { name: "Page Content", href: "/admin/content", icon: FileEdit },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-[110] p-2 bg-foreground text-background"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 h-screen w-72 bg-foreground text-background z-[100] transition-transform duration-500 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-10">
          <Link href="/admin" className="text-xl font-serif font-bold tracking-tighter uppercase block mb-12">
            Firedclay <span className="text-primary italic">Admin</span>
          </Link>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-4 px-4 py-4 text-xs uppercase tracking-widest font-bold transition-all",
                  pathname === item.href ? "bg-primary text-white" : "hover:bg-white/10 opacity-60 hover:opacity-100",
                )}
              >
                <item.icon size={18} strokeWidth={1.5} />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-10 left-10 right-10">
            <Link
              href="/"
              className="flex items-center gap-4 px-4 py-4 text-xs uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-all border-t border-white/10 pt-8"
            >
              <LogOut size={18} strokeWidth={1.5} />
              Logout
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
