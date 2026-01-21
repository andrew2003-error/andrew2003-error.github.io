import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Tech Innovation Labs",
    period: "2024",
    description: "Developed ML models for predictive analytics and automated data pipelines using Python and Scikit-learn.",
    skills: ["Python", "Scikit-learn", "TensorFlow", "Data Pipeline"],
  },
  {
    role: "Data Science Intern",
    company: "Analytics Solutions",
    period: "2023",
    description: "Analyzed large datasets to derive business insights, created interactive dashboards and reports.",
    skills: ["Python", "Power BI", "SQL", "Pandas"],
  },
  {
    role: "ML & Full Stack Development Intern",
    company: "Digital Dynamics",
    period: "2023",
    description: "Built end-to-end ML-powered web applications with Flask backend and React frontend.",
    skills: ["Flask", "React", "MySQL", "OpenCV"],
  },
  {
    role: "Web Development Intern",
    company: "Creative Web Agency",
    period: "2022",
    description: "Developed responsive websites and web applications using PHP, MySQL, and modern frontend technologies.",
    skills: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-muted/20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="section-title">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Professional internships and hands-on experience in data science and development.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 transform -translate-x-1/2" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative flex items-center mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 shadow-lg shadow-primary/50" />

                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-mono text-primary">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                    <p className="text-sm text-foreground/80 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 rounded-md bg-muted/50 text-xs font-mono text-foreground/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
