// src/components/layout/Footer.jsx
import React from "react";
import Container from "../ui/Container";
import { ArrowUp, Phone, Mail, Instagram } from "lucide-react";

const sitemap = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#technologies", label: "Technologies" },
  { href: "#join", label: "Contact" },
];

export default function Footer() {
  const onBackToTop = () => {
    const reduce = typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="relative z-10 mt-24 pt-20 pb-16 border-t border-white/10 bg-black"
    >
      <Container>
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Logo block */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/logo.png"
              alt="GetInfo.ae logo"
              className="h-[150px] md:h-[172px] w-auto opacity-100"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Contact block */}
          <address className="not-italic">
            <ul className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-5 text-white/85 text-base">
              <li>
                <a
                  href="tel:+971501088466"
                  className="flex items-center gap-2 px-2 py-2 rounded-lg hover:text-[var(--gi-teal-300)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gi-teal-500)]"
                >
                  <Phone aria-hidden="true" className="w-5 h-5 text-[var(--gi-teal-300)]" />
                  +971 50 108 8466
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@getinfo.ae"
                  className="flex items-center gap-2 px-2 py-2 rounded-lg hover:text-[var(--gi-teal-300)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gi-teal-500)]"
                >
                  <Mail aria-hidden="true" className="w-5 h-5 text-[var(--gi-teal-300)]" />
                  info@getinfo.ae
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/getinfo.ae"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GetInfo.ae on Instagram (opens in new tab)"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-11 h-11 rounded-full border border-[var(--gi-teal-300)] flex items-center justify-center transition-colors group-hover:bg-[var(--gi-teal-600)]/20">
                    <Instagram aria-hidden="true" className="w-5 h-5 text-[var(--gi-teal-300)]" />
                  </span>
                  <span className="text-white/85 group-hover:text-[var(--gi-teal-300)] transition-colors">
                    @getinfo.ae
                  </span>
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Divider */}
        <div className="h-px w-full mt-14 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Sitemap */}
        <nav aria-label="Footer" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-8 text-sm text-white/65">
            {sitemap.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-2 py-1 hover:text-[var(--gi-teal-300)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gi-teal-500)] rounded"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Back To Top */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={onBackToTop}
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-[var(--gi-teal-600)] text-white font-medium text-base hover:bg-[var(--gi-teal-500)] hover:shadow-[0_0_22px_rgba(43,168,191,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--gi-teal-500)] focus-visible:ring-offset-black transition-all"
            aria-label="Back to top"
          >
            <ArrowUp aria-hidden="true" className="w-6 h-6" />
            Back to Top
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/50 text-sm mt-10">
          © {new Date().getFullYear()} GetInfo.ae — All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
