import React from "react";
import Container from "../ui/Container";
import GlowBackground from "../ui/SiteBackground";
import { CheckCircle2 } from "lucide-react";

export default function WhyBuild() {
  const FEATURES = [
    {
      title: "AI That Understands",
      desc: "Natural conversations powered by advanced language models — not static menus.",
    },
    {
      title: "Effortless Integration",
      desc: "Works with your existing systems, APIs, and data sources with minimal setup.",
    },
    {
      title: "Multilingual & Inclusive",
      desc: "Engage users in multiple languages for global reach and accessibility.",
    },
    {
      title: "Smart Insights",
      desc: "Real-time analytics to understand visitor trends and improve service quality.",
    },
    {
      title: "Scalable & Future-Ready",
      desc: "Built to adapt with your business — from one desk to global deployments.",
    },
  ];

  return (
    <section id="why" className="relative overflow-hidden py-24 text-white">
      {/* ✨ Background (your global reusable one) */}
      <GlowBackground />

      <Container className="relative z-10 grid gap-12 md:grid-cols-12 items-start">
        {/* Left Column */}
        <div className="md:col-span-5 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            WHY BUILD
          </h2>

          {/* Accent arrow line */}
          <svg
            className="mt-6"
            width="260"
            height="28"
            viewBox="0 0 260 28"
            fill="none"
            aria-hidden="true"
          >
            {/* changed from #38BDF8 to your teal */}
            <path d="M0 14h220" stroke="#6FD0DF" strokeWidth="4" />
            <path
              d="M210 6l12 8-12 8"
              fill="none"
              stroke="#6FD0DF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-slate-400 max-w-md">
            GetInfo redefines how people access information — turning ordinary
            inquiries into intelligent, human-like interactions.
          </p>
        </div>

        {/* Right Column - Bullet Features */}
        <div className="md:col-span-7 grid gap-6">
          {FEATURES.map((item, i) => (
            <div
              key={i}
              className="
                flex items-start gap-4 
                bg-[#101010]/60 
                border border-[rgba(111,208,223,0.10)] 
                rounded-2xl p-5 
                hover:border-[rgba(111,208,223,0.30)] 
                hover:shadow-[0_0_20px_rgba(111,208,223,0.25)] 
                transition-all 
                backdrop-blur-sm
              "
            >
              <CheckCircle2
                className="
                  w-6 h-6 
                  text-[var(--gi-teal-300)] 
                  flex-shrink-0 mt-1
                "
              />
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
