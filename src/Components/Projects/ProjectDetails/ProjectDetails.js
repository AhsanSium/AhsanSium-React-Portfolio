import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectDetails = ({ project, index }) => {
  const { id, img1, img2, img3, name, features, description, technology, liveSite, codeClient, codeServer } = project;
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="container mb-4">
      <div className="panel overflow-hidden">
        <div className="row g-0 align-items-stretch">

          {/* Carousel side */}
          <div className={`col-md-7 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
            <div
              id={id}
              className="carousel slide h-100"
              data-bs-ride="carousel"
              style={{ minHeight: 300 }}
            >
              <div className="carousel-indicators" style={{ bottom: 12 }}>
                {[0, 1, 2].map(i => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target={`#${id}`}
                    data-bs-slide-to={i}
                    className={i === 0 ? 'active' : ''}
                    aria-current={i === 0 ? 'true' : undefined}
                    aria-label={`Slide ${i + 1}`}
                    style={{
                      width: i === 0 ? 20 : 6, height: 6,
                      borderRadius: 3, border: 'none',
                      background: i === 0 ? 'var(--ac)' : 'rgba(255,255,255,0.35)',
                      transition: 'width .3s',
                    }}
                  />
                ))}
              </div>
              <div className="carousel-inner h-100">
                {[img1, img2, img3].map((img, i) => (
                  <div key={i} className={`carousel-item h-100${i === 0 ? ' active' : ''}`}>
                    <img
                      src={img}
                      className="d-block w-100 h-100"
                      alt={`${name} screenshot ${i + 1}`}
                      style={{ objectFit: 'cover', maxHeight: 380 }}
                    />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev" style={{ width: 44 }}>
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next" style={{ width: 44 }}>
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Details side */}
          <div
            className={`col-md-5 ${index % 2 !== 0 ? 'order-md-1' : ''}`}
            style={{
              padding: '32px 28px',
              borderLeft: index % 2 === 0 ? '1px solid var(--ln)' : 'none',
              borderRight: index % 2 !== 0 ? '1px solid var(--ln)' : 'none',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
            }}
          >
            <p style={{
              fontFamily: 'var(--f-mono)', fontSize: '.68rem',
              color: 'var(--t3)', textTransform: 'uppercase',
              letterSpacing: '.1em', marginBottom: 8,
            }}>
              {num} // project
            </p>

            <h3 style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(1.3rem, 2vw, 1.65rem)',
              fontWeight: 800, color: 'var(--t1)',
              lineHeight: 1.2, marginBottom: 8,
            }}>
              {name}
            </h3>

            <p style={{
              fontFamily: 'var(--f-mono)', fontSize: '.78rem',
              color: 'var(--ac)', marginBottom: 16, letterSpacing: '.03em',
            }}>
              {description}
            </p>

            <div style={{ marginBottom: 16 }}>
              <p style={{
                fontFamily: 'var(--f-mono)', color: 'var(--t3)',
                fontSize: '.66rem', textTransform: 'uppercase',
                letterSpacing: '.08em', marginBottom: 8,
              }}>
                // features
              </p>
              <p style={{ color: 'var(--t2)', fontSize: '.85rem', lineHeight: 1.75 }}>{features}</p>
            </div>

            {technology && (
              <div style={{ marginBottom: 20 }}>
                <p style={{
                  fontFamily: 'var(--f-mono)', color: 'var(--t3)',
                  fontSize: '.66rem', textTransform: 'uppercase',
                  letterSpacing: '.08em', marginBottom: 8,
                }}>
                  // tech_stack
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', margin: '-2px' }}>
                  {technology.split(',').map(t => t.trim()).filter(Boolean).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto', paddingTop: 8 }} className="project-details">
              <a
                href={liveSite} target="_blank" rel="noreferrer"
                className="btn-prime"
                style={{ padding: '7px 14px', fontSize: '.78rem' }}
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: '.75rem' }} />
                Live
              </a>
              {codeClient && (
                <a
                  href={codeClient} target="_blank" rel="noreferrer"
                  className="btn-outline"
                  style={{ padding: '6px 12px', fontSize: '.78rem' }}
                >
                  <FontAwesomeIcon icon={faGithub} style={{ fontSize: '.8rem' }} />
                  Client
                </a>
              )}
              {codeServer && (
                <a
                  href={codeServer} target="_blank" rel="noreferrer"
                  className="btn-outline"
                  style={{ padding: '6px 12px', fontSize: '.78rem' }}
                >
                  <FontAwesomeIcon icon={faCode} style={{ fontSize: '.8rem' }} />
                  Server
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
