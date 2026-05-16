import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SKILLS_PROFICIENT  = ['Golang', 'PHP', 'JavaScript (ES6)', 'Node.js', 'PostgreSQL', 'MySQL'];
const SKILLS_COMFORTABLE = ['C', 'C++', 'Python 3', 'OOP', 'System Design', 'Docker', 'Git'];
const SKILLS_ADDITIONAL  = ['SEO (Technical)', 'Digital Marketing', 'WordPress CMS'];

const EDUCATION = [
  { degree: 'Full-Stack Development', inst: 'Programming Hero', year: '2021', icon: '🎓' },
  { degree: 'BSc. Computer Science',  inst: 'MBSTU',            year: '2018–Present', icon: '🏛️' },
  { degree: 'HSC Science',            inst: 'BR Public College', year: '',             icon: '📚' },
];

const SkillPill = ({ label, accent = false }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '5px 12px',
    background: accent ? 'var(--ac-dim)' : 'var(--bg-s)',
    border: `1px solid ${accent ? 'var(--ln-h)' : 'var(--ln)'}`,
    borderRadius: 100,
    fontFamily: 'var(--f-mono)', fontSize: '.75rem',
    color: accent ? 'var(--t1)' : 'var(--t2)',
    margin: '4px',
  }}>
    <span style={{ width: 5, height: 5, borderRadius: '50%', background: accent ? 'var(--ac)' : 'var(--t3)', display: 'inline-block', flexShrink: 0 }} />
    {label}
  </span>
);

const About = () => (
  <>
    {/* Page header */}
    <div style={{
      padding: '72px 0 48px',
      background: 'var(--bg-s)',
      borderBottom: '1px solid var(--ln)',
    }}>
      <div className="container">
        <p className="sec-label">// about.exe</p>
        <h1 style={{
          fontFamily: 'var(--f-display)',
          fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
          fontWeight: 900, color: 'var(--t1)',
          lineHeight: 1.1, marginBottom: 12,
          letterSpacing: '-0.02em',
        }}>
          About <span style={{ color: 'var(--ac)' }}>Me</span>
        </h1>
        <p style={{ color: 'var(--t2)', fontSize: '.95rem', maxWidth: 500, lineHeight: 1.75 }}>
          I build full-stack applications and solve complex engineering problems — always with an eye for clean design.
        </p>
      </div>
    </div>

    <div className="container py-5 aboutme-container">

      {/* Identity card */}
      <div className="panel p-4 p-md-5 mb-4 aboutme-header">
        <div className="row align-items-center gy-4">
          <div className="col-md-7">
            <p style={{ fontFamily: 'var(--f-mono)', color: 'var(--ac)', fontSize: '.72rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 6 }}>
              $ whoami
            </p>
            <h2 style={{ fontFamily: 'var(--f-display)', fontWeight: 800, color: 'var(--t1)', marginBottom: 4, fontSize: '1.6rem' }}>
              MD. AHSANUL HAQUE
            </h2>
            <p style={{ color: 'var(--t3)', fontFamily: 'var(--f-mono)', fontSize: '.8rem', margin: 0, letterSpacing: '.04em' }}>
              Software Engineer · Full Stack Developer · Tech Enthusiast
            </p>
          </div>
          <div className="col-md-5">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: faEnvelope,  label: 'ahsanulhaquesium@gmail.com', href: 'mailto:ahsanulhaquesium@gmail.com' },
                { icon: faMobileAlt, label: '+8801521438368',              href: 'tel:+8801521438368' },
              ].map(({ icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  style={{ display: 'flex', gap: 10, alignItems: 'center', textDecoration: 'none', color: 'var(--t2)', transition: 'color .2s', fontSize: '.875rem' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--ac)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--t2)'}
                >
                  <FontAwesomeIcon icon={icon} style={{ color: 'var(--ac)', width: 14, flexShrink: 0 }} />
                  {label}
                </a>
              ))}
              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
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
                      width: 36, height: 36, borderRadius: 7,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--bg-s)', border: '1px solid var(--ln)',
                      color: 'var(--t2)', textDecoration: 'none',
                      transition: 'border-color .2s, color .2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ac)'; e.currentTarget.style.color = 'var(--ac)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ln)'; e.currentTarget.style.color = 'var(--t2)'; }}
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="row g-4">

        {/* Left col */}
        <div className="col-md-8">

          {/* Skills */}
          <div className="panel p-4 p-md-5 mb-4">
            <h4 style={{ fontFamily: 'var(--f-display)', color: 'var(--t1)', marginBottom: 24, fontWeight: 800 }}>
              Skills <span style={{ color: 'var(--ac)' }}>&</span> Expertise
            </h4>

            {[
              { label: 'proficient_with', items: SKILLS_PROFICIENT, accent: true },
              { label: 'comfortable_with', items: SKILLS_COMFORTABLE, accent: false },
              { label: 'additional_skills', items: SKILLS_ADDITIONAL, accent: false },
            ].map(({ label, items, accent }) => (
              <div key={label} style={{ marginBottom: 20 }}>
                <p style={{
                  fontFamily: 'var(--f-mono)', fontSize: '.68rem',
                  color: 'var(--t3)', textTransform: 'uppercase',
                  letterSpacing: '.1em', marginBottom: 10,
                }}>
                  // {label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', margin: '-4px' }}>
                  {items.map(item => <SkillPill key={item} label={item} accent={accent} />)}
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="panel p-4 p-md-5">
            <h4 style={{ fontFamily: 'var(--f-display)', color: 'var(--t1)', marginBottom: 20, fontWeight: 800 }}>
              Highlights
            </h4>
            {[
              'Effective knowledge in Data Structures, Algorithms & OOP.',
              'Solved 100+ competitive programming problems.',
              '2 years experience in Digital Marketing.',
              '1.5 years in Amazon Affiliate Marketing & AdSense.',
              'Proficient in WordPress CMS, Plugins & Elementor Pro.',
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', gap: 12, padding: '10px 0',
                  borderBottom: '1px solid var(--ln)',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{
                  flexShrink: 0, width: 22, height: 22,
                  background: 'var(--ac-dim)', border: '1px solid var(--ln-h)',
                  borderRadius: 4, display: 'flex', alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--f-mono)', fontSize: '.65rem',
                  color: 'var(--ac)', fontWeight: 700, marginTop: 1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ margin: 0, color: 'var(--t2)', fontSize: '.875rem', lineHeight: 1.65 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Right col */}
        <div className="col-md-4">

          {/* Languages */}
          <div className="panel p-4 mb-4">
            <h5 style={{ fontFamily: 'var(--f-mono)', color: 'var(--t3)', fontSize: '.68rem', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>
              // programming
            </h5>
            {[
              { lang: 'JavaScript', level: 'expert', pct: 75 },
              { lang: 'Golang',     level: 'good',   pct: 70 },
              { lang: 'PHP',        level: 'good',   pct: 68 },
              { lang: 'C / C++',    level: 'good',   pct: 65 },
            ].map(({ lang, level, pct }) => (
              <div key={lang} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: '.82rem', color: 'var(--t2)', fontFamily: 'var(--f-body)' }}>{lang}</span>
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: '.68rem', color: 'var(--t3)' }}>{pct}%</span>
                </div>
                <div style={{ height: 3, background: 'var(--bg-s)', borderRadius: 2 }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: 'var(--ac)', borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="panel p-4 mb-4">
            <h5 style={{ fontFamily: 'var(--f-mono)', color: 'var(--t3)', fontSize: '.68rem', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>
              // education
            </h5>
            {EDUCATION.map(({ degree, inst, year, icon }, i) => (
              <div
                key={degree}
                style={{
                  paddingBottom: i < EDUCATION.length - 1 ? 16 : 0,
                  marginBottom: i < EDUCATION.length - 1 ? 16 : 0,
                  borderBottom: i < EDUCATION.length - 1 ? '1px solid var(--ln)' : 'none',
                  display: 'flex', gap: 12, alignItems: 'flex-start',
                }}
              >
                <span style={{ fontSize: '1.1rem', marginTop: 1 }}>{icon}</span>
                <div>
                  <p style={{ color: 'var(--t1)', fontWeight: 600, fontSize: '.875rem', margin: '0 0 2px' }}>{degree}</p>
                  <p style={{ color: 'var(--t2)', fontSize: '.8rem', margin: '0 0 2px' }}>{inst}</p>
                  {year && <p style={{ color: 'var(--t3)', fontFamily: 'var(--f-mono)', fontSize: '.7rem', margin: 0 }}>{year}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <div className="panel p-4">
            <h5 style={{ fontFamily: 'var(--f-mono)', color: 'var(--t3)', fontSize: '.68rem', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>
              // soft_skills
            </h5>
            {['Fluent English Communication', 'Self-Motivated', 'Quick Learner', 'Team Player', 'Responsible'].map(s => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', color: 'var(--t2)', fontSize: '.875rem', borderBottom: '1px solid var(--ln)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ac)', display: 'inline-block', flexShrink: 0 }} />
                {s}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  </>
);

export default About;
