'use client';
import ThemeToggle from "@/components/ThemeToggle";

import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-background dark:bg-background fixed top-0 left-0 z-50">
      <h1 className="text-xl font-bold dark:text-white">The Blueprint</h1>
      <ThemeToggle />
      <ul className="flex gap-6 text-sm md:text-base font-medium">
        <li>
          <Link href="#about" className="hover:text-primary transition-colors">About Me</Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}