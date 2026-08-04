import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { 
    category: 'Programming & Logic', 
    desc: 'Writing structured and efficient algorithms.',
    items: ['Python', 'JavaScript', 'C++', 'Data Structures'] 
  },
  { 
    category: 'Frontend Engineering', 
    desc: 'Creating responsive, responsive interface structures.',
    items: ['HTML5', 'CSS3', 'ES6 JavaScript', 'React.js', 'Framer Motion'] 
  },
  { 
    category: 'Design & Prototyping', 
    desc: 'Developing wireframes and design systems.',
    items: ['UI/UX Design', 'Figma', 'Visual Hierarchy', 'Wireframing'] 
  },
  { 
    category: 'Tools & Workflows', 
    desc: 'Standard team development environments.',
    items: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools'] 
  },
  { 
    category: 'Database & Backend', 
    desc: 'Managing structured and unstructured application data.',
    items: ['MongoDB', 'SQL Basics'] 
  },
  { 
    category: 'Hosting & Deployment', 
    desc: 'Cloud delivery for web experiences.',
    items: ['Vercel', 'Netlify', 'GitHub Pages'] 
  }
];

const SkillsSection = ({ isActive }: { isActive?: boolean }) => {
  return (
    <section id="skills" className="section-padding">
      <motion.div 
        className="section-header"
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="skills-container">
        {skills.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            className="skill-group"
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: idx * 0.08 + 0.1 }}
            whileHover={{ y: -5, boxShadow: '8px 8px 0px rgba(74, 55, 40, 0.15)' }}
          >
            <div className="skill-card-inner">
              <h4 className="skill-category">{skillGroup.category}</h4>
              <p className="skill-desc">{skillGroup.desc}</p>
              <div className="skill-items">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
