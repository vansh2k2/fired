"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "The Milano Residence",
    location: "Milan, Italy",
    category: "Residential",
    image: "/luxury-bathroom-tiles.jpg",
  },
  {
    title: "Atelier Boutique Hotel",
    location: "Paris, France",
    category: "Hospitality",
    image: "/wide-tile-space.jpg",
  },
  {
    title: "Nordic Museum Pavilion",
    location: "Oslo, Norway",
    category: "Commercial",
    image: "/tall-tile-project.jpg",
  },
  {
    title: "Coastal Villa Marina",
    location: "Ibiza, Spain",
    category: "Residential",
    image: "/modern-stone-tiles.jpg",
  },
  {
    title: "Metropolitan Lofts",
    location: "London, UK",
    category: "Residential",
    image: "/minimalist-tile-layout.jpg",
  },
  {
    title: "Sapphire Corporate Plaza",
    location: "Dubai, UAE",
    category: "Commercial",
    image: "/luxury-architectural-tiles-interior.jpg",
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Residential", "Commercial", "Hospitality"]

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="pt-20">
      <section className="py-32 container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mb-24">
          <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6 block">ARCHITECTURE</span>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8">
            The <span className="italic">Project</span> Gallery
          </h1>
          <p className="text-xl font-light text-muted-foreground leading-relaxed">
            A showcase of global architectural excellence where Firedclay Originals surfaces define the character of
            space.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-8 mb-20 border-b pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-primary",
                filter === cat ? "text-primary border-b border-primary pb-2" : "text-muted-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-bold mb-2 text-primary">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif mb-1">{project.title}</h3>
                  <p className="text-xs uppercase tracking-widest font-light opacity-60">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
