import { Hero } from "@/components/home/hero"
import { MarqueeSection } from "@/components/home/marquee-section"
import FeaturedCollections from "@/components/home/featured-collections"
import { HomeGallery } from "@/components/home/gallery"
import { AboutPreview } from "@/components/home/about-preview"
import { SamplePreview } from "@/components/home/sample-preview"
import Image from "next/image"

function ProcessSection() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8 block">THE ATELIER</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-12 leading-tight">
              Where Earth <br /> Meets <span className="italic">Artistry</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <span className="text-xl font-serif text-white/20 group-hover:text-primary transition-colors">01</span>
                <div>
                  <h4 className="text-lg font-serif mb-3">Clay Selection</h4>
                  <p className="text-sm font-light text-white/50 leading-relaxed max-w-sm">
                    We source unique clays from historical European pits, chosen for their specific mineral content and
                    fired tone.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="text-xl font-serif text-white/20 group-hover:text-primary transition-colors">02</span>
                <div>
                  <h4 className="text-lg font-serif mb-3">Kiln Transformation</h4>
                  <p className="text-sm font-light text-white/50 leading-relaxed max-w-sm">
                    Fired at varying temperatures to achieve the signature depth of color and structural integrity our
                    brand is known for.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <Image
              src="/craftsman-making-clay-tiles.jpg"
              alt="Atelier Process"
              fill
              className="object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedCollections />
      <AboutPreview />
      <MarqueeSection />
      <ProcessSection />
      <HomeGallery />
      <SamplePreview />
    </div>
  )
}
