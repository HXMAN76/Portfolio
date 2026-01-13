import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ContactSection } from "@/sections/ContactSection";
import { FooterSection } from "@/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scanline Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 scanline opacity-30" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
