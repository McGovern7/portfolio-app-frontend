import React from 'react';
import Resume from '../assets/Resume.pdf';
import { SideBar } from '../components';
import './MeStyle.css';

export default function ResumePage() {
  return (
    <div className='resume-page'>
      <div className='side-bar-column'>
        <section className='fixed-section'>
          <React.Fragment>
            <SideBar />
          </React.Fragment>
        </section>
        <div className='resume-column'>
          <object aria-label='Resume PDF' data={Resume} type="application/pdf"></object>
        </div>
      </div>
    </div>
  )
}