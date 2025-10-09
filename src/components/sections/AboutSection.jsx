// src/components/sections/AboutSection.jsx
import React from "react";
import Container from "../ui/Container";
import { Button } from "../ui/Button";

function chooseIntroVideo(width) {
  if (width < 520) return "/videos/intro-480.mp4";
  if (width < 900) return "/videos/intro-720.mp4";
  return "/videos/intro-1080.mp4";
}

export default function AboutSection() {
  const [videoSrc, setVideoSrc] = React.useState(() => {
    if (typeof window !== "undefined") return chooseIntroVideo(window.innerWidth);
    return "/videos/intro-720.mp4";
  });

  React.useEffect(() => {
    const onResize = () => {
      const newSrc = chooseIntroVideo(window.innerWidth);
      setVideoSrc((cur) => (cur === newSrc ? cur : newSrc));
    };

    let t = null;
    const handler = () => {
      clearTimeout(t);
      t = setTimeout(onResize, 150);
    };

    window.addEventListener("resize", handler);
    onResize();

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-24">
      {/* 🎥 Responsive background video */}
      <video
        key={videoSrc}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/intro.png"
        aria-hidden="true"
      />

      {/* ✨ Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 -z-10" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center space-y-6 animate-fadeIn">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
            ABOUT{" "}
            <span className="text-[var(--gi-teal-400)] glow-text">GetInfo.ae</span>
          </h2>

          <p
            className="leading-relaxed text-[clamp(0.9rem,1.8vw,1.2rem)] text-white/80"
            style={{
              textShadow: `
                -1px -1px 0rgb(255, 255, 255)
               -1px -1px 0rgb(255, 255, 255)
                -1px -1px 0rgb(255, 255, 255)
               -1px -1px 0rgb(255, 255, 255)
              `,
            }}
          >
            GetInfo is an AI-powered info desk solution that transforms how people
            access information. Through interactive 3D avatars, our system listens,
            understands, and responds naturally — supporting multiple languages and
            delivering instant, accurate answers.
            <br />
            <br />
            From malls and events to hotels and campuses, GetInfo redefines customer
            interaction — making it smarter, faster, and more human.
          </p>

          <a href="#join" className="block pt-4">
            <Button size="lg" className="mx-auto gi-btn shine">
              LET&apos;S GET IN TOUCH
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
