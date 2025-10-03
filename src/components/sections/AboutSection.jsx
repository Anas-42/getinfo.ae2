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
      {/* responsive background video */}
      <video
        key={videoSrc}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/intro-poster.jpg"
        aria-hidden="true"
      />

    {/* overlay for readability */}
<div className="absolute inset-0 bg-black/40 -z-10" />

<Container className="relative z-10">
  <div className="mx-auto max-w-3xl text-center space-y-6">
    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
      ABOUT <span className="accent">GetInfo.ae</span>
    </h2>

    <p
      className="leading-relaxed text-[clamp(1.05rem,2.2vw,1.5rem)] text-white/80"
      style={{
        textShadow: `
          1px 1px 0 #2aa8bf,
         -1px 1px 0 #2aa8bf,
          1px -1px 0 #2aa8bf,
         -1px -1px 0 #2aa8bf
        `,
      }}
    >
      GetInfo is an AI-powered info desk solution that brings information to life through interactive 3D avatars. Our system listens, understands, and responds in real-time — supporting multiple languages and delivering accurate, domain-specific knowledge instantly.  
      From malls and events to hotels and campuses, GetInfo is designed to be the future of customer interaction.
    </p>

    <a href="#join" className="block">
      <Button className="mx-auto">LET&apos;S GET IN TOUCH</Button>
    </a>
  </div>
</Container>

    </section>
  );
}
