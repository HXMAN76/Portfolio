import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "magenta";
  hover?: boolean;
}

export function GlowCard({
  children,
  className,
  glowColor = "cyan",
  hover = true,
}: GlowCardProps) {
  const glowClasses = {
    cyan: "hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)] border-neon-cyan/30 hover:border-neon-cyan/60",
    purple: "hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.3)] border-neon-purple/30 hover:border-neon-purple/60",
    magenta: "hover:shadow-[0_0_30px_hsl(var(--neon-magenta)/0.3)] border-neon-magenta/30 hover:border-neon-magenta/60",
  };

  return (
    <div
      className={cn(
        "relative bg-card/80 backdrop-blur-sm border rounded-lg p-6 transition-all duration-500",
        hover && "hover:scale-[1.02] hover:-translate-y-1",
        glowClasses[glowColor],
        className
      )}
    >
      {children}
    </div>
  );
}
