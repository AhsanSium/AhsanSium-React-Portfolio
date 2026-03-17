import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const NAV_LINKS = [
  { to: '/',        label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about',   label: 'About' },
  { to: '/blog',    label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const TopNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top navbar-container${scrolled ? ' scrolled' : ''}`}
      style={{ transition: 'box-shadow 0.3s ease' }}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/" style={{ textDecoration: 'none' }}>
          <span style={{
            width: 34, height: 34,
            borderRadius: 8,
            background: 'var(--gradient-cyber)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, color: '#fff',
            boxShadow: '0 0 14px rgba(0,212,255,0.4)',
          }}>
            <FontAwesomeIcon icon={faCode} />
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--text-primary)',
          }}>
            ahsan<span style={{ color: 'var(--accent-cyan)' }}>.</span>dev
          </span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}
        >
          <span style={{ fontSize: 18 }}>☰</span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-1">
            {NAV_LINKS.map(({ to, label }) => {
              const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
              return (
                <li className="nav-item" key={to}>
                  <Link
                    className="nav-link"
                    to={to}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      padding: '6px 14px',
                      borderRadius: 6,
                      transition: 'all 0.2s ease',
                      background: isActive ? 'var(--accent-cyan-dim)' : 'transparent',
                      border: isActive ? '1px solid rgba(0,212,255,0.2)' : '1px solid transparent',
                    }}
                  >
                    {isActive && <span style={{ color: 'var(--accent-green)', marginRight: 4 }}>▸</span>}
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
