import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ArrowRight } from "../ui/Icons";
import { Button } from "../ui/Button";

function chooseVideoSrc(width) {
  if (width < 520) return "/videos/drhazem-480.mp4";
  if (width < 900) return "/videos/drhazem-720.mp4";
  return "/videos/drhazem-1080.mp4";
}

export default function Hero() {
  const [videoSrc, setVideoSrc] = React.useState(() => {
    if (typeof window !== "undefined") return chooseVideoSrc(window.innerWidth);
    return "/videos/drhazem-720.mp4";
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const numParticles = 50;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2 + 0.8,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(111,208,223,0.8)";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }
      requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const newSrc = chooseVideoSrc(window.innerWidth);
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
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        key={videoSrc}
        className="absolute inset-0 w-full h-full object-cover -z-30 brightness-[0.55]"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/drhazem-poster.jpg"
        aria-hidden="true"
      />

      {/* Grid Overlay + Particles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(111,208,223,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(111,208,223,0.07)_1px,transparent_1px)] bg-[size:80px_80px] animate-gridMove -z-10"></div>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none -z-10"></canvas>

      {/* Smooth fade bottom */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-[var(--gi-bg)]"></div>

      <Container className="relative z-10 px-6 md:px-12 lg:px-20 py-24 md:py-0 max-w-3xl">
        <div className="space-y-6 text-left animate-fadeInUp">
          <h1 className="font-display font-extrabold leading-tight text-[clamp(2.5rem,5vw,4.5rem)] text-white drop-shadow-[0_0_20px_rgba(111,208,223,0.25)]">
            Get <span className="text-[var(--gi-teal-300)]">Answers</span>.<br />
            Get <span className="text-[var(--gi-teal-300)]">Clarity</span>.<br />
            <span className="text-[var(--gi-teal-300)]">GetInfo.</span>
          </h1>

          <p className="max-w-prose text-base sm:text-lg text-gray-200/90 leading-relaxed">
            Save time, skip the noise, and let GetInfo.ae deliver the information you need — instantly.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <a href="#introduction" aria-label="Scroll to introduction">
              <Button
                size="lg"
                className="bg-[var(--gi-teal-500)] text-white font-semibold rounded-full shadow-lg shadow-[var(--gi-teal-500)]/25 hover:shadow-[var(--gi-teal-300)]/50 hover:scale-105 transition-all duration-300"
              >
                LEARN MORE
              </Button>
            </a>
            <span className="inline-flex items-center text-[var(--gi-teal-300)] hover:translate-x-1 transition-transform">
              <ArrowRight />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
