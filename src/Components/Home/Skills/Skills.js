import React from 'react';
import MongoDB from '../../../images/mongoDB.png';
import express from '../../../images/expressjs.png';
import react from '../../../images/react.png';
import node from '../../../images/nodejs.png';
import SkillDetails from './SkillDetails';
import './Skills.css';

const Skills = () => {

    const skillsData = [
        {
            name: 'MongoDB',
            image:MongoDB,
            description:`Create, Read, Update, Delete Operations
            Data secure, Data indexing ....
            `
        },
        {
            name: 'Express.js',
            image:express,
            description:` Express get, Post, Request, Response, Routing, Middleware, File Upload, Template ....
            `
        },
        {
            name: 'React.js',
            image:react,
            description:`JSX, Rendering, Components, Hooks, Context, ReactDom, State ,Routing,  .......
            `
        },
        {
            name: 'Node.js',
            image:node,
            description:`Modules, HTTP, File System, NPM, Events, node.js MongoDB ........
            `
        }
    ]

    return (
        <div className='pt-5 pb-5 container'>
            <h3 className='counter-no pb-5'>Skills</h3>
            <div class="container row row-cols-2 row-cols-md-4 g-2 d-flex justify-content-center">
                {
                    skillsData.map( skill => <SkillDetails skill={skill}></SkillDetails> )
                }
                <a href="/about">
                    <button className='btn styled-btn-info styled-btn-bg-info mt-5'>Learn More</button>
                </a>
            </div>
        </div>
    );
};

export default Skills;