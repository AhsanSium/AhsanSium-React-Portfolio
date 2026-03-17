import React from 'react';
import CountUp from 'react-countup';
import './Intro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const STATS = [
  { end: 24,  suffix: '+', label: 'Projects Completed', cls: 'hexa-1', icon: '⚡' },
  { end: 300, suffix: '+', label: 'Problems Solved',    cls: 'hexa-2', icon: '🧩' },
  { end: 260, suffix: '+', label: 'Code Contributions', cls: 'hexa-3', icon: '💻' },
  { end: 2,   suffix: '+', label: 'Years Experience',   cls: 'hexa-4', icon: '🚀' },
];

const Intro = () => (
  <section style={{ padding: '60px 0 80px' }}>
    <div className="container">
      <div className="row align-items-center gy-5">

        {/* Left — about text */}
        <div className="col-md-7">
          <p className="section-label">// about.me</p>
          <h2 className="section-title mb-1">MD. Ahsanul Haque Sium</h2>
          <div className="neon-line" />

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.95rem', maxWidth: 480 }}>
            As a developer, I love creating new features and experiences. I want every application
            I build to be effective and flawless.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.95rem', maxWidth: 480, marginBottom: 32 }}>
            I'm always positive, motivated, and committed to my responsibilities.
            A lifelong learner — always happy to adapt to new technology.
          </p>

          <div className="d-flex align-items-center gap-3">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              // follow me
            </span>
            <a
              href="https://github.com/AhsanSium"
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.6rem',
                transition: 'color 0.3s, filter 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(0,212,255,0.5))'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.filter = 'none'; }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahsan-sium/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.6rem',
                transition: 'color 0.3s, filter 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(0,212,255,0.5))'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.filter = 'none'; }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Right — stat counters */}
        <div className="col-md-5">
          <div className="row g-3">
            {STATS.map(({ end, suffix, label, cls, icon }) => (
              <div key={label} className="col-6">
                <div className={`hexagon ${cls} p-4`} style={{ height: '100%' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: 4 }}>{icon}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 2 }}>
                    <CountUp
                      className="counter-no"
                      start={0}
                      end={end}
                      duration={2.5}
                      style={{ fontSize: '2rem' }}
                    />
                    <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                      {suffix}
                    </span>
                  </div>
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    margin: '6px 0 0',
                    lineHeight: 1.4,
                  }}>
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
