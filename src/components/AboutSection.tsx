import { motion } from "framer-motion";
import { Code2, Database, Brain, LineChart } from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Data Analysis",
    description: "Expert in extracting insights from complex datasets using Python, SQL, and advanced analytics.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Building predictive models and implementing ML algorithms to solve real-world problems.",
  },
  {
    icon: LineChart,
    title: "Data Visualization",
    description: "Creating compelling dashboards and reports with Power BI, Matplotlib, and Seaborn.",
  },
  {
    icon: Code2,
    title: "Full Stack Dev",
    description: "Web development skills with Flask, PHP, and modern JavaScript frameworks.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="section-title">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            A passionate data enthusiast pursuing MSc in Data Science, dedicated to 
            transforming complex data into strategic business decisions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                I'm <span className="text-primary font-semibold">Andrew L.</span>, a Data Analyst 
                and MSc Data Science student with a strong foundation in statistical analysis, 
                machine learning, and data visualization.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My expertise spans across the entire data pipeline — from data collection and 
                cleaning to advanced analytics and machine learning model deployment. I thrive 
                on solving complex problems and delivering actionable insights that drive 
                business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With hands-on experience in Python, SQL, Power BI, and various ML frameworks, 
                I'm equipped to tackle diverse data challenges and create impactful solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4+", label: "Internships" },
                { value: "10+", label: "Projects" },
                { value: "5+", label: "Certifications" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="glass-card p-4 text-center hover-lift"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="glass-card p-6 hover-lift group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
