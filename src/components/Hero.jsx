import { useState, useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const typingTexts = [
  'Full Stack Developer',
  'Software Engineer',
  'AI Solutions Architect'
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 2500;
const PAUSE_AFTER_DELETE = 500;

// Reusable animated glow button
const GlowButton = ({ children, onClick, href, primary }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`glow-btn ${primary ? 'glow-btn-primary' : 'glow-btn-secondary'}`}
      {...props}
    >
      <motion.div
        className="glow-btn-hover"
        style={{
          background: useMotionTemplate`radial-gradient(circle 50px at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 80%)`
        }}
      />
      <span className="glow-btn-content">{children}</span>
    </Component>
  );
};

// 3D Glass Card for the portrait
const GlassCard = () => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e) => {
    if (!ref.current || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 20); // max rotation 20deg
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-card-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      <div className="glass-card">
        <div className="glass-card-glow" />
        <img
          src={`${import.meta.env.BASE_URL}aman.jpg`}
          alt="Aman Kumar"
          className="glass-card-image"
        />
        
        {/* Floating elements inside the 3D card */}
        <motion.div 
          className="glass-badge badge-top"
          style={{ transform: "translateZ(50px)" }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="badge-dot" /> Available to Work
        </motion.div>
        
        <motion.div 
          className="glass-badge badge-bottom"
          style={{ transform: "translateZ(30px)" }}
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          📍 Vadodara, India
        </motion.div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = typingTexts[currentIndex];

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, DELETING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero-premium" id="home">
      <div className="container hero-premium-container">
        <div className="hero-premium-grid">
          
          {/* Left Content */}
          <div className="hero-premium-content">
            <motion.div 
              className="premium-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Building the Future of Web & AI
            </motion.div>

            <motion.h1 
              className="premium-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm <br />
              <span className="premium-gradient-text">Aman Kumar</span>
            </motion.h1>

            <motion.div 
              className="premium-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I am a <span className="premium-typing">{displayText}</span>
              <span className="premium-cursor" />
            </motion.div>

            <motion.p 
              className="premium-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I specialize in designing and building high-performance, scalable web applications and intelligent systems. I turn complex problems into elegant, user-centric digital experiences.
            </motion.p>

            <motion.div 
              className="premium-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GlowButton primary onClick={() => scrollTo('projects')}>
                View My Work
              </GlowButton>
              <GlowButton href={`${import.meta.env.BASE_URL}resume.html`}>
                Download Resume
              </GlowButton>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="hero-premium-visual">
            <GlassCard />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
