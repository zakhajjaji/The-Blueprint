"use client";
import React, { useEffect, useRef  } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { gsap } from "gsap";

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
  const { elementRef, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });
  const progressBarsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    if (hasIntersected) {
      // Animate progress bars
      rows.forEach((row) => {
        row.items.forEach((item) => {
          const key = `${row.label}-${item.name}`;
          const bar = progressBarsRef.current.get(key);
          if (bar) {
            gsap.fromTo(
              bar,
              { width: "0%" },
              {
                width: `${item.value}%`,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.2,
              }
            );
          }
        });
      });

      // Animate cards fade in
      const cards = document.querySelectorAll('[data-skill-card]');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [hasIntersected]);

  return (
    <section 
      id="skills" 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-16 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Skills & Stack Levels
          </h2>
          <p className="mt-4 text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, scalable applications
          </p>
        </div>
        <div className="mt-8 space-y-8">
          {rows.map((row) => (
            <div key={row.label}>
              <div className="font-mono text-xs tracking-wide text-foreground/60 mb-3 uppercase">
                {row.label}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {row.items.map((item) => {
                  const key = `${row.label}-${item.name}`;
                  return (
                    <div
                      key={item.name}
                      data-skill-card
                      className="rounded-md border border-border/70 p-4 bg-background/60 backdrop-blur hover:border-primary/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                        <span className="text-sm text-foreground/70 font-mono">
                          {item.value}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[rgba(var(--highlight-lilac),0.35)] overflow-hidden">
                        <div
                          ref={(el) => {
                            if (el) progressBarsRef.current.set(key, el);
                          }}
                          className="h-2 rounded-full bg-[rgb(var(--accent-violet))] transition-all duration-300"
                          style={{ width: hasIntersected ? `${item.value}%` : "0%" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


