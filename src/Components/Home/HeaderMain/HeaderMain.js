import React, { useEffect, useState } from 'react';
import ahsanPhoto from '../../../images/ahsan_profile.png';

const ROLES = ['Full Stack Developer', 'Backend Developer', 'Software Engineer', 'Tech Enthusiast'];

const HeaderMain = () => {
  const [loaded, setLoaded] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex(i => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{
      minHeight: '94vh',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 0 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle background accent */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--ac-dim) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center gy-5">

          {/* ── Left: Text ── */}
          <div className="col-lg-6" style={{ animation: 'fadeSlideUp .65s ease both' }}>

            {/* Available badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--ac-dim)', border: '1px solid var(--ln)',
              borderRadius: 4, padding: '5px 12px', marginBottom: 28,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'var(--ac)', display: 'inline-block', flexShrink: 0,
                boxShadow: '0 0 5px var(--ac)',
                animation: 'blink 2.2s ease-in-out infinite',
              }} />
              <span style={{
                fontFamily: 'var(--f-mono)', fontSize: '.68rem',
                color: 'var(--ac)', letterSpacing: '.12em', textTransform: 'uppercase',
              }}>
                Available for work
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(3rem, 8.5vw, 5.8rem)',
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              marginBottom: 20,
              color: 'var(--t1)',
            }}>
              AHSAN<br />
              <span style={{ color: 'var(--ac)' }}>SIUM</span>
            </h1>

            {/* Role line */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '12px 0', marginBottom: 22,
              borderTop: '1px solid var(--ln)',
            }}>
              <span style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 'clamp(.9rem, 2vw, 1.05rem)',
                color: 'var(--t2)', fontWeight: 500, letterSpacing: '.01em',
              }}>
                {ROLES[roleIndex]}
              </span>
              <span className="cursor-blink" />
            </div>

            {/* Bio */}
            <p style={{
              color: 'var(--t2)', lineHeight: 1.82, maxWidth: 440,
              marginBottom: 32, fontSize: '.95rem',
            }}>
              Crafting modern web experiences with clean code and elegant design.
              Let me know how I can help build your next project.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
              <a
                href="https://drive.google.com/file/d/1qIVaSMXn708Cyd87ISc8gTe0I3mlrXq6/view"
                target="_blank" rel="noreferrer"
                className="btn-prime"
              >
                $ view_resume
              </a>
              <a href="/contact" className="btn-outline">
                hire_me →
              </a>
            </div>

            {/* Tech stack row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Golang', 'PHP', 'Node.js', 'PostgreSQL', 'React', 'Docker'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* ── Right: Photo + Terminal card ── */}
          <div className="col-lg-6" style={{ animation: 'fadeSlideUp .65s .12s ease both' }}>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: 16,
              maxWidth: 440, margin: '0 auto',
            }}>

              {/* Profile photo */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: '1px solid var(--ln)',
                  background: 'var(--bg-s)',
                  lineHeight: 0,
                  position: 'relative',
                }}>
                  {!loaded && (
                    <div style={{
                      height: 380,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--bg-s)',
                    }}>
                      <span style={{
                        fontFamily: 'var(--f-mono)', fontSize: '.8rem',
                        color: 'var(--t3)', letterSpacing: '.05em',
                      }}>
                        loading...
                      </span>
                    </div>
                  )}
                  <img
                    src={ahsanPhoto}
                    alt="Ahsan Sium — Full Stack Developer"
                    onLoad={() => setLoaded(true)}
                    style={{
                      display: loaded ? 'block' : 'none',
                      width: '100%',
                      maxHeight: 420,
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />
                  {/* Lime accent stripe at bottom */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: 3, background: 'var(--ac)',
                  }} />
                </div>

                {/* Floating "open to work" badge */}
                <div style={{
                  position: 'absolute', top: 16, right: -8,
                  background: 'var(--bg-c)', border: '1px solid var(--ac)',
                  borderRadius: 100, padding: '6px 14px',
                  fontFamily: 'var(--f-mono)', fontSize: '.7rem',
                  color: 'var(--ac)',
                  display: 'flex', alignItems: 'center', gap: 7,
                  boxShadow: 'var(--sh)',
                  whiteSpace: 'nowrap',
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'var(--ac)', flexShrink: 0,
                    animation: 'blink 2.2s ease-in-out infinite',
                  }} />
                  open to work
                </div>
              </div>

              {/* Compact terminal card */}
              <div style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '.78rem',
                background: 'var(--bg-c)',
                border: '1px solid var(--ln)',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
                {/* Titlebar */}
                <div style={{
                  padding: '9px 14px',
                  background: 'var(--bg-s)',
                  borderBottom: '1px solid var(--ln)',
                  display: 'flex', alignItems: 'center', gap: 7,
                }}>
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                  <span style={{ color: 'var(--t3)', fontSize: '.66rem', marginLeft: 8, letterSpacing: '.04em' }}>
                    portfolio.sh — zsh
                  </span>
                </div>

                {/* Body */}
                <div style={{ padding: '14px 20px 18px', lineHeight: 1.95 }}>
                  <div>
                    <span style={{ color: 'var(--t3)' }}>$ whoami</span>
                  </div>
                  <div style={{ color: 'var(--t1)', paddingLeft: 10, marginBottom: 4 }}>
                    ahsan_sium
                  </div>
                  <div>
                    <span style={{ color: 'var(--t3)' }}>$ skills --top</span>
                  </div>
                  <div style={{ color: 'var(--t1)', paddingLeft: 10, marginBottom: 4, wordBreak: 'break-all' }}>
                    ["golang","php","nodejs","postgres","react"]
                  </div>
                  <div>
                    <span style={{ color: 'var(--t3)' }}>$ status --check</span>
                  </div>
                  <div style={{ color: 'var(--ac)', paddingLeft: 10, marginBottom: 4 }}>
                    ✓ open_to_opportunities: true
                  </div>
                  <div>
                    <span style={{ color: 'var(--t3)' }}>$ </span>
                    <span className="cursor-blink" style={{ margin: 0 }} />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
