"use client";
import React from "react";

type Row = { label: string; items: { name: string; value: number }[] };

const rows: Row[] = [
  { label: "Frontend", items: [
    { name: "Next.js", value: 95 },
    { name: "React", value: 90 },
    { name: "TailwindCSS", value: 90 },
  ]},
  { label: "Backend", items: [
    { name: "FastAPI", value: 85 },
    { name: "Node.js", value: 80 },
    { name: "Prisma", value: 75 },
  ]},
  { label: "Databases", items: [
    { name: "PostgreSQL", value: 85 },
    { name: "Neon.tech", value: 80 },
    { name: "MongoDB", value: 70 },
  ]},
  { label: "AI / ML", items: [
    { name: "OpenAI API", value: 90 },
    { name: "Prompt Engineering", value: 85 },
    { name: "LangChain", value: 70 },
  ]},
  { label: "Dev Tools", items: [
    { name: "Git / GitHub", value: 95 },
    { name: "Docker", value: 75 },
    { name: "Vercel / Render", value: 90 },
  ]},
  { label: "Design / UX", items: [
    { name: "Figma", value: 80 },
    { name: "Notion", value: 85 },
  ]},
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Skills & Stack Levels</h2>
        <div className="mt-8 space-y-8">
          {rows.map((row) => (
            <div key={row.label}>
              <div className="font-mono text-xs tracking-wide text-slate-500 mb-3">{row.label}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {row.items.map((item) => (
                  <div key={item.name} className="rounded-md border border-border p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm text-foreground/70">{item.value}%</span>
                    </div>
                    <div className="mt-3 h-2 w-full rounded bg-[rgba(var(--highlight-lilac),0.35)]">
                      <div
                        className="h-2 rounded bg-[rgb(var(--accent-violet))]"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


