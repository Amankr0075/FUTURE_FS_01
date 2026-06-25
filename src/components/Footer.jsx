const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', href: 'https://github.com/Amankr0075' },
    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/amanxelon' },
    { icon: '📧', label: 'Email', href: 'mailto:amankumar3432k@gmail.com' },
    { icon: '💻', label: 'LeetCode', href: 'https://leetcode.com/u/amankr0075/' },
  ];

  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">&lt;AK /&gt;</div>
            <p className="footer-tagline">
              Full Stack Web Developer & 3rd year Computer Science student at Parul University.
              Creating AI-powered solutions that solve real-world problems.
            </p>
            <div className="footer-social" role="list" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="social-icon"
                  title={social.label}
                  aria-label={social.label}
                  role="listitem"
                  id={`footer-social-${social.label.toLowerCase()}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="footer-section-title">Navigation</h3>
            <ul className="footer-links" role="list">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.id}>
                  <button
                    className="footer-link"
                    onClick={() => scrollTo(link.id)}
                    aria-label={`Navigate to ${link.label} section`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="footer-section-title">More</h3>
            <ul className="footer-links" role="list">
              {navLinks.slice(3).map((link) => (
                <li key={link.id}>
                  <button
                    className="footer-link"
                    onClick={() => scrollTo(link.id)}
                    aria-label={`Navigate to ${link.label} section`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={`${import.meta.env.BASE_URL}resume.html`} target="_blank" rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="Download resume"
                > Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 <span>Aman Kumar</span>. All Rights Reserved.
          </p>
          <p className="footer-made-with">
            Made with <span className="heart">❤️</span> by Aman Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


