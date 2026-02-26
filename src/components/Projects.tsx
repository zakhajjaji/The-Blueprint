"use client";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";
import { useFilter } from "@/hooks/use-filter";
import { ProjectFilter } from "./ProjectFilter";
import { FilterOption } from "@/hooks/use-filter";

const filterOptions: FilterOption[] = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI/ML" },
];

export const Projects = () => {
  const {
    filteredItems,
    selectedFilter,
    setSelectedFilter,
    searchQuery,
    setSearchQuery,
  } = useFilter(projects);

  return (
    <section id="projects" className="pt-12 md:pt-6 pb-6 md:pb-4 text-foreground scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-center md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block"><u>Freelancing</u> projects</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent">
              completed for <u>clients</u>
            </span>
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2 px-3 py-4 rounded-sm-lg bg-background/60 border border-border/70 backdrop-blur">
              <span className="font-medium">Full-Stack Dev</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-4 rounded-sm-lg bg-background/60 border border-border/70 backdrop-blur">
              <span className="font-medium">Production Ready</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-4 rounded-sm-lg bg-background/60 border border-border/70 backdrop-blur">
              <span className="font-medium">Modern Stack</span>
            </div>
          </div>
        </div>

        <ProjectFilter
          filterOptions={filterOptions}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-foreground/70 text-lg mb-2">No projects found</p>
            <p className="text-foreground/50 text-sm">
              Try adjusting your filters or search query
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((project, index) => {
              const isFeatured = project.featured || (selectedFilter === "all" && index === 0);
              return (
                <div key={project.id} className={isFeatured ? 'md:col-span-2' : ''}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                    tags={project.tags}
                    featured={isFeatured}
                    slug={project.slug}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

