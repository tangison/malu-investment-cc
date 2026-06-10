import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import DemoLock from "@/components/DemoLock";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Malu Investment CC",
  description: "About Malu Investment CC — coming soon.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-malu-black">
      <DemoBanner />
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36">
        <DemoLock
          pageTitle="About"
          pageDescription="Learn about Malu Investment CC — our story, our team, and our vision for Okahandja. This page is part of a demo build by Tangison Studio."
        />
      </main>
      <Footer />
    </div>
  );
}
