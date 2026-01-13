import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/GlowCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Neural Network Visualizer",
    problem: "Understanding how neural networks make decisions is often a black box for developers.",
    solution: "Built an interactive 3D visualization tool that renders neural network layers, weights, and activations in real-time.",
    tech: ["React", "Three.js", "TensorFlow.js", "WebGL"],
    github: "#",
    demo: "#",
    color: "cyan" as const,
  },
  {
    title: "Distributed Task Queue",
    problem: "Legacy job processing systems couldn't handle our scale of 10M+ daily operations.",
    solution: "Designed a fault-tolerant distributed queue with automatic retry logic, dead-letter handling, and real-time monitoring.",
    tech: ["Go", "Redis", "gRPC", "Kubernetes", "Prometheus"],
    github: "#",
    demo: "#",
    color: "purple" as const,
  },
  {
    title: "Real-time Collaboration Engine",
    problem: "Teams needed to collaborate on documents without conflicts or data loss.",
    solution: "Implemented CRDT-based sync engine supporting millions of concurrent operations with sub-100ms latency.",
    tech: ["TypeScript", "WebSocket", "Yjs", "PostgreSQL"],
    github: "#",
    demo: "#",
    color: "magenta" as const,
  },
  {
    title: "AI-Powered Code Review Bot",
    problem: "Code reviews were bottlenecking our deployment pipeline with 48-hour wait times.",
    solution: "Created an LLM-powered bot that provides instant feedback on PRs, catching 70% of issues before human review.",
    tech: ["Python", "OpenAI API", "GitHub Actions", "Docker"],
    github: "#",
    demo: "#",
    color: "cyan" as const,
  },
  {
    title: "Game Server Infrastructure",
    problem: "Needed to support 100K concurrent players with < 20ms tick rate for competitive gaming.",
    solution: "Built a multi-region server architecture with intelligent matchmaking and predictive scaling.",
    tech: ["Rust", "UDP", "AWS", "Terraform", "Redis"],
    github: "#",
    demo: "#",
    color: "purple" as const,
  },
  {
    title: "Cyberpunk Dashboard",
    problem: "Stakeholders needed a unified view of system health across 50+ microservices.",
    solution: "Designed a visually stunning monitoring dashboard with real-time metrics and intelligent alerting.",
    tech: ["React", "D3.js", "Grafana", "InfluxDB"],
    github: "#",
    demo: "#",
    color: "magenta" as const,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-primary">&lt;projects&gt;</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
              FEATURED <span className="gradient-text">WORK</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my approach to solving complex problems with elegant code.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <GlowCard glowColor={project.color} className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-sm">
                    <Folder className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold flex-1">{project.title}</h3>
                </div>

                {/* Problem & Solution */}
                <div className="space-y-3 mb-6 flex-1">
                  <div>
                    <span className="font-mono text-xs text-destructive uppercase tracking-wider">Problem</span>
                    <p className="font-body text-sm text-muted-foreground mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-primary uppercase tracking-wider">Solution</span>
                    <p className="font-body text-sm text-foreground mt-1">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="font-mono text-xs border-border hover:border-primary hover:text-primary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <span className="font-mono text-sm text-primary">&lt;/projects&gt;</span>
        </AnimatedSection>
      </div>
    </section>
  );
}
