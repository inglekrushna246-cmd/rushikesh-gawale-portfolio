import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  BarChart3, 
  Code, 
  FileSpreadsheet, 
  Brain, 
  MessageCircle,
  Target,
  Lightbulb
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "SQL", icon: Database },
    { name: "Excel", icon: FileSpreadsheet },
    { name: "Power BI", icon: BarChart3 },
    { name: "Python", icon: Code },
    { name: "Tableau", icon: BarChart3 },
  ];

  const softSkills = [
    { name: "Critical Thinking", icon: Brain },
    { name: "Problem-Solving", icon: Target },
    { name: "Communication", icon: MessageCircle },
    { name: "Data Storytelling", icon: Lightbulb },
  ];

  const competencies = [
    "Data Cleaning & Preparation",
    "Statistical Analysis", 
    "Data Visualization",
    "Business Intelligence",
    "Trend Analysis",
    "Dashboard Development",
    "Report Generation",
    "Data Mining"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for transforming data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center lg:text-left">
              Technical <span className="text-gradient">Expertise</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={skill.name} className="p-4 animated-bg border-border hover-lift text-center">
                     <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                       <IconComponent className="w-5 h-5 text-white" />
                     </div>
                     <h4 className="font-semibold text-sm">{skill.name}</h4>
                   </Card>
                );
              })}
            </div>
          </div>

          {/* Soft Skills & Competencies */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div>
              <h3 className="text-3xl font-bold text-center lg:text-left mb-6">
                Soft <span className="text-gradient">Skills</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <Card key={skill.name} className="p-6 text-center animated-bg border-border hover-lift">
                      <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm">{skill.name}</h4>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="text-3xl font-bold text-center lg:text-left mb-6">
                Core <span className="text-gradient">Competencies</span>
              </h3>
              <Card className="p-8 animated-bg border-border hover-lift">
                <div className="flex flex-wrap gap-3">
                  {competencies.map((competency) => (
                    <Badge 
                      key={competency} 
                      variant="secondary" 
                      className="text-sm py-2 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-colors duration-300"
                    >
                      {competency}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Tools & Technologies */}
            <Card className="p-8 animated-bg border-border hover-lift">
              <h4 className="text-xl font-bold mb-4 text-gradient">Tools & Technologies</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Data Analysis</span>
                  <span className="text-sm font-medium">SQL, Python, R</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Visualization</span>
                  <span className="text-sm font-medium">Power BI, Tableau</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Spreadsheets</span>
                  <span className="text-sm font-medium">Excel, Google Sheets</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Databases</span>
                  <span className="text-sm font-medium">MySQL, PostgreSQL</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;