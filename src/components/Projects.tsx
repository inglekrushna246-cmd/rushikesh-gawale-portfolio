import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Database, FileSpreadsheet } from "lucide-react";
import dashboardImage from "@/assets/sales-dashboard.jpg";
const Projects = () => {
  const projects = [{
    title: "Sales Performance Dashboard",
    description: "Created an interactive dashboard to track and analyze sales data, helping identify trends and boost sales strategies. The dashboard provides real-time insights into sales performance, customer behavior, and revenue trends.",
    image: dashboardImage,
    tools: ["Power BI", "Excel", "SQL"],
    features: ["Real-time sales tracking", "Customer segmentation analysis", "Revenue trend visualization", "Performance KPI monitoring", "Interactive filtering and drill-down"],
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
          {projects.map(project => <Card key={project.title} className="overflow-hidden animated-bg border-border hover-lift">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Details */}
                <div className="p-6 lg:p-8">
                  <div className="mb-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-3 text-gradient">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tools Used */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map(tool => <Badge key={tool} variant="outline" className="border-primary/30 text-xs">
                          {tool}
                        </Badge>)}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button variant="outline" className="group">
                    <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    View Code
                  </Button>
                </div>

                {/* Contact Form & Social Links */}
                <div className="p-6 lg:p-8 bg-muted/30">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                    <form className="space-y-4">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Your Email" 
                          className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <textarea 
                          placeholder="Your Message" 
                          rows={3}
                          className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <Button className="w-full">Send Message</Button>
                    </form>
                  </div>

                  {/* Connect With Me */}
                  <div>
                    <h4 className="font-semibold mb-3">Connect With Me</h4>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Instagram
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Upcoming Projects */}
        

        {/* Call to Action */}
        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>;
};
export default Projects;