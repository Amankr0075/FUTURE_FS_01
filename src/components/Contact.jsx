import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────────────────────────
//  HOW TO ACTIVATE (one-time, 5 minutes):
//  1. Go to  https://www.emailjs.com  and sign up (free)
//  2. Add Email Service  →  Connect your Gmail → copy  SERVICE_ID
//  3. Create Email Template (use variables: {{from_name}}, {{from_email}},
//     {{subject}}, {{message}}) → copy  TEMPLATE_ID
//  4. Account → API Keys → copy  PUBLIC_KEY
//  5. Replace the three placeholders below and save.
// ─────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID       = 'service_8bai0aq';
const EMAILJS_TEMPLATE_ID      = 'template_c1mcski';  // Notification to you
const EMAILJS_AUTOREPLY_ID     = 'template_dji4uz3';  // Auto-reply to sender
const EMAILJS_PUBLIC_KEY       = 'JX5VSQLcQ3JymyOw5';

const contactMethods = [
  {
    icon: '📧',
    label: 'Email',
    value: 'amankumar3432k@gmail.com',
    href: 'mailto:amankumar3432k@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/amanxelon',
    href: 'https://www.linkedin.com/in/amanxelon',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Amankr0075',
    href: 'https://github.com/Amankr0075',
  },
  {
    icon: '💻',
    label: 'LeetCode',
    value: 'leetcode.com/u/amankr0075',
    href: 'https://leetcode.com/u/amankr0075/',
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear status when user starts typing again
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setSending(true);
    setStatus({ type: '', message: '' });

    try {
      // 1️⃣  Notify you
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      // 2️⃣  Auto-reply to the sender
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_ID,
          formRef.current,
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      } catch (autoErr) {
        // Auto-reply failure is non-critical — don't block success UX
        console.warn('Auto-reply failed (non-critical):', autoErr);
      }

      setStatus({
        type: 'success',
        message: "Message sent! I'll get back to you within 24 hours. You should also receive a confirmation email. 🎉",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      // If EmailJS isn't configured yet, show a helpful message
      const isConfigError =
        EMAILJS_SERVICE_ID.includes('xxxxxxx') ||
        EMAILJS_TEMPLATE_ID.includes('xxxxxxx') ||
        EMAILJS_PUBLIC_KEY.includes('xxxxxxx');

      if (isConfigError) {
        setStatus({
          type: 'info',
          message:
            'Contact form not configured yet. Please email me directly at amankumar3432k@gmail.com',
        });
      } else {
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again or email me directly.',
        });
      }
    } finally {
      setSending(false);
    }
  };

  const statusStyles = {
    success: {
      bg: 'rgba(67,233,123,0.1)',
      border: 'rgba(67,233,123,0.3)',
      color: '#43e97b',
      icon: '🎉',
    },
    error: {
      bg: 'rgba(255,101,132,0.1)',
      border: 'rgba(255,101,132,0.3)',
      color: '#ff6584',
      icon: '⚠️',
    },
    info: {
      bg: 'rgba(108,99,255,0.1)',
      border: 'rgba(108,99,255,0.3)',
      color: 'var(--accent-primary)',
      icon: '💡',
    },
  };

  const currentStatus = statusStyles[status.type];

  return (
    <section className="section contact-section" id="contact" aria-label="Contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// contact.getInTouch()</span>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-grid">
          {/* ── Left: Info ── */}
          <div className="contact-info reveal">
            <div>
              <h3 className="contact-intro-title">
                Ready to build <span>something great</span> together?
              </h3>
              <p className="contact-intro-text">
                I'm currently open to internship opportunities, freelance projects, and
                collaborations. Whether you have a project idea, need a developer, or just want to
                say hi — my inbox is always open!
              </p>
            </div>

            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="contact-method"
                id={`contact-${method.label.toLowerCase()}`}
                aria-label={`${method.label}: ${method.value}`}
              >
                <div className="contact-method-icon">{method.icon}</div>
                <div>
                  <div className="contact-method-label">{method.label}</div>
                  <div className="contact-method-value">{method.value}</div>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div style={{
              padding: '16px',
              background: 'rgba(67,233,123,0.08)',
              border: '1px solid rgba(67,233,123,0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <div style={{
                width: '10px', height: '10px',
                background: '#43e97b',
                borderRadius: '50%',
                boxShadow: '0 0 8px #43e97b',
                animation: 'blink 1.5s ease infinite',
                flexShrink: 0,
              }} />
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#43e97b' }}>
                  Available for Work
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Open to internships &amp; freelance projects
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="contact-form-wrapper reveal reveal-delay-2">
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              {/* Hidden fields for EmailJS template */}
              <input type="hidden" name="to_email" value="amankumar3432k@gmail.com" />

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Full Name <span style={{ color: 'var(--accent-secondary)' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="from_name"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange({ target: { name: 'name', value: e.target.value } })}
                    onBlur={e => { e.target.style.borderColor = e.target.value ? 'rgba(67,233,123,0.4)' : ''; }}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    Email Address <span style={{ color: 'var(--accent-secondary)' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="from_email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange({ target: { name: 'email', value: e.target.value } })}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => handleChange({ target: { name: 'subject', value: e.target.value } })}
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Message <span style={{ color: 'var(--accent-secondary)' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project or just say hello..."
                  value={formData.message}
                  onChange={(e) => handleChange({ target: { name: 'message', value: e.target.value } })}
                  required
                  rows={6}
                />
              </div>

              {/* Status Message */}
              {status.message && currentStatus && (
                <div
                  role="alert"
                  aria-live="polite"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '14px 18px',
                    background: currentStatus.bg,
                    border: `1px solid ${currentStatus.border}`,
                    borderRadius: '10px',
                    color: currentStatus.color,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{currentStatus.icon}</span>
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="form-submit"
                disabled={sending}
                id="contact-submit"
                aria-busy={sending}
              >
                {sending ? (
                  <>
                    <span style={{
                      display: 'inline-block',
                      width: '18px', height: '18px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 0.7s linear infinite',
                    }} />
                    Sending…
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    Send Message
                  </>
                )}
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                Or email directly:{' '}
                <a
                  href="mailto:amankumar3432k@gmail.com"
                  style={{ color: 'var(--accent-primary)', fontWeight: 600 }}
                >
                  amankumar3432k@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
