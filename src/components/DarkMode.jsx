import { createContext, useContext, useState } from 'react';
import { IoContrast } from "react-icons/io5";

// Create context
const DarkModeContext = createContext(null);

export const DarkModeProvider = ({ children }) => {
	// Initialize the state variables
	const [darkModeStatus, setDarkModeStatus] = useState(true);
	const [darkModeTernary, setDarkModeTernary] = useState(darkModeStatus ? 'dark-mode' : '');

	// Update the states on button press
	const logDarkMode = async () => {
		const newDarkModeStatus = !darkModeStatus;
		setDarkModeStatus(newDarkModeStatus);
		setDarkModeTernary(newDarkModeStatus ? 'dark-mode' : '');
	};

	const darkModeDiv = (
		<div className='dark-btn-container'>
			<button id='dark-mode-btn' className='circle-btn' onClick={logDarkMode}><IoContrast /></button>
		</div>
	);

	return (
		<DarkModeContext.Provider value={{ darkModeTernary, darkModeDiv }}>
			{children}
		</DarkModeContext.Provider>
	);
}

export const useDarkMode = () => (useContext(DarkModeContext));