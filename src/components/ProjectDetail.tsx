"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { elementRef } = useIntersectionObserver({ threshold: 0.1 });
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen w-full text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div ref={elementRef as unknown as React.RefObject<HTMLDivElement>}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div ref={contentRef} className="space-y-8">
            {project.image && (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/70">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-accent/50 text-accent-foreground border border-accent-foreground/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border/70">
              <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
              <div className="space-y-4 text-foreground/80">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Category</h3>
                  <p className="capitalize">{project.category}</p>
                </div>
                {project.date && (
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Completed</h3>
                    <p>{new Date(project.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
