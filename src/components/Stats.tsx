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
    <section id="stats" className="py-12 md:py-16 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/60 backdrop-blur p-5 md:p-6">
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


