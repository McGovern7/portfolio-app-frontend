import React from 'react';
import Navbar from '../components/Navbar.jsx';
import ImageComp from '../components/ImageComp.tsx';
import SideBar from '../components/SideBar.jsx';
import './MeStyle.css';
import Resume from '../assets/Resume.pdf';

export default function Portfolio() {
  return (
    <body className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <main>
        <div className='row'></div>
        <div className='column'></div>
        <div className='column'></div>
          <h2>Luke McGovern</h2>
          <p>Fullstack developer, Robotics enthusiast, Seeker of the cutting-edge</p>
          <object aria-label='Resume PDF' data={Resume} width="500" height="375" type="application/pdf"></object>
      </main>
      <React.Fragment>
        <SideBar />
      </React.Fragment>
    </body>
  )
}