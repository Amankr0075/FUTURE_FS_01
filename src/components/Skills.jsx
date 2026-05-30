/* =============================================
   SKILLS SECTION — Custom Progress Bar Layout
   ============================================= */

const skillGroups = [
  {
    title: 'Programming & DSA',
    icon: '⌨️',
    color: '#6c63ff',
    colorEnd: '#38f9d7',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'DSA with C', level: 75 },
      { name: 'DSA with Java', level: 80 },
      { name: 'JavaScript', level: 70 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: '#f093fb',
    colorEnd: '#f5576c',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'DBMS', level: 90 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Core Subjects',
    icon: '📖',
    color: '#43e97b',
    colorEnd: '#38f9d7',
    skills: [
      { name: 'Computer Networks', level: 95 },
      { name: 'Operating Systems', level: 80 },
      { name: 'OOP Concepts', level: 85 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    color: '#f7971e',
    colorEnd: '#ffd200',
    skills: [
      { name: 'Communication Skills', level: 80 },
      { name: 'Problem Solving & Critical Thinking', level: 80 },
      { name: 'Team Collaboration', level: 85 },
    ],
  },
];

const techCategories = [
  {
    name: 'Languages & Frameworks',
    icon: '⚙️',
    color: 'purple',
    skills: [
      { name: 'Python', emoji: '🐍' },
      { name: 'Java', emoji: '☕' },
      { name: 'C', emoji: '🔵' },
      { name: 'JavaScript', emoji: '⚡' },
      { name: 'HTML5', emoji: '🌐' },
      { name: 'CSS3', emoji: '🎨' },
      { name: 'Flask', emoji: '🔥' },
      { name: 'Django', emoji: '🎸' },
      { name: 'React.js', emoji: '⚛️' },
      { name: 'Node.js', emoji: '🟢', note: 'Learning' },
      { name: 'REST APIs', emoji: '🔗' },
    ],
  },
  {
    name: 'Tools & Platforms',
    icon: '🔧',
    color: 'gold',
    skills: [
      { name: 'Git', emoji: '📦' },
      { name: 'GitHub', emoji: '🐙' },
      { name: 'VS Code', emoji: '💻' },
      { name: 'Figma', emoji: '🎭' },
      { name: 'Postman', emoji: '📮' },
    ],
  },
];

const SkillBar = ({ name, level, color, colorEnd }) => (
  <div style={{ marginBottom: '18px' }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
    }}>
      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
        {name}
      </span>
      <span style={{
        fontSize: '0.82rem',
        fontWeight: 700,
        fontFamily: 'var(--font-mono)',
        color: color,
      }}>
        {level}%
      </span>
    </div>
    <div style={{
      height: '7px',
      background: 'rgba(255,255,255,0.06)',
      borderRadius: '4px',
      overflow: 'hidden',
    }}>
      <div
        className="skill-bar-fill"
        style={{
          height: '100%',
          width: `${level}%`,
          background: `linear-gradient(90deg, ${color}, ${colorEnd})`,
          borderRadius: '4px',
          boxShadow: `0 0 10px ${color}66`,
          transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="section skills-section" id="skills" aria-label="Skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// skills.map()</span>
          <h2 className="section-title">My <span>Skills</span></h2>
          <p className="section-subtitle">
            A breakdown of my technical expertise, core subjects, and professional abilities.
          </p>
        </div>

        {/* ── Progress Bar Grid ── */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '60px',
          }}
        >
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className="reveal"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--border-radius)',
                padding: '32px',
                transitionDelay: `${gi * 0.1}s`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${group.color}, ${group.colorEnd})`,
                borderRadius: '16px 16px 0 0',
              }} />

              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: `${group.color}18`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  flexShrink: 0,
                }}>
                  {group.icon}
                </span>
                {group.title}
              </h3>

              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  colorEnd={group.colorEnd}
                />
              ))}
            </div>
          ))}
        </div>

        {/* ── Tech Tags ── */}
        <div className="reveal" style={{ marginBottom: '16px' }}>
          <h3 style={{
            textAlign: 'center',
            marginBottom: '32px',
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            Technologies & Tools
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {techCategories.map((category) => (
              <div
                key={category.name}
                className={`skill-category ${category.color}`}
                style={{ padding: '28px' }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">{category.icon}</div>
                  <h3 className="skill-category-name">{category.name}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <div className="skill-item" key={skill.name} title={skill.note || skill.name}>
                      <span className="skill-emoji">{skill.emoji}</span>
                      <span>{skill.name}</span>
                      {skill.note && (
                        <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>*</span>
                      )}
                    </div>
                  ))}
                </div>
                {category.skills.some(s => s.note) && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '12px', fontFamily: 'var(--font-mono)' }}>
                    * Currently learning
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
