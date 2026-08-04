import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = ({ isActive }: { isActive?: boolean }) => {
  const principles = [
    { title: '🎨 Tactility & Vibe', desc: 'Interfaces should feel physical and hand-crafted, not sterile or plastic. Micro-animations make pixels feel human.' },
    { title: '💡 Simple & Clean', desc: 'Good design removes noise to amplify the core message. Clarity always wins over complexity.' },
    { title: '⛰️ Continuous Learning', desc: 'As an engineering student, I treat every project as a research lab. I design with curiosity and build with code.' }
  ];

  return (
    <section id="about" className="section-padding">
      <motion.div 
        className="section-header"
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="about-grid">
        <motion.div 
          className="about-bio"
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="large-text">
            I am a second-year Computer Science Engineering student at the University Institute of Technology, Himachal Pradesh University in Shimla.
          </p>
          <p>
            I have a deep passion for the intersection of software engineering and visual design. I don't just write functional code; I care about how it feels, how it transitions, and how it communicates. I believe digital products should have character and warmth.
          </p>
          <p>
            When I'm not coding, I'm exploring layout compositions, diving into design systems, learning new React libraries, and sketching interface concepts. I thrive on bringing tactile, playful, and premium web ideas to life.
          </p>
        </motion.div>

        <motion.div 
          className="about-philosophy-card"
          animate={isActive ? { opacity: 1, scale: 1, rotate: -1.5 } : { opacity: 0, scale: 0.95, rotate: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          whileHover={{ rotate: 1, scale: 1.02 }}
        >
          <div className="card-tape-accent"></div>
          <h3>My Philosophy</h3>
          <ul className="principles-list">
            {principles.map((p, i) => (
              <li key={i}>
                <strong>{p.title}</strong>
                <p>{p.desc}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
