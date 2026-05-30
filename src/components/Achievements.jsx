const achievements = [
  {
    id: 1,
    icon: '🌟',
    title: 'Open Source Contributor',
    desc: 'Actively contributing to open source projects on GitHub, helping improve community tools and collaborating with developers worldwide.',
    badge: 'GitHub Active',
    color: 'linear-gradient(135deg, #43e97b, #38f9d7)',
  },
  {
    id: 2,
    icon: '💼',
    title: 'Full Stack Web Development Intern',
    desc: 'Completed Full Stack Web Development Internship at Future Interns, gaining hands-on experience building real-world features with modern technologies.',
    badge: 'Future Interns',
    color: 'linear-gradient(135deg, #6c63ff, #3f3cbb)',
  },
  {
    id: 3,
    icon: '🐙',
    title: 'Active GitHub Learner',
    desc: 'Maintaining an active GitHub profile with consistent commits, project repositories, and collaborative contributions to the developer community.',
    badge: 'Community Builder',
    color: 'linear-gradient(135deg, #f093fb, #f5576c)',
  },
  {
    id: 4,
    icon: '🚀',
    title: 'Project Builder',
    desc: 'Successfully designed and deployed multiple full-stack projects including GroupSathi and E-Commerce platforms, showcasing end-to-end development skills.',
    badge: '3+ Projects',
    color: 'linear-gradient(135deg, #f7971e, #ffd200)',
  },
  {
    id: 5,
    icon: '📚',
    title: 'Continuous Learner',
    desc: 'Pursuing multiple online certifications in Python, React.js, MongoDB and Full Stack Development, constantly expanding technical knowledge.',
    badge: 'Self-Taught',
    color: 'linear-gradient(135deg, #38f9d7, #43e97b)',
  },
  {
    id: 6,
    icon: '🏗️',
    title: 'Problem Solver',
    desc: 'Developed strong analytical and problem-solving skills through Data Structures, Algorithms, and hands-on project development experience.',
    badge: 'DSA Practitioner',
    color: 'linear-gradient(135deg, #4facfe, #00f2fe)',
  },
];

const Achievements = () => {
  return (
    <section className="section achievements-section" id="achievements" aria-label="Achievements">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// achievements.unlocked</span>
          <h2 className="section-title">My <span>Achievements</span></h2>
          <p className="section-subtitle">
            Milestones, recognitions, and accomplishments from my journey as a developer.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div
              key={item.id}
              className="achievement-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
              role="article"
              aria-label={`Achievement: ${item.title}`}
            >
              <div
                className="achievement-icon"
                style={{ background: item.color }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.desc}</p>
                <span className="achievement-badge">
                  🏅 {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
