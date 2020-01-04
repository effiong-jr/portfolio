import React from 'react';

import CustomButton from '../CustomButton/CustomButton';
import {projectData} from '../../assets/projectData';

import './index.css';

function Projects() {
    const projects = projectData.map( project => (
        <div className="project" key={project.id}>
            <div className="img-container">
                <img className="rounded mx-auto d-block" src={project.image} alt={project.title} />
            </div>
            <p className="desc">{project.desc}</p>

            <div className="button-container">
                <CustomButton className="btn">
                    <a href={project.demoLink}>App Demo</a>
                </CustomButton>

                <CustomButton>
                    <a href={project.codeLink}>GitHub</a>
                </CustomButton>

            </div>
        </div>
    ))
    return(
        <div className="projects">
            <h2 className="heading">Projects</h2>
            <div className="row text-center projects-container">
                {projects}
            </div>
        </div>
    );
}

export default Projects;