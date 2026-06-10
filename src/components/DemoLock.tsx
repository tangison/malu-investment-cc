import Link from "next/link";

interface DemoLockProps {
  pageTitle: string;
  pageDescription?: string;
}

export default function DemoLock({ pageTitle, pageDescription }: DemoLockProps) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Badge */}
        <span className="inline-block bg-malu-gold/10 text-malu-gold font-[var(--font-barlow)] text-xs uppercase tracking-[0.25em] font-bold px-4 py-1.5 border border-malu-gold/30 mb-8">
          Demo — Coming Soon
        </span>

        {/* Title */}
        <h1 className="text-malu-white font-[var(--font-barlow)] text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
          {pageTitle}
        </h1>

        {/* Description */}
        <p className="text-malu-white/50 text-base sm:text-lg leading-relaxed mb-8">
          {pageDescription ||
            "This page is part of a demo build by Tangison Studio. The full site is on its way."}
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block bg-malu-gold text-malu-black font-[var(--font-barlow)] text-sm uppercase tracking-[0.1em] font-bold px-8 py-3.5 hover:bg-malu-gold/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          ← Back to Homepage
        </Link>
      </div>
    </section>
  );
}
