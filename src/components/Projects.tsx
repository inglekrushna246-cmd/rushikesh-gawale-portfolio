import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Database, FileSpreadsheet } from "lucide-react";
import dashboardImage from "@/assets/sales-dashboard.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Created an interactive dashboard to track and analyze sales data, helping identify trends and boost sales strategies. The dashboard provides real-time insights into sales performance, customer behavior, and revenue trends.",
      image: dashboardImage,
      tools: ["Power BI", "Excel", "SQL"],
      features: [
        "Real-time sales tracking",
        "Customer segmentation analysis",
        "Revenue trend visualization",
        "Performance KPI monitoring",
        "Interactive filtering and drill-down"
      ],
      demoLink: "#",
      codeLink: "#",
      category: "Business Intelligence"
    }
  ];

  const upcomingProjects = [
    {
      title: "Customer Churn Analysis",
      description: "Predictive analytics model to identify customers at risk of churning",
      tools: ["Python", "Scikit-learn", "Tableau"],
      status: "In Progress"
    },
    {
      title: "Financial Market Analysis",
      description: "Comprehensive analysis of stock market trends and patterns",
      tools: ["R", "Power BI", "SQL"],
      status: "Planning"
    },
    {
      title: "Social Media Analytics",
      description: "Sentiment analysis and engagement metrics dashboard",
      tools: ["Python", "Tableau", "API Integration"],
      status: "Planning"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
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
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden animated-bg border-border hover-lift">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold mb-4 text-gradient">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tools Used */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-primary" />
                      Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="border-primary/30">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <BarChart3 className="w-4 h-4 mr-2 text-secondary" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" className="group">
                      View Live Demo
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button variant="outline" className="group">
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
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Upcoming <span className="text-gradient">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project) => (
              <Card key={project.title} className="p-8 animated-bg border-border hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant={project.status === "In Progress" ? "default" : "secondary"}
                    className={project.status === "In Progress" ? "bg-accent" : ""}
                  >
                    {project.status}
                  </Badge>
                  <FileSpreadsheet className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-gradient">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h5 className="font-medium text-sm">Tech Stack:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs border-muted">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-12 animated-bg border-border">
            <h3 className="text-3xl font-bold mb-4">
              Interested in <span className="text-gradient">Collaboration?</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new data projects and help businesses 
              unlock insights from their data. Let's discuss how we can work together!
            </p>
            <Button variant="hero" size="lg" className="group">
              Start a Project
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;