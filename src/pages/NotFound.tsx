import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Terminal, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Glitch Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="relative z-10 text-center px-4">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-heading font-bold gradient-text glitch-effect">
            404
          </h1>
        </div>

        {/* Terminal-style message */}
        <div className="mb-8 inline-block">
          <div className="flex items-center gap-2 px-4 py-2 border border-destructive/30 rounded-sm bg-destructive/5">
            <Terminal className="h-4 w-4 text-destructive" />
            <span className="font-mono text-sm text-destructive">
              ERROR: Route "{location.pathname}" not found
            </span>
          </div>
        </div>

        {/* Message */}
        <p className="font-body text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The system couldn't locate the requested resource. 
          It may have been moved or deleted.
        </p>

        {/* Return Button */}
        <Button asChild size="lg">
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            Return to Base
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
