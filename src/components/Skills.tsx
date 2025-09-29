import { Card } from "@/components/ui/card";
import { Database, BarChart3, Code, FileSpreadsheet, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Programming & Prep",
      skills: [
        {
          name: "SQL",
          icon: Database,
          description: "Advanced querying with window functions, CTEs, and optimized stored procedures for large-scale data aggregation and complex joins."
        },
        {
          name: "Python",
          icon: Code,
          description: "Data wrangling expertise using Pandas & NumPy for cleaning, transformation, and automated ETL pipeline development."
        },
        {
          name: "Excel",
          icon: FileSpreadsheet,
          description: "Scenario modeling with complex forecasting formulas, pivot tables, and financial analysis templates for executive reporting."
        }
      ]
    },
    {
      title: "Business Intelligence & Visualization",
      skills: [
        {
          name: "Power BI",
          icon: BarChart3,
          description: "Executive dashboards with interactive drill-down capabilities, DAX measures, and real-time KPI monitoring for strategic insights."
        },
        {
          name: "Tableau",
          icon: TrendingUp,
          description: "Data storytelling through compelling visualizations, calculated fields, and dynamic parameters for audience-specific reporting."
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven proficiency in transforming complex data into strategic business value
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                <span className="text-accent">{category.title}</span>
              </h3>
              
              <div className={`grid ${category.skills.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-6`}>
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <Card 
                      key={skill.name} 
                      className="p-6 animated-bg border-border hover-lift group"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_hsl(188,100%,50%)] transition-all duration-300">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">{skill.name}</h4>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
