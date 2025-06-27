"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { ProjectCard } from "./ProjectCard";
import { Button } from "./ui/button";
import { Quote } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    quote:
      "Zak is a talented developer with problem solving skills and a real drive to learn and pick up new skills. He is a strong asset to have on your team.",
    name: "Alfie Fort",
    title: "Software Engineer & Instructor",
    company: "The Developer Academy",
    relationship: "Tutor",
  },
  {
    id: 2,
    quote:
      "Zak is a thoughtful and driven developer with a natural problem-solving mindset. His curiosity and consistency in pushing projects forward make him a reliable and inspiring teammate. A true asset to any development team.",
    name: "Jak McAuley",
    title: "Software Developer",
    company: "Zajaik",
    relationship: "Pair programmer & Project partner",
  },
  {
    id: 3,
    quote:
      "Working with Zak was a brilliant experience among our team, design oriented, efficient workflow and a no giving up attitude, this made him stand out among the crowd, he never fails to complete a task and will even go above and beyond with projects always asking the next big questions on what can be done to make it better. I would say if you're looking for a software developer with great motivation he is your man.",
    name: "Joshua ",
    title: "Software Developer",
    company: "Zajaik",
    relationship: "Pair programmer & Project partner",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 rounded-xl shadow-lg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            {" "}
            Here is what colleagues and collaborators have said about working
            with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-3 gap-8">
            {testimonialsData.map((Testimonials) => 
            <Card key={Testimonials.id} className="relative hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            </CardHeader>
            <CardContent className="">
                <blockquote>{Testimonials.quote}</blockquote>
                <div className="flex items-center gap-3">
            <div className="absolute bottom-6">
                    <div className="font-semibold text-sm">{Testimonials.name}</div>
                    <div className="text-xs text-muted-foreground">{Testimonials.title}</div>
                    <div className="text-xs text-muted-foreground">{Testimonials.company}</div>
                    <div className="text-xs text-primary font-medium mt-1">{Testimonials.relationship}</div>
                  </div>
            </div>
            </CardContent>

            </Card>
            )}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
