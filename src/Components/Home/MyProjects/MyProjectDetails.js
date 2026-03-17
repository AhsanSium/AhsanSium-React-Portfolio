import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const MyProjectDetails = ({ data }) => {
  if (!data) return null;

  return (
    <div className="glass-panel p-4 p-md-5 mb-4">
      <div className="row align-items-center gy-4">
        {/* Screenshot */}
        <div className="col-md-7">
          <div style={{
            borderRadius: 10,
            overflow: 'hidden',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}>
            <img
              src={data.img1}
              className="img-fluid d-block w-100"
              alt={data.name}
              style={{ display: 'block' }}
            />
          </div>
        </div>

        {/* Info */}
        <div className="col-md-5 ps-md-4">
          <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-green)', fontSize: '0.75rem', marginBottom: 6 }}>
            // project
          </p>
          <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: 8 }}>{data.name}</h4>
          <p style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: 12 }}>
            {data.description}
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: 20 }}>
            {data.features?.split('.').slice(0, 4).filter(Boolean).join('. ')}.
          </p>

          {/* Links */}
          <div className="d-flex flex-wrap gap-2 project-details">
            <a href={data.liveSite} target="_blank" rel="noreferrer"
              className="btn-cyber"
              style={{ padding: '8px 16px', fontSize: '0.8rem' }}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
              Live Site
            </a>
            {data.codeClient && (
              <a href={data.codeClient} target="_blank" rel="noreferrer"
                className="btn-cyber-outline"
                style={{ padding: '7px 14px', fontSize: '0.8rem' }}
              >
                <FontAwesomeIcon icon={faGithub} className="me-2" />
                Client
              </a>
            )}
            {data.codeServer && (
              <a href={data.codeServer} target="_blank" rel="noreferrer"
                className="btn-cyber-outline"
                style={{ padding: '7px 14px', fontSize: '0.8rem' }}
              >
                <FontAwesomeIcon icon={faCode} className="me-2" />
                Server
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjectDetails;
