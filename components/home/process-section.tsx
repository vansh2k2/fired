"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// ─────────────────────────────────────────
// All images: verified Unsplash public URLs
// next.config.js mein ye add karo:
//   images: {
//     remotePatterns: [{ hostname: "images.unsplash.com" }]
//   }
// ─────────────────────────────────────────

const projects = [
  {
    id: 1,
    number: "01",
    title: "Clay",
    subtitle: "Selection",
    subtitle2: "",
    description:
      "We source rare clays from ancient European pits, each chosen for its unique mineral composition and natural fired tone.",
    // Hands shaping clay / pottery
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1400&q=80",
  },
  {
    id: 2,
    number: "02",
    title: "Kiln",
    subtitle: "Firing",
    subtitle2: "Process",
    description:
      "Precision temperature control transforms raw clay into durable, richly-colored tiles with signature depth and integrity.",
    // Fire / kiln atmosphere
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1400&q=80",
  },
  {
    id: 3,
    number: "03",
    title: "Hand",
    subtitle: "Glazing",
    subtitle2: "",
    description:
      "Traditional glazing techniques are applied by master artisans, giving every tile its unique character and finish.",
    // Artisan hands / ceramic work
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1400&q=80",
  },
  {
    id: 4,
    number: "04",
    title: "Quality",
    subtitle: "Inspection",
    subtitle2: "",
    description:
      "Every single tile passes a rigorous multi-stage inspection to ensure flawless quality before it leaves our atelier.",
    // Tiled bathroom interior
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=80",
  },
  {
    id: 5,
    number: "05",
    title: "Global",
    subtitle: "Delivery",
    subtitle2: "",
    description:
      "Premium packaging and worldwide logistics ensure your tiles arrive pristine — from our atelier to your project.",
    // Luxury tiled living / kitchen
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=80",
  },
]

const ProcessSection = () => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="relative w-full" style={{ background: "#ffffff", paddingTop: "80px" }}>
      <div className="flex w-full gap-0 overflow-hidden" style={{ height: "560px" }}>
        {projects.map((project, index) => {
          const isHovered = hovered === index
          const originClass = index < 3 ? "origin-left" : "origin-right"

          return (
            <motion.div
              key={project.id}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`relative h-full cursor-pointer overflow-hidden ${originClass}`}
              animate={{ flex: isHovered ? 3 : 1 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* IMAGE */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.08 : 1 }}
                transition={{ duration: 1.5 }}
              />

              {/* DARK GRADIENT */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-70"}`}
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,14,8,0.95) 0%, rgba(20,14,8,0.45) 45%, rgba(20,14,8,0.08) 100%)",
                }}
              />

              {/* TILE GRID PATTERN */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ opacity: isHovered ? 0.045 : 0.02 }}
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern id={`tileP${index}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <rect x="3" y="3" width="54" height="54" rx="2" fill="none" stroke="white" strokeWidth="0.7" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#tileP${index})`} />
              </svg>

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-between p-5 lg:p-7">
                {/* NUMBER */}
                <div className="relative">
                  <div
                    className="absolute top-0 left-0"
                    style={{
                      fontSize: "clamp(42px, 6vw, 76px)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      WebkitTextStroke: "1px rgba(255,255,255,0.18)",
                      color: "transparent",
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      lineHeight: 1,
                    }}
                  >
                    {project.number}
                  </div>
                  <motion.div
                    style={{
                      fontSize: "clamp(42px, 6vw, 76px)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      position: "relative",
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      lineHeight: 1,
                    }}
                    animate={{
                      color: isHovered ? "#d4a853" : "rgba(255,255,255,0)",
                      WebkitTextStroke: isHovered ? "0px transparent" : "1px rgba(255,255,255,0.5)",
                    }}
                    transition={{ duration: 0.45 }}
                  >
                    {project.number}
                  </motion.div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 lg:gap-6">
                  {/* LEFT titles */}
                  <div className="flex flex-col">
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: "clamp(22px, 3vw, 32px)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                        letterSpacing: "0.03em",
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <h3
                        style={{
                          color: "#fff",
                          fontSize: "clamp(22px, 3vw, 32px)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          lineHeight: 1.2,
                          letterSpacing: "0.03em",
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          margin: "2px 0 0 16px",
                        }}
                      >
                        {project.subtitle}
                      </h3>
                    )}
                    {project.subtitle2 && (
                      <h3
                        style={{
                          color: "#fff",
                          fontSize: "clamp(22px, 3vw, 32px)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          lineHeight: 1.2,
                          letterSpacing: "0.03em",
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          margin: "2px 0 0 32px",
                        }}
                      >
                        {project.subtitle2}
                      </h3>
                    )}

                    {/* gold bar */}
                    <div
                      className="mt-3 relative overflow-hidden"
                      style={{ height: 2, width: 72, background: "rgba(255,255,255,0.15)", borderRadius: 1 }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{ background: "#d4a853", borderRadius: 1 }}
                        animate={{ x: isHovered ? "0%" : "-100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>

                  {/* RIGHT description */}
                  <motion.div
                    className="max-w-[260px]"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 16 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p
                      style={{
                        color: "rgba(255,255,255,0.72)",
                        fontSize: 13,
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 300,
                        lineHeight: 1.8,
                        textAlign: "right",
                        margin: 0,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {project.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,400;1,700&family=Raleway:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
    </section>
  )
}

export default ProcessSection