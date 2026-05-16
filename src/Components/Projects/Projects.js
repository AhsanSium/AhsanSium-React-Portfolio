import React from 'react';
import ProjectData from './ProjectData';
import ProjectDetails from './ProjectDetails/ProjectDetails';

const Projects = () => (
  <>
    {/* Page header */}
    <div style={{
      padding: '72px 0 48px',
      background: 'var(--bg-s)',
      borderBottom: '1px solid var(--ln)',
    }}>
      <div className="container">
        <p className="sec-label">// projects.all()</p>
        <h1 style={{
          fontFamily: 'var(--f-display)',
          fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
          fontWeight: 900, color: 'var(--t1)',
          lineHeight: 1.1, marginBottom: 12,
          letterSpacing: '-0.02em',
        }}>
          My <span style={{ color: 'var(--ac)' }}>Projects</span>
        </h1>
        <p style={{ color: 'var(--t2)', fontSize: '.95rem', maxWidth: 480, lineHeight: 1.75 }}>
          {ProjectData.length} projects built across full-stack, backend, and front-end domains.
        </p>
      </div>
    </div>

    <div style={{ padding: '48px 0 80px' }}>
      {ProjectData.map((project, i) => (
        <ProjectDetails key={project.id} project={project} index={i} />
      ))}
    </div>
  </>
);

export default Projects;
