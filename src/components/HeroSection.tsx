
import { ArrowRight, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col space-y-6 lg:pr-8"
        >
          <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
            Data Analysis & Strategic Intelligence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            John Doe
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Empowering Businesses with Data-Driven Insights and Market Intelligence
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Providing expertise in data analysis, strategic intelligence consulting, and domain name investment to help businesses make informed decisions.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild className="rounded-full" size="lg">
              <a href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full" size="lg" asChild>
              <a href="#portfolio">View Portfolio</a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-full max-w-lg mx-auto lg:mx-0 grid grid-cols-2 gap-4"
        >
          <div className="col-span-2">
            <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="Data analysis dashboard" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </div>
          <div>
            <AspectRatio ratio={1/1} className="bg-muted overflow-hidden rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="Strategic planning session" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </div>
          <div>
            <AspectRatio ratio={1/1} className="bg-muted overflow-hidden rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="Market research visualization" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
}
