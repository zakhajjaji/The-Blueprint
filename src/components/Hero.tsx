import { Button } from "@/components/ui/button";
import Link from "next/link";
import RippleGrid from "./animations/RippleGrid";


export default function Hero() {
    return (
      <section
        id="hero"
        className="relative mt-24 py-24 bg-background text-card-foreground overflow-hidden"
      >
        {/* Ripple Background - NOT a wrapper, just layered behind */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <RippleGrid
            enableRainbow={false}
            gridColor="#A020F0"
            rippleIntensity={0.04}
            gridSize={50}
            gridThickness={10}
            mouseInteraction={true}
            mouseInteractionRadius={2.2}
            opacity={0.3}
          />
        </div>
  
        {/* Hero Content - layered above */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="absolute -z-10 inset-0 opacity-20" style={{ background: "linear-gradient(180deg, rgba(var(--accent-violet),1) 0%, rgba(var(--highlight-lilac),1) 100%)" }} />
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Full-Stack Developer & AI Product Builder
          </h1>
          <h4 className="mt-4 text-lg text-foreground max-w-xl mx-auto">
            I design and ship intelligent products at AureyaTech — fast, scalable, and beautiful.
          </h4>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="h-8 w-5 rounded-full border border-border flex items-start justify-center p-1 animate-bounce">
              <span className="h-2 w-1 rounded bg-foreground/70" />
            </div>
          </div>
        </div>
      </section>
    );
  }