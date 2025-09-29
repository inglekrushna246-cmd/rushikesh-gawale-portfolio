import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";
const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 hover-lift cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_hsl(188,100%,50%)] transition-all duration-300">
              <span className="text-white font-bold text-xl">RG</span>
            </div>
            <span className="text-xl font-bold text-gradient">
              Rushikesh Gawale
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors duration-300">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors duration-300">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-foreground hover:text-primary transition-colors duration-300">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-primary transition-colors duration-300">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors duration-300">
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-[0_0_20px_hsl(188,100%,50%)] transition-all duration-300"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;