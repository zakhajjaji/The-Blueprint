"use client";
import React from "react";

const stats = [
  { label: "Commits", value: "800+" },
  { label: "SaaS tools", value: "5" },
  { label: "AI integrations", value: "3" },
  { label: "Growing Brand", value: "1 " },
];

export default function Stats() {
  return (
    <section id="stats" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/60 backdrop-blur p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border/70 bg-background/60 p-5 text-center">
                <div className="text-2xl md:text-3xl font-semibold tracking-tight">{s.value}</div>
                <div className="mt-1 font-mono text-xs md:text-sm tracking-wide text-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


