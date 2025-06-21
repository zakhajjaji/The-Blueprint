'use client';
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "./ui/button";
import Link from 'next/link';
import Image from "next/image";
import { Menu } from 'lucide-react';


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-background dark:bg-background fixed top-0 left-0 z-50">
      <Link href="/">
        <Image
          src="/assets/zak-blueprint-logo.jpg"
          alt="Zak Blueprint Logo"
          width={100}
          height={100}
          className="rounded-xl"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 text-lg md:text-base font-medium items-center">
        <Link href="#about" className="hover:text-primary transition-colors">About Me</Link>
        <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        <Button asChild size="sm">
          <a href="" target="_blank" rel="noopener noreferrer">CV</a>
        </Button>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Toggle */}
      <Button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu className="w-6 h-6 text-foreground" />
      </Button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-2 mt-2 w-30 bg-background dark:bg-background shadow-lg rounded-lg flex flex-col gap-4 p-4 md:hidden text-base font-medium z-50">
          <Link href="#about" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>About Me</Link>
          <Link href="#projects" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="#contact" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-primary" onClick={() => setMenuOpen(false)}>CV</a>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}