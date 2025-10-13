import Image from "next/image";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import SocialTags from "@/components/SocialTags";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div className="min-h-screen w-full text-foreground overflow-x-hidden">
  <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-4">
  <Nav />
<Hero />
{/* <Skills /> */}
<Projects />
<Stats />
<Contact />
<SocialTags />
<Footer />
</main>
    </div>
  );
}
