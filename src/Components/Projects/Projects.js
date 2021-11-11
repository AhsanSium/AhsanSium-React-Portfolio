import React from 'react';
import ProjectData from './ProjectData';
import ProjectDetails from './ProjectDetails/ProjectDetails';


const Projects = () => {

    

    return (
        <div className=''>
            <div className="page-header-section">
                <h3 className='counter-no pb-5 pt-5'>My Projects</h3>
            </div>
            {
                ProjectData.map(project => <ProjectDetails project={project}></ProjectDetails> )
            }
            
        </div>
    );
};

export default Projects;