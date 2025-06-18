import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import About from "@/components/About"; 
import ThemeToggle from "@/components/ThemeToggle";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import { Projects } from "@/components/Projects";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
  <main className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 space-y-4">
  <Nav />
<Hero />
<About />
<Projects />
{/* Project section : card, badege, button */}
{/* Tech stack: card, chat for each langauge */}
{/* */}
<Contact />
{/* Social Links section */}

</main>
    </div>
  );
}
