import React from 'react';
import ProjectData from './ProjectData';
import ProjectDetails from './ProjectDetails/ProjectDetails';

const Projects = () => (
  <>
    <div className="page-header-section">
      <p className="section-label text-center">// projects.all()</p>
      <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
        My <span style={{ background: 'var(--gradient-cyber)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Projects</span>
      </h1>
      <div className="neon-line mx-auto" />
    </div>
    <div className="py-5">
      {ProjectData.map(project => (
        <ProjectDetails key={project.id} project={project} />
      ))}
    </div>
  </>
);

export default Projects;
