import Image from "next/image";

const services = [
  {
    image: "/images/taxi.webp",
    title: "Taxi Transport",
    description: "Reliable point-to-point transport across Okahandja and surrounds.",
    featured: true,
  },
  {
    image: "/images/construction.webp",
    title: "Construction & Renovation",
    description: "Building and renovation services for residential and commercial clients.",
    featured: false,
  },
  {
    image: "/images/logistics.webp",
    title: "Logistics & Import/Export",
    description: "Goods movement and supply chain support.",
    featured: false,
  },
  {
    image: "/images/cleaning.webp",
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
              className={`group relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] ${
                service.featured
                  ? "bg-malu-gold/5 border-2 border-malu-gold/40"
                  : "bg-malu-grey/10 border border-malu-grey/20 hover:border-malu-gold/20"
              }`}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-malu-black/80 via-malu-black/30 to-transparent" />

                {/* Featured badge */}
                {service.featured && (
                  <span className="absolute top-3 right-3 bg-malu-gold text-malu-black font-[var(--font-barlow)] text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-0.5 z-10">
                    Active
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3
                  className={`font-[var(--font-barlow)] text-lg sm:text-xl font-bold tracking-tight mb-2 ${
                    service.featured ? "text-malu-gold" : "text-malu-white"
                  }`}
                >
                  {service.title}
                </h3>

                <p className="text-malu-white/50 text-sm leading-relaxed mb-4 font-[var(--font-inter)]">
                  {service.description}
                </p>

                {/* Coming soon pill */}
                <span className="inline-block text-malu-white/30 font-[var(--font-barlow)] text-[10px] uppercase tracking-[0.2em] font-medium border border-malu-white/10 px-2.5 py-1">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
