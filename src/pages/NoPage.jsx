import React from 'react';
import { useSidebar, useDarkMode, useScreenWidth, useSlider } from '../components';
import './DesktopStyle.css';
import './MobileStyle.css';
import './SharedStyle.css';

export default function Portfolio() {
  // Call the useContext variables
  const { darkModeTernary, darkModeDiv } = useDarkMode();
  const { screenClass } = useScreenWidth();
  const { sidebar } = useSidebar();
  const { sliderTernary, sliderDiv } = useSlider();

  return (
    <div className={`resume-page ${screenClass} ${darkModeTernary}`}>
      <div className={`side-bar-column ${screenClass} ${sliderTernary}`}>
        <section className='fixed-section'>
          {sidebar}
        </section>
      </div>
      <header className={`top ${screenClass}`} >
        {sliderDiv}
        {darkModeDiv}
      </header>
      <div className='main-column-B'>
        <h2 className='error' style={{ marginTop: '47px' }}>
          <u>Error 404: Page not found</u>
        </h2>
      </div>
    </div>
  );
};