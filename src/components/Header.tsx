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
          <div className="text-2xl font-bold text-gradient">
            Rushikesh Gawale
          </div>

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
            <Button variant="hero" size="sm" onClick={() => scrollToSection("contact")}>
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;