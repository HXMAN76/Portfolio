import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    color: "primary",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "Rust", "SQL", "GraphQL"],
  },
  {
    title: "Frontend",
    color: "secondary",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Three.js", "Framer Motion", "WebGL"],
  },
  {
    title: "Backend",
    color: "accent",
    skills: ["Node.js", "Express", "FastAPI", "gRPC", "REST APIs", "WebSocket", "Microservices"],
  },
  {
    title: "Data & AI",
    color: "primary",
    skills: ["PostgreSQL", "MongoDB", "Redis", "TensorFlow", "PyTorch", "LangChain", "Vector DBs"],
  },
  {
    title: "DevOps & Cloud",
    color: "secondary",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
  },
  {
    title: "Tools & Methods",
    color: "accent",
    skills: ["Git", "Vim", "Linux", "Agile", "TDD", "CI/CD", "System Design"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-primary">&lt;skills&gt;</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
              TECH <span className="gradient-text">STACK</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies I use to bring ideas to life. Always learning, always improving.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1}>
              <div className="group">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      category.color === "primary"
                        ? "bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
                        : category.color === "secondary"
                        ? "bg-secondary shadow-[0_0_10px_hsl(var(--secondary))]"
                        : "bg-accent shadow-[0_0_10px_hsl(var(--accent))]"
                    }`}
                  />
                  <h3 className="font-heading text-lg font-semibold tracking-wider uppercase">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`font-mono text-sm py-2 px-4 border-border bg-card/50 
                        hover:scale-105 transition-all duration-300 cursor-default
                        ${
                          category.color === "primary"
                            ? "hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                            : category.color === "secondary"
                            ? "hover:border-secondary hover:text-secondary hover:shadow-[0_0_15px_hsl(var(--secondary)/0.3)]"
                            : "hover:border-accent hover:text-accent hover:shadow-[0_0_15px_hsl(var(--accent)/0.3)]"
                        }`}
                      style={{
                        animationDelay: `${skillIndex * 0.05}s`,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <span className="font-mono text-sm text-primary">&lt;/skills&gt;</span>
        </AnimatedSection>
      </div>
    </section>
  );
}
