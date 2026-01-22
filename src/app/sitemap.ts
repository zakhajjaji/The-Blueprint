import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zakblueprint.com";

  const projectRoutes = projects
    .filter((project) => project.slug)
    .map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: project.date ? new Date(project.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projectRoutes,
    ...blogRoutes,
  ];
}
