import React from 'react'
import {
    Card,
    CardContent,
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
  };

  import SpotlightCard from './animations/SpotlightCard';

export const ProjectCard = ({ title, description, link, image, tags, status }: ProjectProps) => {
  return (
    <SpotlightCard className='w-full max-w-sm sm:max-w-md md:max-w-full flex flex-col mx-auto backdrop-blur-md bg-white/70 border border-[rgba(var(--accent-violet),0.25)] shadow-sm hover:shadow-md transition'>
    <CardHeader>
      {image && <img src={image} alt={title} className='w-full h-52 object-cover rounded-xl mb-4 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg'/>}
      <CardTitle>{title}</CardTitle>
      <CardDescription className='max-h-52 h-52'>{description}</CardDescription>
    </CardHeader>
    
    <CardFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between p-4 border-t border-border">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <a href={link} target='_blank' rel='noopener' className="text-sm font-medium text-primary hover:underline">
          View Project →
        </a>
        {status && (
          <span className={`ml-4 px-3 py-1 text-xs rounded-md 
            ${status === "complete" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
            {status === "complete" ? "✅ Complete" : "🚧 In Progress"}
          </span>
        )}
      </div>
    </CardFooter>
    <CardFooter>
    <div className="flex gap-2 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-md shadow-sm border border-[rgba(var(--accent-violet),0.25)] bg-[rgba(var(--highlight-lilac),0.35)] text-foreground">
            {tag}
          </span>
        ))}
      </div>
    </CardFooter>
  </SpotlightCard>
)};