// src/components/sections/ServicesGrid.jsx
import React from "react";
import Container from "../ui/Container";

const ITEMS = [
  {
    id: "domain-knowledge",
    title: "Domain Knowledge Base",
    desc:
      "Provide accurate, tailored answers with a powerful knowledge base built around your business or event. GetInfo makes information reliable, structured, and easy to update.",
    img: "/services/domain-knowledge.svg",
    more: `We build structured knowledge bases from any source: PDFs, websites, menus, schedules, product lists, and FAQs.
    • Fast updates: add or edit entries through a simple dashboard.
    • Context-aware answers: follow-up questions stay on topic.
    • Analytics: see what visitors ask most and close information gaps.`,
  },
  {
    id: "avatars",
    title: "Avatars",
    desc:
      "Engage visitors with lifelike 3D avatars that listen, speak, and interact naturally — transforming information into a human-like experience.",
    img: "/services/avatars.svg",
    more: `Our avatar package includes:
    • High-quality 3D characters with lip-sync and basic gestures.
    • Integration with ElevenLabs (or your TTS) for natural voice output.
    • Lightweight export options for web streaming or local kiosks.
    • Custom branding — clothes, colors, and voice presets.`,
  },
  {
    id: "multilingual",
    title: "Multilingual Support",
    desc:
      "Break language barriers with instant multilingual communication. From English to Arabic and beyond, GetInfo makes sure everyone feels understood.",
    img: "/services/multilingual.svg",
    more: `We support many languages with:
    • Real-time translation pipelines and locale-aware responses.
    • Right-to-left (RTL) UI handling for Arabic and similar languages.
    • Language detection, voice selection per-language, and fallback logic.`,
  },
  {
    id: "realtime",
    title: "Real-Time Interaction",
    desc:
      "Deliver information instantly and dynamically. Visitors can ask questions on the spot and receive clear, conversational responses in real-time.",
    img: "/services/realtime.svg",
    more: `Real-time system features:
    • Millisecond-level response streaming and partial replies.
    • Local caching for common queries to reduce latency.
    • Moderation & safety layers that prevent hallucinations and off-topic answers.`,
  },
];

function ServiceCard({ item, expanded, onToggle }) {
  return (
    <div className="h-full rounded-2xl bg-gradient-to-b from-[var(--gi-teal-300)] to-[var(--gi-teal-700)] p-[2px] shadow-card">
      <div className="h-full rounded-2xl bg-black/40 p-6 flex flex-col">
        {/* top illustration */}
        <div className="mx-auto mb-6 w-full max-w-[360px] rounded-[40px] bg-black flex items-center justify-center">
          <img src={item.img} alt="" className="h-[110px] object-contain" />
        </div>

        <h3 className="font-extrabold tracking-wide text-lg">{item.title}</h3>
        <p className="mt-3 text-sm text-white/80 leading-relaxed">{item.desc}</p>

        {/* expandable content */}
        <div
          className={`mt-4 overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-80" : "max-h-0"
          }`}
          aria-hidden={!expanded}
        >
          <div className="text-sm text-white/80 leading-relaxed space-y-3 pb-4">
            {item.more.split("\n").map((line, i) => (
              <p key={i} className="whitespace-pre-line">
                {line.trim()}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6">
          <button
            onClick={() => onToggle(item.id)}
            aria-expanded={expanded}
            aria-controls={`${item.id}-more`}
            className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gi-teal-500)] rounded-full"
          >
            <span className="pill gi-gradient gi-btn shine px-5 py-2.5 text-xs font-bold inline-block">
              {expanded ? "SHOW LESS" : "LEARN MORE"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  const [openId, setOpenId] = React.useState(null);

  const handleToggle = (id) => {
    setOpenId((cur) => (cur === id ? null : id));
    // optional: focus management or analytics can be added here
  };

  return (
    <section id="services" className="py-16 sm:py-20">
      <Container className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((it) => (
          <ServiceCard
            key={it.id}
            item={it}
            expanded={openId === it.id}
            onToggle={handleToggle}
          />
        ))}
      </Container>
    </section>
  );
}
  