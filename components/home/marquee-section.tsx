"use client"

import { motion } from "framer-motion"

export function MarqueeSection() {
  const items = [
    { text: "ARCHITECTURAL TILES", icon: "◆" },
    { text: "FIRED CLAY", icon: "◆" },
    { text: "EUROPEAN DESIGN", icon: "◆" },
    { text: "NATURAL TEXTURES", icon: "◆" },
    { text: "ATELIER CRAFT", icon: "◆" },
    { text: "SINCE 1984", icon: "◆" },
  ]

  const repeated = [...items, ...items, ...items, ...items]

  return (
    <section className="relative overflow-hidden border-y border-zinc-800" style={{ background: "#0f0f0f" }}>
      {/* Top amber accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-80" />

      {/* Main marquee row */}
      <div className="flex whitespace-nowrap py-4 relative z-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex items-center"
        >
          {repeated.map((item, i) => (
            <div key={i} className="flex items-center">
              {/* Text */}
              <span
                className="text-[11px] font-bold tracking-[0.45em] uppercase"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                {item.text}
              </span>

              {/* Amber diamond separator */}
              <span
                className="mx-8 text-[7px]"
                style={{ color: "#f59e0b" }}
              >
                {item.icon}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom amber accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-80" />
    </section>
  )
}