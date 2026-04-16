"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/ui/page-hero"
import MarqueeStrip from "@/components/ui/marquee-strip"

export default function ContactPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Start Your Project"
        subtitle="Get in Touch"
        description="Whether you are an architect, designer, or homeowner, our studio is ready to assist with your technical and aesthetic requirements."
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
        curveColor="var(--background)"
      />
      <MarqueeStrip text="we don't charge any amount for the sample order part whatsoever • Studio Inquiries Open • Technical Support Available" />

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>

            <div className="space-y-12">
              <div className="flex gap-6">
                <MapPin className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Atelier & Headquarters</h4>
                  <p className="text-sm font-light text-muted-foreground">
                    Via delle Ceramiche 42,
                    <br />
                    41042 Fiorano Modenese, Italy
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Mail className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Studio Inquiries</h4>
                  <p className="text-sm font-light text-muted-foreground">studio@firedclay.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Phone className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Direct Line</h4>
                  <p className="text-sm font-light text-muted-foreground">+39 0536 123456</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-secondary/20 p-12 lg:p-20 border border-border"
          >
            <h3 className="text-3xl font-serif mb-12">Technical Inquiry Form</h3>
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-foreground/20 py-4 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-foreground/20 py-4 focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Project Category</label>
                <select className="w-full bg-transparent border-b border-foreground/20 py-4 focus:border-primary outline-none transition-colors appearance-none">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Hospitality</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Message / Requirements</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-foreground/20 py-4 focus:border-primary outline-none transition-colors resize-none"
                />
              </div>
              <Button className="w-full rounded-none py-8 uppercase tracking-[0.3em] text-xs font-bold">
                Send Inquiry <ArrowRight size={16} className="ml-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
