import React from "react";
import Container from "../ui/Container";
import babylon from "../../assets/logos/babylon.svg";
import blender from "../../assets/logos/blender.svg";
import unity from "../../assets/logos/unity.svg";
import unreal from "../../assets/logos/unreal.svg";

export default function TechStrip() {
  const LOGOS = [
    { src: babylon, alt: "Babylon.js", scale: "scale-75", delay: "0s" },
    { src: blender, alt: "Blender", scale: "scale-75", delay: "1s" },
    { src: unity, alt: "Unity", scale: "scale-100", delay: "2s" },
    { src: unreal, alt: "Unreal Engine", scale: "scale-75", delay: "3s" },
  ];

  return (
    <section
      id="technologies"
      className="relative overflow-hidden py-24 text-white"
    >
      {/* Background gradient - teal tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(43,168,191,0.08),transparent_70%)] pointer-events-none -z-10" />

      {/* Top & bottom fades */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[var(--gi-bg)] to-transparent pointer-events-none -z-10" />
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[var(--gi-bg)] to-transparent pointer-events-none -z-10" />

      {/* Title */}
      <Container className="relative z-10 text-center mb-12">
        <h3 className="font-extrabold text-3xl sm:text-4xl text-white drop-shadow-[0_0_20px_rgba(43,168,191,0.25)]">
          TECHNOLOGIES
        </h3>
      </Container>

      {/* Infinite Logo Slider */}
      <div className="overflow-hidden w-full">
        <div className="flex animate-marquee gap-24 sm:gap-32 w-[200%]">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-[25vw] min-w-[200px]"
              style={{
                animation: `float 4s ease-in-out infinite`,
                animationDelay: l.delay,
              }}
            >
              <img
                src={l.src}
                alt={l.alt}
                className={`max-w-[180px] sm:max-w-[220px] object-contain transform ${l.scale} opacity-90 hover:opacity-100 hover:drop-shadow-[0_0_20px_rgba(43,168,191,0.45)] transition-all duration-300`}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Side Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--gi-bg)] via-[var(--gi-bg)]/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--gi-bg)] via-[var(--gi-bg)]/80 to-transparent pointer-events-none" />

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
