import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="container relative z-10 px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Data Analyst & MSc Data Science Student
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-foreground">Turning </span>
            <span className="gradient-text">Data</span>
            <br />
            <span className="text-foreground">into </span>
            <span className="gradient-text text-glow">Decisions</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Hi, I'm <span className="text-foreground font-semibold">Andrew L.</span> — 
            I transform raw data into actionable insights, leveraging machine learning 
            and analytics to drive intelligent business decisions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                <FolderOpen className="w-5 h-5" />
                View Projects
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Tech stack preview */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-6 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="text-sm uppercase tracking-wider">Tech Stack:</span>
            {["Python", "SQL", "Power BI", "Machine Learning", "React"].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1 rounded-md bg-muted/50 text-sm font-mono text-foreground/80 border border-border/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-5 h-5 scroll-indicator" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
