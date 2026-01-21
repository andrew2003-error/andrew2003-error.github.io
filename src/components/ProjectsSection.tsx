import { motion } from "framer-motion";
import { ExternalLink, Github, BarChart3, LineChart, Laptop, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Student Performance Dashboard",
    description: "Interactive Python dashboard analyzing student academic performance with predictive insights and trend visualizations.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    icon: BarChart3,
    color: "from-primary to-primary/50",
  },
  {
    title: "Laptop Users Dashboard",
    description: "Power BI dashboard providing insights into laptop user behavior, specifications, and market trends.",
    tools: ["Power BI", "DAX", "Data Modeling"],
    icon: Laptop,
    color: "from-secondary to-secondary/50",
  },
  {
    title: "Loan Approval Dashboard",
    description: "Comprehensive Power BI solution for analyzing loan approval patterns and risk assessment metrics.",
    tools: ["Power BI", "SQL", "Excel"],
    icon: LineChart,
    color: "from-primary to-secondary",
  },
  {
    title: "Online Bike Rental System",
    description: "Full-stack web application for bike rentals with booking management and user authentication.",
    tools: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    icon: Bike,
    color: "from-secondary to-primary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="section-title">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            A showcase of data analysis, machine learning, and web development projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="glass-card h-full p-6 hover-lift relative overflow-hidden">
                {/* Background gradient on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} 
                />
                
                {/* Icon header */}
                <div className="flex items-start justify-between mb-4 relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors relative">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed relative">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 relative">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-md bg-muted/50 text-xs font-mono text-foreground/70 border border-border/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg">
            <Github className="w-5 h-5" />
            View All on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
