"use client"

import { motion } from "framer-motion"
import { Download, FileText, Settings, BookOpen } from "lucide-react"

const downloads = [
  { title: "Main Product Brochure 2025", category: "Catalog", icon: BookOpen },
  { title: "Technical Installation Guide", category: "Documentation", icon: Settings },
  { title: "Sustainable Origin Whitepaper", category: "Corporate", icon: FileText },
  { title: "Terrene Collection Spec Sheet", category: "Technical", icon: FileText },
  { title: "Glazed Origin Finish Guide", category: "Technical", icon: FileText },
  { title: "Stone Range Size Matrix", category: "Technical", icon: FileText },
]

export default function DownloadsPage() {
  return (
    <div className="pt-20">
      <section className="py-32 container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mb-24">
          <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6 block">RESOURCES</span>
          <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-8">
            Technical <br /> <span className="italic">Documentation</span>
          </h1>
          <p className="text-xl font-light text-muted-foreground leading-relaxed">
            Download our architectural resources, technical specifications, and collection lookbooks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-secondary/20 border border-transparent hover:border-primary/20 transition-all group flex flex-col"
            >
              <item.icon size={32} strokeWidth={1} className="text-primary mb-8" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-2">
                {item.category}
              </span>
              <h3 className="text-xl font-serif mb-12 flex-1">{item.title}</h3>
              <button className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold group-hover:text-primary transition-colors">
                <Download size={16} /> Download PDF
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
