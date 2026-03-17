import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import git from '../../../images/git.png';
import vscode from '../../../images/vscode.png';
import chrome from '../../../images/chromedevtool.png';
import firebase from '../../../images/firebase.png';
import heroku from '../../../images/heroku.png';
import netlify from '../../../images/netlify.png';
import postgresql from '../../../images/postgresql.svg';
import docker from '../../../images/docker.svg';
import './Programming.css';

const LANGS = [
  { label: 'JS',    value: 75 },
  { label: 'HTML5', value: 90 },
  { label: 'CSS3',  value: 85 },
  { label: 'C++',   value: 65 },
  { label: 'C',     value: 60 },
  { label: 'Java',  value: 50 },
  { label: 'Go',    value: 70 },
  { label: 'PHP',   value: 68 },
];

const TOOLS = [
  { img: git,        label: 'Git' },
  { img: vscode,     label: 'VS Code' },
  { img: chrome,     label: 'DevTools' },
  { img: firebase,   label: 'Firebase' },
  { img: heroku,     label: 'Heroku' },
  { img: netlify,    label: 'Netlify' },
  { img: postgresql, label: 'PostgreSQL' },
  { img: docker,     label: 'Docker' },
];

const progressStyle = (value) => buildStyles({
  pathColor: value >= 80 ? '#00d4ff' : value >= 65 ? '#7b2fff' : '#00ff88',
  trailColor: 'rgba(255,255,255,0.06)',
  textColor: '#e2e8f0',
  textSize: '18px',
  pathTransitionDuration: 1,
});

const Programming = () => (
  <section style={{ padding: '60px 0 80px' }}>
    <div className="container">
      <div className="text-center mb-5">
        <p className="section-label">// skills.programming</p>
        <h2 className="section-title">
          Programming <span className="gradient-text">& Tools</span>
        </h2>
        <div className="neon-line mx-auto" />
      </div>

      <div className="glass-panel p-4 p-md-5">
        <div className="row gy-5">
          {/* Language proficiency */}
          <div className="col-md-7">
            <h6 style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: 24 }}>
              // languages
            </h6>
            <div className="row row-cols-3 g-3">
              {LANGS.map(({ label, value }) => (
                <div key={label} className="col text-center">
                  <div style={{ width: 90, margin: '0 auto 8px' }}>
                    <CircularProgressbar
                      value={value}
                      text={label}
                      styles={progressStyle(value)}
                    />
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0 }}>
                    {value}%
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="col-md-5">
            <h6 style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: 24 }}>
              // tools &amp; platforms
            </h6>
            <div className="row row-cols-3 g-3 toolsSection">
              {TOOLS.map(({ img, label }) => (
                <div key={label} className="col text-center tool-item">
                  <div style={{
                    width: 52, height: 52,
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 6px',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0,212,255,0.2)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <img src={img} alt={label} />
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0 }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Programming;
