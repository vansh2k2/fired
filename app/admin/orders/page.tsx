"use client"

import { cn } from "@/lib/utils"
import { Suspense } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Download, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

const allOrders = [
  {
    id: "ORD-9281",
    customer: "Studio Nord Architecture",
    email: "contact@studionord.com",
    city: "Oslo",
    status: "Processing",
    date: "Dec 30, 2025",
  },
  {
    id: "ORD-9275",
    customer: "Elena Moretti Interiors",
    email: "elena@moretti.it",
    city: "Milan",
    status: "Shipped",
    date: "Dec 29, 2025",
  },
  {
    id: "ORD-9270",
    customer: "Urban Loft Developers",
    email: "specs@urbanloft.co.uk",
    city: "London",
    status: "Delivered",
    date: "Dec 28, 2025",
  },
  {
    id: "ORD-9268",
    customer: "The Grand Hotel Paris",
    email: "design@grandhotel.fr",
    city: "Paris",
    status: "Pending",
    date: "Dec 28, 2025",
  },
  {
    id: "ORD-9265",
    customer: "Coastal Villa Marina",
    email: "marina@ibizavilla.es",
    city: "Ibiza",
    status: "Shipped",
    date: "Dec 27, 2025",
  },
  {
    id: "ORD-9260",
    customer: "Sapphire Corporate",
    email: "procurement@sapphire.ae",
    city: "Dubai",
    status: "Delivered",
    date: "Dec 26, 2025",
  },
]

function OrdersContent() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-serif mb-2">Sample Orders</h1>
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold">
            Manage global architectural requests
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="rounded-none border-foreground/20 text-[10px] uppercase tracking-widest font-bold bg-transparent"
          >
            <Download size={14} className="mr-2" /> Export CSV
          </Button>
          <Button className="rounded-none bg-foreground text-background text-[10px] uppercase tracking-widest font-bold">
            Bulk Process
          </Button>
        </div>
      </header>

      {/* Filters & Search */}
      <div className="bg-white border border-border p-6 mb-8 flex flex-col md:flex-row gap-6 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search by Studio, ID or City..."
            className="w-full bg-secondary/10 border-none py-4 pl-12 pr-4 text-sm outline-none focus:ring-1 ring-primary/20 transition-all"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <Button
            variant="outline"
            className="flex-1 md:flex-none rounded-none border-border h-auto py-4 px-6 text-[10px] uppercase tracking-widest font-bold bg-transparent"
          >
            <Filter size={14} className="mr-2" /> Filter
          </Button>
          <select className="flex-1 md:flex-none bg-secondary/10 border-none py-4 px-6 text-[10px] uppercase tracking-widest font-bold outline-none cursor-pointer">
            <option>All Status</option>
            <option>Pending</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>

      <div className="bg-white border border-border overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-secondary/10 text-muted-foreground">
              <th className="p-6 text-[10px] uppercase tracking-widest font-bold">Order Details</th>
              <th className="p-6 text-[10px] uppercase tracking-widest font-bold">Location</th>
              <th className="p-6 text-[10px] uppercase tracking-widest font-bold">Date</th>
              <th className="p-6 text-[10px] uppercase tracking-widest font-bold">Status</th>
              <th className="p-6 text-[10px] uppercase tracking-widest font-bold text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, i) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b last:border-0 hover:bg-secondary/5 transition-colors group cursor-pointer"
              >
                <td className="p-6">
                  <div className="text-xs font-bold tracking-widest text-primary mb-1">{order.id}</div>
                  <div className="text-sm font-medium">{order.customer}</div>
                  <div className="text-xs text-muted-foreground">{order.email}</div>
                </td>
                <td className="p-6 text-sm font-medium">{order.city}</td>
                <td className="p-6 text-sm text-muted-foreground">{order.date}</td>
                <td className="p-6">
                  <span
                    className={cn(
                      "px-3 py-1 text-[9px] uppercase tracking-widest font-bold border",
                      order.status === "Shipped"
                        ? "border-green-200 text-green-700 bg-green-50"
                        : order.status === "Processing"
                          ? "border-blue-200 text-blue-700 bg-blue-50"
                          : "border-orange-200 text-orange-700 bg-orange-50",
                    )}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-6 text-right">
                  <button className="p-2 hover:bg-secondary/20 transition-colors">
                    <MoreHorizontal size={18} className="text-muted-foreground" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function AdminOrders() {
  return (
    <Suspense fallback={null}>
      <OrdersContent />
    </Suspense>
  )
}
