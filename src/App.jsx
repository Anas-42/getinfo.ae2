import React from "react";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/sections/Hero";
// import ContactStrip from "./components/sections/ContactStrip"; // removed
import IntroSection from "./components/sections/IntroSection";
import AboutSection from "./components/sections/AboutSection";
import WhyBuild from "./components/sections/WhyBuild";
import ServicesGrid from "./components/sections/ServicesGrid";
import TechStrip from "./components/sections/TechStrip";
// import BuildPath from "./components/sections/buildpath";
import JoinForm from "./components/sections/JoinForm";

// Global unified background
import SiteBackground from "./components/ui/SiteBackground";

export default function App() {
  return (
    <>
      {/* One global background behind everything */}
      <SiteBackground />

      <div id="top" className="min-h-dvh text-white relative">
        <Navbar />

        <main className="space-y-8 sm:space-y-10 relative z-10">
          <Hero />
          <IntroSection />
          <AboutSection />
          <WhyBuild />
          <ServicesGrid />
          <SiteBackground />
          <TechStrip />
          <JoinForm />
        </main>

        <Footer />
      </div>
    </>
  );
}
