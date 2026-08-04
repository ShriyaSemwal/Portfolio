import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ isActive }: { isActive?: boolean }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <em>Shriya</em>
        </motion.h1>
        
        <motion.div 
          className="hero-role-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Building modern web experiences <br/> through <em>creativity</em>, <em>precision</em> & <em>curiosity</em>.</h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building beautiful digital experiences with clean code and thoughtful design.
        </motion.p>
      </div>

      <div className="hero-visual">
        <div className="shapes-container">
          <motion.div 
            className="shape shape-orange"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="shape shape-pink"
            animate={{ 
              y: [0, 15, 0],
              rotate: [-10, 10, -10]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          ></motion.div>
          <motion.div 
            className="shape shape-green"
            animate={{ 
              y: [0, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          ></motion.div>
        </div>

        <motion.div 
          className="stamp-frame"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={isActive ? { opacity: 1, scale: 1, rotate: -5 } : { opacity: 0, scale: 0.8, rotate: -10 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stamp-inner">
            <img 
              src="/hero_stamp_clean_tech_1785396038511.png" 
              alt="Shriya Semwal - Stamp Portrait" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'photo-placeholder';
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="arrow-annotation"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="annotation-text">creating with curiosity</span>
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(5deg)' }}>
            <path d="M10 90 Q 30 40 80 10" stroke="var(--color-text)" strokeWidth="2" fill="transparent" strokeLinecap="round" />
            <path d="M60 10 L 80 10 L 80 30" stroke="var(--color-text)" strokeWidth="2" fill="transparent" strokeLinecap="round" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
