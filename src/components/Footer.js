//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div className="content has-text-centered">
				<p>
					<strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
						<a href="https://github.com/nthabisengC" target="_blank" rel="noreferrer">
							Colnercia Nthabiseng Mohale
						</a>
						.
					<hr />
					<a
						href="https://www.linkedin.com/in/nthabiseng-colnercia-mohale-574542254/"
						target="_blank" rel="noreferrer"
					>
						LinkedIn
					</a>{" "}
					|{" "}{" "}
					<a href="mailto:nthabisengmohale2@gmail.com" target="_blank" rel="noreferrer">
						nthabisengmohale2@gmail.com
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
