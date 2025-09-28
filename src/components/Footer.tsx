import { Heart, ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const currentYear = new Date().getFullYear();
  return <footer className="py-12 px-4 bg-muted/50 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-3">
              Rushikesh Gawale
            </h3>
            <p className="text-muted-foreground text-sm">
              Data Analyst & Visualization Expert
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button onClick={scrollToTop} className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#home" className="hover:text-primary transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="hover:text-primary transition-colors duration-300">
                About
              </a>
              <a href="#skills" className="hover:text-primary transition-colors duration-300">
                Skills
              </a>
              <a href="#projects" className="hover:text-primary transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="hover:text-primary transition-colors duration-300">
                Contact
              </a>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="https://linkedin.com/in/rushikesh-gawale" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                LinkedIn
              </a>
              <a href="https://github.com/rushikesh-gawale" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                GitHub
              </a>
              <a href="mailto:gawalerushikesh22@gmail.com" className="hover:text-primary transition-colors duration-300">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;