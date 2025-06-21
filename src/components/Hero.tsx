import { Button } from "@/components/ui/button"; 


export default function Hero() {
    return(
<section id="hero" className="py-24 bg-background text-foreground">
        <div className="container mx-auto px-4 text-center mt-10">

          <h1 className="text-5xl md:text-6xl text-font-semibold tracking-tight">Zak Hajjaji - Software Developer</h1>
        <h4 className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">Building sleek, scalable full-stack apps with clean code and creative flair</h4>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="secondary">
                Contact Me
            </Button>
        </div>
        </div>
        </section>
    )
}