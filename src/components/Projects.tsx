import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BarChart3, TrendingUp, DollarSign, Users } from "lucide-react";
import dashboardImage from "@/assets/sales-dashboard.jpg";

const Projects = () => {
  const project = {
    title: "Sales Performance Dashboard",
    impact: "Enabled data-driven sales strategies that led to a 15% reduction in customer churn and 22% improvement in team response time to market trends using Power BI.",
    image: dashboardImage,
    tools: ["Power BI", "SQL", "Excel"],
    category: "Business Intelligence"
  };
  return <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my data analysis expertise through real-world projects 
            that deliver actionable business insights
          </p>
        </div>

        {/* Single Project Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden border border-border animated-bg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 lg:h-80 object-cover hover-lift"
              />
            </div>
          </div>
          
          {/* Project Details */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Category Badge */}
            <Badge variant="secondary" className="bg-accent text-white w-fit">
              {project.category}
            </Badge>
            
            {/* Project Title */}
            <h3 className="text-3xl lg:text-4xl font-bold text-gradient">
              {project.title}
            </h3>
            
            {/* Impact Summary */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.impact}
            </p>
            
            {/* Tool Chips */}
            <div className="flex flex-wrap gap-3">
              {project.tools.map(tool => (
                <Badge key={tool} variant="outline" className="border-accent/30">
                  {tool}
                </Badge>
              ))}
            </div>
            
            {/* CTA Button */}
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Code on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Projects;