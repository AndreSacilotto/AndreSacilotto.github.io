import { Icon } from '@iconify/react';

export default function Header()
{
	return <>
		<header className="flex justify-evenly items-center shadow bg-gray-800 text-white text-xl py-2 px-10 w-full">
			<a href="#About" className="hover:font-bold">About</a>
			<a href="#Public" className="hover:font-bold">Public</a>
			<a href="#Private" className="hover:font-bold">Private</a>
			<a href="https://github.com/AndreSacilotto/AndreSacilotto.github.io">
				<Icon className="text-4xl" icon="mdi:github"></Icon>
			</a>
		</header>
	</>
}