// Link to a downloadable resume
// a list of the developer’s proficiencies

import React from "react";

function Resume() {
	return (
		<div className="columns">
		<div className="column">
			<p className="content is-large">Resume</p>
			<hr />

			<a
			className="button is-primary"
			href={process.env.PUBLIC_URL + "/cv.pdf"}
			target="_blank" rel="noreferrer"
			>
			<span className="icon">
				<i className="fas fa-download"></i>
			</span>
			<span>Download My Resume</span>
			</a>
		</div>
		<div className="column">
			<p className="content is-large"> TechnicalSkills</p>
			<hr />
			<ul>
			    <li>Angular 2+(15)</li>
				<li>HTML, CSS, Javascript</li>
				<li>Node.js</li>
				<li>PostgreSQL</li>
				<li>BootStrap</li>
				<li>Git</li>
			</ul>
		</div>

		<div className="column">
			<p className="content is-large"> SoftSkills</p>
			<hr />
			<ul>
				<li>Problem Solving</li>
				<li>Interpersonal Skills</li>
				<li>Leadership</li>
				<li>Team Player</li>
				<li>Communication</li>
				{/* <li>Github Repo Management</li> */}
			</ul>
		</div>
		</div>
	);
}

export default Resume;
