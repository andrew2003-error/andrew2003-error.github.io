import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "andrewbca2003@gmail.com",
    href: "mailto:andrewbca2003@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9566655909",
    href: "tel:+91 9566655909",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tamil Nadu, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andrew-error/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/andrew2003-error",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-muted/20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="section-title">Get in Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Interested in collaboration or have a question? Let's connect!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card p-8 h-full">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all group"
                      >
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card p-8 h-full flex flex-col justify-center relative overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4">
                    Let's work together
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Looking for a data analyst who can transform your data into actionable insights? 
                    I'm open to new opportunities and collaborations.
                  </p>
                  
                  <div className="space-y-4">
                    <Button variant="hero" size="lg" className="w-full group" asChild>
                      <a href="mailto:andrewbca2003@gmail.com">
                        Send Message
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="heroOutline" size="lg" className="w-full" asChild>
                      <a href="https://drive.google.com/file/d/1o6THhpxWfbHwkHrlQvEpiNcGRjEee-15/view?usp=drive_link" download>
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
