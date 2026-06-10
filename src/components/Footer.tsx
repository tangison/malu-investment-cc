import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-malu-black border-t border-malu-grey/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-malu-gold font-[var(--font-barlow)] text-3xl font-black tracking-tight">
                › MALU
              </span>
              <span className="block text-malu-grey font-[var(--font-barlow)] text-xs font-medium uppercase tracking-[0.2em] mt-1">
                Investment CC
              </span>
            </Link>
            <p className="text-malu-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              Malu Investment CC · CC/2017/00248 · Okahandja, Namibia
            </p>
            <p className="text-malu-white/30 text-xs mt-2 font-[var(--font-inter)]">
              Moving Okahandja Forward
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-malu-white font-[var(--font-barlow)] text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/fleet", label: "Fleet" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-malu-white/50 hover:text-malu-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-malu-white font-[var(--font-barlow)] text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Get in Touch
            </h3>
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-malu-gold hover:text-malu-gold/80 transition-colors text-sm mb-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <p className="text-malu-white/50 text-sm">
              +264 81 127 7308
            </p>
            <p className="text-malu-white/30 text-sm mt-2">
              Okahandja, Namibia
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-malu-grey/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-malu-white/30 text-xs">
            © 2026 Malu Investment CC. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-malu-white/20 text-xs">Demo build by</span>
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/tangison-studio.png"
                alt="Tangison Studio"
                width={80}
                height={16}
                className="h-4 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
