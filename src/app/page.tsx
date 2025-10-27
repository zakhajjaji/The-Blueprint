import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import { Projects } from "@/components/Projects";
import Stats from "@/components/Stats";
import SocialTags from "@/components/SocialTags";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen w-full text-foreground overflow-x-hidden">
      <Nav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 space-y-4">
        <Hero />
        <Projects />
        <Stats />
        <Testimonials />
        <Contact />
        <SocialTags />
        <Footer />
      </main>
    </div>
  );
}
