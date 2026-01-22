"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonialsData = [
  {
    id: 3,
    quote:
      "Working with Zak was a brilliant experience among our team, design oriented, efficient workflow and a no giving up attitude, this made him stand out among the crowd, he never fails to complete a task and will even go above and beyond with projects always asking the next big questions on what can be done to make it better. I would say if you're looking for a software developer with great motivation he is your man.",
    name: "Joshua ",
    title: "Software Developer",
    company: "AuditPlus",
    relationship: "Client",
  },
  {
    id: 1,
    quote:
      "Zak is a talented developer with problem solving skills and a real drive to learn and pick up new skills. He is a strong asset to have on your team.",
    name: "Alfie Fort",
    title: "Software Engineer & Instructor",
    company: "The Developer Academy",
    relationship: "Tutor",
  },
  {
    id: 2,
    quote:
      "Zak is a thoughtful and driven developer with a natural problem-solving mindset. His curiosity and consistency in pushing projects forward make him a reliable and inspiring teammate. A true asset to any development team.",
    name: "Jak McAuley",
    title: "Software Developer",
    company: "Zajaik",
    relationship: "Pair programmer & Project partner",
  },
  {
    id: 4,
    quote: "Zak did a great job re-designing and rebuilding DJWilko.com for me. He improved my SEO score massively, listened to what I wanted on the site, and added in new features all in the space of a few days. I could not be happier!",
    name: "DJ Wilko",
    title: "Event DJ",
    company: "DJ Wilko",
    relationship: "Client",
  }
];

const Testimonials = () => {
  const { elementRef } = useIntersectionObserver({ threshold: 0.1 });
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" ref={elementRef as React.RefObject<HTMLElement>} aria-labelledby="testimonials-title" className="py-16 px-4 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 relative overflow-hidden rounded-2xl border border-border/70 bg-background/60 backdrop-blur py-6 md:py-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="text-center mb-10 md:mb-12">
          <h2 id="testimonials-title" className="text-3xl md:text-4xl font-semibold tracking-tight">What Clients & Peers Say</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-3 md:mt-4 text-sm md:text-base">
            A few words from people I&apos;ve built with.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonialsData.map((t, i) => (
              <CarouselItem key={t.id} className="pl-2 md:pl-4 md:basis-1/2">
                <Card className="relative h-full flex flex-col hover:shadow-md transition-shadow border border-border/70 bg-background/70 before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-primary/60 before:to-accent/60">
                  <CardHeader className="pb-2">
                    <Quote className="w-8 h-8 absolute top-6 right-6 bg-gradient-to-r from-primary/80 to-accent/80 bg-clip-text text-transparent" />
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3 flex-1">
                    <div>
                      <div className={`font-semibold text-sm inline-block px-2 py-1 rounded-md ${i % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'}`}>
                        {t.name}
                      </div>
                      <div className="text-xs text-foreground/70 mt-1">{t.title}</div>
                      <div className="text-xs text-foreground/60">{t.company}</div>
                      <div className="text-xs text-primary font-medium mt-1">{t.relationship}</div>
                    </div>
                    <blockquote className="text-sm leading-relaxed text-foreground/90">
                      &quot;{t.quote}&quot;
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
