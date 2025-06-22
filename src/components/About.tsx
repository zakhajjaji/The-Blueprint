'use client' 
import { Button } from "@/components/ui/button"; 
import { Card } from "@/components/ui/card"; 
import aboutPhrases from "@/data/aboutPhrases";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "./ui/carousel";
import React from "react";
import { ArrowUp } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';


export default function About() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)



React.useEffect(() => {
    if (!api) {
        return
    }
    setCurrent(api.selectedScrollSnap() +1 )
    api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
    })
}, [api])

    return(
<section id="about" className="py-4 px-6 bg-background text-foreground">
  <div className="max-w-3xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-bold mb-4">The Blueprint Scrolls</h2>
    <p className="text-muted-foreground text-lg">
      A timeline of the choices, challenges, and clarity that shaped this blueprint.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {aboutPhrases.map(({ title, text }, index) => (
      <Card
        key={index}
        className="bg-card text-card-foreground border border-border shadow-md"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{text}</p>
        </div>
      </Card>
    ))}
  </div>
</section>
    )
}
