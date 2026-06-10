export default function CTABanner() {
  return (
    <section className="relative bg-malu-black py-24 sm:py-32 overflow-hidden">
      {/* Large gold chevron arrows in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-malu-gold/[0.04] font-[var(--font-barlow)] text-[20rem] font-black leading-none select-none">
          ›
        </div>
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-malu-gold/[0.03] font-[var(--font-barlow)] text-[16rem] font-black leading-none select-none">
          ›
        </div>
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-malu-gold/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[var(--font-barlow)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-malu-white tracking-tight mb-4">
          Need a ride in <span className="text-malu-gold">Okahandja</span>?
        </h2>
        <p className="text-malu-white/50 text-base sm:text-lg mb-10 max-w-md mx-auto font-[var(--font-inter)]">
          Call or WhatsApp us — we respond fast.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="https://wa.me/264811277308"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-malu-gold text-malu-black font-[var(--font-barlow)] text-sm sm:text-base uppercase tracking-[0.1em] font-bold px-10 py-4 hover:bg-malu-gold/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href="tel:+264811277308"
            className="inline-flex items-center gap-2 text-malu-white/60 hover:text-malu-gold font-[var(--font-inter)] text-sm transition-colors border border-malu-white/10 px-8 py-4 hover:border-malu-gold/30"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +264 81 127 7308
          </a>
        </div>
      </div>
    </section>
  );
}
