import { createContext, useContext, useEffect, useState } from 'react';

// Create context
const DarkModeContext = createContext(null);

export const DarkModeProvider = ({ children }) => {
	// Initialize the state variables
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
  }, []);

	const toggleDarkMode = () => setDarkMode((prev) => !prev);

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

export const useDarkMode = () => (useContext(DarkModeContext));