"use client";
import React from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [

  {
    title: "Mortgage Tools",
    description: "A collection of interactive, user-friendly mortgage calculators built to support homebuyers, brokers, and property investors.",
    link: "https://mortgage-tools-fney.vercel.app",
    image: "/assets/mortgage.suite.png",
    tags: ["NextJS", "Tailwind", "MongoDb", "Insomnia", "Mongoose", "Express"],
    status: "complete" as const
  },
  {
    title: "Batman vs. Riddler",
    description: "",
    link: "https://funkmafia.github.io/batman-vs-riddler/",
    image: "/assets/Riddle me this screenshot.png",
    tags: ["JavaScript", "Tailwind", "OOP"],
    status: "complete" as const
  },

  {
    title: "Weather App",
    description: "",
    link: "https://weather-app-lovat-gamma-72.vercel.app",
    image: "/assets/Weather-app.png",
    tags: ["Next.js", "Tailwind"],
    status: "complete" as const
  },
]
export const Projects = () => {
  return (

    <section id="projects" className="pt-12 md:pt-6 pb-6 md:pb-4 text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-center mb-6 md:mb-8">

          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Showcasing full-stack applications built with modern frameworks, focusing on intuitive user experiences and solving real business challenges.
          </p>
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

