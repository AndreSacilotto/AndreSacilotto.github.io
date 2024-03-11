// import { FC } from 'react'
import { ProjectInfo } from "../data.ts";

type IProps = {
	info: ProjectInfo,
}

export default function Item({ info }: IProps)
{
	return <>
		<div>
			<h2>
				{info.project}
				<span className="text-sm pl-2 align-middle">
					{info.link?.map((link, index) => (<a key={link} className="text-blue-400 pl-1" href={link}>[{index}]</a>))}
				</span>
			</h2>
			<p>{info.description}</p>
		</div>
	</>
}