import React from 'react';
import client1 from '../../../images/client1.jpg';
import client2 from '../../../images/client2.jpg';
import client3 from '../../../images/client3.jpg';

const ClientsSay = () => (
  <section style={{ padding: '60px 0 80px' }}>
    <div className="container">
      <div className="row align-items-center gy-5">
        {/* Heading side */}
        <div className="col-md-5">
          <p className="section-label">// testimonials.json</p>
          <h2 className="section-title">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <div className="neon-line" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 360 }}>
            Feedback from people I've had the pleasure of working with on various projects.
          </p>
        </div>

        {/* Carousel side */}
        <div className="col-md-7">
          <div className="glass-panel overflow-hidden">
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators" style={{ bottom: 10 }}>
                {[0, 1, 2].map(i => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to={i}
                    className={i === 0 ? 'active' : ''}
                    aria-current={i === 0 ? 'true' : undefined}
                    aria-label={`Slide ${i + 1}`}
                    style={{
                      width: 8, height: 8,
                      borderRadius: '50%',
                      background: i === 0 ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.3)',
                      border: 'none',
                    }}
                  />
                ))}
              </div>

              <div className="carousel-inner">
                {[
                  { img: client1, name: 'John Smith',      text: 'Ahsan delivered exceptional work on our web platform. His attention to detail and technical expertise exceeded our expectations.' },
                  { img: client2, name: 'Mike Williams',   text: 'Professional, responsive, and highly skilled. Ahsan built a robust full-stack solution that perfectly matched our requirements.' },
                  { img: client3, name: 'Peter Johnson',   text: 'Outstanding developer with a great eye for design. Delivered the project on time with clean, maintainable code.' },
                ].map(({ img, name, text }, i) => (
                  <div key={name} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                    <div style={{ position: 'relative' }}>
                      <img src={img} alt={name} className="d-block w-100" style={{ height: 280, objectFit: 'cover', opacity: 0.4 }} />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(8,13,26,0.95) 50%, rgba(8,13,26,0.5) 100%)',
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                        padding: '24px 28px',
                      }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic', lineHeight: 1.7, marginBottom: 12 }}>
                          "{text}"
                        </p>
                        <div className="d-flex align-items-center gap-2">
                          <div style={{
                            width: 36, height: 36, borderRadius: '50%',
                            background: 'var(--gradient-cyber)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.9rem', color: '#fff',
                          }}>
                            {name[0]}
                          </div>
                          <div>
                            <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{name}</p>
                            <p style={{ margin: 0, color: 'var(--accent-cyan)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>Client</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev"
                style={{ width: 40 }}>
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next"
                style={{ width: 40 }}>
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ClientsSay;
