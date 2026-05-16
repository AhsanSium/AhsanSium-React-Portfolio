import React from 'react';
import ProjectData from '../../Projects/ProjectData';
import MyProjectDetails from './MyProjectDetails';

const MyProjects = () => (
  <section style={{ padding: '64px 0 80px', background: 'var(--bg-s)' }}>
    <div className="container">
      <div className="text-center mb-5">
        <p className="sec-label">// work.featured</p>
        <h2 className="sec-heading">
          Featured <span style={{ color: 'var(--ac)' }}>Projects</span>
        </h2>
        <div className="sec-rule mx-auto" />
        <p style={{ color: 'var(--t2)', fontSize: '.9rem', maxWidth: 460, margin: '0 auto' }}>
          A selection of full-stack applications — each built with purpose and care.
        </p>
      </div>

      {ProjectData.slice(0, 3).map((project, i) => (
        <MyProjectDetails key={project.id} data={project} index={i} />
      ))}

      <div className="text-center mt-5">
        <a href="/projects" className="btn-prime">
          view all projects →
        </a>
      </div>
    </div>
  </section>
);

export default MyProjects;
