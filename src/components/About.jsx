const About = () => {
  const highlights = [
    { icon: '🎓', text: 'B.Tech CSE at Parul University (2024–2028)' },
    { icon: '🌐', text: 'Full Stack Developer: Python, Flask, Django & React' },
    { icon: '🤖', text: 'AI Enthusiast — creating AI-powered solutions' },
    { icon: '🚀', text: 'Building scalable & user-friendly web applications' },
    { icon: '📚', text: 'Continuously learning modern development tools' },
    { icon: '🤝', text: 'Collaborative problem solver & creative thinker' },
  ];

  return (
    <section className="section" id="about" aria-label="About me">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// about.me</span>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <p className="section-subtitle">
            A passionate Computer Science student on a mission to build impactful web experiences.
          </p>
        </div>

        <div className="about-grid">
          {/* ── Profile Photo Visual ── */}
          <div className="about-image-wrapper reveal">
            <div className="about-photo-frame">
              {/* Main photo */}
              <div className="about-photo-circle">
                <img
                  src={`${import.meta.env.BASE_URL}aman.jpg`}
                  alt="Aman Kumar — Full Stack Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              </div>

              {/* Decorative rings */}
              <div className="about-photo-ring about-photo-ring-1" />
              <div className="about-photo-ring about-photo-ring-2" />

              {/* Floating info cards */}
              <div className="about-info-card card-1">
                <span className="about-info-icon">📍</span>
                <span>Vadodara, Gujarat</span>
              </div>
              <div className="about-info-card card-2">
                <span className="about-info-icon">🎓</span>
                <span>B.Tech CSE</span>
              </div>

              {/* Decorative dots grid */}
              <div className="about-dots" aria-hidden="true">
                {Array.from({ length: 16 }, (_, i) => (
                  <div key={i} className="about-dot" />
                ))}
              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="about-content reveal reveal-delay-1">
            <p className="about-text">
              Hello! I'm{' '}
              <strong style={{ color: 'var(--accent-primary)' }}>Aman Kumar</strong>, a dedicated
              Computer Science Engineering student at{' '}
              <strong>Parul University, Vadodara</strong> with a burning passion for Full Stack
              Web Development and AI-powered solutions.
            </p>
            <p className="about-text">
              My journey started with curiosity about how websites work, and evolved into a deep
              love for creating them. From backend APIs with{' '}
              <strong>Python, Flask & Django</strong> to dynamic frontends with{' '}
              <strong>React.js</strong>, and data management with{' '}
              <strong>MongoDB & MySQL</strong> — I enjoy every layer of the stack.
            </p>
            <p className="about-text">
              I'm an <strong>AI Enthusiast</strong>, a problem solver, and a creative thinker who
              loves exploring new technologies. Whether it's a collaborative group platform like{' '}
              <em>GroupSathi</em> or a full e-commerce system, I believe great software combines
              technical excellence with genuine user empathy.
            </p>

            <div className="about-highlights">
              {highlights.map((item, i) => (
                <div className="highlight-item" key={i}>
                  <span className="highlight-icon">{item.icon}</span>
                  <span className="highlight-text">{item.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                id="about-contact-btn"
              >
                <span>✉️</span> Let's Connect
              </button>
              <a
                href={`${import.meta.env.BASE_URL}resume.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                id="about-resume-btn"
              >
                <span>📄</span> View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
