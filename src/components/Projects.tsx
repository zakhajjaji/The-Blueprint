"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { ProjectCard } from "./ProjectCard";

const projects = [
    {
    title: "Bank Encoder",
    description: "A lightweight JavaScript app that scrambles transaction data using string methods and input masking; clean, fast, and built with security in mind",
    link: "",
    image: "",
    tags: ["JavaScript", "Tailwind"],
    status: "complete" as "complete" 
    },
    {
        title: "Batman vs. Riddler",
        description: "A browser-based puzzle game built with conditional logic and timers. Step into Batman's boots to solve riddles and outsmart The Riddler...One room at a time.",
        link: "",
        image: "",
        tags: ["JavaScript", "Tailwind", "OOP"],
        status: "complete" as "complete" 
        },
        {
            title: "Weather App",
            description: "",
            link: "https://weather-app-lovat-gamma-72.vercel.app",
            image: "",
            tags: ["JavaScript", "Tailwind"],
            status: "in-progress" as "in-progress" 
            },
{
            title: "Mic Drop",
            description: "",
            link: "",
            image: "",
            tags: ["NextJS", "Tailwind", "MongoDb", "Insomnia", "Mongoose", "Express"],
            status: "in-progress" as "in-progress" 
},
{
    title: "SoundSlice",
    description: "",
    link: "https://event-app-liart-eta.vercel.app",
    image: "",
    tags: ["NextJS", "Tailwind", "MongoDb", "Insomnia", "Mongoose", "Express"],
    status: "in-progress" as "in-progress" 
},
{
    title: "Web Scraper Ai Consulant",
    description: "",
    link: "",
    image: "",
    tags: ["NextJS", "Tailwind", "MongoDb", "Insomnia", "Mongoose", "Express"],
    status: "in-progress" as "in-progress" 
},

]


export const Projects = () => {
  return (
   
<section id="projects" className="py-36 px-6 bg-background text-foreground">
<div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Blueprint</h2>
    <p className="text-muted-foreground text-lg">
     Every project is a building block, and every line of code is a blueprint for freedom, innovation, and impact. 
    </p>
    </div>
<div  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
  <ProjectCard key={index} {...project} />
))}
    </div>
    </section>
  )
}

