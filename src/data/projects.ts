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
    image: "/assets/mochaic-screenshot.png",
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
    date: "2025-12-06",
    slug: "dj-website",
  },
  {
    id: "5",
    title: "JavaScript Compiler", 
    description: "A JavaScript compiler that compiles JavaScript code into machine code.",
    link: "https://www.teenycompiler.com", 
    image: "/assets/compiler-screenshot.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "JavaScript", "Vercel"],
    category: "fullstack",
    featured: false,
    date: "2026-02-26",
    slug: "javascript-compiler",
  },
  {
    id: "6",
    title: "Batman Vs Riddler", 
    description: "A OOP JavaScript game where you can play as Batman and fight against Riddler.",
    link: "https://zakhajjaji.github.io/Batman-Vs-Riddler/",
    image: "/assets/riddle-screenshot.png",
    tags: ["JavaScript", "OOP", "HTML", "CSS"],
    category: "frontend",
    featured: false,
    date: "2025-05-20",
    slug: "batman-vs-riddler-game",
  },
  
];
