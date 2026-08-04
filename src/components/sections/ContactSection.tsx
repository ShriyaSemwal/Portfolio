import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github } from 'lucide-react';

const ContactSection = ({ isActive }: { isActive?: boolean }) => {
  return (
    <section id="contact" className="section-padding">
      <motion.div
        className="section-header"
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get in Touch</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-annotation-wrapper"
          animate={isActive ? { opacity: 1, rotate: -2 } : { opacity: 0, rotate: -5 }}
          transition={{ duration: 0.8 }}
        >
          <svg width="80" height="50" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-arrow">
            <path d="M10 10 Q 50 50 90 20" stroke="var(--color-text)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M70 25 L 90 20 L 85 40" stroke="var(--color-text)" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          <span className="contact-handwritten">Let's build something together! ☕</span>
        </motion.div>

        <div className="contact-grid">
          {/* Email Card (Envelope) */}
          <motion.div
            className="contact-card contact-card-envelope no-link"
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, rotate: 1, transition: { duration: 0.2 } }}
          >
            <div className="envelope-stamp-wrapper">
              <svg className="envelope-postmark" width="70" height="70" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="32" stroke="var(--color-text)" strokeWidth="0.75" strokeDasharray="3 2" opacity="0.25" />
                <circle cx="40" cy="40" r="24" stroke="var(--color-text)" strokeWidth="0.5" opacity="0.2" />
                <path d="M10 40 L 70 40" stroke="var(--color-text)" strokeWidth="0.5" opacity="0.2" />
                <text x="40" y="47" fontSize="5" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle" fill="var(--color-text)" opacity="0.35" letterSpacing="0.1em">VIA AIR MAIL</text>
              </svg>
              <div className="mini-stamp-accent">
                <Mail size={16} />
              </div>
            </div>

            <div className="contact-icon-wrapper">
              <Mail size={24} />
            </div>
            <div className="contact-info">
              <span className="contact-label">Email Address</span>
              <span className="contact-value"><a href="mailto:shriyasemwal07@gmail.com">shriyasemwal07@gmail.com</a></span>
            </div>
          </motion.div>

          {/* GitHub Card (Ticket) */}
          <motion.a
            href="https://github.com/ShriyaSemwal"
            target="_blank"
            rel="noreferrer"
            className="contact-card contact-card-ticket"
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, rotate: -1.5, transition: { duration: 0.2 } }}
          >
            <div className="contact-icon-wrapper">
              <Github size={24} />
            </div>

            <div className="ticket-divider"></div>

            <div className="contact-info">
              <span className="contact-label">GitHub Profile</span>
              <span className="contact-value">github.com/ShriyaSemwal</span>

              <div className="ticket-barcode-wrapper">
                <svg className="ticket-barcode" width="90" height="12" viewBox="0 0 90 12" fill="none">
                  <rect x="0" width="3" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="5" width="1" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="8" width="4" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="14" width="2" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="18" width="1" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="21" width="3" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="26" width="1" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="29" width="5" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="36" width="2" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="40" width="1" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="43" width="3" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="48" width="2" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="52" width="1" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="55" width="4" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="61" width="1" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="64" width="2" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="68" width="3" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="73" width="1" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="76" width="4" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="82" width="2" height="12" fill="var(--color-text)" opacity="0.6" />
                  <rect x="86" width="1" height="12" fill="var(--color-text)" opacity="0.6" />
                </svg>
                <span className="ticket-number">GIT-77</span>
              </div>
            </div>
          </motion.a>

          {/* Location Card (Postcard Stamp) */}
          <motion.div
            className="contact-card contact-card-postcard no-link"
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, rotate: 1, transition: { duration: 0.2 } }}
          >
            <div className="miniature-stamp-wrapper">
              <div className="miniature-stamp">
                <svg width="40" height="40" viewBox="0 0 60 60" fill="none" className="stamp-illustration">
                  {/* Mountains */}
                  <path d="M5 45 L 20 20 L 35 45 M 23 45 L 39 16 L 55 45" stroke="var(--color-text)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Pine trees */}
                  <path d="M12 45 L 12 36 M 9 41 L 12 38 L 15 41 M 10 38 L 12 36 L 14 38" stroke="var(--color-text)" strokeWidth="1" strokeLinecap="round" />
                  <path d="M47 45 L 47 33 M 44 39 L 47 36 L 50 39 M 45 36 L 47 33 L 49 36" stroke="var(--color-text)" strokeWidth="1" strokeLinecap="round" />
                  {/* Sun */}
                  <circle cx="31" cy="18" r="4.5" stroke="var(--color-text)" strokeWidth="1.25" strokeDasharray="2 1.5" />
                  {/* Ground */}
                  <line x1="5" y1="45" x2="55" y2="45" stroke="var(--color-text)" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
                <div className="stamp-label">SHIMLA</div>
                {/* Stamp jagged details */}
                <div className="stamp-scallops"></div>
              </div>
            </div>

            <div className="contact-icon-wrapper">
              <MapPin size={24} />
            </div>
            <div className="contact-info">
              <span className="contact-label">Location</span>
              <span className="contact-value">Shimla, HP, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
