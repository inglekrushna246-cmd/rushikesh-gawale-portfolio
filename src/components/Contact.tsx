import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send, MessageCircle } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "gawalerushikesh22@gmail.com",
    link: "mailto:gawalerushikesh22@gmail.com",
    color: "text-primary"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91 7249219766",
    link: "tel:+917249219766",
    color: "text-secondary"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Maharashtra, India",
    link: "#",
    color: "text-accent"
  }];
  const socialLinks = [{
    icon: Linkedin,
    name: "LinkedIn",
    handle: "@rushikesh-gawale",
    link: "https://linkedin.com/in/rushikesh-gawale",
    color: "hover:text-blue-500"
  }, {
    icon: Github,
    name: "GitHub",
    handle: "@rushikesh-gawale",
    link: "https://github.com/rushikesh-gawale",
    color: "hover:text-gray-400"
  }, {
    icon: Instagram,
    name: "Instagram",
    handle: "@rushikesh.gawale",
    link: "https://instagram.com/rushikesh.gawale",
    color: "hover:text-pink-500"
  }];
  return <section id="contact" className="py-20 px-4">
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
                {contactInfo.map(item => {
                const IconComponent = item.icon;
                return <Card key={item.label} className="p-6 animated-bg border-border hover-lift">
                      <a href={item.link} className="flex items-center space-x-4 group">
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
                    </Card>;
              })}
              </div>
            </div>

            {/* Social Links - Horizontal */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map(social => {
                const IconComponent = social.icon;
                return <Card key={social.name} className="p-4 animated-bg border-border hover-lift flex-1">
                      <a href={social.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 group">
                        <div className="w-10 h-10 bg-gradient-to-r from-muted to-muted-foreground/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className={`w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300`} />
                        </div>
                        <div className="text-center">
                          <h4 className="font-medium text-foreground text-sm">{social.name}</h4>
                          <p className="text-muted-foreground text-xs">{social.handle}</p>
                        </div>
                      </a>
                    </Card>;
              })}
              </div>
            </div>
          </div>

          {/* Call to Action Cards */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main CTA with Contact Form */}
            <Card className="p-12 animated-bg border-border hover-lift">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-glow">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-center">
                Let's Create Something <span className="text-gradient">Amazing</span>
              </h3>
              
              <form className="space-y-4 max-w-2xl mx-auto">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </Card>

            {/* Services Preview */}
            

            {/* Availability Status */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;