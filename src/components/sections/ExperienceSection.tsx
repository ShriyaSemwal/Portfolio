import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = ({ isActive }: { isActive?: boolean }) => {
  return (
    <section id="experience" className="section-padding">
      <motion.div 
        className="section-header"
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="experience-grid">
        <div className="experience-timeline-container">
          <motion.div 
            className="experience-card"
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="exp-timeline">
              <div className="exp-dot"></div>
              <div className="exp-line-vertical"></div>
            </div>
            <div className="exp-content">
              <h3>Product Intern</h3>
              <h4>
                <a 
                  href="https://www.martechadda.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="exp-company-link"
                >
                  MarTechAdda
                </a>
              </h4>
              <p className="exp-date">Present &mdash; 31 July 2026</p>
              <p className="exp-desc">
                MarTechAdda is a publishing and marketing technology platform. As a Product Intern, I focus on bridging the gap between product strategy, UI/UX design, and production frontend code.
              </p>
              
              <div className="exp-section-title">Key Projects & Impact</div>
              <ul className="exp-achievements">
                <li><strong>Editorial Redesign</strong>: Re-architected the main blog engine using clean visual grids, improving text readability and layout scalability.</li>
                <li><strong>CRM Client Module</strong>: Designed and coded structured datatables and workflows for the Client Management Module, reducing data density complexity.</li>
                <li><strong>Design-to-Code</strong>: Standardized component handoffs by creating reusable CSS custom properties and semantic structures.</li>
                <li><strong>Responsive Engineering</strong>: Optimized layouts across mobile and tablet systems for consistent look-and-feel.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="experience-insights-card"
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card-notch-accent"></div>
          <h3>Internship Learnings</h3>
          
          <div className="insight-block">
            <h5>⚙️ Real-World Constraints</h5>
            <p>Learned to balance ideal design aspirations with practical engineering constraints, timelines, and technical requirements.</p>
          </div>

          <div className="insight-block">
            <h5>🤝 Cross-Functional Growth</h5>
            <p>Collaborated closely with developers and content creators to understand product challenges from business and tech angles.</p>
          </div>

          <div className="insight-block">
            <h5>🎨 Production Code Standards</h5>
            <p>Gained experience writing clean, maintainable HTML, CSS, and JavaScript structured around component design systems.</p>
          </div>

          <div className="exp-tags mt-4">
            <span className="exp-tag">Product Design</span>
            <span className="exp-tag">Frontend Dev</span>
            <span className="exp-tag">UI/UX Components</span>
            <span className="exp-tag">CRM Interfaces</span>
            <span className="exp-tag">Figma & Code</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
