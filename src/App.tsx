import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProblemSolvingSection } from './components/ProblemSolvingSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { SkillsSection } from './components/SkillsSection';

export function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-heading)] transition-colors duration-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-[var(--accent-contrast)]"
      >
        Skip to main content
      </a>

      <ScrollProgressBar />
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ProblemSolvingSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
