"use client";
import ThemeToggle from "@/components/ThemeToggle";
import PillNav, { PillNavItem } from "./animations/PillNav";

const navItems: PillNavItem[] = [
  { label: "Home", href: "#hero", ariaLabel: "Go to hero" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },

];

export default function Nav() {
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
          rightAccessory={<ThemeToggle />}
        />
        
      </div>
    </nav>
  );
}
