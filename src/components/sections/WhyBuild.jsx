import React from "react";
import Container from "../ui/Container";

export default function WhyBuild() {
  return (
    <section id="why" className="relative overflow-hidden py-16 sm:py-24">
      <Container className="grid gap-10 md:grid-cols-12 items-start">
        <div className="md:col-span-6 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            WHY BUILD
          </h2>

          
          <svg className="mt-6" width="260" height="28" viewBox="0 0 260 28" fill="none" aria-hidden="true">
            <path d="M0 14h220" stroke="#6fd0df" strokeWidth="4" />
            <path d="M210 6l12 8-12 8" fill="none" stroke="#6fd0df" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="md:col-span-6 text-white/80 leading-relaxed text-[clamp(0.9rem,1.8vw,1.2rem)]
">
        We built GetInfo to solve a simple problem: making information access effortless and intelligent. Businesses today need scalable solutions that reduce staffing costs while still providing a world-class visitor experience.
        By blending AI, speech technology, and immersive design, we’re transforming the info desk into a tool that is not just functional, but also engaging, modern, and memorable.
        </div>
      </Container>


    </section>
  );
}
