import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const NAV_LINKS = [
  { to: '/',        label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about',   label: 'About' },
  { to: '/blog',    label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const SOCIAL = [
  { icon: faGithub,         href: 'https://github.com/AhsanSium',                     label: 'GitHub' },
  { icon: faLinkedin,       href: 'https://www.linkedin.com/in/ahsan-sium/',           label: 'LinkedIn' },
  { icon: faFacebookSquare, href: 'https://www.facebook.com/ahsan.sium',               label: 'Facebook' },
  { icon: faTwitter,        href: 'https://twitter.com/ahsan_sium',                    label: 'Twitter' },
  { icon: faInstagram,      href: 'https://www.instagram.com/ahsanulhaque039/',         label: 'Instagram' },
];

const Footer = () => (
  <footer className="footer-container">
    <div className="container">
      <div className="row gy-5">
        {/* Brand column */}
        <div className="col-md-4">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'var(--gradient-cyber)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, color: '#fff',
              boxShadow: '0 0 12px rgba(0,212,255,0.3)',
            }}>
              <FontAwesomeIcon icon={faCode} />
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-primary)' }}>
              ahsan<span style={{ color: 'var(--accent-cyan)' }}>.</span>dev
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>
            Full Stack Web Developer crafting modern digital experiences. Open to freelance & collaboration.
          </p>
        </div>

        {/* Navigation */}
        <div className="col-md-4 col-6">
          <h6 style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: 16 }}>
            // NAVIGATION
          </h6>
          <ul className="list-unstyled">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to} className="mb-2">
                <Link
                  to={to}
                  style={{
                    color: 'var(--text-muted)', fontSize: '0.875rem',
                    textDecoration: 'none', fontFamily: 'var(--font-mono)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                >
                  ▸ {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="col-md-4 col-6">
          <h6 style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: 16 }}>
            // SOCIAL
          </h6>
          <div className="social-container d-flex flex-wrap gap-3">
            {SOCIAL.map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" title={label}
                style={{ fontSize: '1.4rem' }}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', margin: 0, textAlign: 'center' }}>
          <span style={{ color: 'var(--accent-cyan)' }}>{'>'}</span> Copyright © 2024 Ahsan Sium. All rights reserved.
          <span style={{ color: 'var(--accent-purple)', marginLeft: 8 }}>{'</>'}</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
