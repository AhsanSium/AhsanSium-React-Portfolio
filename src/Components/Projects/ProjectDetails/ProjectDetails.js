import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectDetails = ({ project }) => {
  const { id, img1, img2, img3, name, features, description, technology, liveSite, codeClient, codeServer } = project;

  return (
    <div className="container mb-5">
      <div className="glass-panel p-4 p-md-5">
        <div className="row align-items-start gy-4">
          {/* Carousel */}
          <div className="col-md-7">
            <div id={id} className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
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
                      width: 8, height: 8, borderRadius: '50%', border: 'none',
                      background: i === 0 ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.3)',
                    }}
                  />
                ))}
              </div>
              <div className="carousel-inner" style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                {[img1, img2, img3].map((img, i) => (
                  <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                    <img src={img} className="d-block w-100" alt={`${name} screenshot ${i + 1}`} style={{ maxHeight: 320, objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="col-md-5 ps-md-4">
            <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-green)', fontSize: '0.75rem', marginBottom: 4 }}>// project</p>
            <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: 6 }}>{name}</h3>
            <p style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: 14 }}>{description}</p>

            <div className="mb-4">
              <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: 8 }}>// features</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.75 }}>{features}</p>
            </div>

            {technology && (
              <div className="mb-4">
                <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: 8 }}>// tech_stack</p>
                <div className="d-flex flex-wrap gap-1">
                  {technology.split(',').map(t => t.trim()).filter(Boolean).map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="d-flex flex-wrap gap-2 project-details mt-3">
              <a href={liveSite} target="_blank" rel="noreferrer" className="btn-cyber" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />Live
              </a>
              {codeClient && (
                <a href={codeClient} target="_blank" rel="noreferrer" className="btn-cyber-outline" style={{ padding: '7px 12px', fontSize: '0.8rem' }}>
                  <FontAwesomeIcon icon={faGithub} className="me-2" />Client
                </a>
              )}
              {codeServer && (
                <a href={codeServer} target="_blank" rel="noreferrer" className="btn-cyber-outline" style={{ padding: '7px 12px', fontSize: '0.8rem' }}>
                  <FontAwesomeIcon icon={faCode} className="me-2" />Server
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
