import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/GlowCard";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    type: "work",
    title: "Senior Software Engineer",
    organization: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading architecture decisions for a distributed platform serving 10M+ users. Reduced API latency by 60% through caching strategies and query optimization.",
    highlights: ["System Design", "Team Leadership", "Performance Optimization"],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Built and maintained multiple client-facing applications. Implemented CI/CD pipelines that reduced deployment time from hours to minutes.",
    highlights: ["React", "Node.js", "DevOps"],
  },
  {
    type: "work",
    title: "Software Engineer",
    organization: "StartupXYZ",
    period: "2019 - 2020",
    description: "Early engineer at a fast-growing startup. Shipped features rapidly while establishing coding standards and best practices.",
    highlights: ["Rapid Prototyping", "Full Stack", "Agile"],
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    organization: "University of Technology",
    period: "2015 - 2019",
    description: "Specialized in distributed systems and machine learning. Graduated with honors while contributing to open source projects.",
    highlights: ["Algorithms", "ML/AI", "Research"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-primary">&lt;experience&gt;</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
              CAREER <span className="gradient-text">TIMELINE</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey from curious student to seasoned engineer.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4" />
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

          {experience.map((item, index) => (
            <AnimatedSection
              key={`${item.organization}-${item.period}`}
              delay={index * 0.15}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_hsl(var(--primary)/0.5)]" />

                {/* Content Card */}
                <div className="ml-8 md:ml-0 md:w-[calc(50%-2rem)]">
                  <GlowCard
                    glowColor={index % 2 === 0 ? "cyan" : "purple"}
                    className="relative"
                  >
                    {/* Icon */}
                    <div className="absolute -top-3 -left-3 p-2 bg-card border border-border rounded-sm">
                      {item.type === "work" ? (
                        <Briefcase className="h-4 w-4 text-primary" />
                      ) : (
                        <GraduationCap className="h-4 w-4 text-secondary" />
                      )}
                    </div>

                    {/* Period Badge */}
                    <div className="mb-4">
                      <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-sm">
                        {item.period}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="font-heading text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="font-body text-secondary mb-4">{item.organization}</p>

                    {/* Description */}
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="font-mono text-xs text-muted-foreground border border-border px-2 py-1 rounded-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <span className="font-mono text-sm text-primary">&lt;/experience&gt;</span>
        </AnimatedSection>
      </div>
    </section>
  );
}
