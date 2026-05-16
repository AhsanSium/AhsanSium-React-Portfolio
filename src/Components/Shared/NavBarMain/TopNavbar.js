import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';

const NAV_LINKS = [
  { to: '/',         label: 'home' },
  { to: '/projects', label: 'projects' },
  { to: '/about',    label: 'about' },
  { to: '/blog',     label: 'blog' },
  { to: '/contact',  label: 'contact' },
];

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const TopNavbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top navbar-container${scrolled ? ' scrolled' : ''}`}
      style={{ transition: 'box-shadow 0.3s ease', padding: '0 0' }}
    >
      <div className="container" style={{ height: 64, display: 'flex', alignItems: 'center' }}>

        {/* Brand */}
        <Link
          className="navbar-brand"
          to="/"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
        >
          <span style={{
            fontFamily: 'var(--f-mono)',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--t1)',
            letterSpacing: '-0.01em',
          }}>
            ahsan<span style={{ color: 'var(--ac)' }}>.</span>sium
          </span>
        </Link>

        {/* Mobile: theme btn + toggler */}
        <div className="d-flex d-lg-none align-items-center gap-2 ms-auto">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="navbar-toggler border-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              background: 'var(--bg-s)',
              border: '1px solid var(--ln)',
              borderRadius: 6,
              padding: '6px 10px',
              color: 'var(--t2)',
            }}
          >
            <span style={{ fontSize: 16, lineHeight: 1 }}>☰</span>
          </button>
        </div>

        {/* Desktop nav */}
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => {
              const isActive = to === '/'
                ? location.pathname === '/' || location.pathname === '/home'
                : location.pathname.startsWith(to);
              return (
                <li className="nav-item" key={to}>
                  <Link
                    className="nav-link"
                    to={to}
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--t1)' : 'var(--t2)',
                      padding: '6px 12px',
                      borderRadius: 4,
                      position: 'relative',
                      transition: 'color 0.2s',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: 1,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: 'var(--ac)',
                        display: 'block',
                      }} />
                    )}
                    {label}
                  </Link>
                </li>
              );
            })}

            {/* Theme toggle — desktop */}
            <li className="nav-item d-none d-lg-flex align-items-center ms-2">
              <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
