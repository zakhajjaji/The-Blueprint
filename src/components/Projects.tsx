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
    status: "in-progress" as "in-progress"
  },
]
export const Projects = () => {
  return (

    <section id="projects" className="py-20 px-6 bg-background text-foreground">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">The Blueprint</h2>
        <p className="text-muted-foreground text-lg">
          Every project is a building block, and every line of code is a blueprint for freedom, innovation, and impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

