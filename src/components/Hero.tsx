import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import profileImage from "@/assets/rushikesh-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-lg text-secondary font-medium">
                Hello, I'm Rushikesh
              </h2>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Data Analyst</span>
                <br />
                <span className="text-foreground">& Visualization</span>
                <br />
                <span className="text-foreground">Expert</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Passionate data enthusiast with hands-on experience in transforming 
                raw data into actionable business insights. Skilled in SQL, Power BI, 
                and Python, ready to tackle new challenges in the tech world.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View My Projects
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="group"
              >
                Download CV
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-8">
              <a
                href="https://linkedin.com/in/rushikesh-gawale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/rushikesh-gawale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
              >
                GitHub
              </a>
              <a
                href="https://instagram.com/rushikesh.gawale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover-lift glow-effect">
                <img
                  src={profileImage}
                  alt="Rushikesh Gawale - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold animate-glow">
                SQL
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold animate-pulse">
                BI
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;