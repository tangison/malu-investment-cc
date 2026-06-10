const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    title: "Taxi Transport",
    description: "Reliable point-to-point transport across Okahandja and surrounds.",
    featured: true,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="1" />
        <path d="M2 10h20" />
        <path d="M12 6v12" />
      </svg>
    ),
    title: "Construction & Renovation",
    description: "Building and renovation services for residential and commercial clients.",
    featured: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Logistics & Import/Export",
    description: "Goods movement and supply chain support.",
    featured: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: "Cleaning & Carwash",
    description: "Commercial and residential cleaning services.",
    featured: false,
  },
];

export default function Services() {
  return (
    <section className="bg-malu-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <span className="text-malu-gold font-[var(--font-barlow)] text-xs uppercase tracking-[0.25em] font-medium">
            What We Do
          </span>
          <h2 className="text-malu-white font-[var(--font-barlow)] text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mt-3">
            Our Services
          </h2>
          <div className="w-12 h-0.5 bg-malu-gold mt-4" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-6 sm:p-8 transition-all duration-300 hover:translate-y-[-4px] ${
                service.featured
                  ? "bg-malu-gold/5 border-2 border-malu-gold/40"
                  : "bg-malu-grey/10 border border-malu-grey/20 hover:border-malu-gold/20"
              }`}
            >
              {/* Icon */}
              <div
                className={`mb-5 ${
                  service.featured
                    ? "text-malu-gold"
                    : "text-malu-white/40 group-hover:text-malu-gold/70"
                } transition-colors`}
              >
                {service.icon}
              </div>

              {/* Featured badge */}
              {service.featured && (
                <span className="absolute top-4 right-4 bg-malu-gold text-malu-black font-[var(--font-barlow)] text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-0.5">
                  Active
                </span>
              )}

              {/* Title */}
              <h3
                className={`font-[var(--font-barlow)] text-xl font-bold tracking-tight mb-3 ${
                  service.featured ? "text-malu-gold" : "text-malu-white"
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-malu-white/50 text-sm leading-relaxed mb-4 font-[var(--font-inter)]">
                {service.description}
              </p>

              {/* Coming soon pill */}
              <span className="inline-block text-malu-white/30 font-[var(--font-barlow)] text-[10px] uppercase tracking-[0.2em] font-medium border border-malu-white/10 px-2.5 py-1">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
