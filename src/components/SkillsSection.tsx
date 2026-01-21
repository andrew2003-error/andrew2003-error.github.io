import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    color: "primary",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "Java", level: 50 },
      { name: "HTML/CSS", level: 80 },
    ],
  },
  {
    title: "Data & ML",
    color: "secondary",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "Matplotlib", level: 85 },
      { name: "OpenCV", level: 65 },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "primary",
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Excel", level: 90 },
      { name: "Jupyter", level: 90 },
      { name: "Git", level: 75 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Web Development",
    color: "secondary",
    skills: [
      { name: "Flask", level: 70 },
      { name: "PHP", level: 65 },
      { name: "React", level: 60 },
      { name: "REST APIs", level: 75 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-muted/20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="section-title">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            A comprehensive toolkit spanning data science, machine learning, and web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span 
                  className={`w-3 h-3 rounded-full ${
                    category.color === "primary" ? "bg-primary" : "bg-secondary"
                  }`} 
                />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground/90">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full progress-glow ${
                          category.color === "primary" 
                            ? "bg-gradient-to-r from-primary to-primary/70" 
                            : "bg-gradient-to-r from-secondary to-secondary/70"
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            "Python", "SQL", "Power BI", "Pandas", "NumPy", "Scikit-learn",
            "Matplotlib", "Seaborn", "OpenCV", "Flask", "Git", "Jupyter Notebook"
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.03, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full border border-border/50 bg-card/50 text-sm font-medium text-foreground/80 hover:border-primary/50 hover:text-primary transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
