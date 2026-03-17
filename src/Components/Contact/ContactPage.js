import React from 'react';
import Contact from './Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => (
  <>
    <div className="page-header-section">
      <p className="section-label text-center">// contact.init()</p>
      <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
        Contact <span style={{ background: 'var(--gradient-cyber)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Me</span>
      </h1>
      <div className="neon-line mx-auto" />
    </div>

    <div className="container py-5">
      <div className="row g-4 justify-content-center">
        {/* Contact info */}
        <div className="col-md-4">
          <div className="glass-panel p-4 h-100">
            <h6 style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', letterSpacing: '0.1em', marginBottom: 24 }}>
              // reach_me
            </h6>
            {[
              { icon: faEnvelope,   label: 'Email',    val: 'ahsanulhaquesium@gmail.com', href: 'mailto:ahsanulhaquesium@gmail.com' },
              { icon: faMobileAlt,  label: 'Phone',    val: '+8801521438368',              href: 'tel:+8801521438368' },
              { icon: faGithub,     label: 'GitHub',   val: 'AhsanSium',                  href: 'https://github.com/AhsanSium' },
              { icon: faLinkedin,   label: 'LinkedIn', val: 'ahsan-sium',                  href: 'https://www.linkedin.com/in/ahsan-sium/' },
            ].map(({ icon, label, val, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 20, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                onMouseLeave={e => e.currentTarget.style.color = 'inherit'}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 8,
                  background: 'var(--accent-cyan-dim)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-cyan)', flexShrink: 0,
                }}>
                  <FontAwesomeIcon icon={icon} />
                </div>
                <div>
                  <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{label}</p>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{val}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="col-md-7">
          <div className="glass-panel p-4 p-md-5">
            <h6 style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', letterSpacing: '0.1em', marginBottom: 24 }}>
              // send_message()
            </h6>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ContactPage;
