import React from 'react'
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
    status?: "complete" | "in-progress";
    featured?: boolean;
  };
  // added featured boolean to the projeccard to handle different image sizes for projects
  // refer to the next.config.ts file for more details

  import SpotlightCard from './animations/SpotlightCard';
  import Image from 'next/image';

export const ProjectCard = ({ title, description, link, image, tags, status, featured }: ProjectProps) => {
  return (
    <SpotlightCard className='w-full max-w-sm sm:max-w-md md:max-w-full mx-auto overflow-hidden rounded-2xl border border-border/70 bg-background/60 backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md'>
      <CardHeader className='p-0'>
        {image && (
          <div className={`relative w-full ${featured ? 'aspect-[21/9]' : 'aspect-[16/9]'} overflow-hidden`}>
            <Image 
              width={featured ? 800 : 600}
              height={featured ? 343 : 337}
              src={image} 
              alt={`${title} project screenshot`} 
              className='absolute inset-0 h-full w-full object-cover'
              priority={featured}
              loading={featured ? "eager" : "lazy"}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent' />
          </div>
        )}
        <div className='p-4'>
          <CardTitle className='text-lg md:text-xl'>{title}</CardTitle>
          <CardDescription className='mt-2 text-sm text-foreground/80'>{description}</CardDescription>
        </div>
      </CardHeader>

      <CardFooter className='px-4 pb-4'>
        <div className='flex flex-wrap items-center gap-2'>
          {tags.map(tag => (
            <span key={tag} className='font-mono text-[11px] md:text-xs text-foreground/70'>
              {tag}
            </span>
          ))}
        </div>
      </CardFooter>

      <CardFooter className='px-4 py-3 border-t border-border/70 flex items-center justify-between'>
        <a href={link} target='_blank' rel='noopener' className='text-sm font-medium text-primary hover:underline underline-offset-4'>
          View website →
        </a>
        {status && (
          <span className={`px-2.5 py-1 text-[11px] rounded-md border 
            ${status === 'complete' ? 'border-green-300 text-green-700 bg-green-50/60' : 'border-yellow-300 text-yellow-700 bg-yellow-50/60'}`}>
            {status === 'complete' ? 'Complete' : 'In Progress'}
          </span>
        )}
      </CardFooter>
    </SpotlightCard>
  )
};