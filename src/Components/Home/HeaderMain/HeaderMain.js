import React, { useEffect, useState } from 'react';
import ahsanPhoto from '../../../images/ahsan_profile.png';

const HeaderMain = () => {
  const [loaded, setLoaded] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Backend Developer', 'Cross-Platform Dev', 'Tech Enthusiast'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(intervalId);
  }, [roles.length]);

  return (
    <section style={{ padding: '80px 0 60px', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* Text side */}
          <div className="col-md-6">
            {/* Terminal prompt label */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: 6, padding: '6px 14px',
              marginBottom: 24,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff6b6b', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffd93d', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-green)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: 6 }}>
                portfolio.js
              </span>
            </div>

            <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-green)', fontSize: '0.9rem', marginBottom: 8 }}>
              &gt; Hello, World! I am
            </p>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 12,
              color: 'var(--text-primary)',
            }}>
              Ahsan Sium
            </h1>

            <h2 style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
              fontWeight: 600,
              marginBottom: 20,
              background: 'var(--gradient-cyber)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'var(--font-mono)',
            }}>
              {roles[roleIndex]}
              <span style={{
                display: 'inline-block', width: 3, height: '1em',
                background: 'var(--accent-cyan)', marginLeft: 6,
                verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }} />
            </h2>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 440, marginBottom: 32, fontSize: '0.95rem' }}>
              Crafting modern web experiences with clean code and elegant design.
              Let me know how I can help build your next project.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1qIVaSMXn708Cyd87ISc8gTe0I3mlrXq6/view"
                target="_blank"
                rel="noreferrer"
                className="btn-cyber text-white"
              >
                $ view resume
              </a>
              <a href="/contact" className="btn-cyber-outline">
                Get in Touch
              </a>
            </div>

            {/* Tech stack tags */}
            <div className="mt-4 d-flex flex-wrap gap-2">
              {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'].map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Photo side */}
          <div className="col-md-6 text-center">
            <div style={{
              display: 'inline-block',
              position: 'relative',
              padding: 3,
              borderRadius: 20,
              background: 'var(--gradient-cyber)',
              boxShadow: '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(123,47,255,0.15)',
            }}>
              <div style={{
                borderRadius: 18,
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
              }}>
                {!loaded && (
                  <div style={{
                    width: 380, height: 440,
                    background: 'var(--glass-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                      loading...
                    </span>
                  </div>
                )}
                <img
                  src={ahsanPhoto}
                  alt="Ahsan Sium"
                  onLoad={() => setLoaded(true)}
                  style={{
                    display: loaded ? 'block' : 'none',
                    maxWidth: 380,
                    width: '100%',
                  }}
                />
              </div>
            </div>

            {/* Floating code snippet decoration */}
            <div style={{
              position: 'absolute',
              right: '5%',
              top: '15%',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--glass-border)',
              borderRadius: 8,
              padding: '10px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              pointerEvents: 'none',
              display: 'none',
            }} className="d-lg-block">
              <div><span style={{ color: '#7b2fff' }}>const</span> <span style={{ color: 'var(--accent-cyan)' }}>dev</span> = {'{'}</div>
              <div>&nbsp;&nbsp;name: <span style={{ color: 'var(--accent-green)' }}>"Ahsan"</span>,</div>
              <div>&nbsp;&nbsp;role: <span style={{ color: 'var(--accent-green)' }}>"Full Stack"</span></div>
              <div>{'}'}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
