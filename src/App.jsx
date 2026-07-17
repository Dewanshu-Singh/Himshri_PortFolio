import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Search, Menu, X, ExternalLink, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="logo">Himshri Dugar</a>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About me</a></li>
          <li><a href="#resume" onClick={closeMenu}>Resume</a></li>
          <li><a href="#work" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#contact" className="btn-nav" onClick={closeMenu}>Get in touch</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div 
            className="huge-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >PORTFOLIO</motion.div>
          <motion.div 
            className="huge-title-outline"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >PORTFOLIO</motion.div>
          <motion.div 
            className="huge-title-outline huge-title-outline-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >PORTFOLIO</motion.div>
          
          <div className="container hero-layout">
            <motion.div 
              className="hero-img-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-img-bg"></div>
              <img src="/IMG-20260210-WA0029.jpg.jpeg" alt="Himshri Dugar" />
              <div className="sparkle s1">✦</div>
              <div className="sparkle s2">✦</div>
              <div className="sparkle s3">✦</div>
            </motion.div>
            
            <motion.div 
              className="hero-info"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p><span>IG:</span> <a href="https://instagram.com/himshri.dugar" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>@himshri.dugar</a></p>
              <p><span>LI:</span> <a href="https://linkedin.com/in/himshri-dugar" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>/in/himshri-dugar</a></p>
              <p style={{ marginTop: '1.5rem', maxWidth: '320px', fontSize: '0.9rem', color: '#a0a0a0', lineHeight: '1.6' }}>
                Creative and results-driven Social Media Manager with a background in CS Engineering, turning ideas into impactful digital marketing campaigns.
              </p>
            </motion.div>
          </div>

          <motion.a 
            href="#about" 
            className="scroll-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            Scroll<br/>down
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container about-layout">
          <motion.div 
            className="about-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="about-title serif">Hello,<br/>I'm Himshri !</h2>
            <p className="about-desc">
              I am a creative and results-driven Social Media Manager with a background in Computer Science Engineering and hands-on experience in digital marketing. Passionate about turning ideas into impactful campaigns—from content strategy and planning to execution and brand communication.
              <br/><br/>
              Experienced in managing end-to-end social media campaigns, collaborating with creative teams, and leveraging performance insights to create compelling content that connects with the target audience.
            </p>
            <a href="https://linkedin.com/in/himshri-dugar" target="_blank" rel="noreferrer" className="btn-orange">
              <Search size={18} /> linkedin.com/in/himshri-dugar
            </a>
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-green-bg">
              <motion.div 
                className="pill-badge pill-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >B.Tech '26</motion.div>
              <img src="/IMG-20260210-WA0029.jpg.jpeg" alt="Himshri Dugar" />
              <motion.div 
                className="pill-badge pill-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >Jaipur, India</motion.div>
              
              <motion.div 
                className="contact-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="serif">Contact</h3>
                <ul>
                  <li><MapPin size={16} /> Jaipur, India</li>
                  <li><Mail size={16} /> himshrodugar29@gmail.com</li>
                  <li><Phone size={16} /> +91 9521273739</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Split Section (Resume / Skills) */}
      <section className="split-section" id="resume">
        {/* Left Side */}
        <motion.div 
          className="split-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-heading-yellow serif">Professional Experience</motion.h2>
          
          <motion.div variants={fadeInUp} className="exp-box">
            <ul className="exp-list">
              <li>
                <div className="year"><span className="star-icon">✦</span> Feb - Jul<br/>2026</div>
                <div className="exp-info">
                  <h4>Digital Marketing Specialist Intern</h4>
                  <p className="exp-company">Maharo Media | Jaipur, India</p>
                  <ul className="exp-bullets">
                    <li>Developed comprehensive content strategies and structured monthly content calendars to streamline digital presence across platforms.</li>
                    <li>Managed end-to-end content publishing workflows across multiple digital channels, ensuring high engagement and consistent brand voice.</li>
                    <li>Coordinated and led cross-functional creative teams comprising designers, video editors, photographers, and content creators.</li>
                    <li>Executed data-driven social media and digital marketing campaigns, delivering measurable growth and tracking performance insights.</li>
                    <li>Successfully conceptualized, planned, and managed various educational and promotional corporate events while monitoring performance matrices.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="section-heading-yellow serif" style={{marginTop: '4rem'}}>Education</motion.h2>
          <motion.ul variants={fadeInUp} className="edu-list">
            <li>
              <div className="year"><span className="star-icon">✦</span> 2026</div>
              <div className="edu-info">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <p>JECRC University, Jaipur (8.5 CGPA)</p>
              </div>
            </li>
          </motion.ul>
        </motion.div>

        {/* Right Side */}
        <div className="split-right">
          <div className="bg-text-outline">
            RESUME<br/>RESUME<br/>RESUME
          </div>
          
          <motion.div 
            className="skills-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-heading-yellow serif">Skills & Expertise</motion.h2>
            
            <motion.div variants={fadeInUp} className="skills-block">
              <h4>Core Capabilities & Marketing</h4>
              <div className="skills-pill-tags">
                <span>Social Media Management</span>
                <span>Digital Marketing</span>
                <span>Content Strategy</span>
                <span>Brand Communication</span>
                <span>Campaign Optimization</span>
                <span>Execution</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="skills-block">
              <h4>Planning & Collaboration</h4>
              <div className="skills-pill-tags">
                <span>Content Calendars</span>
                <span>Content Publishing</span>
                <span>Event Planning</span>
                <span>Cross-functional Leadership</span>
                <span>Creative Coordination</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="skills-block">
              <h4>Technical Foundation</h4>
              <div className="skills-pill-tags">
                <span>Computer Science Principles</span>
                <span>Data Insights</span>
                <span>Platform Performance Analytics</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="work">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="portfolio-header">
              <h2 className="section-heading-yellow serif">Featured Brand Portfolio</h2>
              <p>Highlights of strategic campaigning and event coordination across major educational and commercial institutions.</p>
            </motion.div>

            <div className="portfolio-grid">
              <motion.div variants={fadeInUp} className="portfolio-card">
                <div className="card-icon"><ExternalLink size={24} /></div>
                <h3>Maharo Media</h3>
                <span className="card-subtitle">Social Media Management & Brand Growth</span>
                <p>Spearheaded full-scale digital branding and regular content delivery pipelines to elevate official social presence and reach.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="portfolio-card">
                <div className="card-icon"><ExternalLink size={24} /></div>
                <h3>Suresh Gyan Vihar University</h3>
                <span className="card-subtitle">Educational Institution Campaigning</span>
                <p>Managed institutional brand communication and engagement drives targeted towards students and educational stakeholders.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="portfolio-card">
                <div className="card-icon"><ExternalLink size={24} /></div>
                <h3>Vivekananda Global University</h3>
                <span className="card-subtitle">Campaign Execution & Event Coverage</span>
                <p>Executed strategic media coordination for promotional and institutional events to improve student enrollment awareness.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="portfolio-card">
                <div className="card-icon"><ExternalLink size={24} /></div>
                <h3>Maxopp</h3>
                <span className="card-subtitle">Digital Marketing Campaign</span>
                <p>Collaborated with production teams to successfully design and deliver impactful social media creatives and marketing collaterals.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="achievements-section"
          >
            <motion.h2 variants={fadeInUp} className="section-heading-yellow serif">Achievements</motion.h2>
            <div className="achievements-list">
              <motion.div variants={fadeInUp} className="achievement-item">
                <div className="ach-icon"><Award size={32} /></div>
                <div>
                  <h4>Event Leadership</h4>
                  <p>Played an active role in planning, coordinating, and executing large-scale university media events, including the prominent Educational Summit and AI Summit.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="achievement-item">
                <div className="ach-icon"><Award size={32} /></div>
                <div>
                  <h4>Industry Networking</h4>
                  <p>Interacted with top-tier industry experts, including Tarique Siddiqui (Head of Sports Sponsorship at JioStar) and Abhimanyu Shekhawat (Co-founder of Epoch Protocol), gaining valuable insights into sports marketing, brand partnerships, and startup building.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="contact-section" id="contact">
        <motion.div 
          className="container contact-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="contact-title serif">Let's Work Together</h2>
          <p className="contact-subtitle">Fill out the form below and I'll get back to you as soon as possible.</p>
          
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-input" placeholder="Your Name" required disabled={isSubmitted} />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-input" placeholder="your@email.com" required disabled={isSubmitted} />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-textarea" placeholder="How can we collaborate?" required disabled={isSubmitted}></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className="btn-orange form-submit"
              whileHover={{ scale: isSubmitted ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitted ? 1 : 0.95 }}
              style={{ backgroundColor: isSubmitted ? '#374b3d' : '', border: isSubmitted ? '1px solid #ea6441' : '' }}
              disabled={isSubmitted}
            >
              {isSubmitted ? 'Message Sent! ✨' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <motion.div 
          className="container footer-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <div className="footer-message">
            <h3 className="serif">Let's create something beautiful together ✨</h3>
            <p>I'm always open to discussing new marketing projects, creative campaigns, or opportunities to be a part of your brand's vision.</p>
          </div>
          <div className="footer-links">
            <a href="https://instagram.com/himshri.dugar" target="_blank" rel="noreferrer"><InstagramIcon /> @himshri.dugar</a>
            <a href="https://linkedin.com/in/himshri-dugar" target="_blank" rel="noreferrer"><LinkedinIcon /> in/himshri-dugar</a>
            <a href="mailto:himshrodugar29@gmail.com"><MailIcon /> himshrodugar29@gmail.com</a>
          </div>
        </motion.div>
        <div className="footer-bottom">
          <p>&copy; 2026 Himshri Dugar. Designed with ❤️</p>
        </div>
      </footer>
    </>
  );
}

export default App;
