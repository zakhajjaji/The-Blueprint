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
    <Link href={`/blog/${post.slug}`} className="block h-full w-full min-w-0">
      <div
        ref={cardRef}
        className={`w-full group relative flex flex-col overflow-hidden border bg-card/50 p-6 shadow-sm ring-1 ring-border/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:ring-primary/15 md:p-7 ${
          post.featured
            ? "border-primary/25 bg-gradient-to-br from-card via-card to-primary/[0.07] ring-primary/20 md:p-8"
            : "border-border/70 backdrop-blur-sm"
        }`}
      >
        {post.featured && (
          <div className="absolute right-4 top-4 border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            Featured
          </div>
        )}
        <h3
          className={`mb-3 font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary underline ${
            post.featured ? "pr-20 text-xl md:text-2xl" : "text-lg md:text-xl"
          }`}
        >
          {post.title}
        </h3>
        <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-foreground/70">
          {post.description}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center border border-border/50 bg-background/70 px-2 py-0.5 text-[11px] text-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border/40 pt-4 text-xs text-foreground/55">
          <span className="inline-flex items-center gap-1 bg-muted/60 px-2 py-1">
            <Calendar className="h-3 w-3 shrink-0 opacity-70" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1 bg-muted/60 px-2 py-1">
            <Clock className="h-3 w-3 shrink-0 opacity-70" />
            {post.readTime} min read
          </span>
          <span className="inline-flex items-center border border-primary/15 bg-primary/[0.08] px-2 py-1 font-medium text-primary/90">
            {post.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
