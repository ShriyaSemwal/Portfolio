import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';
import CustomCursor from './components/CustomCursor';
import FloatingStickers from './components/FloatingStickers';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
    
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            // Update URL hash without causing a page jump
            window.history.replaceState(null, '', `#${id}`);
          }
        },
        {
          // Trigger when at least 45% of the section is visible in the viewport
          threshold: 0.45,
        }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  // Smooth scroll handler for nav clicks
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="portfolio-app">
      <header className="navbar">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')} 
          className="logo"
        >
          Shriya Semwal
        </a>
        <nav>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')} 
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a 
            href="#experience" 
            onClick={(e) => handleNavClick(e, 'experience')} 
            className={activeSection === 'experience' ? 'active' : ''}
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')} 
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            onClick={(e) => handleNavClick(e, 'skills')} 
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </a>
          <a 
            href="#education" 
            onClick={(e) => handleNavClick(e, 'education')} 
            className={activeSection === 'education' ? 'active' : ''}
          >
            Education
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')} 
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </nav>
      </header>
      
      <main className="main-content">
        <HeroSection isActive={activeSection === 'hero'} />
        <AboutSection isActive={activeSection === 'about'} />
        <ExperienceSection isActive={activeSection === 'experience'} />
        <ProjectsSection isActive={activeSection === 'projects'} />
        <SkillsSection isActive={activeSection === 'skills'} />
        <EducationSection isActive={activeSection === 'education'} />
        <ContactSection isActive={activeSection === 'contact'} />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Shriya Semwal. Designed with love and code.</p>
      </footer>

      <CustomCursor />
      <FloatingStickers activeSection={activeSection} />

      <AnimatePresence>
        {activeSection !== 'hero' && (
          <motion.button
            className="scroll-top-btn"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('hero');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.2 }}
            aria-label="Back to Top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;



