import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import DemoLock from "@/components/DemoLock";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services — Malu Investment CC",
  description: "Our service offerings — coming soon.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-malu-black">
      <DemoBanner />
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36">
        <DemoLock
          pageTitle="Services"
          pageDescription="From taxi transport to construction, logistics, and cleaning — our full service catalogue is on the way. This page is part of a demo build by Tangison Studio."
        />
      </main>
      <Footer />
    </div>
  );
}
