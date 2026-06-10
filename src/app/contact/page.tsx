import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import DemoLock from "@/components/DemoLock";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Malu Investment CC",
  description: "Contact Malu Investment CC — coming soon.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-malu-black">
      <DemoBanner />
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36">
        <DemoLock
          pageTitle="Contact"
          pageDescription="Get in touch with Malu Investment CC — full contact form and details coming soon. This page is part of a demo build by Tangison Studio."
        />
      </main>
      <Footer />
    </div>
  );
}
