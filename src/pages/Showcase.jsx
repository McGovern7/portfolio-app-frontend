/*import React from 'react';
import { ImageComp, ScrollTo, Topbar, useCollapse, useDarkMode, useScreenWidth, Sidebar } from '../components';
import { IoContrast } from "react-icons/io5";
import './DesktopStyle.css';
import './SharedStyle.css';

const Showcase = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { isMobile } = useScreenWidth();
  const topbarRender = <React.Fragment>{isMobile ? <Topbar /> : <></>}</React.Fragment>;
  return (
    <div className={`desktop-portfolio ${darkMode ? '' : 'dark'}`}>
      <Sidebar />
      {topbarRender}
      <div className='right-col'>
        <button id='dark-btn' className={`circle-btn ${darkMode ? '' : 'hidden'}`} aria-label='toggle dark mode' onClick={toggleDarkMode}>
          <IoContrast />
        </button>
        <section>
          <h4 style={{ marginBlock: " 21px -4px" }}>Showcase</h4>
          <h1 className='mt-0'>JOHNSON WOOLEN MILLS</h1>
          <h2 className='mt-4 mb-4'>TIMELINE</h2>
          <div className='vert-timeline'>
            <h5 className='vert-timeline__list'><li>An Empty Canvas</li></h5>
            <div className='vert-timeline__content'>
              <p className='mb-2'>Due to limited time, experience, and resources, The website before I began<b>:</b></p>
              <ul>
                <li>Poorly directed users to unpopular products, creating issues with excess stock</li>
                <li>Lacked a cohesive 'design system' (palette, typography, spacing, image rules, etc)</li>
                <li>Was not fully mobile-compatible</li>
                <li>Contained excessive white-space</li>
                <li>Had oversized & disorganized headers and footers</li>
                <li>Did not meet accessibility requirements</li>
              </ul>
            </div>
            <h5 className='vert-timeline__list mt-3'><li>Major improvements</li></h5>
            <div className='vert-timeline__content'>
              <p>To maximise conversion rates, I implemented the following improvements<b>:</b></p>
              <ul>
                <li>Menu — Grouping similar collections, ensuring products have an intuitive NAV hierarchy</li>
                <li>Footer — Coding a responsive template with proper segmentation, separating the pages content from the footer</li>
                <li></li>
                <li>Contained excessive white-space</li>
                <li>Had oversized & disorganized headers and footers</li>
                <li>Did not meet accessibility requirements</li>
              </ul>
            </div>
            <h5 className='vert-timeline__list mt-3'><li>Design to Code Handoff</li></h5>
            <div className='vert-timeline__content'>
              <p>After weeks of working <b>:</b></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
};

export default Showcase;*/