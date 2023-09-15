//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
	{
		id: 0,
		title: "Quick Surveys",
		languages: "TypeScript, HTML, CSS, JavaScript ",
		packages: "Angular, Express.js, jsonwebtoken, mongoose, nodemon",
		image: "/img/survey.png",
		description: "QuickSurveys is a web application that allows users to create and manage surveys, and collect responses from participants. The application is built using Angular, Node.js with Express.js, and MongoDB for the backend. Project management is done using Trello, and the source code is hosted on GitHub.",
		repo: "https://github.com/nthabisengC/Survey-App",
		// live: "https://djt-mygamelist.herokuapp.com/",
	},
	{
		id: 1,
		title: "Secure Legacy",
		languages: "TypeScript, HTML, CSS, JavaScript",
		packages: "Angular, Express.js, jsonwebtoken, PostgreSQL, nodemon",
		image: "/img/secure.png",
		description: "Secure Legacy Insurance Recommendations is a web application that leverages artificial intelligence (AI) to provide tailored insurance recommendations for wealth management. The application is built with a modern tech stack including Angular for the frontend, Node.js with Express.js for the backend, and utilizes PostgreSQL as the database. The user interface is styled using Tailwind CSS. The entire project is managed on GitHub for seamless collaboration.",
		repo: "https://github.com/nthabisengC/Survey-App",
		// live: "https://jonathicke-deep-thoughts.herokuapp.com/",
	},
	{
		id: 2,
		title: "Student Management System",
		languages: "TypeScript, HTML, CSS, JavaScript",
		packages: "Angular, Express.js, jsonwebtoken, PostgreSQL, nodemon",
		image: "/img/students.png",
		description: "Student Management System",
		live: "https://github.com/nthabisengC/Survey-App",
		// repo: "https://github.com/JonaThicke274/movie-night",
	},
	{
		id: 3,
		title: "Nthabiseng Portfolio",
		languages: "TypeScript, HTML, CSS,",
		packages: "React",
		image: "/img/portfolio.png",
		description: "About Nthabiseng",
		live: "https://github.com/nthabisengC/Survey-App",
		// repo: "https://github.com/JonaThicke274/MVC-Tech-Blog",
	},
	// {
	// 	id: 4,
	// 	title: "Note Taker",
	// 	languages: "html, css, js",
	// 	packages: "Express.js",
	// 	image: "/img/notetaker.png",
	// 	description: "Write notes for yourself that you can save; you can read them and delete later at any time!",
	// 	repo: "https://github.com/JonaThicke274/Note-Taker",
	// 	live: "https://jonathicke-note-taker.herokuapp.com/",
	// },
	// {
	// 	id: 5,
	// 	title: "Work Day Scheduler",
	// 	languages: "html, css, js",
	// 	packages: "html, css, js",
	// 	image: "/img/workdayscheduler.png",
	// 	description: "Simple daily calendar app for daily tasks, meetings, etc. for your work day!",
	// 	repo: "https://github.com/JonaThicke274/WorkDay-Scheduler",
	// 	live: "https://jonathicke274.github.io/WorkDay-Scheduler/"
	// }
];

function Portfolio() {
	return (
		<div>
			<p className="content is-medium">Projects</p>
		<hr />

			<Project projects={projects} />
		</div>
	);
}

export default Portfolio;
