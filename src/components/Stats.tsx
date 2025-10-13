"use client";
import React from "react";
import SpotlightCard from "./animations/SpotlightCard";

const stats = [
  { label: "Commits", value: "800+" },
  { label: "SaaS tools", value: "5" },
  { label: "AI integrations", value: "3" },
  { label: "Growing Brand", value: "1 " },
];

export default function Stats() {
  return (
    <section id="stats" className="py-12 md:py-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/60 backdrop-blur p-5 md:p-6">
          {/* Hero-like background: masked lilac gradient + glows */}
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgb(var(--highlight-lilac) / 0.55) 0%, rgb(var(--accent-violet) / 0.35) 55%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 40%, transparent 85%)",
                maskImage:
                  "linear-gradient(to bottom, black 40%, transparent 85%)",
              }}
            />
            <div
              className="absolute left-1/2 top-0 h-[30vh] w-[70%] -translate-x-1/2 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgb(var(--highlight-lilac) / 0.5), transparent 70%)",
              }}
            />
            <div
              className="absolute left-[12%] top-[28%] h-40 w-40 -translate-x-1/2 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, rgb(var(--highlight-lilac) / 0.45), transparent 65%)",
              }}
            />
            <div
              className="absolute right-[8%] top-[18%] h-36 w-36 translate-x-1/2 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, rgb(var(--accent-violet) / 0.45), transparent 65%)",
              }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s) => (
              <SpotlightCard key={s.label} className="p-5 text-center rounded-xl bg-background/70 border border-border/70">
                <div className="text-2xl md:text-3xl font-semibold tracking-tight">{s.value}</div>
                <div className="mt-1 font-mono text-xs md:text-sm tracking-wide text-foreground/70">{s.label}</div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


