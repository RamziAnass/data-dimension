
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center space-x-2 font-heading text-xl font-bold mb-4">
              <span className="text-foreground">John</span>
              <span className="text-primary">Doe</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
            Transformation des informations et Données à des Recommandations et Leviers Stratégiques.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  A Propos
                </a>
              </li>
              <li>
                <a href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="/#blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-secondary/80 hover:bg-secondary p-2 rounded-full text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-secondary/80 hover:bg-secondary p-2 rounded-full text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="bg-secondary/80 hover:bg-secondary p-2 rounded-full text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Ramzi Anass. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
