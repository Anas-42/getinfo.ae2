import React from "react";
import Container from "../ui/Container";
import { ArrowRight } from "../ui/Icons";

// Inline SVG icons
const PhoneIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 5.5C2 4.12 3.12 3 4.5 3h2.09a1 1 0 01.99.86l.49 3.14a1 1 0 01-.27.84l-1.41 1.4a13.05 13.05 0 006.35 6.35l1.4-1.41a1 1 0 01.84-.27l3.14.49a1 1 0 01.86.99v2.09c0 1.38-1.12 2.5-2.5 2.5A17.5 17.5 0 012 5.5z"
    />
  </svg>
);

const MailIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
);

export default function IntroSection() {
  return (
    <section id="introduction" className="relative overflow-hidden py-28 md:py-36 text-white">
      <Container className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-10">
        {/* Title */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            INTRODUCTION
          </h2>
          <div className="h-[2px] w-40 mx-auto bg-[var(--gi-teal-300)] rounded-full" />
        </div>

        {/* Paragraph */}
        <div className="space-y-6 text-white/80 text-lg leading-relaxed">
          <p>
            The way people access information hasn’t evolved with technology.
            Long waits, static kiosks, and outdated systems make finding answers
            harder than it should be.
          </p>
          <p>
            <span className="text-[var(--gi-teal-300)] font-semibold">At GetInfo,</span> we’re redefining that experience. By blending AI with intuitive design, we make information instant, personalized, and engaging — transforming simple inquiries into seamless interactions.
            .
          </p>
        </div>

        {/* Arrow */}
        <div className="mt-4">
          <ArrowRight className="w-10 h-10 text-[var(--gi-teal-300)] animate-bounce-x" />
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
          {/* Phone */}
          <div className="flex items-center gap-4 bg-[var(--gi-bg)]/70 border border-[var(--gi-teal-700)]/40 backdrop-blur-md rounded-2xl px-6 py-4 shadow-[0_0_15px_rgba(43,168,191,0.2)] hover:shadow-[0_0_25px_rgba(43,168,191,0.4)] transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--gi-teal-300)] text-[var(--gi-teal-300)]">
              <PhoneIcon className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-white text-sm">Give Us a Call</p>
              <p className="text-[var(--gi-teal-300)] text-sm">+971 501088466</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 bg-[var(--gi-bg)]/70 border border-[var(--gi-teal-700)]/40 backdrop-blur-md rounded-2xl px-6 py-4 shadow-[0_0_15px_rgba(43,168,191,0.2)] hover:shadow-[0_0_25px_rgba(43,168,191,0.4)] transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--gi-teal-300)] text-[var(--gi-teal-300)]">
              <MailIcon className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-white text-sm">Send Us a Message</p>
              <p className="text-[var(--gi-teal-300)] text-sm">info@getinfo.ae</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
