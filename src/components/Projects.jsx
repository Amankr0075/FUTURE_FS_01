const projects = [
  {
    id: 1,
    name: 'GroupSathi',
    description:
      'A professional-grade collaborative platform designed to streamline Self Help Groups and community microfinance. Features group management, activity scheduling, member coordination, financial tracking, and real-time dashboards.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MongoDB'],
    image: `${import.meta.env.BASE_URL}project-groupsathi.png`,
    github: 'https://github.com/Amankr0075/GroupSathi',
    demo: 'https://groupsathi.duckdns.org/',
    demoLabel: 'Live Demo',
    badge: '🟢 Live',
    badgeColor: 'rgba(67,233,123,0.15)',
    badgeText: '#43e97b',
  },
  {
    id: 2,
    name: 'AmanCart — E-Commerce Website',
    description:
      'A full-featured online shopping platform named AmanCart with product browsing, search, user authentication, shopping cart, wishlist, order management, and address management. Built with Flask and MongoDB.',
    tech: ['Flask', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    image: `${import.meta.env.BASE_URL}project-ecommerce.jpg`,
    github: 'https://github.com/Amankr0075/flask_ecommerce',
    demo: 'https://drive.google.com/file/d/181-0byVGISNvtXj6IdSMy-mzonOgqT5C/view?usp=sharing',
    demoLabel: 'View Demo Video',
    badge: '🔴 Not Deployed',
    badgeColor: 'rgba(255,101,132,0.15)',
    badgeText: '#ff6584',
    note: 'This project is not deployed live. View the demo video for a walkthrough.',
  },
  {
    id: 3,
    name: 'Personal Portfolio Website',
    description:
      'A modern, animated personal portfolio website featuring dark/light theme toggle, typing text effects, scroll-reveal animations, a working contact form, and all project/skills showcase. Built with React.js + Vite.',
    tech: ['React.js', 'CSS', 'JavaScript', 'Vite'],
    image: `${import.meta.env.BASE_URL}project-portfolio.png`,
    github: 'https://github.com/Amankr0075/FUTURE_FS_01',
    demo: 'https://amankr0075.github.io/FUTURE_FS_01/',
    demoLabel: 'Live Demo',
    badge: '🟢 Live',
    badgeColor: 'rgba(67,233,123,0.15)',
    badgeText: '#43e97b',
  },
  {
    id: 4,
    name: 'LeadFlow CRM — Smart Lead Management',
    description:
      'A full-stack CRM platform built for managing leads end-to-end. Features a real-time dashboard with lead analytics, conversion rate tracking, lead status pipeline, monthly growth charts, and role-based user management. Built with React.js and a modern SaaS UI.',
    tech: ['React.js', 'Vite', 'CSS', 'JavaScript', 'MongoDB'],
    image: `${import.meta.env.BASE_URL}project-leadflow-crm.png`,
    github: 'https://github.com/Amankr0075/FUTURE_FS_02',
    demo: 'https://www.linkedin.com/posts/amanxelon_leadflowcrm-futureinterns-fullstackdeveloper-activity-7467945854788632576-tz4O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPGeXsB-1pqYLG-Zo5O4FELLUfK8XoLv7M',
    demoLabel: 'View on LinkedIn',
    badge: '🔴 Not Deployed',
    badgeColor: 'rgba(255,101,132,0.15)',
    badgeText: '#ff6584',
    note: 'This project is not deployed live. Watch the demo walkthrough on LinkedIn.',
  },
  {
    id: 5,
    name: 'Royal Spice — Restaurant Website',
    description:
      'A premium Indian restaurant website with an award-winning fine dining theme. Features an animated hero section, interactive menu, gallery, table reservation system, and smooth scroll navigation. Built with pure HTML, CSS & JavaScript and deployed live.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: `${import.meta.env.BASE_URL}project-royal-spice.png`,
    github: 'https://github.com/Amankr0075/FUTURE_FS_03',
    demo: 'https://amankr0075.github.io/FUTURE_FS_03/',
    demoLabel: 'Live Demo',
    badge: '🟢 Live',
    badgeColor: 'rgba(67,233,123,0.15)',
    badgeText: '#43e97b',
  },
];

const Projects = () => {
  return (
    <section className="section" id="projects" aria-label="Projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// projects.filter(awesome)</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">
            A showcase of projects I've built — solving real problems with modern technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="project-card reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
              aria-label={`Project: ${project.name}`}
            >
              {/* ── Project Screenshot Banner ── */}
              <div className="project-image" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.6s ease',
                    display: 'block',
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Gradient overlay at bottom for readability */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,15,0.85) 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Deployment status badge — top left */}
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  padding: '4px 12px',
                  background: project.badgeColor,
                  border: `1px solid ${project.badgeText}44`,
                  color: project.badgeText,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  borderRadius: '999px',
                  backdropFilter: 'blur(8px)',
                  letterSpacing: '0.02em',
                }}>
                  {project.badge}
                </span>

                {/* Project number — top right */}
                <span className="project-number">0{project.id}</span>
              </div>

              {/* ── Project Body ── */}
              <div className="project-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Not deployed notice */}
                {project.note && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    padding: '10px 14px',
                    background: 'rgba(255,101,132,0.07)',
                    border: '1px solid rgba(255,101,132,0.25)',
                    borderRadius: '8px',
                    marginBottom: '12px',
                    fontSize: '0.8rem',
                    color: '#ff8fa3',
                    lineHeight: 1.5,
                  }}>
                    <span style={{ flexShrink: 0 }}>⚠️</span>
                    <span>{project.note}</span>
                  </div>
                )}

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="tech-badge" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    id={`project-${project.id}-github`}
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <span>🐙</span> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    id={`project-${project.id}-demo`}
                    aria-label={`${project.demoLabel} of ${project.name}`}
                  >
                    <span>{project.demoLabel.includes('Video') ? '🎬' : project.demoLabel.includes('LinkedIn') ? '💼' : '🚀'}</span> {project.demoLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All GitHub CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="https://github.com/Amankr0075"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            id="view-all-projects"
          >
            <span>🐙</span> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
