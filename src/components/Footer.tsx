import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-6xl mb-10 mt-10">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: "linear-gradient(90deg, rgb(var(--accent-violet) / 0.7), rgb(var(--highlight-lilac) / 0.7))" }} />
          </div>
          <div className="relative flex flex-col items-center gap-4 text-center px-4">
            <div className="font-mono text-md tracking-wide text-foreground">The Polished Creator</div>
            <p className="text-sm text-foreground/80">
              © {new Date().getFullYear()} Zak Hajjaji - Built with Next.js, TypeScript, and thoughtful design.
            </p>
            <div className="flex items-center gap-10 text-sm">
              <Link href="#projects" className="text-foreground/80 hover:text-foreground underline-offset-4 hover:underline">Projects</Link>
              <Link href="#contact" className="text-foreground/80 hover:text-foreground underline-offset-4 hover:underline">Contact</Link>
              <a href="/assets/ZAK-HAJJAJI-JNR.SOFTWARE-DEV-CV.pdf" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground underline-offset-4 hover:underline">CV</a>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer