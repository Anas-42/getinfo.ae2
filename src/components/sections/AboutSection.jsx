import React from "react";
import Container from "../ui/Container";
import { Button } from "../ui/Button";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 text-white">
      {/* 🎥 Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-30 brightness-[0.55]"
        src="/videos/intro-1080.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/intro.png"
      />

      {/* Single overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-20" />

      <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          ABOUT <span className="text-[var(--gi-teal-300)]">GetInfo.ae</span>
        </h2>

        <p className="text-white/80 leading-relaxed text-lg">
          GetInfo is an AI-powered info desk solution that transforms how people
          access information through interactive 3D avatars that listen, understand,
          and respond naturally — supporting multiple languages and delivering
          accurate answers instantly.
        </p>

        <p className="text-white/80 leading-relaxed text-lg">
          From malls and events to hotels and campuses, GetInfo redefines customer
          interaction — making it smarter, faster, and more human.
        </p>

        <a href="#join" className="block pt-4">
          <Button
            size="lg"
            className="mx-auto bg-[var(--gi-teal-500)] text-white font-semibold rounded-full shadow-lg shadow-[var(--gi-teal-500)]/25 hover:shadow-[var(--gi-teal-300)]/50 hover:scale-105 transition-all duration-300"
          >
            LET’S GET IN TOUCH
          </Button>
        </a>
      </Container>
    </section>
  );
}
