import { CollectionsHero } from "@/components/collections/collections-hero"
import { TileGrid } from "@/components/collections/tile-grid"
import { MarqueeSection } from "@/components/home/marquee-section"

export default function CollectionsPage() {
  return (
    <div className="pt-20">
      <CollectionsHero />
      <TileGrid />
      <div className="py-20 opacity-50">
        <MarqueeSection />
      </div>
    </div>
  )
}
