"use client";
import ThemeToggle from "@/components/ThemeToggle";
import PillNav, { PillNavItem } from "./animations/PillNav";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useEffect } from "react";

const navItems: PillNavItem[] = [
  { label: "Home", href: "#hero", ariaLabel: "Go to hero" },
  { label: "About", href: "#about", ariaLabel: "Go to about section" },
  { label: "Skills", href: "#skills", ariaLabel: "Go to skills section" },
  { label: "Projects", href: "#projects", ariaLabel: "Go to projects section" },
  { label: "Blog", href: "/blog", ariaLabel: "Go to blog" },
  { label: "Contact", href: "#contact", ariaLabel: "Go to contact section" },
];

export default function Nav() {
  const { activeSection } = useScrollPosition();
  
  // Map active section to href
  const getActiveHref = () => {
    if (!activeSection) return "#hero";
    return `#${activeSection}`;
  };

  // Smooth scroll handler
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const offset = 80; // Account for fixed nav
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="relative mx-auto max-w-6xl px-6 mb-6 sm:px-6 md:px-8 h-14 flex items-center justify-center">
        <PillNav
          logo="/assets/AureyaTech_Portfolio_Logo.jpg"
          logoAlt="Portfolio Logo"  
          items={navItems}
          className="text-foreground"
          baseColor="rgb(var(--foreground))"
          pillColor="rgb(var(--background))"
          hoveredPillTextColor="rgb(var(--foreground))"
          pillTextColor="rgb(var(--foreground))"
          initialLoadAnimation={true}
          activeHref={getActiveHref()}
          rightAccessory={<ThemeToggle />}
        />
        
      </div>
    </nav>
  );
}
