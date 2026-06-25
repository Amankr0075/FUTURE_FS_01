import { useState, useEffect } from 'react';

const typingTexts = [
  'Full Stack Web Developer',
  'Python & Flask Developer',
  'Django Developer',
  'React.js Enthusiast',
  'AI Enthusiast',
  'Problem Solver',
  '3rd Year CS Engineering Student',
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 500;



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

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${8 + Math.random() * 12}s`,
    size: `${1 + Math.random() * 3}px`,
  }));

  return (
    <section className="hero" id="home" aria-label="Hero section">
      {/* Animated particles */}
      <div className="particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              bottom: 0,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-greeting" aria-label="Status">
              <span className="dot" aria-hidden="true" />
              Available for Internships &amp; Opportunities
            </div>

            <h1 className="hero-name">
              Hi, I'm <span>Aman Kumar</span>
            </h1>

            <div className="hero-title" aria-live="polite" aria-label="Current role">
              <span>{displayText}</span>
              <span className="typing-cursor" aria-hidden="true" />
            </div>

            <p className="hero-description">
              Creating AI-powered solutions. Solving real-world problems with technology.
              Passionate 3rd year Computer Science student focused on Full Stack Web Development, Python,
              Flask, Django, MongoDB, JavaScript, and modern web technologies.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
                id="hero-view-projects"
              >
                <span>🚀</span> View Projects
              </button>
              <a
                href={`${import.meta.env.BASE_URL}resume.html`} target="_blank" rel="noopener noreferrer"
                className="btn btn-secondary"
                id="hero-download-resume"
              >
                <span>📄</span> Resume
              </a>
              <button
                className="btn btn-outline"
                onClick={() => scrollTo('contact')}
                id="hero-contact"
              >
                <span>✉️</span> Contact Me
              </button>

            </div>

            <div className="hero-stats" aria-label="Portfolio stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Passion</span>
              </div>
            </div>
          </div>

          {/* Right Visual — Profile Photo */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-avatar-container">
              <div className="hero-avatar-ring" />
              <div className="hero-avatar" style={{ padding: 0, overflow: 'hidden', background: 'transparent' }}>
                <img
                  src={`${import.meta.env.BASE_URL}aman.jpg`}
                  alt="Aman Kumar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '50%',
                    display: 'block',
                  }}
                />
              </div>

              <div className="hero-badge badge-1">
                <div className="badge-icon green">✅</div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>Status</div>
                  <div>Open to Work</div>
                </div>
              </div>

              <div className="hero-badge badge-2">
                <div className="badge-icon blue">📍</div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>Location</div>
                  <div>Vadodara, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


