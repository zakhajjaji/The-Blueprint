"use client";
import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { gsap } from "gsap";
import { Code, GraduationCap, Briefcase, Heart } from "lucide-react";

const timeline = [
  {
    year: "Oct 2025",
    title: "Freelance Full-Stack Developer",
    description: "Building production-ready web applications and AI-powered products for clients",
    icon: Briefcase,
  },
  {
    year: "Mar 2025",
    title: "Software Development Training",
    description: "Completed intensive full-stack development program focusing on modern web technologies",
    icon: GraduationCap,
  },
  {
    year: "Sep 2024",
    title: "Started Coding Journey",
    description: "Began learning web development and building personal projects",
    icon: Code,
  },
];

const interests = [
  "Building AI-powered applications",
  "Open source contributions",
  "Learning new technologies",
  "Designing user experiences",
  "Playing football",
  "Going to the gym",
  "Going for big walks",
  "Watching movies",
];

export default function About() {
  const { elementRef, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });
  const timelineRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasIntersected) {
      if (bioRef.current) {
        gsap.fromTo(
          bioRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
      }

      if (timelineRef.current) {
        const items = timelineRef.current.children;
        gsap.fromTo(
          Array.from(items),
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      }
    }
  }, [hasIntersected]);

  return (
    <section
      id="about"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-16 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
            A passionate developer building modern web applications and AI-powered solutions
          </p>
        </div>

        <div ref={bioRef} className="mb-16">
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/60 backdrop-blur p-8 md:p-12">
            <div className="prose prose-sm md:prose-base max-w-none">
              <p className="text-foreground/90 leading-relaxed mb-4">
                I&apos;m a full-stack developer specialising in building scalable web applications
                and AI-powered products. With a focus on modern technologies like Next.js, TypeScript,
                and Python, I create production-ready solutions that solve real-world problems.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source
                projects, and continuously learning to stay at the forefront of web development. 
                I also enjoy playing football, going to the gym, going for big walksand watching movies.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Timeline</h3>
          <div ref={timelineRef} className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative pl-12 pb-8 border-l-2 border-primary/30 last:border-l-0 last:pb-0"
                >
                  <div className="absolute -left-[15px] top-0 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-sm font-mono text-primary/70 mb-1">{item.year}</div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            What I Love
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border/70 bg-background/60 backdrop-blur hover:border-primary/50 transition-colors"
              >
                <p className="text-foreground/90 text-center">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
