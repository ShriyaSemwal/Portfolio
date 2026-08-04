import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Project {
  title: string;
  desc: string;
  color: string;
  modalTitle: string;
  modalDesc: string;
  highlights: string[];
}

const projectsData: Project[] = [
  {
    title: 'Blog Website',
    desc: 'A modern, highly responsive blog engine built for MarTechAdda with editorial typography and pristine visual hierarchy.',
    color: 'var(--color-accent-pink)',
    modalTitle: 'MarTechAdda Blog Website',
    modalDesc: 'A modern, highly responsive blog engine built for MarTechAdda with a focus on editorial typography and pristine visual hierarchy.',
    highlights: [
      'Fluid responsive design tailored across mobile, tablet, and ultra-wide screens.',
      'Custom typography system designed for maximum readability and visual elegance.',
      'Smooth micro-interactions and interactive article card hover states.',
    ],
  },
  {
    title: 'CRM Software',
    desc: 'Designed and developed the core Client Management Module for an enterprise CRM system with structured workflows.',
    color: 'var(--color-accent-blue)',
    modalTitle: 'CRM Client Management Software',
    modalDesc: 'Designed and developed the core Client Management Module for an enterprise CRM system with structured workflows.',
    highlights: [
      'Designed end-to-end Client Management Module of CRM with structured data tables.',
      'Iterated on UX patterns to reduce cognitive load and simplify complex client actions.',
      'Implemented clean UI components for enterprise deployment.',
    ],
  },
  {
    title: 'Billing Software',
    desc: 'Developed a billing software application with crisp financial interfaces, organized calculation workflows, and invoice output.',
    color: 'var(--color-accent-orange)',
    modalTitle: 'Smart Billing & Invoicing Suite',
    modalDesc: 'Developed a billing software application with crisp financial interfaces, organized calculation workflows, and invoice output.',
    highlights: [
      'Organized multi-item billing matrix with real-time tax and subtotal calculation.',
      'Clean, minimalistic user interface optimized for rapid daily business usage.',
      'Export and print-ready layout generation & preview.',
    ],
  },
];

const ProjectsSection = ({ isActive }: { isActive?: boolean }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const close = () => setActiveProject(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeProject]);

  return (
    <section id="projects" className="section-padding">
      <motion.div
        className="section-header"
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            style={{ '--card-accent': project.color } as React.CSSProperties}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          >
            <div className="project-card-inner">
              <div className="project-shape"></div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <button
                className="project-view-btn"
                onClick={() => setActiveProject(project)}
                style={{ '--btn-accent': project.color } as React.CSSProperties}
              >
                More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeProject && (
            <div className="project-modal-overlay">
              {/* Backdrop */}
              <motion.div
                className="project-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveProject(null)}
              />

              {/* Modal Panel */}
              <motion.div
                className="project-modal"
                style={{ '--modal-accent': activeProject.color } as React.CSSProperties}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.25, 0.8, 0.25, 1] }}
              >
                {/* Accent corner shape */}
                <div className="modal-accent-shape"></div>

                {/* Close button */}
                <button
                  className="modal-close-btn"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                <div className="modal-content">
                  <h3 className="modal-title">{activeProject.modalTitle}</h3>
                  <p className="modal-desc">{activeProject.modalDesc}</p>

                  <div className="modal-divider"></div>

                  <ul className="modal-highlights">
                    {activeProject.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default ProjectsSection;

