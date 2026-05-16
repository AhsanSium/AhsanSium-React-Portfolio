import React from 'react';
import Contact from '../../Contact/Contact';

const ContactMe = () => (
  <section style={{ padding: '64px 0 80px', background: 'var(--bg-s)' }}>
    <div className="container">
      <div className="row gy-5 align-items-start">

        {/* Left: headline */}
        <div className="col-md-4">
          <p className="sec-label">// contact.init()</p>
          <h2 style={{
            fontFamily: 'var(--f-display)',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 900, lineHeight: 1.1,
            color: 'var(--t1)', marginBottom: 16,
            letterSpacing: '-0.02em',
          }}>
            Have a<br />project?<br />
            <span style={{ color: 'var(--ac)' }}>Let's talk.</span>
          </h2>
          <div style={{ width: 36, height: 2, background: 'var(--ac)', borderRadius: 2, marginBottom: 20 }} />

          <p style={{ color: 'var(--t2)', fontSize: '.9rem', lineHeight: 1.75, maxWidth: 300 }}>
            Whether you have a full-scale project, a quick question, or just want to say hello — my inbox is always open.
          </p>

          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'Email', value: 'ahsanulhaquesium@gmail.com', href: 'mailto:ahsanulhaquesium@gmail.com' },
              { label: 'GitHub', value: 'AhsanSium', href: 'https://github.com/AhsanSium' },
              { label: 'LinkedIn', value: 'ahsan-sium', href: 'https://www.linkedin.com/in/ahsan-sium/' },
            ].map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'flex', flexDirection: 'column',
                  textDecoration: 'none', transition: 'color .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--ac)'}
                onMouseLeave={e => e.currentTarget.style.color = 'inherit'}
              >
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: '.66rem', color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                  {label}
                </span>
                <span style={{ fontSize: '.85rem', color: 'var(--t2)', marginTop: 1 }}>
                  {value}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="col-md-8">
          <div className="panel p-4 p-md-5">
            <p style={{
              fontFamily: 'var(--f-mono)', fontSize: '.68rem',
              color: 'var(--t3)', letterSpacing: '.1em',
              textTransform: 'uppercase', marginBottom: 24,
            }}>
              // send_message()
            </p>
            <Contact />
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ContactMe;
