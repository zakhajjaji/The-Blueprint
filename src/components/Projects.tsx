"use client";
import React from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [

  {
    title: "Mortgage Tools",
    description: "A collection of interactive, user-friendly mortgage calculators built to support homebuyers, brokers, and property investors.",
    link: "https://mortgage-tools-fney.vercel.app",
    image: "/assets/mortgage.suite.png",
    tags: ["NextJS","TypeScript", "MongoDB", "Insomnia", "Node.JS", "Express"],
  },
  {
    title: "Batman vs. Riddler",
    description: "An interactive quiz game featuring iconic Batman and Riddler themes, built with vanilla JavaScript and object-oriented programming principles.",
    link: "https://funkmafia.github.io/batman-vs-riddler/",
    image: "/assets/Riddle me this screenshot.png",
    tags: ["JavaScript", "Tailwind", "OOP"],
  },

  {
    title: "Weather App",
    description: "A clean, responsive weather application providing real-time forecasts with an intuitive user interface and smooth animations.",
    link: "https://weather-app-lovat-gamma-72.vercel.app",
    image: "/assets/Weather-app.png",
    tags: ["Next.js", "Tailwind"],
  },
]
export const Projects = () => {
  return (

    <section id="projects" className="pt-12 md:pt-6 pb-6 md:pb-4 text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-center md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            <span>🤝</span>
            <span>Freelancing Since 2025</span>
          </div>
         
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block">Freelancing Projects</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent">
              Completed for clients
            </span>
          </h2>
          
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto text-base md:text-lg">
            Delivered a wide variety of projects for clients, from start to finish with passion and dedication.
          </p>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/60 border border-border/70 backdrop-blur">
              <span>💼</span>
              <span className="font-medium">Full-Stack Dev</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/60 border border-border/70 backdrop-blur">
              <span>✅</span>
              <span className="font-medium">Production Ready</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/60 border border-border/70 backdrop-blur">
              <span>🌐</span>
              <span className="font-medium">Modern Stack</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isFeatured = index % 3 === 0; // 1 featured then 2 standard, repeat
            return (
              <div key={index} className={isFeatured ? 'md:col-span-2' : ''}>
                <ProjectCard {...project} featured={isFeatured} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

