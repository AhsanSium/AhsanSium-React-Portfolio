import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SKILLS_PROFICIENT = ['JavaScript (ES6)', 'React / Redux', 'Node.js', 'HTML5 & CSS3', 'Express.js', 'MongoDB', 'MySQL'];
const SKILLS_COMFORTABLE = ['C', 'C++', 'Python 3', 'OOP'];
const SKILLS_ADDITIONAL  = ['SEO (Technical)', 'Digital Marketing', 'WordPress CMS'];

const SkillGroup = ({ label, items, color = 'var(--accent-cyan)' }) => (
  <div className="mb-4">
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color, marginBottom: 10, letterSpacing: '0.05em' }}>
      // {label}
    </p>
    <ul className="list-unstyled">
      {items.map(item => (
        <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <span style={{ color }}>▸</span> {item}
        </li>
      ))}
    </ul>
  </div>
);

const About = () => (
  <>
    {/* Page Header */}
    <div className="page-header-section">
      <p className="section-label text-center">// about.exe</p>
      <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
        About <span style={{ background: 'var(--gradient-cyber)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Me</span>
      </h1>
      <div className="neon-line mx-auto" />
    </div>

    <div className="container py-5 aboutme-container">
      {/* Identity row */}
      <div className="glass-panel p-4 p-md-5 mb-4 aboutme-header">
        <div className="row align-items-center gy-3">
          <div className="col-md-7">
            <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-green)', fontSize: '0.8rem', marginBottom: 4 }}>
              &gt; whoami
            </p>
            <h2 style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>MD. AHSANUL HAQUE</h2>
            <p style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', margin: 0 }}>
              Junior Web Developer
            </p>
          </div>
          <div className="col-md-5">
            <div className="d-flex flex-column gap-2">
              <a href="tel:+8801521438368" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <FontAwesomeIcon icon={faMobileAlt} style={{ color: 'var(--accent-cyan)', width: 16 }} />
                +8801521438368
              </a>
              <a href="mailto:ahsanulhaquesium@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'var(--accent-cyan)', width: 16 }} />
                ahsanulhaquesium@gmail.com
              </a>
              <div className="d-flex gap-3 mt-1">
                <a href="https://github.com/AhsanSium" target="_blank" rel="noreferrer"
                  style={{ color: 'var(--text-muted)', fontSize: '1.3rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/ahsan-sium/" target="_blank" rel="noreferrer"
                  style={{ color: 'var(--text-muted)', fontSize: '1.3rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="row g-4">
        {/* Left column */}
        <div className="col-md-8">
          {/* Skills */}
          <div className="glass-panel p-4 p-md-5 mb-4">
            <h4 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', marginBottom: 24 }}>
              {'<'} SKILLS {'/>'} 
            </h4>
            <SkillGroup label="proficient_with" items={SKILLS_PROFICIENT} color="var(--accent-cyan)" />
            <SkillGroup label="comfortable_with" items={SKILLS_COMFORTABLE} color="var(--accent-purple)" />
            <SkillGroup label="additional_skills" items={SKILLS_ADDITIONAL} color="var(--accent-green)" />
          </div>

          {/* Projects */}
          <div className="glass-panel p-4 p-md-5 mb-4">
            <h4 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', marginBottom: 20 }}>
              {'<'} PROJECTS {'/>'} 
            </h4>
            <h5 style={{ color: 'var(--accent-cyan)', marginBottom: 8 }}>Yachts-Voyage</h5>
            <span className="tech-tag mb-3 d-inline-block">Full-Stack</span>
            <ul className="list-unstyled mb-3">
              {[
                'Admin & User interfaces with role-based access',
                'Private routes with Firebase Auth',
                'Credit card payment via Stripe',
                'Full responsive design',
              ].map(f => (
                <li key={f} style={{ display: 'flex', gap: 8, padding: '3px 0', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  <span style={{ color: 'var(--accent-green)' }}>▸</span> {f}
                </li>
              ))}
            </ul>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {['React.js', 'Node.js', 'MongoDB', 'Express', 'Firebase', 'Stripe'].map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <a href="/projects" className="btn-cyber-outline" style={{ fontSize: '0.85rem' }}>
              view all projects →
            </a>
          </div>

          {/* Highlights */}
          <div className="glass-panel p-4 p-md-5">
            <h4 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', marginBottom: 20 }}>
              {'<'} HIGHLIGHTS {'/>'} 
            </h4>
            <ul className="list-unstyled">
              {[
                'Effective knowledge in Data Structures, Algorithms & OOP.',
                'Solved 100+ competitive programming problems.',
                '2 years experience in Digital Marketing.',
                '1.5 years in Amazon Affiliate Marketing & AdSense.',
                'Proficient in WordPress CMS, Plugins & Elementor Pro.',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: 8, padding: '5px 0', color: 'var(--text-secondary)', fontSize: '0.875rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: 8 }}>
                  <span style={{ color: 'var(--accent-cyan)', flexShrink: 0 }}>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column */}
        <div className="col-md-4">
          <div className="glass-panel p-4 mb-4">
            <h5 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', marginBottom: 16 }}>// PROGRAMMING</h5>
            {['JavaScript', 'C / C++', 'Python 3', 'Java'].map(lang => (
              <div key={lang} className="d-flex align-items-center justify-content-between mb-3">
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{lang}</span>
                <span className="tech-tag">{lang === 'JavaScript' ? 'expert' : lang === 'C / C++' ? 'good' : 'learning'}</span>
              </div>
            ))}
          </div>

          <div className="glass-panel p-4 mb-4">
            <h5 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', marginBottom: 16 }}>// EDUCATION</h5>
            {[
              { degree: 'Full-Stack Dev',    inst: 'Programming Hero',  year: '2021' },
              { degree: 'BSc. CSE',          inst: 'MBSTU',             year: '2018–' },
              { degree: 'HSC Science',       inst: 'BR Public College', year: '' },
            ].map(({ degree, inst, year }) => (
              <div key={degree} className="mb-3 pb-3" style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <p style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', margin: '0 0 2px' }}>{degree}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>{inst}</p>
                {year && <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: 0 }}>{year}</p>}
              </div>
            ))}
          </div>

          <div className="glass-panel p-4">
            <h5 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', marginBottom: 16 }}>// SOFT SKILLS</h5>
            {['Fluent English Communication', 'Self-Motivated', 'Quick Learner', 'Team Player', 'Responsible'].map(s => (
              <p key={s} style={{ display: 'flex', gap: 8, color: 'var(--text-secondary)', fontSize: '0.875rem', margin: '5px 0' }}>
                <span style={{ color: 'var(--accent-green)' }}>✓</span> {s}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;
