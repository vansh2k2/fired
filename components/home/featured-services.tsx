"use client"

import { motion } from "framer-motion"
import { ClipboardList, PenTool, Scissors, Globe } from "lucide-react"

const processes = [
  {
    id: 1,
    icon: ClipboardList,
    title: "CONSULTATION",
    number: "01",
    description: "Expert guidance on selecting the perfect rare clays and natural stone finishes for your specific architectural vision."
  },
  {
    id: 2,
    icon: PenTool,
    title: "BESPOKE DESIGN",
    number: "02",
    description: "Our design team creates customized tile layouts and bespoke patterns that align with your project's aesthetic goals."
  },
  {
    id: 3,
    icon: Scissors,
    title: "PRECISION CUTTING",
    number: "03",
    description: "Utilizing advanced laser-cutting technology for perfectly shaped edges and custom-fit slabs for complex installations."
  },
  {
    id: 4,
    icon: Globe,
    title: "GLOBAL LOGISTICS",
    number: "04",
    description: "Insured, white-glove shipping and handling ensures your premium tiles arrive pristine at any site worldwide."
  }
]

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#134E8E]" />
            <span className="uppercase tracking-[0.4em] text-[#134E8E] font-bold text-[11px]">
              Services & Expertise
            </span>
            <div className="h-px w-8 bg-[#134E8E]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-[1.1] tracking-tight max-w-3xl">
            PREMIUM <span className="text-[#DE802B] italic font-light">ARCHITECTURAL SERVICES</span> FOR DISCERNING CLIENTS.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, idx) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#134E8E]/30 transition-all duration-500"
            >
              {/* Top accent bar */}
              <div className="h-[3px] w-0 bg-[#DE802B] group-hover:w-full transition-all duration-700 absolute top-0 left-0 z-20"></div>

              {/* Big faint background number */}
              <div className="absolute top-2 right-3 text-[72px] font-black text-gray-100 group-hover:text-[#134E8E]/5 leading-none select-none transition-colors duration-500 pointer-events-none z-0">
                {process.number}
              </div>

              <div className="relative z-10 p-7 flex flex-col items-start text-left">
                {/* Icon Box */}
                <div className="w-16 h-16 flex items-center justify-center mb-6 bg-[#134E8E]/5 border border-[#134E8E]/10 group-hover:bg-[#134E8E] group-hover:border-[#134E8E] transition-all duration-500">
                  <process.icon
                    className="w-7 h-7 text-[#134E8E] group-hover:text-white transition-colors duration-500"
                    strokeWidth={1.2}
                  />
                </div>

                {/* Step label */}
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#DE802B] uppercase mb-2">
                  Discovery {process.number}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#134E8E] group-hover:text-zinc-900 mb-4 tracking-tight transition-colors duration-500">
                  {process.title}
                </h3>

                {/* Animated divider */}
                <div className="w-10 h-[1.5px] bg-gray-200 group-hover:w-full group-hover:bg-[#DE802B] transition-all duration-700 mb-5"></div>

                {/* Description */}
                <p className="text-zinc-500 text-xs leading-relaxed font-light">
                  {process.description}
                </p>
              </div>

              {/* Bottom-right corner accent */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[32px] border-l-transparent border-b-[32px] border-b-gray-50 group-hover:border-b-[#DE802B]/10 transition-colors duration-500 z-0"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
