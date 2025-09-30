import { Card } from "@/components/ui/card";
import { GraduationCap, User, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate data professional with a strong foundation in computer science 
            and hands-on experience in data analysis and visualization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="p-8 animated-bg border-border hover-lift">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient">Personal Bio</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate data enthusiast with hands-on experience in data analysis 
                    and visualization. Skilled in SQL and Power BI, eager to transform 
                    data into clear business insights. Always learning and ready to 
                    tackle new challenges in the tech world.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 animated-bg border-border hover-lift">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient">Education</h3>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">
                      B.Tech in Computer Science Engineering
                    </h4>
                    <p className="text-muted-foreground">
                      Dr. Babasaheb Ambedkar Technological University, Lonere
                    </p>
                    <p className="text-sm text-primary font-medium">2025 (Expected)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Stats & Achievements */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center animated-bg border-border hover-lift">
                <div className="text-3xl font-bold text-gradient mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Hours of Analysis</div>
              </Card>
              <Card className="p-6 text-center animated-bg border-border hover-lift">
                <div className="text-3xl font-bold text-gradient mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center animated-bg border-border hover-lift">
                <div className="text-3xl font-bold text-gradient mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Tools Mastered</div>
              </Card>
              <Card className="p-6 text-center animated-bg border-border hover-lift">
                <div className="text-3xl font-bold text-gradient mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Journey Started</div>
              </Card>
            </div>

            {/* Core Values */}
            <Card className="p-8 animated-bg border-border hover-lift">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient">Core Values</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Data-driven decision making</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Continuous learning and growth</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Clear communication of insights</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Innovation in problem-solving</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;