import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/GlowCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#", username: "@cyberdev" },
  { icon: Linkedin, label: "LinkedIn", href: "#", username: "in/cyberdev" },
  { icon: Twitter, label: "Twitter", href: "#", username: "@cyberdev" },
  { icon: Mail, label: "Email", href: "mailto:hello@cyberdev.io", username: "hello@cyberdev.io" },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-primary">&lt;contact&gt;</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
              GET IN <span className="gradient-text">TOUCH</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's build something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 border border-primary/30 rounded-sm">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Location
                  </p>
                  <p className="font-body text-lg">San Francisco, CA</p>
                </div>
              </div>

              {/* Terminal Style Info */}
              <GlowCard glowColor="purple" hover={false}>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-muted-foreground">
                    <span className="text-primary">const</span>{" "}
                    <span className="text-secondary">availability</span> = {"{"}
                  </p>
                  <p className="pl-4 text-muted-foreground">
                    status: <span className="text-primary">"open"</span>,
                  </p>
                  <p className="pl-4 text-muted-foreground">
                    response_time: <span className="text-primary">"24h"</span>,
                  </p>
                  <p className="pl-4 text-muted-foreground">
                    open_to: [<span className="text-primary">"full-time"</span>, <span className="text-primary">"contract"</span>]
                  </p>
                  <p className="text-muted-foreground">{"}"};</p>
                </div>
              </GlowCard>

              {/* Social Links */}
              <div className="space-y-4">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Connect with me
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map(({ icon: Icon, label, href, username }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-border rounded-sm bg-card/50 hover:border-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-all duration-300 group"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="font-mono text-xs text-muted-foreground">{label}</p>
                        <p className="font-body text-sm text-foreground group-hover:text-primary transition-colors">
                          {username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right">
            <GlowCard glowColor="cyan" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Name
                  </label>
                  <Input
                    required
                    placeholder="John Doe"
                    className="bg-background/50 border-border focus:border-primary font-body"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Email
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50 border-border focus:border-primary font-body"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Message
                  </label>
                  <Textarea
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary font-body resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-pulse">Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </GlowCard>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16 text-center">
          <span className="font-mono text-sm text-primary">&lt;/contact&gt;</span>
        </AnimatedSection>
      </div>
    </section>
  );
}
