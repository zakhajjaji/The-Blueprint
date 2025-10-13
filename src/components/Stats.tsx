"use client";
import React from "react";

const stats = [
  { label: "commits", value: "800+" },
  { label: "SaaS tools", value: "5" },
  { label: "AI integrations", value: "3" },
  { label: "growing brand", value: "1" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-12 px-6 bg-[rgba(var(--highlight-lilac),0.35)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-[rgba(var(--accent-violet),0.25)] bg-white/70 backdrop-blur-md p-6 text-center">
              <div className="text-3xl font-semibold">{s.value}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wide text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


