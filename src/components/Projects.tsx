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
    status: "complete" as "complete"
  },
  {
    title: "Batman vs. Riddler",
    description: "A browser-based game built with conditional logic and timers. Step into Batman's boots to solve riddles and outsmart The Riddler, one room at a time.",
    link: "https://funkmafia.github.io/batman-vs-riddler/",
    image: "/assets/Riddle me this screenshot.png",
    tags: ["JavaScript", "Tailwind", "OOP"],
    status: "complete" as "complete"
  },

  {
    title: "Weather App",
    description: "A sleek and modern SPA that provides users with a quick and intuitive summary of the weather forecast for the next 5 to 7 days.",
    link: "https://weather-app-lovat-gamma-72.vercel.app",
    image: "/assets/Weather-app.png",
    tags: ["Next.js", "Tailwind"],
    status: "complete" as "complete"
  },
]
export const Projects = () => {
  return (

    <section id="projects" className="py-16 text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14">

          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Showcasing full-stack applications built with modern frameworks, focusing on intuitive user experiences and solving real business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

