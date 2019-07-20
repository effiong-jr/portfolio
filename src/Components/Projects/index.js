import React from 'react';
import techDoc from '../../assets/projects/technicalDoc.PNG';
import quoteMachine from '../../assets/projects/quoteMachine.PNG';
import artMaker from '../../assets/projects/pixelArtMaker.PNG';
import todoApp from '../../assets/projects/todoApp.PNG';
import './index.css';

function Projects() {
    return(
        <div id="projects" className="container">
            <h2 className="heading">Projects</h2>
            <div id="projects-container" className="row text-center">
                <div className="col-md-6 col-xs-12">
                    <a href="https://codepen.io/debull/full/pYQOYw">
                        <img className="img-fluid rounded mx-auto d-block" src={techDoc} alt="JavaScript Documentation Project" />
                        <p> JavaScript Documentation Project</p>
                    </a>
                </div>
                <div className="col-md-6 col-xs-12">
                    <a href="https://github.com/effiong-jr/Todo-App-with-React-and-Redux">
                        <img className="img-fluid rounded mx-auto d-block" src={todoApp} alt="Todo App" />
                        <p>A Simple Todo App with React and Redux</p>
                    </a>
                </div>
                <div className="col-md-6 col-xs-12">
                    <a href="https://codepen.io/debull/full/zVBgOz">
                        <img className="img-fluid rounded mx-auto d-block" src={quoteMachine} alt="Random Quote Machine Project" />
                        <p>Random Quote Machine</p>
                    </a>
                </div>
                <div className="col-md-6 col-xs-12">
                    <a href="https://effiong-jr.github.io/pixel_art_maker/">
                        <img className="img-fluid rounded mx-auto d-block" src={artMaker} alt="Pixel Art Maker Project" />
                        <p>Pixel Art Maker</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;