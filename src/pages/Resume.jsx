import React, { useEffect, useState } from 'react';
import Resume from '../assets/Resume.pdf';
import { SideBar, SideBarMobile } from '../components';
import { IoContrast } from "react-icons/io5";
import { BiExpandHorizontal } from "react-icons/bi";
import './DesktopStyle.css';
import './MobileStyle.css';
import './SharedStyle.css';

export default function ResumePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSideBar = async () => { // open and close the sidebar window
    setShowSideBar(!showSideBar);
  };

  // Update the state on button press
  const logDarkMode = async () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Update after state change
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`resume-page ${isMobile ? 'mob' : 'desk'} ${darkMode ? 'dark-mode' : ''}`}>
      <div className={`side-bar-column ${isMobile ? 'mob' : 'desk'} ${showSideBar ? 'show-side' : 'hide-side'}`}>
        <section className='fixed-section'>
          <React.Fragment>
            {isMobile ? <SideBarMobile /> : <SideBar />}
          </React.Fragment>
        </section>
      </div>
      <header className={`top ${isMobile ? 'mob' : 'desk'}`} >
        <div className='slider-col'>
          <button id='slide-btn' className='circle-btn' onClick={handleSideBar}><BiExpandHorizontal /></button>
        </div>
        <div className='dark-btn-container'>
          <button id='dark-mode-btn' className='circle-btn' onClick={logDarkMode}><IoContrast /></button>
        </div>
      </header>
      <div className={`resume-column ${isMobile ? 'mob' : 'desk'}`}>
        <object aria-label='Resume PDF' data={Resume} type="application/pdf"></object>
      </div>
    </div>
  )
}