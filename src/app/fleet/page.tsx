import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import DemoLock from "@/components/DemoLock";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Fleet — Malu Investment CC",
  description: "Our vehicle fleet — coming soon.",
};

export default function FleetPage() {
  return (
    <div className="min-h-screen flex flex-col bg-malu-black">
      <DemoBanner />
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36">
        <DemoLock
          pageTitle="Fleet"
          pageDescription="Our fleet of vehicles ready to serve Okahandja — full details coming soon. This page is part of a demo build by Tangison Studio."
        />
      </main>
      <Footer />
    </div>
  );
}
