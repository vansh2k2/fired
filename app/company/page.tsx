"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PageHero } from "@/components/ui/page-hero"

export default function CompanyPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Four Decades of Ceramic Innovation"
        subtitle="Our Heritage"
        description="Founded in 1984 in the heart of Europe's ceramic district, Firedclay Originals was born from a passion for the raw, tactile beauty of earth and fire."
        backgroundImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80"
        curveColor="var(--background)"
      />

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-serif leading-tight mb-8">
              Bridging the gap between <span className="italic">Industrial capability</span> and artisanal soul.
            </h2>
            <div className="grid grid-cols-2 gap-12 border-t pt-12 border-border">
              <div>
                <h4 className="text-3xl font-serif text-primary mb-2">1984</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Studio Founding</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-primary mb-2">60+</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  Countries Supplied
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5]"
          >
            <Image
              src="/craftsman-making-clay-tiles.jpg"
              alt="Artisanal Production"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>

        <div className="bg-foreground text-background p-20 mb-40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 italic">
              "Architecture is the dialogue between the hand and the earth."
            </h2>
            <p className="text-lg font-light opacity-60 leading-relaxed">
              We don't just manufacture tiles. We curate experiences. Our mission is to bridge the gap between
              industrial capability and artisanal soul, ensuring that every architectural surface we create carries the
              weight of its origin.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Craftsmanship", desc: "Every tile is touched by human hands before it leaves our atelier." },
            { title: "Sustainability", desc: "We use 100% recycled water systems and locally sourced clay deposits." },
            {
              title: "Design Ethics",
              desc: "Collaborating with world-class architects to set global aesthetic trends.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-12 border border-border"
            >
              <h3 className="text-2xl font-serif mb-6 italic">{item.title}</h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
