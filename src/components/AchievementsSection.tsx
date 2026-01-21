import { motion } from "framer-motion";
import { Trophy, Award, Medal, BookOpen } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "1st Place – Web Design",
    subtitle: "Inter-College Competition",
    description: "Won first place for innovative web design and user experience.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Medal,
    title: "AI Hackathon Participant",
    subtitle: "National Level",
    description: "Competed in AI/ML hackathon developing innovative solutions.",
    color: "from-primary to-primary/70",
  },
  {
    icon: Award,
    title: "IBM Data Science Certificate",
    subtitle: "Professional Certification",
    description: "Completed comprehensive data science certification from IBM.",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: BookOpen,
    title: "Machine Learning Certification",
    subtitle: "IBM Professional Certificate",
    description: "Advanced certification in machine learning and AI techniques.",
    color: "from-emerald-500 to-emerald-600",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="section-title">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Recognition and certifications earned throughout my journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-card h-full p-6 text-center relative overflow-hidden">
                {/* Glow effect on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Badge icon */}
                <div className="relative mb-4 mx-auto">
                  <div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} p-0.5 mx-auto badge-glow`}
                  >
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors relative">
                  {achievement.title}
                </h3>
                <p className="text-sm text-primary/80 mb-3 font-medium relative">
                  {achievement.subtitle}
                </p>
                <p className="text-sm text-muted-foreground relative">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
