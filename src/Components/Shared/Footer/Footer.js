import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const NAV_LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about',    label: 'About' },
  { to: '/blog',     label: 'Blog' },
  { to: '/contact',  label: 'Contact' },
];

const SOCIAL = [
  { icon: faGithub,         href: 'https://github.com/AhsanSium',                   label: 'GitHub' },
  { icon: faLinkedin,       href: 'https://www.linkedin.com/in/ahsan-sium/',         label: 'LinkedIn' },
  { icon: faFacebookSquare, href: 'https://www.facebook.com/ahsan.sium',             label: 'Facebook' },
  { icon: faTwitter,        href: 'https://twitter.com/ahsan_sium',                  label: 'Twitter' },
  { icon: faInstagram,      href: 'https://www.instagram.com/ahsanulhaque039/',      label: 'Instagram' },
];

const Footer = () => (
  <footer className="footer-container">
    <div className="container">
      <div className="row gy-5">

        {/* Brand */}
        <div className="col-md-5">
          <div style={{ marginBottom: 12 }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontWeight: 700, fontSize: '1rem', color: 'var(--t1)' }}>
              ahsan<span style={{ color: 'var(--ac)' }}>.</span>sium
            </span>
          </div>
          <p style={{ color: 'var(--t3)', fontSize: '.875rem', lineHeight: 1.75, maxWidth: 300 }}>
            Full Stack Developer crafting modern digital experiences. Open to freelance projects and long-term collaboration.
          </p>
          {/* CTA */}
          <a
            href="/contact"
            className="btn-prime"
            style={{ marginTop: 16, fontSize: '.78rem', padding: '8px 16px', display: 'inline-flex' }}
          >
            Start a Project →
          </a>
        </div>

        {/* Navigation */}
        <div className="col-6 col-md-3">
          <p style={{
            fontFamily: 'var(--f-mono)', color: 'var(--t3)',
            fontSize: '.66rem', textTransform: 'uppercase',
            letterSpacing: '.1em', marginBottom: 16,
          }}>
            // navigation
          </p>
          <ul className="list-unstyled mb-0">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to} style={{ marginBottom: 8 }}>
                <Link
                  to={to}
                  style={{
                    color: 'var(--t2)', fontSize: '.875rem',
                    textDecoration: 'none', fontFamily: 'var(--f-body)',
                    transition: 'color .2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--ac)'}
                  onMouseLeave={e => e.target.style.color = 'var(--t2)'}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="col-6 col-md-4">
          <p style={{
            fontFamily: 'var(--f-mono)', color: 'var(--t3)',
            fontSize: '.66rem', textTransform: 'uppercase',
            letterSpacing: '.1em', marginBottom: 16,
          }}>
            // social
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {SOCIAL.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                aria-label={label}
                style={{
                  width: 36, height: 36, borderRadius: 7,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-s)', border: '1px solid var(--ln)',
                  color: 'var(--t3)', fontSize: '.95rem',
                  textDecoration: 'none', transition: 'border-color .2s, color .2s, background .2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--ac)';
                  e.currentTarget.style.color = 'var(--ac)';
                  e.currentTarget.style.background = 'var(--ac-dim)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--ln)';
                  e.currentTarget.style.color = 'var(--t3)';
                  e.currentTarget.style.background = 'var(--bg-s)';
                }}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--ln)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <p style={{ color: 'var(--t3)', fontSize: '.78rem', fontFamily: 'var(--f-mono)', margin: 0, letterSpacing: '.03em' }}>
          © 2025 Ahsan Sium — All rights reserved.
        </p>
        <p style={{ color: 'var(--t3)', fontSize: '.78rem', fontFamily: 'var(--f-mono)', margin: 0 }}>
          Built with <span style={{ color: 'var(--ac)' }}>React</span> + <span style={{ color: 'var(--ac)' }}>Tailwind</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
