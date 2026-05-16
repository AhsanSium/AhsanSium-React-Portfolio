import React from 'react';
import blog1 from '../../../images/blog1.jpeg';
import blog2 from '../../../images/blog2.jpeg';
import blog3 from '../../../images/blog3.jpeg';

const BLOGS = [
  { img: blog1, title: 'JavaScript Shortcuts', tag: 'JavaScript', desc: 'Explore powerful JS tricks that make your code cleaner, faster, and more expressive in fewer lines.' },
  { img: blog2, title: 'OOP Secrets',          tag: 'OOP',        desc: 'Understand the core principles of Object-Oriented Programming with real-world practical examples.' },
  { img: blog3, title: 'Design with Material UI', tag: 'React',   desc: 'Build stunning, responsive React UIs using Material UI components and a flexible theming system.' },
];

const MyBlog = () => (
  <section style={{ padding: '64px 0 80px', background: 'var(--bg)' }}>
    <div className="container">
      <div className="text-center mb-5">
        <p className="sec-label">// blog.articles[]</p>
        <h2 className="sec-heading">
          Latest <span style={{ color: 'var(--ac)' }}>Articles</span>
        </h2>
        <div className="sec-rule mx-auto" />
      </div>

      <div className="row g-4">
        {BLOGS.map(({ img, title, tag, desc }) => (
          <div key={title} className="col-md-4">
            <div
              className="panel h-100"
              style={{ overflow: 'hidden', cursor: 'default', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ overflow: 'hidden', height: 180, flexShrink: 0 }}>
                <img
                  src={img}
                  alt={title}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                    transition: 'transform .4s ease',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span className="tag" style={{ marginBottom: 12, alignSelf: 'flex-start' }}>{tag}</span>
                <h5 style={{
                  fontFamily: 'var(--f-display)', fontSize: '1.05rem',
                  fontWeight: 700, color: 'var(--t1)', marginBottom: 10,
                }}>
                  {title}
                </h5>
                <p style={{ color: 'var(--t2)', fontSize: '.85rem', lineHeight: 1.7, flex: 1 }}>
                  {desc}
                </p>
                <p style={{
                  fontFamily: 'var(--f-mono)', fontSize: '.72rem',
                  color: 'var(--t3)', marginTop: 14, marginBottom: 0,
                  letterSpacing: '.04em',
                }}>
                  // coming_soon
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
