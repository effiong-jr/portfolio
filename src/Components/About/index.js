import React from 'react';
import './index.css';

function About() {
    return(
        <div id="about" >
            <main >
                <h1 className="heading">About</h1>
                <p>
                    I am a frontend web developer with a graduate level education and the skills to
                    build Sleek and Responsive User Interfaces while maintaining the W3C standards.
                </p>
                <p>
                    I learned how to code using a combination of books, online resources and the very
                    helpful developers' online community, and of course, my learning isn't slowing down. I have also acquired certification 
                    in <a href="https://www.freecodecamp.org/certification/debull/responsive-web-design">Responsive
                    Web Design</a>, <a href="https://www.freecodecamp.org/certification/debull/javascript-algorithms-and-data-structures">
                        JavaScript Algorithms and Data Structures</a> and also a <a href="https://drive.google.com/open?id=1uvNjMNWDcVMzFp8q58iUyBRyf4ytrjlD">
                        Frontend Course Certificate</a> from Andela Nigeria.
                </p>

                <p>
                    <strong>My goal:</strong> to become a fullstack developer and solve problems more efficiently... with code.
                </p>

                <h2 className="heading">What Do I know?</h2>
                <ul id="tools">
                    <li>HTML5</li>
                    <li>CSS3/SCSS</li>
                    <li>JavaScript/ES6</li>
                    <li>jQuery</li>
                    <li>React/Redux</li>
                    <li>Git/Github</li>
                </ul>
            </main>
            
        </div>
    );
}

export default About;