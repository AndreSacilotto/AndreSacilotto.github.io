import { Icon } from '@iconify/react';
import { projectData, knowledgeData, KnowledgeInfo } from '../data'
import Item from './Item.tsx'

export default function Content()
{

	function knowledgeIcons()
	{
		const obj: { [k: string]: KnowledgeInfo[] } = {}
		knowledgeData.forEach(x =>
		{
			if (!(x.type in obj))
				obj[x.type] = []
			obj[x.type].push(x)
		});

		var jsx: JSX.Element[] = [];
		for (const [key, value] of Object.entries(obj))
		{
			jsx.push(<div className="" key={key}>
				<h3 className="bold font-medium">{key.toUpperCase()}</h3>
				<div className="grid grid-cols-4 xl:grid-cols-7 gap-1.5">
					{value.map(x => (<span key={x.name}><Icon className="inline-block" icon={x.iconify || ""} /> {x.name}</span>))}
				</div>
			</div>
			)
		}
		return jsx;
	}

	return (
		<div className="p-7 shadow-gray-800 shadow-[inset_0_0_2px_0.5rem]">
			<section className="" id="About">
				<h1>About me</h1>
				<p>
					Hello! I'm Andre Sacilotto, a dual citizen of Brazil and Italy, deeply passionate and professionally engaged in programming and gaming. My journey into the programming world started at a young age, when I was mesmerized by the intricate process of creating, configuring, and modifying Minecraft servers with mods.
					That fascination slowly branched out into a deep-seated love for video games, not just as a form of entertainment but as a canvas for complex problem-solving with creativity.
				</p>
				<h2 className="">Languages</h2>
				<ul>
					<li>Portuguese (PT-BR) : Native</li>
					<li>English : C1 Level</li>
				</ul>
				<h2 className="">Programming</h2>
				<p>
					I'm mostly a self-taught programmer, but that doesn't mean I haven't had classes. Even if I learn little from courses, there is always something to learn.
					I've honed my skills in anything that would be useful for making games from art, network, backend, and frontend. I revel in the challenge of translating real-world problems into elegant, efficient code. My projects range from web, apps, games, and automation, each serving as a stepping stone towards mastering the art of coding. The joy of seeing a project come to life, solving problems, and enhancing user experiences drives my continuous exploration and learning in the vast sea of programming.
				</p>
				<h2 className="">Gaming</h2>
				<p>
					My passion for gaming is twofold: as a player and as a creator. The immersive worlds and the mechanics that games offer have always captivated me. I've spent countless hours not just playing but also analyzing games - understanding what makes them engaging and what makes users engaged. Gaming is not just mashing buttons; it is a fine art that involves all fields to learn to make indie games. It is not only learning how to program or draw; it is also a physocological study of the human mind, and you will need to learn how to appeal to a public with a market.
				</p>
				<h2 className="">Knowledge</h2>
				<p>Since not all projects that I made are available to be seen, here is a non-exhaustive list of everything I already used at some point:</p>
				<div className="pt-3">
					{knowledgeIcons()}
				</div>
			</section>
			<section className="pt-10" id="Public">
				<h1>Public</h1>
				{projectData.filter(x => x.public).map(x => (<Item key={x.project} info={x} />))}
			</section>
			<section className="pt-10" id="Private">
				<h1>Private</h1>
				{projectData.filter(x => !x.public).map(x => (<Item key={x.project} info={x} />))}
			</section>
			<section className="pt-10" id="Ending">
				<h2 className="">Let's Meet Again</h2>
				<p>Whether you're here out of shared pashions or by scouting, I'm glad you stopped by. Feel free to reach out through (email: andre.sacilotto.dev@gmail.com) or (discord: 5spectra).</p>
				<p className="text-xs py-10">Thank you for visiting, and I hope you find a bit of inspiration in my work and passions.</p>
			</section>
		</div>
	)
}
