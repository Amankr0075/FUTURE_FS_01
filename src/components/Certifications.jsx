const certifications = [
  {
    id: 1,
    icon: '🗂️',
    name: 'Design of Data Structures using C',
    issuer: 'CodeTantra',
    partner: 'Parul University',
    date: 'Dec 9, 2025',
    status: 'completed',
    color: '#f7971e',
    badge: 'CodeTantra',
  },
  {
    id: 2,
    icon: '🗄️',
    name: 'Database Management System',
    issuer: 'CodeTantra',
    partner: 'Parul University',
    date: 'Dec 9, 2025',
    status: 'completed',
    color: '#6c63ff',
    badge: 'CodeTantra',
  },
  {
    id: 3,
    icon: '☕',
    name: 'Object Oriented Programming through Java',
    issuer: 'CodeTantra',
    partner: 'Parul University',
    date: 'Dec 9, 2025',
    status: 'completed',
    color: '#f093fb',
    badge: 'CodeTantra',
  },
  {
    id: 4,
    icon: '💻',
    name: 'Operating Systems Basics',
    issuer: 'Cisco Networking Academy',
    partner: 'Faculty of Engineering & Technology, Parul University',
    date: 'Jul 27, 2025',
    status: 'completed',
    color: '#43e97b',
    badge: 'Cisco',
  },
  {
    id: 5,
    icon: '🌐',
    name: 'Network Addressing & Basic Troubleshooting',
    issuer: 'Cisco Networking Academy',
    partner: 'Faculty of Engineering & Technology, Parul University',
    date: 'Dec 20, 2025',
    status: 'completed',
    color: '#38f9d7',
    badge: 'Cisco',
  },
  {
    id: 6,
    icon: '🔗',
    name: 'Computer Networks and Internet Protocol',
    issuer: 'NPTEL — IIT Kharagpur',
    partner: 'Govt. of India (MoE) · Swayam',
    date: 'Jan – Apr 2026',
    status: 'completed',
    color: '#ff6584',
    badge: 'NPTEL',
  },
];

const issuerColors = {
  CodeTantra: { bg: 'rgba(247,151,30,0.1)', text: '#f7971e', border: 'rgba(247,151,30,0.25)' },
  Cisco:      { bg: 'rgba(0,118,200,0.1)',  text: '#0076C8', border: 'rgba(0,118,200,0.25)' },
  NPTEL:      { bg: 'rgba(255,101,132,0.1)', text: '#ff6584', border: 'rgba(255,101,132,0.25)' },
};

const Certifications = () => {
  return (
    <section className="section" id="certifications" aria-label="Certifications">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// certifications.list</span>
          <h2 className="section-title">My <span>Certifications</span></h2>
          <p className="section-subtitle">
            Industry-recognized certifications from NPTEL, Cisco, and CodeTantra — validating my
            technical expertise and commitment to lifelong learning.
          </p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, i) => {
            const ic = issuerColors[cert.badge] || issuerColors.NPTEL;
            return (
              <div
                key={cert.id}
                className="cert-card reveal"
                style={{ transitionDelay: `${i * 0.09}s` }}
                role="article"
                aria-label={`Certification: ${cert.name}`}
              >
                {/* Colored top stripe */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${cert.color}, ${cert.color}66)`,
                  borderRadius: '16px 16px 0 0',
                }} />

                {/* Icon */}
                <div className="cert-icon" style={{ background: `${cert.color}18` }}>
                  {cert.icon}
                </div>

                {/* Name */}
                <h3 className="cert-name">{cert.name}</h3>

                {/* Issuer badge */}
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  background: ic.bg,
                  border: `1px solid ${ic.border}`,
                  color: ic.text,
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  width: 'fit-content',
                }}>
                  {cert.badge === 'Cisco' ? '🔷' : cert.badge === 'NPTEL' ? '🏛️' : '🏅'} {cert.issuer}
                </span>

                {/* Partner institution */}
                <div style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '6px',
                }}>
                  <span>🏫</span>
                  <span>{cert.partner}</span>
                </div>

                {/* Date */}
                <div className="cert-date">📅 {cert.date}</div>

                {/* Status */}
                <span className="cert-status completed">✅ Certified</span>
              </div>
            );
          })}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}>
            <span>📎</span>
            Original certificates available upon request
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
