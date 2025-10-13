import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Hero() {
    return (
      <section
        id="hero"
        className="relative mt-12 py-12 text-card-foreground"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/60 backdrop-blur py-16 md:py-24">
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
              <div className="absolute left-1/2 top-0 h-[40vh] w-[70vw] -translate-x-1/2 rounded-full blur-2xl" style={{ background: "radial-gradient(ellipse at center, rgb(var(--highlight-lilac) / 0.5), transparent 70%)" }} />
              <div className="absolute left-[12%] top-[30%] h-56 w-56 -translate-x-1/2 rounded-full blur-2xl" style={{ background: "radial-gradient(circle, rgb(var(--highlight-lilac) / 0.45), transparent 65%)" }} />
              <div className="absolute right-[8%] top-[22%] h-48 w-48 translate-x-1/2 rounded-full blur-2xl" style={{ background: "radial-gradient(circle, rgb(var(--accent-violet) / 0.45), transparent 65%)" }} />
            </div>

            <div className="text-center relative z-10 px-4">
              <div className="mx-auto max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-2">
                  Zak Hajjaji
                </h1>
                <h2 className="mt-10 md:mt-4 text-2xl md:text-4xl font-semibold tracking-tight motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-2">
                  Full-Stack Developer & AI Product Builder
                </h2>
                {/* <div className="mt-10 font-mono text-xs md:text-sm tracking-wide text-foreground/70 motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-2 motion-safe:delay-125">
                  500+ commits · 5 SaaS tools · AI integrations
                </div> */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2 motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-2 motion-safe:delay-150">
                  <span className="px-3 py-1 text-xs md:text-sm font-medium">Next.js</span>
                  <span className="px-3 py-1 text-xs md:text-sm font-medium">TypeScript</span>
                  <span className="px-3 py-1 text-xs md:text-sm font-medium">FastAPI</span>
                  <span className="px-3 py-1 text-xs md:text-sm font-medium">Python</span>
                  <span className="px-3 py-1 text-xs md:text-sm font-medium">Express.js</span>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-2 motion-safe:delay-175">
                  <Button size="lg" variant="outline" className="backdrop-blur-md bg-white/30 border-[rgba(var(--accent-violet),0.35)] hover:bg-white/50">
                    <Link href="#projects">View Projects</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="backdrop-blur-md bg-white/30 border-[rgba(var(--accent-violet),0.35)] hover:bg-white/50">
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