import React from "react";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/sections/Hero";
import ContactStrip from "./components/sections/ContactStrip";
import IntroSection from "./components/sections/IntroSection";
import AboutSection from "./components/sections/AboutSection";
import WhyBuild from "./components/sections/WhyBuild";
import ServicesGrid from "./components/sections/ServicesGrid";
import TechStrip from "./components/sections/TechStrip";
import buildpath from "./components/sections/buildpath";
import JoinForm from "./components/sections/JoinForm";

export default function App() {
  return (
    <div id="top" className="min-h-dvh bg-[var(--gi-bg)] text-white isolate">
      <Navbar />

      <main className="space-y-8 sm:space-y-10">
        <Hero />
        <ContactStrip />

        {/* 3 requested sections */}
        <IntroSection />
        <AboutSection />
        <WhyBuild />

        
        <ServicesGrid />
        <TechStrip />
        <buildpath />
        <JoinForm />
      </main>

      <Footer />
    </div>
  );
}
