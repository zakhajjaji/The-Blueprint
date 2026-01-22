"use client";
import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);

      // Find active section based on scroll position
      const sections = ["hero", "skills", "projects", "stats", "testimonials", "contact"];
      const scrollY = window.scrollY + 100; // Offset for fixed nav

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return { scrollPosition, activeSection };
}
