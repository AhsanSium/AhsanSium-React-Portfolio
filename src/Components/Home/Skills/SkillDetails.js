import React, { useState } from 'react';

const SkillDetails = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="skill-chip"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={skill.image} alt={skill.name} style={{ width: 32, height: 32, objectFit: 'contain', flexShrink: 0 }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
        {skill.name}
      </span>
      {hovered && (
        <div className="skill-chip-tooltip">
          {skill.description}
        </div>
      )}
    </div>
  );
};

export default SkillDetails;
