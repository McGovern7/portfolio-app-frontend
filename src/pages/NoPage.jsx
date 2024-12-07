import React, { useEffect, useState } from 'react';
import { SideBar } from '../components';
import './MeStyle.css';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  // Access darkMode value on launch
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === "true") {
      setDarkMode(true); // Set state based on the stored value
    }
  }, []);
  return (
    <div className={`portfolio-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className='side-bar-column'>
        <section className='fixed-section'>
          <React.Fragment>
            <SideBar />
          </React.Fragment>
        </section>
      </div>
      <div className='main-column-B'>
        <h2>
          Error 404: Page not found
        </h2>
      </div>
    </div>
  )
}