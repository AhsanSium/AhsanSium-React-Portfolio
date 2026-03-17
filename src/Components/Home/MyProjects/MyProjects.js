import React from 'react';
import ProjectData from '../../Projects/ProjectData';
import MyProjectDetails from './MyProjectDetails';

const MyProjects = () => (
  <section className="my-projects" style={{ padding: '60px 0 80px' }}>
    <div className="container">
      <div className="text-center mb-5">
        <p className="section-label">// work.featured</p>
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="neon-line mx-auto" />
      </div>

      {ProjectData.slice(0, 3).map(project => (
        <MyProjectDetails key={project.id} data={project} />
      ))}

      <div className="text-center mt-4">
        <a href="/projects" className="btn-cyber">
          view all projects →
        </a>
      </div>
    </div>
  </section>
);

export default MyProjects;
