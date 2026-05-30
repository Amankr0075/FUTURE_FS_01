const Resume = () => {
  const highlights = [
    {
      icon: '⚡',
      title: 'Full Stack Development',
      desc: 'Proficient in building end-to-end web applications using Python/Flask backend and React.js frontend.',
    },
    {
      icon: '🗄️',
      title: 'Database Management',
      desc: 'Experience with both MongoDB (NoSQL) and MySQL (SQL) for efficient data storage and retrieval.',
    },
    {
      icon: '🔧',
      title: 'Developer Tools',
      desc: 'Proficient with Git version control, GitHub, VS Code, Figma and modern development workflows.',
    },
    {
      icon: '🌐',
      title: 'Web Technologies',
      desc: 'Strong foundation in HTML5, CSS3, JavaScript ES6+, REST APIs, and responsive design principles.',
    },
    {
      icon: '🤝',
      title: 'Internship Experience',
      desc: 'Full Stack Web Development Intern at Future Interns — built real-world features with Python, Flask, MongoDB, and collaborated with development teams.',
    },
    {
      icon: '🏆',
      title: 'Open Source Contributor',
      desc: 'Active GitHub learner and contributor, constantly building projects and improving through real-world code.',
    },
  ];

  return (
    <section className="section resume-section" id="resume" aria-label="Resume">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// resume.download()</span>
          <h2 className="section-title">My <span>Resume</span></h2>
          <p className="section-subtitle">
            A summary of my skills, experience, and academic background.
          </p>
        </div>

        <div className="resume-content">
          {/* Left: Visual Card */}
          <div className="resume-visual reveal">
            <div className="resume-icon">📋</div>
            <div className="resume-visual-title">Aman Kumar</div>
            <div className="resume-visual-subtitle">
              Full Stack Web Developer<br />
              B.Tech Computer Science Engineering
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              marginBottom: '32px',
              position: 'relative',
              zIndex: 1,
            }}>
              {['Python', 'Flask', 'React.js', 'MongoDB', 'JavaScript', 'Git'].map((skill) => (
                <div key={skill} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '0.88rem',
                }}>
                  <span style={{ color: '#43e97b', fontWeight: 700 }}>✓</span>
                  {skill}
                </div>
              ))}
            </div>

            <a
              href="/resume.html" target="_blank" rel="noopener noreferrer"
              className="resume-download-btn"
              id="resume-download-main"
              aria-label="Download Aman Kumar's resume"
            >
              <span>⬇️</span> Resume
            </a>
          </div>

          {/* Right: Highlights */}
          <div className="resume-highlights reveal reveal-delay-1">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="resume-item"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="resume-item-icon">{item.icon}</span>
                <div>
                  <div className="resume-item-title">{item.title}</div>
                  <div className="resume-item-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;


