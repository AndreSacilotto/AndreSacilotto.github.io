import data from '../data'
import Item from './Item.tsx'

export default function Content()
{
	return (
		<div className="p-7 shadow-[inset_0_0_2px_0.5rem_rgba(0,0,0,1)]">
			<section className="" id="About">
				<h1>About me</h1>
				Hello there! I'm "Andre Sacilotto", a enthusiast and professional in the realms of programming and gaming. My journey into programming world started from a young age, where I was mesmerized by the intricate process that is creating, configurate and modify minecraft servers with mods.
				That fascination slowly branched out into a deep-seated love for video games, not just as a form of entertainment, but as a canvas for complex problem-solving with creativity. 
				I started to apply the game theory that I have know, from games to the real world, and you know what it works!

				<h2 className="pl-4 list-disc">Programming</h2>

				I'm mostly a self-taught programmer, but that dont mean I havent had classes even if a learn little from courses there is always something to learn.
				I've honed my skills in anything that would be useful for making games from art, network, backend, and frontend. I revel in the challenge of translating real-world problems into elegant, efficient code. My projects range from web, app, games, automation, each serving as a stepping stone towards mastering the art of coding. The joy of seeing a project come to life, solving problems, and enhancing user experiences, drives my continuous exploration and learning in the vast sea of programming.

				<h2 className="pl-4">Gaming</h2>

				My passion for gaming is twofold: as a player and a creator. The immersive worlds and the mechanics that games offers always captivated me. I've spent countless hours not just playing but analyzing games — understanding what makes them engaging, what makes users enterternained. Gaming is not just mashing buttons, is a fine art that involves all fields to learn to make indie games, is not only learn how to program or draw, is also a physocological study of human mind, and you will need to learn how to appel throu a public with market 

				<h2 className="pl-4">Knowledge</h2>
				Since not all projects that I made are availiable to be seen, here is non exaustive list of everthing I already used at somepoint:
				

				<h2 className="pl-4">Let us Meet Again</h2>
				Whether you're here out of a shared pashions or by scouting, I'm glad you stopped by. Feel free to reach out through (email: andre.sacilotto.dev@gmail.com) or (discord: 5spectra).
			</section>
			<section className="pt-10" id="Public">
				<h1>Public</h1>
				{data.filter(x => x.public).map(x => (<Item key={x.project} info={x} />))}
			</section>
			<section className="pt-10" id="Private">
				<h1>Private</h1>
				{data.filter(x => !x.public).map(x => (<Item key={x.project} info={x} />))}
			</section>
			<p className="text-xs py-10">Thank you for visiting, and I hope you find a bit of inspiration in my work and passions.</p>
		</div>
	)
}
