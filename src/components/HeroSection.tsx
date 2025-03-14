
import { ArrowRight, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
            Data Analysis & Veille Stratégique & Competitive Intelligence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ramzi Anass
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
          Transformation des informations et Données à des Recommandations et Leviers Stratégiques          </h2>
          <p className="text-muted-foreground max-w-lg">
          Spécialiste de l'information , Chargé de Veille Strategique / Competitve Intelligence Analyste, et Data Analyst.
          EX Domain names Investor,EX POD Designer, EX Data Evaluator.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild className="rounded-full" size="lg">
              <a href="#contact">
                Contactez moi <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full" size="lg" asChild>
              <a href="#portfolio">Voir Projets</a>
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
          className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 blur-3xl opacity-70 animate-rotate-slow"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-4/5 aspect-square overflow-hidden rounded-full border-4 border-background">
              <div className="w-full h-full image-placeholder rounded-full bg-gray-50">
                <img 
                  src="/lovable-uploads/46419417-0580-476e-8b98-848ba6817af0.png" 
                  alt="Ramzi Anass Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
