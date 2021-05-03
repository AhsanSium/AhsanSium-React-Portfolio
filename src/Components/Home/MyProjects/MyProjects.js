import React from 'react';
import { Link } from 'react-router-dom';
import ProjectData from '../../Projects/ProjectData';
import MyProjectDetails from './MyProjectDetails';
const MyProjects = () => {
    return (
        <div className="pt-5 my-projects pb-5">
            <div className="container">
                <h3 className='counter-no pt-5'>My Projects</h3>
                {
                    <MyProjectDetails data={ProjectData[0]} ></MyProjectDetails>
                }
                {
                    <MyProjectDetails data={ProjectData[1]} ></MyProjectDetails>
                }
                {
                    <MyProjectDetails data={ProjectData[2]} ></MyProjectDetails>
                }

            </div>
            <a href='/projects'>
            <button className='btn styled-btn-info styled-btn-bg-info mt-5'>See More</button>
            </a>
        </div>
    );
};

export default MyProjects;