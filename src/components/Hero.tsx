"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const glow3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup to hide elements
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, tagsRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30,
      });

      // Create master timeline
      const tl = gsap.timeline();

      // Animate badge
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      // Animate title with character split effect
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.3");

      // Animate subtitle
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4");

      // Animate tags with stagger
      tl.to(tagsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=0.4");

      // Animate buttons
      tl.to(buttonsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=0.3");

      // Parallax effect for glows on scroll
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (glow1Ref.current) {
          gsap.to(glow1Ref.current, {
            y: scrollY * 0.3,
            duration: 0.3,
            ease: "none",
          });
        }
        if (glow2Ref.current) {
          gsap.to(glow2Ref.current, {
            y: scrollY * 0.2,
            duration: 0.3,
            ease: "none",
          });
        }
        if (glow3Ref.current) {
          gsap.to(glow3Ref.current, {
            y: scrollY * 0.25,
            duration: 0.3,
            ease: "none",
          });
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Floating animation for glows
      gsap.to([glow1Ref.current, glow2Ref.current, glow3Ref.current], {
        y: "+=20",
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative mt-12 py-12 text-card-foreground scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-sm-2xl bg-background/60 backdrop-blur py-16 md:py-24">
          {/* Framed background: masked gradient + glows */}
          <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgb(var(--highlight-lilac) / 0.6) 0%, rgb(var(--accent-violet) / 0.4) 50%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 85%)",
                maskImage: "linear-gradient(to bottom, black 40%, transparent 85%)",
              }}
            />
            <div
              ref={glow1Ref}
              className="absolute left-1/2 top-0 h-[40vh] w-[70vw] -translate-x-1/2 rounded-sm-full blur-2xl"
              style={{ background: "radial-gradient(ellipse at center, rgb(var(--highlight-lilac) / 0.5), transparent 70%)" }}
            />
            <div
              ref={glow2Ref}
              className="absolute left-[12%] top-[30%] h-56 w-56 -translate-x-1/2 rounded-sm-full blur-2xl"
              style={{ background: "radial-gradient(circle, rgb(var(--highlight-lilac) / 0.45), transparent 65%)" }}
            />
            <div
              ref={glow3Ref}
              className="absolute right-[8%] top-[22%] h-48 w-48 translate-x-1/2 rounded-sm-full blur-2xl"
              style={{ background: "radial-gradient(circle, rgb(var(--accent-violet) / 0.45), transparent 65%)" }}
            />
          </div>

          <div className="text-center relative z-10 px-4">
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-sm-full bg-secondary/10 border border-primary/20 text-sm font-medium text-secondary-foreground"
            >
              <span>Freelancing Since 2025</span>
            </div>

            <div className="mx-auto max-w-3xl">
              <h1
                ref={titleRef}
                className="text-5xl md:text-6xl font-semibold tracking-tight"
              >
                Zak Hajjaji
              </h1>
              <h2
                ref={subtitleRef}
                className="mt-10 md:mt-4 text-2xl md:text-4xl font-semibold tracking-tight"
              >
                Full-Stack Developer & AI Product Builder
              </h2>
              <div
                ref={tagsRef}
                className="mt-10 flex flex-wrap items-center justify-center gap-2"
              >
                <span className="px-3 py-1 text-xs md:text-sm font-medium bg-background/40 backdrop-blur rounded-sm-lg border border-border/50">
                  Next.js
                </span>
                <span className="px-3 py-1 text-xs md:text-sm font-medium bg-background/40 backdrop-blur rounded-sm-lg border border-border/50">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-xs md:text-sm font-medium bg-background/40 backdrop-blur rounded-sm-lg border border-border/50">
                  FastAPI
                </span>
                <span className="px-3 py-1 text-xs md:text-sm font-medium bg-background/40 backdrop-blur rounded-sm-lg border border-border/50">
                  Python
                </span>
                <span className="px-3 py-1 text-xs md:text-sm font-medium bg-background/40 backdrop-blur rounded-sm-lg border border-border/50">
                  Express.js
                </span>
              </div>
              <div
                ref={buttonsRef}
                className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-md bg-white/30 border-[rgba(var(--accent-violet),0.35)] hover:bg-secondary/50 transition-all hover:scale-105"
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-md bg-white/30 border-[rgba(var(--accent-violet),0.35)] hover:bg-secondary/50 transition-all hover:scale-105"
                >
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}