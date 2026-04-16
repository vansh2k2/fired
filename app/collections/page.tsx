"use client"

import { CollectionsHero } from "@/components/collections/collections-hero"
import { TileGrid } from "@/components/collections/tile-grid"
import { MarqueeSection } from "@/components/home/marquee-section"
import MarqueeStrip from "@/components/ui/marquee-strip"

export default function CollectionsPage() {
  return (
    <div className="pt-20">
      <CollectionsHero />
      <MarqueeStrip text="we don't charge any amount for the sample order part whatsoever • European Craftsmanship • Worldwide Shipping" />
      <TileGrid />
      <div className="py-20 opacity-50">
        <MarqueeSection />
      </div>
    </div>
  )
}