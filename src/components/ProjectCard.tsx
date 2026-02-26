"use client";
import React, { useRef, useState } from 'react';
import {
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
  } from "@/components/ui/card"

  type ProjectProps = {
    title: string;
    description: string;
    link: string;
    image?: string;
    tags: string[];
    featured?: boolean;
    slug?: string;
  };
  // added featured boolean to the projeccard to handle different image sizes for projects
  // refer to the next.config.ts file for more details

  import SpotlightCard from './animations/SpotlightCard';
  import Image from 'next/image';
  import { ArrowRight } from 'lucide-react';

export const ProjectCard = ({ title, description, link, image, tags, featured, slug }: ProjectProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    // Use requestAnimationFrame for smoother updates
    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Much more subtle rotation - increased divisor to 50, reduced max to ±1.5 degrees
      const rotateX = Math.max(-1.5, Math.min(1.5, (y - centerY) / 50));
      const rotateY = Math.max(-1.5, Math.min(1.5, (centerX - x) / 50));
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      card.style.transition = 'transform 0.2s ease-out';
      
      // More subtle image zoom effect
      if (imageRef.current) {
        const scale = 1.03;
        imageRef.current.style.transform = `scale(${scale})`;
        imageRef.current.style.transition = 'transform 0.2s ease-out';
      }
    });
  };

  const handleMouseLeave = () => {
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    
    if (!cardRef.current) return;
    
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    cardRef.current.style.transition = 'transform 0.3s ease-out';
    
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1)';
      imageRef.current.style.transition = 'transform 0.3s ease-out';
    }
    
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="transition-transform duration-200 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <SpotlightCard className='w-full max-w-sm sm:max-w-md md:max-w-full mx-auto overflow-hidden rounded-sm-2xl border border-border/70 bg-background/60 backdrop-blur transition-all duration-300 hover:shadow-xl hover:border-primary/50'>
        <CardHeader className='p-0'>
          {image && (
            <div 
              ref={imageRef}
              className={`relative w-full ${featured ? 'aspect-[21/9]' : 'aspect-[16/9]'} overflow-hidden transition-transform duration-500`}
            >
              <Image 
                width={featured ? 800 : 600}
                height={featured ? 343 : 337}
                src={image} 
                alt={`${title} project screenshot`} 
                className='absolute inset-0 h-full w-full object-cover transition-transform duration-500'
                priority={featured}
                loading={featured ? "eager" : "lazy"}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent transition-opacity duration-300' 
                   style={{ opacity: isHovered ? 0.3 : 1 }} />
              {isHovered && (
                <div className='absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 animate-pulse' />
              )}
            </div>
          )}
          <div className='p-4'>
            <CardTitle className='text-lg md:text-xl transition-colors duration-300 group-hover:text-primary'>
              {title}
            </CardTitle>
            <CardDescription className='mt-2 text-sm text-foreground/80'>
              {description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardFooter className='px-4 pb-4'>
          <div className='flex flex-wrap items-center gap-2'>
            {tags.map(tag => (
              <span 
                key={tag} 
                className='px-2.5 py-1 rounded-sm-full text-[14px] font-medium bg-accent/50 text-accent-foreground border border-accent-foreground/10 hover:bg-accent/70 hover:border-primary/50 transition-all duration-200 hover:scale-105'
              >
                {tag}
              </span>
            ))}
          </div>
        </CardFooter>

        <CardFooter className='px-4 py-3 border-t border-border/70 flex items-center justify-between group'>
          <a 
            href={link} 
            target='_blank' 
            rel='noopener' 
            className='text-sm font-medium text-primary hover:text-primary/80 transition-all duration-200 flex items-center gap-2 group-hover:gap-3'
          >
            View website
            <ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
          </a>
          {slug && (
            <a
              href={`/projects/${slug}`}
              className='text-sm font-medium text-foreground/70 hover:text-primary transition-colors'
            >
              Case Study →
            </a>
          )}
        </CardFooter>
      </SpotlightCard>
    </div>
  );
};