import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BarChart3, TrendingUp, DollarSign, Users } from "lucide-react";
import dashboardImage from "@/assets/sales-dashboard.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      impact: "Enabled data-driven sales strategies that led to a 15% reduction in customer churn and 22% improvement in team response time to market trends using Power BI.",
      image: dashboardImage,
      tools: ["Power BI", "SQL", "Excel"],
      category: "Business Intelligence"
    },
    {
      title: "Marketing ROI Analysis",
      impact: "Optimized marketing spend allocation across channels, resulting in 28% improved ROI and $50K+ cost savings through Python-driven campaign analysis.",
      image: dashboardImage, // Placeholder - would use different image
      tools: ["Python", "Tableau", "SQL"],
      category: "Marketing Analytics"
    },
    {
      title: "Customer Behavior Analytics",
      impact: "Identified key customer segments and purchase patterns, leading to 35% increase in targeted campaign effectiveness using advanced SQL analytics.",
      image: dashboardImage, // Placeholder - would use different image
      tools: ["SQL", "Power BI", "Python"],
      category: "Customer Analytics"
    },
    {
      title: "Financial Forecasting Model",
      impact: "Built predictive revenue models with 94% accuracy, enabling strategic planning and reducing forecast errors by 40% using Excel and Python.",
      image: dashboardImage, // Placeholder - would use different image  
      tools: ["Excel", "Python", "SQL"],
      category: "Financial Analytics"
    }
  ];
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

        {/* Project Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden animated-bg border-border hover-lift group">
              <div className="p-6">
                {/* Category Badge */}
                <Badge variant="secondary" className="bg-accent text-white w-fit mb-4">
                  {project.category}
                </Badge>
                
                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-4 text-gradient">
                  {project.title}
                </h3>
                
                {/* Project Thumbnail */}
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Impact Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.impact}
                </p>
                
                {/* Tool Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map(tool => (
                    <Badge key={tool} variant="outline" className="border-accent/30 text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Case Study
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};
export default Projects;