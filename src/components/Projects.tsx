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
import { Button } from "./ui/button";

const projects = [
    {
    title: "Bank Encoder",
    description: "A lightweight JavaScript app that scrambles transaction data using string methods and input masking; clean, fast, and built with security in mind",
    link: "",
    image: "/assets/the_bank_encoder_screenshot.png",
    tags: ["JavaScript", "Tailwind"],
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
            {
              title: "Batman vs. Riddler",
              description: "A browser-based game built with conditional logic and timers. Step into Batman's boots to solve riddles and outsmart The Riddler, one room at a time.",
              link: "",
              image: "/assets/Riddle me this screenshot.png",
              tags: ["JavaScript", "Tailwind", "OOP"],
              status: "complete" as "complete" 
              },
{
            title: "Mic Drop",
            description: "MicDrop is a full-stack music gig event application built with a vibrant, urban vibe. It allows users to view, create, update, and delete music events such as DJ sets, live shows, and underground performances.",
            link: "",
            image: "/assets/MicDrop.png",
            tags: ["NextJS", "Tailwind", "MongoDb", "Insomnia", "Mongoose", "Express"],
            status: "in-progress" as "in-progress" 
},
{
    title: "",
    description: "",
    link: "",
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
   
<section id="projects" className="py-20 px-6 bg-background text-foreground">
<div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Blueprint</h2>
    <p className="text-muted-foreground text-lg">
     Every project is a building block, and every line of code is a blueprint for freedom, innovation, and impact. 
    </p>
    </div>
  
<div  className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
  <ProjectCard key={index} {...project} />
))}
    </div>
    <div className="mt-10 text-center">
    <h3 className="text-2xl text-muted-foreground">The blueprint is still unfolding. Let's build something together.</h3>
    <Button className="mt-4" variant="default" size="lg">Get in Touch</Button>
  </div>
    </section>
  )
}

