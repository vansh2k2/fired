import Link from "next/link"
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-serif font-bold tracking-tighter uppercase mb-8 block">
              Firedclay <span className="text-primary">Originals</span>
            </Link>
            <p className="text-background/60 font-light max-w-md leading-relaxed mb-8">
              Excellence in architectural tiles since 1984. We curate and craft the world's most expressive ceramic and
              stone surfaces for visionary designers.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-primary">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <Link href="/collections" className="hover:text-primary transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Architectural Projects
                </Link>
              </li>
              <li>
                <Link href="/departments" className="hover:text-primary transition-colors">
                  By Department
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-primary transition-colors">
                  The Company
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-primary transition-colors">
                  Technical Downloads
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-primary">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="text-background/60 italic">Headquarters</li>
              <li>
                Via delle Ceramiche 42,
                <br />
                Fiorano Modenese, Italy
              </li>
              <li>+39 0536 123456</li>
              <li>studio@firedclay.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-background/10 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-background/40">
            © 2025 Firedclay Originals. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-background/40">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
