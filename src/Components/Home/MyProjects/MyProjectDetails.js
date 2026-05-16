import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const MyProjectDetails = ({ data, index }) => {
  if (!data) return null;
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="panel mb-4" style={{ overflow: 'hidden' }}>
      <div className="row g-0 align-items-stretch">

        {/* Screenshot */}
        <div className={`col-md-7 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
          <div style={{
            height: '100%', minHeight: 260,
            overflow: 'hidden',
            background: 'var(--bg-s)',
          }}>
            <img
              src={data.img1}
              alt={data.name}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', display: 'block',
                transition: 'transform .45s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        </div>

        {/* Info */}
        <div className={`col-md-5 ${index % 2 !== 0 ? 'order-md-1' : ''}`}
          style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <div style={{
            fontFamily: 'var(--f-mono)', fontSize: '.68rem',
            color: 'var(--t3)', letterSpacing: '.1em', marginBottom: 8,
            textTransform: 'uppercase',
          }}>
            {num} / project
          </div>

          <h3 style={{
            fontFamily: 'var(--f-display)',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
            fontWeight: 800, color: 'var(--t1)',
            lineHeight: 1.2, marginBottom: 8,
          }}>
            {data.name}
          </h3>

          <p style={{
            fontFamily: 'var(--f-mono)', fontSize: '.78rem',
            color: 'var(--ac)', marginBottom: 14, letterSpacing: '.03em',
          }}>
            {data.description}
          </p>

          <p style={{
            color: 'var(--t2)', fontSize: '.875rem',
            lineHeight: 1.75, marginBottom: 20,
          }}>
            {data.features?.split('.').slice(0, 3).filter(Boolean).join('. ')}.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }} className="project-details">
            <a
              href={data.liveSite} target="_blank" rel="noreferrer"
              className="btn-prime"
              style={{ padding: '7px 14px', fontSize: '.78rem' }}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: '.75rem' }} />
              Live Site
            </a>
            {data.codeClient && (
              <a
                href={data.codeClient} target="_blank" rel="noreferrer"
                className="btn-outline"
                style={{ padding: '6px 12px', fontSize: '.78rem' }}
              >
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: '.8rem' }} />
                Client
              </a>
            )}
            {data.codeServer && (
              <a
                href={data.codeServer} target="_blank" rel="noreferrer"
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
  );
};

export default MyProjectDetails;
