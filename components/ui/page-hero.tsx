"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface PageHeroProps {
  title: string
  subtitle: string
  description?: string
  backgroundImage: string
  curveColor?: string
}

export function PageHero({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  curveColor = "#fff" 
}: PageHeroProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  return (
    <section 
      ref={ref} 
      className="relative min-h-[45vh] md:min-h-[55vh] flex items-start justify-center overflow-hidden bg-zinc-900"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20 md:pt-24">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-sm uppercase tracking-[0.4em] text-white/80 mb-4 block font-medium">
            {subtitle}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-white italic tracking-tight leading-[1.1] mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-white/70 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-8">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
