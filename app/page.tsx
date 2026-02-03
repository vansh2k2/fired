import { Hero } from "@/components/home/hero"
import { MarqueeSection } from "@/components/home/marquee-section"
import FeaturedCollections from "@/components/home/featured-collections"
import { HomeGallery } from "@/components/home/gallery"
import { AboutPreview } from "@/components/home/about-preview"
import { SamplePreview } from "@/components/home/sample-preview"
import ProcessSection from "@/components/home/process-section"
import { CollectionsInDevelopment } from "@/components/home/collections-in-development"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedCollections />
      <AboutPreview />
      <MarqueeSection />
      <CollectionsInDevelopment />
      
    
      <ProcessSection />
      <HomeGallery />
      <SamplePreview />
    </div>
  )
}