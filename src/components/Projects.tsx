import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Database, FileSpreadsheet } from "lucide-react";
import dashboardImage from "@/assets/sales-dashboard.jpg";
const Projects = () => {
  const projects = [{
    title: "Sales Performance Dashboard",
    problem: "Sales team lacked visibility into real-time performance metrics and customer behavior patterns, leading to reactive rather than proactive decision-making.",
    action: "Designed and developed an interactive Power BI dashboard integrating multiple data sources using SQL queries. Implemented advanced DAX measures for KPI tracking and customer segmentation analysis.",
    result: "Enabled data-driven sales strategies that led to a 15% reduction in customer churn and 22% improvement in team response time to market trends.",
    image: dashboardImage,
    tools: ["Power BI", "Excel", "SQL"],
    demoLink: "#",
    codeLink: "#",
    category: "Business Intelligence"
  }];
  const upcomingProjects = [{
    title: "Customer Churn Analysis",
    description: "Predictive analytics model to identify customers at risk of churning",
    tools: ["Python", "Scikit-learn", "Tableau"],
    status: "In Progress"
  }, {
    title: "Financial Market Analysis",
    description: "Comprehensive analysis of stock market trends and patterns",
    tools: ["R", "Power BI", "SQL"],
    status: "Planning"
  }, {
    title: "Social Media Analytics",
    description: "Sentiment analysis and engagement metrics dashboard",
    tools: ["Python", "Tableau", "API Integration"],
    status: "Planning"
  }];
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

        {/* Featured Project */}
        <div className="mb-16">
          {projects.map(project => (
            <Card key={project.title} className="overflow-hidden animated-bg border-border hover-lift">
              <div className="grid lg:grid-cols-2 gap-6 p-6 lg:p-8">
                {/* Project Image */}
                <div className="rounded-lg overflow-hidden border border-border">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Details */}
                <div className="flex flex-col">
                  <Badge variant="secondary" className="bg-accent text-white w-fit mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4 text-gradient">
                    {project.title}
                  </h3>
                  
                  {/* P-A-R Framework */}
                  <div className="space-y-4 mb-6 flex-grow">
                    <div>
                      <h4 className="text-sm font-bold text-accent mb-1">PROBLEM</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-1">ACTION</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.action}
                      </p>
                    </div>
                    
                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
                      <h4 className="text-sm font-bold text-accent mb-1">RESULT</h4>
                      <p className="text-sm text-foreground font-medium leading-relaxed">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map(tool => (
                        <Badge key={tool} variant="outline" className="border-accent/30 text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" className="group border-accent/30 hover:bg-accent hover:text-white">
                      <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        

        {/* Call to Action */}
        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>;
};
export default Projects;