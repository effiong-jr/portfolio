import React from 'react';
import './index.css';

function About() {
    return(
        <div id="about" >
            <main >
                <h1 className="heading">About</h1>
                <p>
                    I am a Front End Web Developer currently based in Lagos - Nigeria, with the passion, knowledge and skills to
                    build Sleek and Responsive User Interfaces following the industry's best practices.
                </p>
                <p>
                    I enjoy working within a team of other like-minded individuals, but also capable of working independently 
                    to to achieve goals. 
                    I am passionate about the web and technology in general, and always looking forward to the next big challenge 
                    to to expand my knowledge. 
                </p>

                <p>
                    <strong>My goal:</strong> to become a fullstack (MERN) developer.
                </p>

                <h2 className="heading">What Do I know?</h2>
                <ul id="tools">
                    <li>HTML5</li>
                    <li>CSS3/SCSS</li>
                    <li>JavaScript/ES6</li>
                    <li>jQuery</li>
                    <li>React.js/Redux</li>
                    <li>Git/Github</li>
                </ul>
            </main>
            
        </div>
    );
}

export default About;