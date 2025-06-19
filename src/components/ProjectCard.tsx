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

export const ProjectCard = ({ title, description, link, image, tags, status }: ProjectProps) => {
  return (
    <Card>
    <CardHeader>
      {image && <img src={image} alt={title} />}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
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
          <span key={tag} className="px-3 py-1 text-xs font-semibold bg-muted text-muted-foreground rounded-md shadow-sm">
            {tag}
          </span>
        ))}
      </div>
    </CardFooter>
  </Card>
)};