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
//   {
//     title: "AI Chatbot",
//   description: "An AI powered chatbot built to help users with their questions and provide suggested call to actions based on the user's input.",
//   link: "https://ai-chatbot-lovat-gamma-72.vercel.app",
//   image: "/assets/ai-chatbot.png",
//   tags: ["Next.js", "TypeScript", "FastAPI", "Python", "OpenAI API"],
// },
  // {
  //   title: "Batman vs. Riddler",
  //   description: "An interactive quiz game featuring iconic Batman and Riddler themes, built with vanilla JavaScript and object-oriented programming principles.",
  //   link: "https://funkmafia.github.io/batman-vs-riddler/",
  //   image: "/assets/Riddle me this screenshot.png",
  //   tags: ["JavaScript", "Tailwind", "OOP"],
  // },
  {
    title: "AureyaTech",
    description: "AureyaTech is a software development company that specialises in building custom software solutions for businesses.",
    link: "https://www.aureyatech.com",
    image: "/assets/Aureyatechscreenshot.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Express"],
  },
  {
    title: "DJ Website",
    description: "A clean, responsive and modern website for a DJ to showcase their work and services plus a booking system.",
    link: "https://www.djwilko.com",
    image: "/assets/dj-website.png",
    tags: ["Next.js", "Tailwind", "Prisma", "PostgreSQL", "Node.js", "Express"],
  }
]
export const Projects = () => {
  return (

    <section id="projects" className="pt-12 md:pt-6 pb-6 md:pb-4 text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-center md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            <span>Freelancing Since 2025</span>
          </div>
         
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block"><u>Freelancing</u> projects</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent">
              completed for <u>clients</u>
            </span>
          </h2>

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
            const isFeatured = index % 4 === 0; // 1 featured then 2 standard, repeat
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

