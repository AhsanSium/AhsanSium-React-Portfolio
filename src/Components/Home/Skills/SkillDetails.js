import React, { useState } from 'react';

const SkillDetails = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="skill-chip"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={skill.image}
        alt={skill.name}
        style={{ width: 28, height: 28, objectFit: 'contain', flexShrink: 0 }}
      />
      <span style={{
        fontFamily: 'var(--f-mono)',
        fontSize: '.85rem',
        fontWeight: 600,
        color: 'var(--t1)',
        whiteSpace: 'nowrap',
        letterSpacing: '.01em',
      }}>
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
