import React from 'react';
import './index.css';

function About() {
    return(
        <div id="about" className='container'>
            <h1 className="heading">About</h1>
            <main>
                <p>
                    I am a frontend web developer with a graduate level education and the skills to
                    build Sleek and Responsive User Interfaces while maintaining the W3C standards.
                </p>
                <p>
                    I learned how to code using a combination of books, online resources and the very
                    helpful developers' online community, and of course, my learning isn't slowing down. I have also acquired certification 
                    in <a href="https://www.freecodecamp.org/certification/debull/responsive-web-design">Responsive
                    Web Design</a> and <a href="https://www.freecodecamp.org/certification/debull/javascript-algorithms-and-data-structures">
                        JavaScript Algorithms and Data Structures</a>.
                </p>

                <p>
                    <strong>My goal:</strong> to become a fullstack developer and solve problems more efficiently... with code.
                </p>
                <h2 className="heading">What Do I know?</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3/SCSS</li>
                    <li>JavaScript/ES6</li>
                    <li>React/Redux</li>
                    <li>Git/Github</li>
                </ul>
            </main>
        </div>
    );
}

export default About;