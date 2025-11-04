import React from "react";

export default function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-50 bg-[var(--gi-bg)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gi-teal-900)]/25 via-[var(--gi-bg)] to-[var(--gi-teal-900)]/25" />
    </div>
  );
}
