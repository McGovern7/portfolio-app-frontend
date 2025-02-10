import React from 'react';
import Resume from '../assets/Resume.pdf';
import { useDarkMode, useScreenWidth, useSidebar, useSlider } from '../components';
import './DesktopStyle.css';
import './MobileStyle.css';
import './SharedStyle.css';

export default function ResumePage() {
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
      <div className={`resume-column ${screenClass}`}>
        <object aria-label='Resume PDF' data={Resume} type="application/pdf"></object>
      </div>
    </div>
  );
};