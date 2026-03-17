import React from 'react';
import MongoDB from '../../../images/mongoDB.png';
import express from '../../../images/expressjs.png';
import react from '../../../images/react.png';
import node from '../../../images/nodejs.png';
import SkillDetails from './SkillDetails';
import './Skills.css';

const skillsData = [
  {
    name: 'MongoDB',
    image: MongoDB,
    description: 'CRUD operations, data indexing, aggregation pipelines, Atlas cloud hosting.',
  },
  {
    name: 'Express.js',
    image: express,
    description: 'REST APIs, routing, middleware, authentication, file upload handling.',
  },
  {
    name: 'React.js',
    image: react,
    description: 'JSX, hooks, context API, React Router, state management, performance.',
  },
  {
    name: 'Node.js',
    image: node,
    description: 'Modules, HTTP servers, file system, NPM ecosystem, event-driven architecture.',
  },
];

const Skills = () => (
  <section style={{ padding: '60px 0 80px' }}>
    <div className="container">
      <div className="text-center mb-5">
        <p className="section-label">// stack.mern</p>
        <h2 className="section-title">
          Core <span className="gradient-text">Skills</span>
        </h2>
        <div className="neon-line mx-auto" />
      </div>

      <div className="row row-cols-2 row-cols-md-4 g-3">
        {skillsData.map(skill => (
          <SkillDetails key={skill.name} skill={skill} />
        ))}
      </div>

      <div className="text-center mt-5">
        <a href="/about" className="btn-cyber-outline">
          view all skills →
        </a>
      </div>
    </div>
  </section>
);

export default Skills;
