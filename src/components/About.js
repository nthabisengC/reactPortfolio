// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
	return (
		<div>
			<p className="content is-medium">Full Stack Developer & Project Coordinator</p>
			<hr />
			<img className="my-pic" src={process.env.PUBLIC_URL + '/img/Nthabiseng.jpeg'} alt="Nthabiseng"/>
			<p className="content is-italic mt-4">
			I'm Nthabiseng, a full stack developer eager to join a team or project and make a valuable contribution!
			</p>
			<p className="content">
			I have just completed the Digital Academy Learnership Program for full stack development. Thank you for checking out my portfolio, and please don't hesitate to contact me using the form above!





			</p>
		</div>
	);
}

export default About;
