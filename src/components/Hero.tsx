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
            gridColor="#7d6eb7"
            rippleIntensity={0.02}
            gridSize={30}
            gridThickness={10}
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
            opacity={0.3}
          />
        </div>
  
        {/* Hero Content - layered above */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Zak Hajjaji - Software Developer
          </h1>
          <h4 className="mt-4 text-lg text-foreground max-w-xl mx-auto">
            Building sleek, scalable full-stack apps with clean code and creative flair
          </h4>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="secondary">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }