const Education = () => {
  const timeline = [
    {
      id: 1,
      emoji: '🎓',
      period: '2024 – 2028 (Current)',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      institution: 'Parul University, Vadodara, Gujarat',
      details:
        'Pursuing a comprehensive degree in Computer Science Engineering with focus on software development, data structures, algorithms, web development, AI/ML, and modern computing technologies.',
      tags: ['DSA', 'DBMS', 'OS', 'AI/ML', 'Web Dev', 'Python', 'Java', 'Networking'],
      current: true,
    },
    {
      id: 2,
      emoji: '📚',
      period: '2022 – 2024',
      degree: 'Higher Secondary Education (Class XII)',
      field: 'Science Stream — Physics, Chemistry, Mathematics (PCM)',
      institution: 'Holy Cross School — CBSE Board',
      details:
        'Completed Class XII from Holy Cross School under the CBSE board with Science stream (PCM), building a strong foundation in Mathematics and Physics that fuels my passion for Computer Science.',
      tags: ['Physics', 'Chemistry', 'Mathematics', 'CBSE'],
    },
    {
      id: 3,
      emoji: '🏫',
      period: 'Completed 2022',
      degree: 'Secondary Education (Class X)',
      field: 'All Subjects',
      institution: 'Agrasen DAV Public School — CBSE Board',
      details:
        'Completed Class X from Agrasen DAV Public School under the CBSE board with strong academic performance and early interest in computers and technology.',
      tags: ['Science', 'Mathematics', 'CBSE', 'Technology'],
    },
  ];

  return (
    <section className="section education-section" id="education" aria-label="Education">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// education.history</span>
          <h2 className="section-title">My <span>Education</span></h2>
          <p className="section-subtitle">
            The academic foundation that shaped my technical thinking and problem-solving abilities.
          </p>
        </div>

        <div className="timeline" role="list">
          {timeline.map((item, i) => (
            <div
              key={item.id}
              className="timeline-item reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
              role="listitem"
            >
              <div className="timeline-marker">
                <div className="timeline-dot" aria-hidden="true">{item.emoji}</div>
              </div>

              <div className="timeline-card" style={item.current ? { borderColor: 'rgba(108,99,255,0.5)', boxShadow: '0 0 20px rgba(108,99,255,0.15)' } : {}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                  <span className="timeline-period">{item.period}</span>
                  {item.current && (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '3px 12px',
                      background: 'rgba(67, 233, 123, 0.1)',
                      border: '1px solid rgba(67, 233, 123, 0.3)',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#43e97b',
                    }}>
                      <span style={{ width: '6px', height: '6px', background: '#43e97b', borderRadius: '50%', display: 'inline-block', animation: 'blink 1.5s ease infinite' }} />
                      Currently Enrolled
                    </span>
                  )}
                </div>
                <h3 className="timeline-degree">{item.degree}</h3>
                <div className="timeline-institution">
                  📍 {item.field} | {item.institution}
                </div>
                <p className="timeline-details">{item.details}</p>
                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span className="tech-badge" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
