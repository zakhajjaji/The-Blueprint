"use client";
import React from "react";
import { FilterOption } from "@/hooks/use-filter";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ProjectFilterProps {
  filterOptions: FilterOption[];
  selectedFilter: string;
  onFilterChange: (filterId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function ProjectFilter({
  filterOptions,
  selectedFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-background/60 backdrop-blur border-border/70"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onFilterChange(option.id)}
            className={`px-4 py-2 rounded-sm-lg text-sm font-medium transition-all duration-200 ${
              selectedFilter === option.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-background/60 backdrop-blur border border-border/70 text-foreground hover:border-primary/50 hover:bg-background/80"
            }`}
            aria-pressed={selectedFilter === option.id}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
