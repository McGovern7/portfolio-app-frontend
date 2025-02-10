import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const ScreenWidthContext = createContext(null);

// Context provider
export const ScreenWidthProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(width < 768); // mobile or desktop screen size?
  const [isSmallDesktop, setIsSmallDesktop] = useState(width >= 768 && width <= 1100); // desktop size: shrinks column
  // classname changes
  const [screenClass, setScreenClass] = useState(isMobile ? 'mob' : 'desk'); 
  const [desktopClass, setDesktopClass] = useState(isSmallDesktop ? 'small-screen' : 'big-screen');

  useEffect(() => {
    const handleResize = () => { 
      setWidth(window.innerWidth);
      setIsMobile(width < 768);
      setIsSmallDesktop(width >= 768 && width <= 1100);
      setScreenClass(isMobile ? 'mob' : 'desk');
      setDesktopClass(isSmallDesktop ? 'small-screen' : 'big-screen');
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, screenClass, isSmallDesktop, isMobile]);

  return (
    <ScreenWidthContext.Provider value={{ width, isMobile, screenClass, desktopClass }}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

export const useScreenWidth = () => useContext(ScreenWidthContext);