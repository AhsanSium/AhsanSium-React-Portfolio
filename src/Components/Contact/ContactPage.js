import React from 'react';
import Contact from './Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileAlt, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const CONTACT_INFO = [
  { icon: faEnvelope,    label: 'Email',    val: 'ahsanulhaquesium@gmail.com', href: 'mailto:ahsanulhaquesium@gmail.com' },
  { icon: faMobileAlt,   label: 'Phone',    val: '+8801521438368',             href: 'tel:+8801521438368' },
  { icon: faLocationDot, label: 'Location', val: 'Bangladesh 🌍',              href: null },
];

const SOCIAL_LINKS = [
  { icon: faGithub,   href: 'https://github.com/AhsanSium',            label: 'GitHub' },
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/ahsan-sium/', label: 'LinkedIn' },
  { icon: faTwitter,  href: 'https://twitter.com/ahsan_sium',          label: 'Twitter' },
];

const ContactPage = () => (
  <>
    {/* Page header */}
    <div style={{
      padding: '72px 0 48px',
      background: 'var(--bg-s)',
      borderBottom: '1px solid var(--ln)',
    }}>
      <div className="container">
        <p className="sec-label">// contact.init()</p>
        <h1 style={{
          fontFamily: 'var(--f-display)',
          fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
          fontWeight: 900, color: 'var(--t1)',
          lineHeight: 1.1, marginBottom: 12,
          letterSpacing: '-0.02em',
        }}>
          Let's Work <span style={{ color: 'var(--ac)' }}>Together</span>
        </h1>
        <p style={{ color: 'var(--t2)', fontSize: '.95rem', maxWidth: 480, lineHeight: 1.75 }}>
          Got a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>
    </div>

    <div className="container py-5">
      <div className="row g-4 justify-content-center">

        {/* Contact info */}
        <div className="col-md-4">
          <div className="panel p-4 h-100" style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{
              fontFamily: 'var(--f-mono)', fontSize: '.68rem',
              color: 'var(--t3)', textTransform: 'uppercase',
              letterSpacing: '.1em', marginBottom: 24,
            }}>
              // reach_me
            </p>

            {CONTACT_INFO.map(({ icon, label, val, href }) => (
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    marginBottom: 20, textDecoration: 'none',
                    color: 'inherit', transition: 'color .2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--ac)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'inherit'}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'var(--ac-dim)', border: '1px solid var(--ln-h)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--ac)', flexShrink: 0,
                  }}>
                    <FontAwesomeIcon icon={icon} style={{ fontSize: '.85rem' }} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontFamily: 'var(--f-mono)', fontSize: '.66rem', color: 'var(--t3)', letterSpacing: '.06em', textTransform: 'uppercase' }}>{label}</p>
                    <p style={{ margin: 0, color: 'var(--t2)', fontSize: '.85rem', marginTop: 2 }}>{val}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={label}
                  style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 20 }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'var(--ac-dim)', border: '1px solid var(--ln-h)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--ac)', flexShrink: 0,
                  }}>
                    <FontAwesomeIcon icon={icon} style={{ fontSize: '.85rem' }} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontFamily: 'var(--f-mono)', fontSize: '.66rem', color: 'var(--t3)', letterSpacing: '.06em', textTransform: 'uppercase' }}>{label}</p>
                    <p style={{ margin: 0, color: 'var(--t2)', fontSize: '.85rem', marginTop: 2 }}>{val}</p>
                  </div>
                </div>
              )
            ))}

            {/* Social */}
            <div style={{ marginTop: 'auto', paddingTop: 24, borderTop: '1px solid var(--ln)' }}>
              <p style={{ fontFamily: 'var(--f-mono)', color: 'var(--t3)', fontSize: '.66rem', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>
                // social
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {SOCIAL_LINKS.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    style={{
                      width: 36, height: 36, borderRadius: 7,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--bg-s)', border: '1px solid var(--ln)',
                      color: 'var(--t2)', textDecoration: 'none',
                      transition: 'border-color .2s, color .2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ac)'; e.currentTarget.style.color = 'var(--ac)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ln)'; e.currentTarget.style.color = 'var(--t2)'; }}
                  >
                    <FontAwesomeIcon icon={icon} style={{ fontSize: '.9rem' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col-md-7">
          <div className="panel p-4 p-md-5">
            <p style={{
              fontFamily: 'var(--f-mono)', fontSize: '.68rem',
              color: 'var(--t3)', textTransform: 'uppercase',
              letterSpacing: '.1em', marginBottom: 24,
            }}>
              // send_message()
            </p>
            <Contact />
          </div>
        </div>

      </div>
    </div>
  </>
);

export default ContactPage;
