export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: number;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    description: "A comprehensive guide to building modern web applications with Next.js 15 and the App Router.",
    date: "2025-01-20",
    category: "Development",
    readTime: 5,
    featured: true,
  },
  {
    slug: "building-ai-applications",
    title: "Building AI-Powered Applications",
    description: "Learn how to integrate AI capabilities into your web applications using OpenAI API and modern frameworks.",
    date: "2025-01-15",
    category: "AI/ML",
    readTime: 8,
    featured: false,
  },
];
