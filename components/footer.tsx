import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <>
      <footer className="footer-section bg-[#1a1a1a] text-neutral-100 border-t-2" style={{ borderColor: '#DE802B' }}>

        {/* ── MAIN CONTENT ── */}
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14">

            {/* Brand — 4 cols */}
            <div className="md:col-span-4">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/logo.png"
                  alt="Firedclay Originals"
                  width={160}
                  height={55}
                  className="h-14 w-auto brightness-0 invert"
                />
              </Link>

              {/* Orange accent line */}
              <div className="w-10 h-[2px] mb-4" style={{ background: '#DE802B' }} />

              <p className="text-white font-light leading-relaxed text-[13px] max-w-xs mb-6">
                Excellence in architectural tiles since 1984. We curate and craft the world's most
                expressive ceramic and stone surfaces for visionary designers.
              </p>

              {/* Social icons */}
              <div className="flex gap-2">
                {[
                  { Icon: Instagram, href: '#' },
                  { Icon: Twitter,   href: '#' },
                  { Icon: Facebook,  href: '#' },
                  { Icon: Linkedin,  href: '#' },
                ].map(({ Icon, href }, i) => (
                  <Link key={i} href={href} className="footer-social-btn" aria-label="social">
                    <Icon size={14} strokeWidth={1.5} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider col — hidden on mobile */}
            <div className="hidden md:flex md:col-span-1 justify-center">
              <div className="w-px h-full bg-neutral-800" />
            </div>

            {/* Quick Links — 3 cols */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-4 h-px" style={{ background: '#DE802B' }} />
                <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold" style={{ color: '#DE802B' }}>
                  Quick Links
                </h4>
              </div>
              <ul className="space-y-3">
                {[
                  { label: 'Collections',            href: '/collections' },
                  { label: 'Architectural Projects', href: '/projects' },
                  { label: 'By Department',          href: '/departments' },
                  { label: 'The Company',            href: '/company' },
                  { label: 'Technical Downloads',    href: '/downloads' },
                ].map(({ label, href }) => (
                  <li key={label} className="flex items-center gap-2 group">
                    <ArrowRight size={10} className="text-neutral-600 group-hover:text-[#DE802B] transition-colors duration-200 flex-shrink-0" />
                    <Link href={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact — 4 cols */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-4 h-px" style={{ background: '#DE802B' }} />
                <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold" style={{ color: '#DE802B' }}>
                  Contact Us
                </h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white text-[13px] font-light">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#DE802B' }} strokeWidth={1.5} />
                  <span className="leading-relaxed">
                    Via delle Ceramiche 42,<br />
                    Fiorano Modenese, Italy
                  </span>
                </li>
                <li className="flex items-center gap-3 text-[13px] font-light">
                  <Phone size={14} className="flex-shrink-0" style={{ color: '#DE802B' }} strokeWidth={1.5} />
                  <a href="tel:+390536123456" className="footer-link">+39 0536 123456</a>
                </li>
                <li className="flex items-center gap-3 text-[13px] font-light">
                  <Mail size={14} className="flex-shrink-0" style={{ color: '#DE802B' }} strokeWidth={1.5} />
                  <a href="mailto:studio@firedclay.com" className="footer-link">studio@firedclay.com</a>
                </li>
              </ul>

              {/* Newsletter mini CTA */}
              <div className="mt-6 pt-5 border-t border-neutral-800">
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-medium mb-3">Order Samples</p>
                <Link
                  href="/order-samples"
                  className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-bold text-white border border-neutral-600 px-4 py-2.5 hover:border-[#DE802B] hover:text-[#DE802B] transition-all duration-300"
                >
                  Request a Sample
                  <ArrowRight size={10} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-neutral-800">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 py-4">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/90 font-light">
                © 2025 Firedclay Originals. All Rights Reserved.
              </p>
              <div className="flex gap-6">
                {['Privacy Policy', 'Cookie Policy', 'Terms of Service'].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-[9px] uppercase tracking-[0.25em] text-white/80 hover:text-[#DE802B] transition-colors duration-200 font-light"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}