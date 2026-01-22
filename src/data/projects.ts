export type ProjectCategory = "all" | "frontend" | "backend" | "fullstack" | "ai";

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  date?: string;
  slug?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Mochaic ai-chatbot",
    description: "A custom AI chatbot built as a production-ready drop-in widget for any website. Fully customisable to the brand and the website.",
    link: "https://www.mochaic.com",
    image: "/assets/Screenshot 2025-11-19 at 13.43.51.png",
    tags: ["Next.js", "TypeScript", "FastAPI", "Python", "OpenAI API"],
    category: "ai",
    featured: true,
    date: "2025-10-15",
    slug: "mochaic-ai-chatbot",
  },
  {
    id: "2",
    title: "Mortgage Tools",
    description: "A collection of interactive, user-friendly mortgage calculators built to support homebuyers, brokers, and property investors.",
    link: "https://suite.mortgage",
    image: "/assets/mortgage.suite.png",
    tags: ["NextJS", "TypeScript", "MongoDB", "Insomnia", "Node.JS", "Express"],
    category: "fullstack",
    featured: false,
    date: "2025-04-23",
    slug: "mortgage-tools",
  },
  {
    id: "3",
    title: "AureyaTech",
    description: "AureyaTech is a software development company that specialises in building custom software solutions for businesses.",
    link: "https://www.aureyatech.com",
    image: "/assets/Aureyatechscreenshot.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Express"],
    category: "fullstack",
    featured: false,
    date: "2025-09-20",
    slug: "aureyatech",
  },
  {
    id: "4",
    title: "DJ Website",
    description: "A clean, responsive and modern website for a DJ to showcase their work and services plus a booking system.",
    link: "https://www.djwilko.com",
    image: "/assets/dj-website.png",
    tags: ["Next.js", "Tailwind", "Prisma", "PostgreSQL", "Node.js", "Express"],
    category: "fullstack",
    featured: false,
    date: "2020-12-06",
    slug: "dj-website",
  },
];
