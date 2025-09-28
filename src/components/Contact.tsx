import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Instagram,
  Send,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gawalerushikesh22@gmail.com",
      link: "mailto:gawalerushikesh22@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7249219766",
      link: "tel:+917249219766",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Maharashtra, India",
      link: "#",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "@rushikesh-gawale",
      link: "https://linkedin.com/in/rushikesh-gawale",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      name: "GitHub",
      handle: "@rushikesh-gawale",
      link: "https://github.com/rushikesh-gawale",
      color: "hover:text-gray-400"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@rushikesh.gawale",
      link: "https://instagram.com/rushikesh.gawale",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss 
            how we can work together to unlock the potential of your data.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={item.label} className="p-6 animated-bg border-border hover-lift">
                      <a 
                        href={item.link}
                        className="flex items-center space-x-4 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {item.label}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Card key={social.name} className="p-4 animated-bg border-border hover-lift">
                      <a 
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-muted to-muted-foreground/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className={`w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300`} />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{social.name}</h4>
                          <p className="text-muted-foreground text-xs">{social.handle}</p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Call to Action Cards */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main CTA */}
            <Card className="p-12 text-center animated-bg border-border hover-lift">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-glow">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Let's Create Something <span className="text-gradient">Amazing</span>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need data analysis, visualization dashboards, or business 
                intelligence solutions, I'm here to help transform your raw data into 
                powerful insights that drive business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="group"
                  onClick={() => window.location.href = 'mailto:gawalerushikesh22@gmail.com'}
                >
                  Send Email
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="glass" 
                  size="lg"
                  className="group"
                  onClick={() => window.location.href = 'tel:+917249219766'}
                >
                  Call Now
                  <Phone className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </div>
            </Card>

            {/* Services Preview */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 animated-bg border-border hover-lift text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gradient">Data Analysis</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Transform raw data into meaningful insights for better business decisions
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </Card>

              <Card className="p-8 animated-bg border-border hover-lift text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gradient">Dashboard Creation</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Interactive dashboards and visualizations for real-time insights
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Samples
                </Button>
              </Card>
            </div>

            {/* Availability Status */}
            <Card className="p-6 animated-bg border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold">Available for Projects</h4>
                    <p className="text-muted-foreground text-sm">
                      Currently accepting new data analysis projects
                    </p>
                  </div>
                </div>
                <Button variant="cta" size="sm">
                  Book Consultation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;