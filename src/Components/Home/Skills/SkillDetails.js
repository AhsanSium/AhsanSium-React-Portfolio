import React from 'react';

const SkillDetails = ({ skill }) => (
  <div className="col">
    <div className="h-100 skill-card">
      <div style={{
        width: 70, height: 70,
        borderRadius: 14,
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 16px',
        boxShadow: '0 0 16px rgba(0,212,255,0.1)',
      }}>
        <img
          src={skill.image}
          alt={skill.name}
          style={{ width: 44, height: 44, objectFit: 'contain' }}
        />
      </div>
      <h5 style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: 8 }}>
        {skill.name}
      </h5>
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '0.82rem',
        fontFamily: 'var(--font-mono)',
        lineHeight: 1.7,
        margin: 0,
        textAlign: 'left',
      }}>
        {skill.description}
      </p>
    </div>
  </div>
);

export default SkillDetails;
