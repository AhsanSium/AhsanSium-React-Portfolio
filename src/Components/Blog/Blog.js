import React from 'react';

const Blog = () => (
  <>
    <div className="page-header-section">
      <p className="section-label text-center">// blog.articles[]</p>
      <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
        Blog <span style={{ background: 'var(--gradient-cyber)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Section</span>
      </h1>
      <div className="neon-line mx-auto" />
    </div>

    <div className="container py-5" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel p-5 text-center" style={{ maxWidth: 480 }}>
        <div style={{
          width: 64, height: 64, borderRadius: 16,
          background: 'var(--gradient-cyber)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
          fontSize: '1.8rem',
          boxShadow: '0 0 24px rgba(0,212,255,0.3)',
        }}>
          ✍️
        </div>
        <h4 style={{ color: 'var(--text-primary)', marginBottom: 12 }}>Articles Coming Soon</h4>
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.7 }}>
          // TODO: write amazing articles about JavaScript, React, Node.js and more...
        </p>
        <div style={{ marginTop: 20 }}>
          <span style={{
            display: 'inline-block',
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--accent-green)',
            animation: 'blink 1.5s ease-in-out infinite',
            boxShadow: '0 0 8px var(--accent-green)',
          }} />
        </div>
      </div>
    </div>
  </>
);

export default Blog;
