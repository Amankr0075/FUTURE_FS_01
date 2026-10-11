import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

const AcademicIdentityCard = () => {
  const cardRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerY, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(pointerX, { stiffness: 180, damping: 18 });
  const sheen = useMotionTemplate`radial-gradient(circle at ${useSpring(pointerX)}px ${useSpring(pointerY)}px, rgba(255,255,255,.18), transparent 38%)`;

  const handleMove = (event) => {
    if (!cardRef.current || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width * 12 - 6);
    pointerY.set((event.clientY - rect.top) / rect.height * -12 + 6);
  };

  return (
    <motion.aside
      ref={cardRef}
      className="academic-id-scene"
      onMouseMove={handleMove}
      onMouseLeave={() => { pointerX.set(0); pointerY.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: -440, rotateZ: -4 }}
      whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 85, damping: 12, mass: 1.15, delay: 0.12 }}
    >
      <div className="academic-lanyard" aria-hidden="true">
        <div className="ribbon-name ribbon-name-left">AMAN KUMAR · AMAN KUMAR</div>
        <div className="ribbon-name ribbon-name-right">AMAN KUMAR · AMAN KUMAR</div>
        <span />
      </div>
      <motion.div className="academic-id-card" animate={{ y: [0, 7, 0], rotateZ: [0, 0.55, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
        <motion.div className="academic-card-sheen" style={{ background: sheen }} />
        <div className="academic-card-orbit" aria-hidden="true" />
        <div className="academic-card-watermark" aria-hidden="true">AK</div>
        <header className="academic-card-head">
          <span>AK</span>
          <div><strong>ACADEMIC RECORD</strong><small>Student portfolio · 2026</small></div>
          <i aria-hidden="true" />
        </header>
        <div className="academic-profile">
          <div className="academic-photo-frame"><img src={`${import.meta.env.BASE_URL}aman.jpg`} alt="Aman Kumar" /><span>ACTIVE</span></div>
          <div><p>AMAN KUMAR</p><span>Computer Science Student</span><b>Academic journey</b></div>
        </div>
        <ol className="academic-milestones">
          <li><time>2024 — 2028</time><div><strong>B.Tech · CSE</strong><span>Parul University</span></div><em>Current</em></li>
          <li><time>2022 — 2024</time><div><strong>Class XII · PCM</strong><span>Holy Cross School · CBSE</span></div></li>
          <li><time>Completed 2022</time><div><strong>Class X</strong><span>Agrasen DAV Public School · CBSE</span></div></li>
        </ol>
        <footer className="academic-card-foot"><div className="academic-barcode" /><span>VERIFIED EDUCATION</span><div className="academic-security-seal">AK</div></footer>
      </motion.div>
    </motion.aside>
  );
};

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
        <Reveal>
          <div className="section-header">
            <span className="section-tag">// education.history</span>
            <h2 className="section-title">My <span>Education</span></h2>
            <p className="section-subtitle">
              The academic foundation that shaped my technical thinking and problem-solving abilities.
            </p>
          </div>
        </Reveal>

        <div className="education-layout">
        <div className="timeline" role="list">
          {timeline.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <div
                className="timeline-item"
                role="listitem"
              >
                <div className="timeline-marker">
                  <div className="timeline-dot" aria-hidden="true">{item.emoji}</div>
                </div>

                <TiltCard>
                  <div className="timeline-card glass-card" style={item.current ? { borderColor: 'rgba(108,99,255,0.5)', boxShadow: '0 0 20px rgba(108,99,255,0.15)' } : {}}>
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
                </TiltCard>
              </div>
            </Reveal>
          ))}
        </div>
          <Reveal delay={0.15}>
            <aside className="education-card-column">
              <AcademicIdentityCard />
              <p>Interactive academic record · move your cursor over the card</p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
