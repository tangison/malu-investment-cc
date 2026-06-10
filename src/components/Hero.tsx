export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-malu-black">
      {/* Diagonal Gold Stripe — signature element */}
      <div
        className="absolute inset-0 stripe-shimmer pointer-events-none"
        style={{
          background: `linear-gradient(
            158deg,
            transparent 0%,
            transparent 38%,
            rgba(201, 168, 76, 0.12) 40%,
            rgba(201, 168, 76, 0.18) 42%,
            rgba(201, 168, 76, 0.24) 44%,
            rgba(201, 168, 76, 0.18) 46%,
            rgba(201, 168, 76, 0.12) 48%,
            transparent 50%,
            transparent 100%
          )`,
        }}
      />
      {/* Secondary subtle stripe */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            158deg,
            transparent 0%,
            transparent 55%,
            rgba(201, 168, 76, 0.05) 57%,
            rgba(201, 168, 76, 0.08) 58%,
            rgba(201, 168, 76, 0.05) 59%,
            transparent 61%,
            transparent 100%
          )`,
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-malu-gold/10 border border-malu-gold/20 px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 bg-malu-gold rounded-full animate-pulse" />
            <span className="text-malu-gold font-[var(--font-barlow)] text-xs uppercase tracking-[0.2em] font-medium">
              Now Accepting Rides
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[var(--font-barlow)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-malu-white leading-[0.95] tracking-tight mb-6">
            Okahandja&apos;s
            <br />
            <span className="text-malu-gold">Reliable</span>
            <br />
            Transport CC
          </h1>

          {/* Subheading */}
          <p className="text-malu-white/60 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 max-w-xl font-[var(--font-inter)] font-normal">
            Professional taxi and transport services. Registered. Trusted. Local.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-malu-gold text-malu-black font-[var(--font-barlow)] text-sm sm:text-base uppercase tracking-[0.1em] font-bold px-8 py-4 hover:bg-malu-gold/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Ride →
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 border border-malu-white/20 text-malu-white/70 font-[var(--font-barlow)] text-sm sm:text-base uppercase tracking-[0.1em] font-medium px-8 py-4 hover:border-malu-gold/50 hover:text-malu-gold transition-all"
            >
              Our Services
            </a>
          </div>

          {/* Registration badge */}
          <div className="mt-12 flex items-center gap-3">
            <div className="w-8 h-px bg-malu-gold/40" />
            <span className="text-malu-white/30 text-xs font-[var(--font-barlow)] uppercase tracking-[0.2em]">
              CC/2017/00248 · Registered in Namibia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
