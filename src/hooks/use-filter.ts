"use client";
import { useState, useMemo } from "react";

export type FilterOption = {
  id: string;
  label: string;
};

export function useFilter<T extends { tags?: string[]; category?: string }>(
  items: T[],
  filterOptions: FilterOption[] = []
) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    let result = [...items];

    // Apply category filter
    if (selectedFilter !== "all") {
      result = result.filter((item) => {
        if (item.category) {
          return item.category === selectedFilter;
        }
        // Fallback to tag-based filtering
        return item.tags?.some((tag) =>
          tag.toLowerCase().includes(selectedFilter.toLowerCase())
        );
      });
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((item) => {
        const title = (item as any).title?.toLowerCase() || "";
        const description = (item as any).description?.toLowerCase() || "";
        const tags = item.tags?.join(" ").toLowerCase() || "";
        
        return (
          title.includes(query) ||
          description.includes(query) ||
          tags.includes(query)
        );
      });
    }

    return result;
  }, [items, selectedFilter, searchQuery]);

  return {
    filteredItems,
    selectedFilter,
    setSelectedFilter,
    searchQuery,
    setSearchQuery,
  };
}
