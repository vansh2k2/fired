import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import ContactFloats from "@/components/ui/contact-floats"
import SocialSidebar from "@/components/ui/social-sidebar"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Firedclay Originals | Architectural & Luxury Tiles",
    template: "%s | Firedclay Originals",
  },
  description:
    "Firedclay Originals is a premium architectural tiles brand specializing in fired clay and handcrafted surfaces for residential, commercial, and hospitality projects.",
  keywords: [
    "fired clay tiles",
    "architectural tiles",
    "luxury tiles",
    "handcrafted tiles",
    "designer tiles",
    "European tiles",
    "wall tiles",
    "floor tiles",
    "interior tiles",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Firedclay Originals | Architectural & Luxury Tiles",
    description:
      "European-inspired fired clay and architectural tiles crafted for design-led spaces.",
    url: "https://firedclayoriginals.com",
    siteName: "Firedclay Originals",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Firedclay Originals Architectural Tiles",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <ContactFloats /> 
        <SocialSidebar />
        <Analytics />
      </body>
    </html>
  )
}