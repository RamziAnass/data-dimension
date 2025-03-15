import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
export function PortfolioSection() {
  const [filter, setFilter] = useState("all");
  const projects = [{
    title: "Commerciale Airplans Data Insights ",
    category: "Data ",
    image: "/placeholder.svg",
    description: "Interactive dashboard for real-time market analysis and trend visualization",
    stack: ["Excel", "Canva", "Microsoft PowerPoint"],
    demoUrl: "#",
    codeUrl: "#"
  }, {
    title: "Competitor Intelligence Platform",
    category: "strategy",
    image: "/placeholder.svg",
    description: "AI-powered platform for competitive intelligence gathering and analysis",
    stack: ["Node.js", "TensorFlow", "MongoDB", "Next.js"],
    demoUrl: "#",
    codeUrl: "#"
  }, {
    title: "Domain Portfolio Manager",
    category: "domains",
    image: "/placeholder.svg",
    description: "Comprehensive tool for managing domain portfolios and maximizing ROI",
    stack: ["Vue.js", "Express", "PostgreSQL", "Docker"],
    demoUrl: "#",
    codeUrl: "#"
  }, {
    title: "Predictive Analytics Tool",
    category: "data",
    image: "/placeholder.svg",
    description: "Predictive modeling tool for business forecasting and scenario planning",
    stack: ["Python", "scikit-learn", "Flask", "React"],
    demoUrl: "#",
    codeUrl: "#"
  }, {
    title: "Strategic Roadmap Generator",
    category: "strategy",
    image: "/placeholder.svg",
    description: "AI-based tool that generates strategic roadmaps based on business data",
    stack: ["TypeScript", "React", "GPT-4 API", "Firebase"],
    demoUrl: "#",
    codeUrl: "#"
  }, {
    title: "Domain Valuation System",
    category: "domains",
    image: "/placeholder.svg",
    description: "Advanced domain valuation system using machine learning algorithms",
    stack: ["Python", "TensorFlow", "FastAPI", "React"],
    demoUrl: "#",
    codeUrl: "#"
  }];
  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.category === filter);
  return <section id="portfolio" className="section-spacing bg-secondary/30">
      <div className="container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-base font-semibold text-center">Je vous invite à découvrir une sélection de mes projets d'analyse de données, de veille stratégique et d'investissement dans le domaine.</p>
        </motion.div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-background p-1 rounded-full">
            <Button variant={filter === "all" ? "default" : "ghost"} className={cn("rounded-full", filter === "all" ? "" : "hover:bg-secondary")} onClick={() => setFilter("all")}>
              All Projects
            </Button>
            <Button variant={filter === "data" ? "default" : "ghost"} className={cn("rounded-full", filter === "data" ? "" : "hover:bg-secondary")} onClick={() => setFilter("data")}>
              Data Analysis
            </Button>
            <Button variant={filter === "strategy" ? "default" : "ghost"} className={cn("rounded-full", filter === "strategy" ? "" : "hover:bg-secondary")} onClick={() => setFilter("strategy")}>
              Strategy
            </Button>
            <Button variant={filter === "domains" ? "default" : "ghost"} className={cn("rounded-full", filter === "domains" ? "" : "hover:bg-secondary")} onClick={() => setFilter("domains")}>
              Domains
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-background rounded-xl overflow-hidden shadow-sm group hover-card">
              <div className="relative overflow-hidden aspect-video">
                <div className="image-placeholder w-full h-full"></div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {project.category === "data" && "Data"}
                    {project.category === "strategy" && "Strategy"}
                    {project.category === "domains" && "Domains"}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                      {tech}
                    </span>)}
                </div>
                <div className="flex items-center space-x-3">
                  <Button asChild variant="default" size="sm">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Live Demo
                      <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Code
                      <Github className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}