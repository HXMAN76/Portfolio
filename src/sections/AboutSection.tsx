import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/GlowCard";
import { Code2, Gamepad2, Brain, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Problem Solver",
    description: "Decomposing complex challenges into elegant, maintainable solutions.",
  },
  {
    icon: Brain,
    title: "Systems Thinker",
    description: "Understanding how components interact to build robust architectures.",
  },
  {
    icon: Gamepad2,
    title: "Gamer Mindset",
    description: "Competitive gaming honed my reflexes for rapid debugging and optimization.",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "Every millisecond counts. Optimizing for speed and efficiency.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-primary">&lt;about&gt;</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
              WHO I <span className="gradient-text">AM</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Narrative */}
          <AnimatedSection direction="left">
            <GlowCard glowColor="cyan" hover={false}>
              <div className="space-y-6">
                <p className="font-body text-lg text-foreground leading-relaxed">
                  I'm a <span className="text-primary font-semibold">full-stack engineer</span> with 
                  a passion for building systems that scale. My journey started with curiosity—breaking 
                  apart games to understand how they worked, then rebuilding them better.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  That same drive now fuels my approach to software engineering. I don't just write 
                  code—I architect solutions that solve real problems. From distributed systems to 
                  pixel-perfect UIs, I thrive at the intersection of <span className="text-secondary">creativity</span> and 
                  <span className="text-accent"> logic</span>.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open source, or optimizing my gaming setup for that competitive edge.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {[
                    { value: "5+", label: "Years Experience" },
                    { value: "50+", label: "Projects Shipped" },
                    { value: "∞", label: "Lines of Code" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-heading font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </AnimatedSection>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1} direction="right">
                <GlowCard
                  glowColor={index % 3 === 0 ? "cyan" : index % 3 === 1 ? "purple" : "magenta"}
                  className="h-full"
                >
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="mt-16 text-center">
          <span className="font-mono text-sm text-primary">&lt;/about&gt;</span>
        </AnimatedSection>
      </div>
    </section>
  );
}
