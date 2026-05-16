import React, { useState } from 'react';
import client1 from '../../../images/client1.jpg';
import client2 from '../../../images/client2.jpg';
import client3 from '../../../images/client3.jpg';

const TESTIMONIALS = [
  {
    img: client1, name: 'John Smith', role: 'Product Owner',
    text: 'Ahsan delivered exceptional work on our web platform. His attention to detail and technical expertise exceeded our expectations every step of the way.',
  },
  {
    img: client2, name: 'Mike Williams', role: 'Startup Founder',
    text: 'Professional, responsive, and highly skilled. Ahsan built a robust full-stack solution that perfectly matched our requirements and timeline.',
  },
  {
    img: client3, name: 'Peter Johnson', role: 'Tech Lead',
    text: 'Outstanding developer with a great eye for design. Delivered the project on time with clean, maintainable code that our team could build upon.',
  },
];

const QuoteIcon = () => (
  <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 22V14.3C0 10.7 0.9 7.7 2.7 5.3C4.5 2.9 7.2 1.1 10.8 0L12.6 3C10.2 3.8 8.4 5 7.2 6.6C6 8.2 5.3 10 5.2 12H11V22H0ZM17 22V14.3C17 10.7 17.9 7.7 19.7 5.3C21.5 2.9 24.2 1.1 27.8 0L29.6 3C27.2 3.8 25.4 5 24.2 6.6C23 8.2 22.3 10 22.2 12H28V22H17Z"
      fill="currentColor" opacity="0.25" />
  </svg>
);

const ClientsSay = () => {
  const [active, setActive] = useState(0);
  const { name, role, text, img } = TESTIMONIALS[active];

  return (
    <section style={{ padding: '64px 0 80px', background: 'var(--bg)' }}>
      <div className="container">
        <div className="row align-items-start gy-5">

          {/* Left: heading + selector */}
          <div className="col-md-4">
            <p className="sec-label">// testimonials</p>
            <h2 className="sec-heading">
              What Clients <span style={{ color: 'var(--ac)' }}>Say</span>
            </h2>
            <div className="sec-rule" />
            <p style={{ color: 'var(--t2)', fontSize: '.9rem', lineHeight: 1.7, maxWidth: 340, marginBottom: 28 }}>
              Feedback from people I've had the pleasure of building with.
            </p>

            {/* Client selector tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {TESTIMONIALS.map(({ name, role, img: cImg }, i) => (
                <button
                  key={name}
                  onClick={() => setActive(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    background: active === i ? 'var(--bg-c)' : 'transparent',
                    border: `1px solid ${active === i ? 'var(--ln-h)' : 'var(--ln)'}`,
                    borderLeft: `2px solid ${active === i ? 'var(--ac)' : 'transparent'}`,
                    borderRadius: 8, padding: '10px 14px',
                    cursor: 'pointer',
                    transition: 'all .2s',
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    overflow: 'hidden', flexShrink: 0,
                    border: `2px solid ${active === i ? 'var(--ac)' : 'var(--ln)'}`,
                  }}>
                    <img src={cImg} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '.82rem', fontWeight: 700, color: active === i ? 'var(--t1)' : 'var(--t2)', fontFamily: 'var(--f-body)' }}>
                      {name}
                    </p>
                    <p style={{ margin: 0, fontSize: '.7rem', color: 'var(--t3)', fontFamily: 'var(--f-mono)' }}>
                      {role}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Quote card */}
          <div className="col-md-8">
            <div className="panel p-4 p-md-5" style={{ position: 'relative', minHeight: 280, transition: 'all .3s' }}>
              {/* Big quote mark */}
              <div style={{ color: 'var(--ac)', marginBottom: 20 }}>
                <QuoteIcon />
              </div>

              <p style={{
                fontSize: 'clamp(.95rem, 1.8vw, 1.15rem)',
                color: 'var(--t1)',
                lineHeight: 1.85,
                fontStyle: 'italic',
                marginBottom: 28,
                fontFamily: 'var(--f-display)',
                fontWeight: 400,
              }}>
                "{text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  overflow: 'hidden', border: '2px solid var(--ac)',
                  flexShrink: 0,
                }}>
                  <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, color: 'var(--t1)', fontSize: '.9rem' }}>{name}</p>
                  <p style={{ margin: 0, fontFamily: 'var(--f-mono)', fontSize: '.7rem', color: 'var(--t3)', letterSpacing: '.04em' }}>
                    {role}
                  </p>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  {/* Pagination dots */}
                  <div style={{ display: 'flex', gap: 6 }}>
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        style={{
                          width: i === active ? 20 : 6,
                          height: 6,
                          borderRadius: 3,
                          background: i === active ? 'var(--ac)' : 'var(--ln-h)',
                          border: 'none', cursor: 'pointer', padding: 0,
                          transition: 'width .3s, background .2s',
                        }}
                        aria-label={`Testimonial ${i + 1}`}
                      />
                    ))}
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

export default ClientsSay;
