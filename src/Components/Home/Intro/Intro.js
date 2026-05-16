import React, { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';
import './Intro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const AnimatedCounter = ({ end, suffix }) => {
  const ref = useRef(null);
  const { start, reset } = useCountUp({ ref, start: 0, end, duration: 2.2 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { reset(); start(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [start, reset]);

  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 2 }}>
      <span ref={ref} style={{
        fontFamily: 'var(--f-display)',
        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
        fontWeight: 900,
        color: 'var(--ac)',
        lineHeight: 1,
      }} />
      <span style={{ fontFamily: 'var(--f-mono)', fontSize: '1.1rem', color: 'var(--ac)', fontWeight: 700 }}>
        {suffix}
      </span>
    </div>
  );
};

const STATS = [
  { end: 24,  suffix: '+', label: 'Projects\nCompleted', accentLeft: true },
  { end: 300, suffix: '+', label: 'Problems\nSolved',    accentLeft: false },
  { end: 260, suffix: '+', label: 'Code\nContributions', accentLeft: true },
  { end: 2,   suffix: '+', label: 'Years\nExperience',   accentLeft: false },
];

const Intro = () => (
  <section style={{ padding: '64px 0 80px', background: 'var(--bg-s)' }}>
    <div className="container">

      {/* Stats band */}
      <div className="row gy-4 mb-5">
        {STATS.map(({ end, suffix, label, accentLeft }) => (
          <div key={label} className="col-6 col-md-3">
            <div style={{
              background: 'var(--bg-c)',
              border: '1px solid var(--ln)',
              borderLeft: accentLeft ? '2px solid var(--ac)' : '2px solid var(--ac2)',
              borderRadius: 12,
              padding: '28px 16px',
              textAlign: 'center',
              transition: 'transform .2s, box-shadow .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--sh)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <AnimatedCounter end={end} suffix={suffix} />
              <p style={{
                fontFamily: 'var(--f-mono)', fontSize: '.72rem',
                color: 'var(--t3)', margin: '8px 0 0',
                lineHeight: 1.5, whiteSpace: 'pre-line',
                letterSpacing: '.03em', textTransform: 'uppercase',
              }}>
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* About row */}
      <div className="row align-items-center gy-4">
        <div className="col-md-7">
          <p className="sec-label">// about.me</p>
          <h2 style={{
            fontFamily: 'var(--f-display)',
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 800, color: 'var(--t1)',
            lineHeight: 1.2, marginBottom: 8,
          }}>
            MD. Ahsanul Haque Sium
          </h2>
          <div style={{ width: 36, height: 2, background: 'var(--ac)', borderRadius: 2, margin: '12px 0 20px' }} />

          <p style={{ color: 'var(--t2)', lineHeight: 1.85, fontSize: '.95rem', maxWidth: 480, marginBottom: 14 }}>
            As a developer, I love creating new features and experiences. I want every
            application I build to be effective and flawless.
          </p>
          <p style={{ color: 'var(--t2)', lineHeight: 1.85, fontSize: '.95rem', maxWidth: 480, marginBottom: 28 }}>
            I'm always positive, motivated, and committed to my responsibilities —
            a lifelong learner, always happy to adapt to new technology.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '.72rem', color: 'var(--t3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
              // follow me
            </span>
            {[
              { icon: faGithub,   href: 'https://github.com/AhsanSium',            label: 'GitHub' },
              { icon: faLinkedin, href: 'https://www.linkedin.com/in/ahsan-sium/', label: 'LinkedIn' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                style={{
                  width: 38, height: 38, borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-c)', border: '1px solid var(--ln)',
                  color: 'var(--t2)', fontSize: '1.1rem',
                  transition: 'border-color .2s, color .2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ac)'; e.currentTarget.style.color = 'var(--ac)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ln)'; e.currentTarget.style.color = 'var(--t2)'; }}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="col-md-5">
          <div style={{
            background: 'var(--bg-c)',
            border: '1px solid var(--ln)',
            borderRadius: 12,
            padding: '28px 24px',
            fontFamily: 'var(--f-mono)',
            fontSize: '.82rem',
          }}>
            <p style={{ color: 'var(--t3)', fontSize: '.68rem', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>
              // developer.profile
            </p>
            {[
              ['name',     '"Ahsan Sium"'],
              ['type',     '"Full Stack"'],
              ['location', '"Bangladesh 🌍"'],
              ['status',   '"open_to_work"'],
              ['collab',   'true'],
            ].map(([key, val]) => (
              <div key={key} style={{ marginBottom: 8, display: 'flex', gap: 8 }}>
                <span style={{ color: 'var(--t3)' }}>{key}:</span>
                <span style={{ color: key === 'status' || key === 'collab' ? 'var(--ac)' : 'var(--t1)' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Intro;
