import React, { createContext, useState } from 'react';

export const themeContext = createContext();

export const ThemeProviderCtx = ({ children }) => {
	const [ mode, setMode ] = useState(
		localStorage.getItem('rutapp_dark_theme') ? localStorage.getItem('rutapp_dark_theme') : 'light'
	);
	const [ colorTheme, setColorTheme ] = useState(
		localStorage.getItem('rutapp_theme')
			? JSON.parse(localStorage.getItem('rutapp_theme'))
			: {
					primary: '#2196f3',
					secondary: '#2979ff'
				}
	);

	return (
		<themeContext.Provider value={{ mode, setMode, colorTheme, setColorTheme }}>{children}</themeContext.Provider>
	);
};
