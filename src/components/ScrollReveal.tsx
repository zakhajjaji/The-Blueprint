"use client";
import React, { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { gsap } from "gsap";
import { useEffect } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
}: ScrollRevealProps) {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  const contentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasIntersected || !contentRef.current) return;

    const element = contentRef.current;
    const directions = {
      up: { y: 50, x: 0 },
      down: { y: -50, x: 0 },
      left: { y: 0, x: 50 },
      right: { y: 0, x: -50 },
      fade: { y: 0, x: 0 },
    };

    const initial = directions[direction];

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: initial.y,
        x: initial.x,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        delay,
        ease: "power3.out",
      }
    );
  }, [hasIntersected, direction, delay, duration]);

  return (
    <div ref={elementRef as React.RefObject<HTMLDivElement>} className={className}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
