import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-100 py-20 border-t border-neutral-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 block">
              <Image 
                src="/logo.png" 
                alt="Firedclay Originals" 
                width={240} 
                height={80}
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-neutral-300 font-light max-w-md leading-relaxed mb-6 text-sm">
              Excellence in architectural tiles since 1984. We curate and craft the world's most expressive ceramic and
              stone surfaces for visionary designers.
            </p>
            <div className="flex space-x-5">
              <Link href="#" className="text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                <Instagram size={22} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                <Twitter size={22} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                <Facebook size={22} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                <Linkedin size={22} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-amber-500">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/collections" className="text-neutral-300 hover:text-amber-500 transition-colors duration-300">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-neutral-300 hover:text-amber-500 transition-colors duration-300">
                  Architectural Projects
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-neutral-300 hover:text-amber-500 transition-colors duration-300">
                  By Department
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-neutral-300 hover:text-amber-500 transition-colors duration-300">
                  The Company
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-neutral-300 hover:text-amber-500 transition-colors duration-300">
                  Technical Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-amber-500">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3 text-neutral-300">
                <MapPin size={16} className="mt-1 text-amber-500 flex-shrink-0" strokeWidth={1.5} />
                <span>
                  Via delle Ceramiche 42,<br />
                  Fiorano Modenese, Italy
                </span>
              </li>
              <li className="flex items-center gap-3 text-neutral-300 hover:text-amber-500 transition-colors">
                <Phone size={16} className="text-amber-500 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+390536123456">+39 0536 123456</a>
              </li>
              <li className="flex items-center gap-3 text-neutral-300 hover:text-amber-500 transition-colors">
                <Mail size={16} className="text-amber-500 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:studio@firedclay.com">studio@firedclay.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] uppercase tracking-widest text-white font-light">
            © 2025 Firedclay Originals. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[11px] uppercase tracking-widest text-white font-light">
            <Link href="#" className="hover:text-amber-500 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-amber-500 transition-colors duration-300">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-amber-500 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}