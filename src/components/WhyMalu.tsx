const trustSignals = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Registered CC",
    text: "Officially registered since 2017 — CC/2017/00248",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Okahandja Based",
    text: "Local knowledge, local routes, local trust",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "One Number",
    text: "All services, one call — +264 81 127 7308",
  },
];

export default function WhyMalu() {
  return (
    <section className="relative bg-malu-black py-20 sm:py-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3.5-2 3z' fill='%23C9A84C' fill-opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-malu-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-malu-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-malu-gold font-[var(--font-barlow)] text-xs uppercase tracking-[0.25em] font-medium">
            Why Malu
          </span>
          <h2 className="text-malu-white font-[var(--font-barlow)] text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mt-3">
            Built on Trust
          </h2>
          <div className="w-12 h-0.5 bg-malu-gold mt-4 mx-auto" />
        </div>

        {/* Trust signals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {trustSignals.map((signal) => (
            <div key={signal.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-malu-gold/30 text-malu-gold mb-5 group-hover:bg-malu-gold/10 transition-colors">
                {signal.icon}
              </div>
              <h3 className="text-malu-white font-[var(--font-barlow)] text-lg sm:text-xl font-bold tracking-tight mb-2">
                {signal.title}
              </h3>
              <p className="text-malu-white/50 text-sm font-[var(--font-inter)] leading-relaxed">
                {signal.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
