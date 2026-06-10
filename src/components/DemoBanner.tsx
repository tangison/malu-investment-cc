"use client";

import { useState, useEffect } from "react";

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("malu-demo-banner-dismissed");
    if (stored !== "true") {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem("malu-demo-banner-dismissed", "true");
  };

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-malu-grey/95 backdrop-blur-sm border-b border-malu-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <p className="text-xs sm:text-sm text-malu-gold font-[var(--font-inter)] tracking-wide">
          ⚠️ This is a demo website built by{" "}
          <a
            href="https://studio.tangison.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-malu-white transition-colors"
          >
            Tangison Studio
          </a>
          . Full site coming soon.
        </p>
        <button
          onClick={handleDismiss}
          className="text-malu-gold hover:text-malu-white transition-colors ml-4 text-lg leading-none"
          aria-label="Dismiss banner"
        >
          ×
        </button>
      </div>
    </div>
  );
}
