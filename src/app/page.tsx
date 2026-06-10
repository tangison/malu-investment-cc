import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyMalu from "@/components/WhyMalu";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <DemoBanner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyMalu />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
