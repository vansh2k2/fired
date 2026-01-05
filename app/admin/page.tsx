"use client"

import { motion } from "framer-motion"
import { TrendingUp, Package, Users, Clock, ChevronRight, ShieldCheck } from "lucide-react"
import cn from "classnames"
import Link from "next/link"

const stats = [
  { label: "Sample Orders", value: "1,284", change: "+12%", icon: Package },
  { label: "Awaiting Dispatch", value: "42", change: "-5%", icon: Clock },
  { label: "Registered Studios", value: "856", change: "+18%", icon: Users },
  { label: "Studio Conversion", value: "3.2%", change: "+2%", icon: TrendingUp },
]

const recentOrders = [
  { id: "ORD-9281", customer: "Studio Nord Architecture", date: "2 mins ago", status: "Processing", items: 4 },
  { id: "ORD-9275", customer: "Elena Moretti Interiors", date: "15 mins ago", status: "Shipped", items: 2 },
  { id: "ORD-9270", customer: "Urban Loft Developers", date: "1 hour ago", status: "Delivered", items: 6 },
  { id: "ORD-9268", customer: "The Grand Hotel Paris", date: "3 hours ago", status: "Pending", items: 12 },
]

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 bg-primary/5 border border-primary/20 p-8 flex items-start gap-6"
      >
        <div className="p-4 bg-primary/10 text-primary">
          <ShieldCheck size={24} />
        </div>
        <div>
          <h2 className="text-xl font-serif mb-2 italic">Atelier Administration Access</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            This dashboard is the command center for Firedclay Originals. You can access it anytime by navigating
            directly to
            <code className="mx-2 bg-secondary px-2 py-0.5 rounded text-primary font-mono text-xs">/admin</code>. From
            here, you can manage sample inventory, track architectural requests, and view studio engagement metrics.
          </p>
        </div>
      </motion.div>

      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-serif mb-2">
            Atelier <span className="italic">Performance</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
            Real-time Analytics Dashboard
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-primary">DECEMBER 2025</p>
          <p className="text-[9px] uppercase tracking-widest opacity-50">Last Update: 2 mins ago</p>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white border border-border flex flex-col group hover:border-primary transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 bg-secondary/30 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <stat.icon size={20} strokeWidth={1.5} />
              </div>
              <span
                className={cn(
                  "text-[10px] font-bold uppercase tracking-widest",
                  stat.change.startsWith("+") ? "text-green-600" : "text-red-600",
                )}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-[9px] uppercase tracking-[0.25em] font-bold text-muted-foreground mb-1">
              {stat.label}
            </h3>
            <p className="text-3xl font-serif">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <h2 className="text-2xl font-serif italic">Pending Requests</h2>
            <Link
              href="/admin/orders"
              className="text-[9px] uppercase tracking-widest font-bold text-primary flex items-center gap-2 hover:translate-x-1 transition-transform"
            >
              Explore Order History <ChevronRight size={12} />
            </Link>
          </div>
          <div className="bg-white border border-border">
            <div className="p-10 text-center py-20">
              <Package className="mx-auto mb-6 text-muted-foreground/30" size={48} strokeWidth={1} />
              <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                Detailed logs moving to sub-page
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-serif italic mb-8 border-b pb-4">Quick Actions</h2>
          <button className="w-full p-8 bg-foreground text-background text-left hover:bg-primary transition-colors">
            <h4 className="text-lg font-serif mb-2 italic">Update Catalog</h4>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Add new architectural ranges</p>
          </button>
          <button className="w-full p-8 bg-white border border-border text-left hover:border-primary transition-colors">
            <h4 className="text-lg font-serif mb-2 italic">Studio Inquiries</h4>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
              12 new professional messages
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
