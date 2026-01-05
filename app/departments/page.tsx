"use client"

import { cn } from "@/lib/utils"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const departments = [
  {
    name: "Architectural Bathrooms",
    description: "Serene, tactile surfaces designed for private wellness retreats.",
    image: "/luxury-bathroom-tiles.jpg",
    tag: "Wellness",
  },
  {
    name: "Culinaria & Kitchen",
    description: "Durable elegance for the heart of the home.",
    image: "/luxury-glazed-tiles.jpg",
    tag: "Social",
  },
  {
    name: "Outdoor & Facades",
    description: "Resilient stone and clay for seamless indoor-outdoor transitions.",
    image: "/tall-tile-project.jpg",
    tag: "Exterior",
  },
  {
    name: "Commercial Spaces",
    description: "High-traffic architectural solutions for hotels and luxury retail.",
    image: "/wide-tile-space.jpg",
    tag: "Professional",
  },
]

export default function DepartmentsPage() {
  return (
    <div className="pt-20">
      <section className="py-32 container mx-auto px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl mb-24">
          <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6 block">
            APPLICATION GUIDE
          </span>
          <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-8">
            Curated by <span className="italic">Environment</span>
          </h1>
          <p className="text-xl font-light text-muted-foreground leading-relaxed">
            Every space has its own requirements. We categorize our ranges to help you find the perfect technical and
            aesthetic match for your project.
          </p>
        </motion.div>

        <div className="space-y-40">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn("flex flex-col lg:flex-row items-center gap-20", i % 2 !== 0 && "lg:flex-row-reverse")}
            >
              <div className="w-full lg:w-1/2 relative aspect-[4/3] shine-hover group overflow-hidden">
                <Image
                  src={dept.image || "/placeholder.svg"}
                  alt={dept.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-8 left-8">
                  <span className="px-6 py-2 bg-white/10 backdrop-blur-md text-white text-xs uppercase tracking-[0.2em] font-bold border border-white/20">
                    {dept.tag}
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">{dept.name}</h2>
                <p className="text-lg font-light text-muted-foreground mb-10 leading-relaxed max-w-lg">
                  {dept.description}
                </p>
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold group"
                >
                  Browse Relevant Ranges
                  <div className="w-12 h-[1px] bg-foreground/20 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                  <ArrowRight size={16} className="group-hover:text-primary transition-colors" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
