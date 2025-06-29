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
import Link from "next/link";

const projects = [
    {
    title: "Bank Encoder",
    description: "A lightweight JavaScript app that scrambles transaction data using string methods and input masking; clean, fast, and built with security in mind",
    link: "https://funkmafia.github.io/caesar-cypher-app-/",
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
              link: "https://funkmafia.github.io/batman-vs-riddler/",
              image: "/assets/Riddle me this screenshot.png",
              tags: ["JavaScript", "Tailwind", "OOP"],
              status: "complete" as "complete" 
              },
{
            title: "Mic Drop",
            description: "MicDrop is a full-stack music gig event application built with a vibrant, urban vibe. It allows users to view, create, update, and delete music events such as DJ sets, live shows, and underground performances.",
            link: "https://mic-drop-front.vercel.app",
            image: "/assets/MicDrop.png",
            tags: ["NextJS", "Tailwind", "MongoDb", "Insomnia", "Mongoose", "Express"],
            status: "in-progress" as "in-progress" 
},
{
    title: "QuickPro Calculator",
    description: "A sleek, interactive JavaScript-powered calculator featuring clean DOM logic, modular structure, and a responsive Tailwind CSS layout. Handles decimals, operator logic, and full reset functionality for smooth user experience.",
    link: "https://funkmafia.github.io/Calculator/index.html",
    image: "/assets/calculator-screenshot.png",
    tags: ["html", "Tailwind", "javascript"],
    status: "complete" as "complete" 
},
{
    title: "Zajaik: Web Audit Consultant",
    description: "A minimal, user-friendly interface that allows business owners and marketers to submit their website URL for instant analysis. It sends the URL to a backend AI service that scrapes key content, and returns scorecard with visual summaries.",
    link: "https://www.zajaik.com",
    image: "/assets/zajaik-dark.png",
    tags: ["NextJS", "Tailwind", "MongoDb", "Insomnia", "Mongoose", "Express"],
    status: "complete" as "complete" 
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
    <div className="mt-10 text-center">
    <h3 className="text-2xl text-muted-foreground">The blueprint is still unfolding. Let's build something together.</h3>
    <Button className="mt-4" variant="default" size="lg"> 
                <Link href="#contact">Get in Touch</Link>
                </Button>
  </div>
    </section>
  )
}

