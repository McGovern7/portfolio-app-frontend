import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const ScreenWidthContext = createContext(null);

// Context provider
export const ScreenWidthProvider = ({ children }) => {
  const [screen, setScreen] = useState({
    isMobile: window.innerWidth < 768,
    isSmallDesktop: window.innerWidth >= 768 && window.innerWidth <= 1100,
  });

  useEffect(() => {
    const handleResize = () => { 
      setScreen({
        isMobile: window.innerWidth < 768,
        isSmallDesktop: window.innerWidth >= 768 && window.innerWidth <= 1100,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <ScreenWidthContext.Provider value={screen}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

export const useScreenWidth = () => useContext(ScreenWidthContext);