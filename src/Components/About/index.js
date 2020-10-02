import React from 'react'
import './index.css'

function About() {
	return (
		<div id='about'>
			<main>
				<h1 className='heading'>About</h1>
				<p>
					I am a Front End Web Developer currently based in Lagos -
					Nigeria, with the passion, knowledge and skills to build
					Sleek and Responsive User Interfaces following the
					industry's best practices.
				</p>
				<p>
					I enjoy working within a team of other like-minded
					individuals, but also capable of working independently to to
					achieve goals. I am passionate about the web and technology
					in general, and always looking forward to the next big
					challenge to to expand my knowledge.
				</p>

				<p>
					<strong>My goal:</strong> to become a fullstack (MERN)
					developer.
				</p>

				<br />

				<h1 className='heading'>Experience:</h1>
				<h5>Front End Web Developer: Sterling Bank Plc (HQ)</h5>
				<p>January 2020 - Till date</p>
				<p>
					Working as part of a team of talented developers to solve
					problems and build a number of exciting software products.
				</p>
				<br />

				<h5>Front End Web Developer (Freelance)</h5>
				<p>
					Currently building Responsive Web Applications, and
					utilizing the power of the internet.
				</p>

				<br />

				<h5>
					Front End Developer (Intern):{' '}
					<a href='https://hotels.ng/'>HNG</a>
				</h5>
				<p>September 2019 - November 2019</p>
				<p>
					Developed web applications as part of a team, while building
					a solid experience on how to use{' '}
					<a href='https://slack.com/'>Slack</a> as a workspace tool
					and <a href='https://github.com/effiong-jr/'>Github</a> as a
					Git repository hosting service plus how to collaborate with
					other developers using these tools.
				</p>

				<br />

				<h5>
					Front End Developer (Intern):{' '}
					<a href='https://andela.com/'>Andela</a> (Andela Learning
					Community with Google)
				</h5>
				<p>June 2018 - August 2018</p>
				<p>
					With mentorship from andela, I was able to build projects
					with a solid understanding of the structure of modern web
					development, how to work as part of a team, developed the
					curiosity of a software engineer and how to conduct
					research.
				</p>

				<br />

				<h2 className='heading'>What Do I know?</h2>
				<ul id='tools'>
					<li>HTML5</li>
					<li>CSS3/SCSS</li>
					<li>Bootstrap 4</li>
					<li>JavaScript/ES6</li>
					<li>jQuery</li>
					<li>React.js/Redux</li>
					<li>Git/Github</li>
				</ul>
			</main>
		</div>
	)
}

export default About
