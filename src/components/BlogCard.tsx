"use client";
import React from "react";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/blog";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { hasIntersected } = useIntersectionObserver({ threshold: 0.1 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasIntersected && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [hasIntersected]);

  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        ref={cardRef}
        className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/60 backdrop-blur p-6 hover:border-primary/50 transition-all hover:shadow-lg"
      >
        {post.featured && (
          <div className="absolute top-4 right-4 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
            Featured
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
          {post.description}
        </p>
        <div className="flex items-center gap-4 text-xs text-foreground/60">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime} min read
          </div>
          <span className="px-2 py-1 bg-accent/50 rounded text-xs">
            {post.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
