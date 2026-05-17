import OrbBackground from "@/components/OrbBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ChromeExtension from "@/components/ChromeExtension";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0F0F0F]">
      <OrbBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <LogoTicker />
          <Features />
          <HowItWorks />
          <ChromeExtension />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
