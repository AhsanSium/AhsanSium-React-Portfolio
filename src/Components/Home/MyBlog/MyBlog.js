import React from 'react';
import blog1 from '../../../images/blog1.jpeg';
import blog2 from '../../../images/blog2.jpeg';
import blog3 from '../../../images/blog3.jpeg';

const BLOGS = [
  { img: blog1, title: 'JavaScript Shortcuts', tag: 'JavaScript', desc: 'Explore powerful JS tricks that make your code cleaner, faster, and more expressive in fewer lines.' },
  { img: blog2, title: 'OOP Secrets',           tag: 'OOP',        desc: 'Understand the core principles of Object-Oriented Programming with real-world practical examples.' },
  { img: blog3, title: 'Design with Material UI', tag: 'React',    desc: 'Build stunning, responsive React UIs using Material UI components and theming system.' },
];

const MyBlog = () => (
  <section style={{ padding: '60px 0 80px' }}>
    <div className="container">
      <div className="text-center mb-5">
        <p className="section-label">// blog.articles[]</p>
        <h2 className="section-title">
          Latest <span className="gradient-text">Articles</span>
        </h2>
        <div className="neon-line mx-auto" />
      </div>

      <div className="row g-4 blog-section">
        {BLOGS.map(({ img, title, tag, desc }) => (
          <div key={title} className="col-md-4">
            <div className="glass-panel h-100 overflow-hidden" style={{ cursor: 'pointer' }}>
              <div style={{ overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                <img
                  src={img}
                  alt={title}
                  className="img-fluid d-block w-100"
                  style={{ height: 180, objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div className="p-4">
                <span className="tech-tag mb-3 d-inline-block">{tag}</span>
                <h5 style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: 10 }}>{title}</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
                <p style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginTop: 12 }}>
                  Coming Soon...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MyBlog;
