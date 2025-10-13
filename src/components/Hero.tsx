import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Hero() {
    return (
      <section
        id="hero"
        className="relative mt-24 py-24 text-card-foreground"
      >
        {/* Background: lilac-forward gradient/glow */}
        <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
          {/* Primary lilac wash */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgb(var(--highlight-lilac) / 0.55) 0%, rgb(var(--accent-violet) / 0.7) 60%, transparent 100%)" }} />
          {/* Radial glows */}
          <div className="absolute left-1/2 top-0 h-[70vh] w-[90vw] -translate-x-1/2 rounded-full blur-3xl" style={{ background: "radial-gradient(ellipse at center, rgb(var(--highlight-lilac) / 0.9), rgb(var(--accent-violet) / 0.45) 60%, transparent 75%)" }} />
          <div className="absolute left-[12%] top-[38%] h-80 w-80 -translate-x-1/2 rounded-full blur-2xl" style={{ background: "radial-gradient(circle, rgb(var(--highlight-lilac) / 0.85), transparent 65%)" }} />
          <div className="absolute right-[8%] top-[22%] h-64 w-64 translate-x-1/2 rounded-full blur-2xl" style={{ background: "radial-gradient(circle, rgb(var(--accent-violet) / 0.75), transparent 65%)" }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-2">
              Zak Hajjaji
            </h1>
            <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-2">
              Full-Stack Developer & AI Product Builder
            </h2>
            <div className="mt-3 font-mono text-xs tracking-wide text-foreground/70 motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-2 motion-safe:delay-125">
              500+ commits · 5 SaaS tools · AI integrations · Growing Brand
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-2 motion-safe:delay-150">
            <span className="px-3 py-1 text-xs font-medium rounded-md border border-[rgba(var(--accent-violet),0.35)] bg-[rgba(var(--highlight-lilac),0.35)]">Next.js</span>
            <span className="px-3 py-1 text-xs font-medium rounded-md border border-[rgba(var(--accent-violet),0.35)] bg-[rgba(var(--highlight-lilac),0.35)]">TypeScript</span>
            <span className="px-3 py-1 text-xs font-medium rounded-md border border-[rgba(var(--accent-violet),0.35)] bg-[rgba(var(--highlight-lilac),0.35)]">FastAPI</span>
            <span className="px-3 py-1 text-xs font-medium rounded-md border border-[rgba(var(--accent-violet),0.35)] bg-[rgba(var(--highlight-lilac),0.35)]">OpenAI</span>
            </div>
            {/* <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-2 motion-safe:delay-150">
              <Button size="lg" className="bg-gradient-to-r from-[rgba(var(--accent-violet),0.95)] to-[rgba(var(--highlight-lilac),0.95)] text-foreground hover:from-[rgba(var(--accent-violet),1)] hover:to-[rgba(var(--highlight-lilac),1)]">
              <Link href="#projects">View Projects</Link>
            </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-md bg-white/30 border-[rgba(var(--accent-violet),0.35)] hover:bg-white/50">
              <Link href="#contact">Contact Me</Link>
            </Button>
            </div> */}
          </div>
        </div>
      </section>
    );
  }