import { Icon } from '@iconify/react';

export default function Header()
{
	return <>
		<header className="flex justify-evenly items-center shadow bg-gray-800 text-white py-2 px-10 w-full">
			<a href="#About">About</a>
			<a href="#Public">Public</a>
			<a href="#Private">Private</a>
			<a href="https://github.com/AndreSacilotto/AndreSacilotto.github.io">
				<Icon className="text-4xl" icon="mdi:github"></Icon>
			</a>
		</header>
	</>
}