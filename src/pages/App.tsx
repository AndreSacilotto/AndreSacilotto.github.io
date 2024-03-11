import React from 'react';
import Content from './Content.tsx';
import Header from './Header.tsx'

export const LanguageContext = React.createContext("en");

export default function App()
{
	return (
		<>
			<Header />
			<Content />
		</>
	)
}