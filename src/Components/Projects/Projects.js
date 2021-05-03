import React from 'react';
import ProjectData from './ProjectData';
import ProjectDetails from './ProjectDetails/ProjectDetails';


const Projects = () => {

    

    return (
        <div className='pt-5'>
            <div className="">
                <h3>My Projects</h3>
            </div>
            {
                ProjectData.map(project => <ProjectDetails project={project}></ProjectDetails> )
            }
            
        </div>
    );
};

export default Projects;