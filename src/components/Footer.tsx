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
            <p className="text-muted-foreground text-sm">
              © 2024 Rushikesh Gawale.
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
          
        </div>
      </div>
    </footer>;
};
export default Footer;