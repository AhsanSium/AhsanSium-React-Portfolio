import React from 'react';
import git from '../../../images/git.png';
import vscode from '../../../images/vscode.png';
import chrome from '../../../images/chromedevtool.png';
import firebase from '../../../images/firebase.png';
import heroku from '../../../images/heroku.png';
import netlify from '../../../images/netlify.png';
import postgresql from '../../../images/postgresql.svg';
import docker from '../../../images/docker.svg';

const LANGS = [
  { label: 'HTML5',      value: 90, color: 'var(--ac)' },
  { label: 'CSS3',       value: 85, color: 'var(--ac)' },
  { label: 'JavaScript', value: 75, color: 'var(--ac2)' },
  { label: 'Go',         value: 70, color: 'var(--ac)' },
  { label: 'PHP',        value: 68, color: 'var(--ac2)' },
  { label: 'C++',        value: 65, color: 'var(--ac)' },
  { label: 'C',          value: 60, color: 'var(--ac2)' },
  { label: 'Java',       value: 50, color: 'var(--ac)' },
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

const SkillBar = ({ label, value, color }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      marginBottom: 6,
    }}>
      <span style={{
        fontFamily: 'var(--f-mono)', fontSize: '.78rem',
        fontWeight: 600, color: 'var(--t2)', letterSpacing: '.02em',
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: 'var(--f-mono)', fontSize: '.7rem',
        color: 'var(--t3)', letterSpacing: '.03em',
      }}>
        {value}%
      </span>
    </div>
    <div style={{
      height: 3, background: 'var(--bg-s)', borderRadius: 2, overflow: 'hidden',
    }}>
      <div style={{
        height: '100%', width: `${value}%`,
        background: color, borderRadius: 2,
        transition: 'width 1.2s ease',
      }} />
    </div>
  </div>
);

const Programming = () => (
  <section style={{ padding: '64px 0 80px' }}>
    <div className="container">
      <div className="text-center mb-5">
        <p className="sec-label">// skills.programming</p>
        <h2 className="sec-heading">
          Languages <span style={{ color: 'var(--ac)' }}>&</span> Tools
        </h2>
        <div className="sec-rule mx-auto" />
      </div>

      <div className="panel p-4 p-md-5">
        <div className="row gy-5">

          {/* Language bars */}
          <div className="col-md-7">
            <p style={{
              fontFamily: 'var(--f-mono)', color: 'var(--t3)',
              fontSize: '.68rem', textTransform: 'uppercase',
              letterSpacing: '.1em', marginBottom: 24,
            }}>
              // languages
            </p>
            <div className="row g-0">
              <div className="col-12 col-sm-6 pe-sm-4">
                {LANGS.slice(0, 4).map(l => <SkillBar key={l.label} {...l} />)}
              </div>
              <div className="col-12 col-sm-6">
                {LANGS.slice(4).map(l => <SkillBar key={l.label} {...l} />)}
              </div>
            </div>
          </div>

          {/* Tools grid */}
          <div className="col-md-5">
            <p style={{
              fontFamily: 'var(--f-mono)', color: 'var(--t3)',
              fontSize: '.68rem', textTransform: 'uppercase',
              letterSpacing: '.1em', marginBottom: 24,
            }}>
              // tools &amp; platforms
            </p>
            <div className="row row-cols-4 g-3">
              {TOOLS.map(({ img, label }) => (
                <div key={label} className="col text-center">
                  <div
                    style={{
                      width: 48, height: 48,
                      background: 'var(--bg-s)',
                      border: '1px solid var(--ln)',
                      borderRadius: 10,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 6px',
                      transition: 'border-color .2s, transform .15s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ac)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ln)'; e.currentTarget.style.transform = 'none'; }}
                  >
                    <img src={img} alt={label} style={{ width: 26, height: 26, objectFit: 'contain' }} />
                  </div>
                  <p style={{
                    fontFamily: 'var(--f-mono)', fontSize: '.64rem',
                    color: 'var(--t3)', margin: 0, letterSpacing: '.03em',
                  }}>
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
