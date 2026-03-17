import React from 'react';
import MongoDB from '../../../images/mongoDB.png';
import express from '../../../images/expressjs.png';
import react from '../../../images/react.png';
import node from '../../../images/nodejs.png';
import golang from '../../../images/golang.svg';
import postgresql from '../../../images/postgresql.svg';
import php from '../../../images/php.svg';
import docker from '../../../images/docker.svg';
import SkillDetails from './SkillDetails';
import './Skills.css';

const skillsData = [
  {
    name: 'Golang',
    image: golang,
    description: 'Concurrent programming, REST APIs, CLI tools, microservices, standard library.',
  },
  {
    name: 'PostgreSQL',
    image: postgresql,
    description: 'Relational schemas, joins, indexing, stored procedures, full-text search.',
  },
  {
    name: 'PHP',
    image: php,
    description: 'Server-side scripting, Laravel, REST APIs, form handling, session management.',
  },
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
  {
    name: 'Docker',
    image: docker,
    description: 'Containerization, Docker Compose, multi-stage builds, image optimization, networking.',
  },
];

const row1 = skillsData.slice(0, 4);
const row2 = skillsData.slice(4);

const MarqueeRow = ({ items, reverse }) => {
  // Triplicate for a fully seamless loop regardless of screen width
  const tripled = [...items, ...items, ...items];
  return (
    <div className="marquee-wrapper" style={{ marginBottom: 16 }}>
      <div className={`marquee-track${reverse ? ' marquee-track-reverse' : ''}`}>
        {tripled.map((skill, i) => (
          <SkillDetails key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => (
  <section style={{ padding: '60px 0 80px', overflow: 'hidden' }}>
    <div className="container">
      <div className="text-center mb-5">
        <p className="section-label">// stack.core</p>
        <h2 className="section-title">
          Core <span className="gradient-text">Skills</span>
        </h2>
        <div className="neon-line mx-auto" />
      </div>
    </div>

    <MarqueeRow items={row1} reverse={false} />
    <MarqueeRow items={row2} reverse={true} />

    <div className="container">
      <div className="text-center mt-4">
        <a href="/about" className="btn-cyber-outline">
          view all skills →
        </a>
      </div>
    </div>
  </section>
);

export default Skills;
