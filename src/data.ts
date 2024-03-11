

export interface ProjectInfo
{
	project: string;
	public: boolean;
	image?: string[];
	link?: string[];
	description: string;
}

const data: ProjectInfo[] = [
	{
		public: false,
		project: "Chrome Extension",
		description: " Web extensions made with Javascript with Manifest v3. In them I have done service workers, content scripts.",
	},
	{
		public: false,
		project: "Markdown Website",
		description: "I have a pipeline that allows me to transform markdown files into a routed website that I use to write a book. I use vite, sass, ts, express, markdown-it, and nodejs.",
	},
	{
		public: false,
		project: "Bakery Site",
		description: "A website made with React, NextJs, Formik, Sass and deployed with Vercel using an automated process with Github. The objective of the website was to have a hubby display the produced products, and it was latter planned to support sales.",
	},
	{
		public: false,
		project: "Gaming Mods",
		description: "I have made mod for the following games: don't starve together, stardew valley, minecraft, factorio. In them I have used the languages: lua, c#, and java",
	},
	{
		public: true,
		project: "Web Tetris",
		link: ["https://github.com/231396/Rolling-Tetris-Web"],
		description: "The final project of the web class, where we have to use JS/HTML/CSS with canvas for the game and PHP to communicate with LiteSQL database that was used for the leaderboard."
	},
	{
		public: true,
		project: "Flutter App",
		link: ["https://github.com/231396/SI700_flutter_app"],
		description: "Final project of the mobile class, where I used dart with the flutter framework to create a prototype project, that was required to interact with Firebase database. My project was about a recipe book"
	},
	{
		public: true,
		project: "MouseAndKeyboard",
		link: ["https://github.com/AndreSacilotto/MouseAndKeyboard"],
		description: "Project where I can simulate mouse and keyboard over the network using peer-to-peer sockets"
	},
	{
		public: true,
		project: "Pixel Bomber Game",
		link: ["https://github.com/AndreSacilotto/PixelBomberGame-JS"],
		description: "A simple game bomber man game project made with express and socket.io in javascript"
	},
	{
		public: true,
		project: "Small Js Projects",
		link: ["https://github.com/AndreSacilotto/Which-Is-Better", "https://github.com/AndreSacilotto/R3", "https://github.com/AndreSacilotto/GridJS", "https://github.com/AndreSacilotto/Adobe_Scripts"],
		description: "Single-page pure JS web apps that I create to speed up certain activities.",
	},
	{
		public: true,
		project: "AHK Scripts",
		link: ["https://github.com/AndreSacilotto/AHK_Scripts"],
		description: "A collection of automation scripts build with autohotkey language",
	},
	{
		public: true,
		project: "Gang of Four",
		link: ["https://github.com/AndreSacilotto/GangOfFour"],
		description: "Project where I try to implement all of Gang Of Four patterns in c#",
	},
	{
		public: true,
		project: "Dice Expression",
		link: ["https://github.com/AndreSacilotto/DiceExpression"],
		description: "Dice Expression parser using Shunting Yard algorithm. Using c# with .net7.",
	},
	{
		public: true,
		project: "Godot Util",
		link: ["https://github.com/AndreSacilotto/GodotUtil", "https://github.com/AndreSacilotto/GodotGenerator"],
		description: "Utility projects for my godot games, each piece has been crafted with the intention to streamline game development workflows, solve common challenges, and boost the overall quality of my Godot games.",
	},
]

// data.sort((a, b) => a.project.localeCompare(b.project))

export default data;
