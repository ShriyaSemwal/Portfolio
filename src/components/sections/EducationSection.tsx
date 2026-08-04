import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = ({ isActive }: { isActive?: boolean }) => {
  const courses = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (C++)',
    'Web Engineering & Tech',
    'Discrete Mathematics',
    'Digital Electronics',
    'Computer Organization'
  ];

  return (
    <section id="education" className="section-padding">
      <motion.div 
        className="section-header"
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="education-grid">
        <motion.div 
          className="education-card"
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="edu-content">
            <span className="edu-badge">Degree Program</span>
            <h3>Bachelor of Technology</h3>
            <h4>Computer Science & Engineering</h4>
            <p className="edu-university">University Institute of Technology,<br/>Himachal Pradesh University (Shimla)</p>
            <p className="edu-date">Expected Graduation: 2028</p>
            
            <div className="edu-coursework-section">
              <h5>Key Coursework</h5>
              <div className="course-pills">
                {courses.map((course, idx) => (
                  <span key={idx} className="course-pill">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="education-photo-card"
          animate={isActive ? { opacity: 1, scale: 1, rotate: 2 } : { opacity: 0, scale: 0.95, rotate: -2 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 90 }}
          whileHover={{ scale: 1.03, rotate: -1 }}
        >
          <div className="edu-tape-accent"></div>
          <div className="polaroid-image-wrapper">
            {/* Image served from the public folder */}
            <img 
              src="/image.png" 
              alt="University Institute of Technology, Shimla" 
              onError={(e) => {
                // Fail-safe if image isn't loaded
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const errorMsg = document.createElement('div');
                  errorMsg.className = 'image-error-fallback';
                  errorMsg.innerText = '🏫 UIT Shimla Sketch\n(image.png not found)';
                  parent.appendChild(errorMsg);
                }
              }}
            />
          </div>
          <p className="polaroid-caption">UIT Himachal Pradesh University, Shimla hills 🏔️</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
