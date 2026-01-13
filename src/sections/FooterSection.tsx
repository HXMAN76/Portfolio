import { Terminal, Heart } from "lucide-react";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-primary font-heading text-lg tracking-wider hover:text-primary/80 transition-colors"
          >
            <Terminal className="h-5 w-5" />
            <span className="neon-text">DEV_</span>
          </a>

          {/* Copyright */}
          <p className="font-mono text-xs text-muted-foreground flex items-center gap-1">
            © {currentYear} • Built with{" "}
            <Heart className="h-3 w-3 text-accent fill-accent animate-pulse" /> and lots of{" "}
            <span className="text-primary">{"<code/>"}</span>
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-4">
            {["About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
