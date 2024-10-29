import React from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar'
import './MeStyle.css';
import Resume from '../assets/Resume.pdf'

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
          <object data={Resume} width="500" height="375" type="application/pdf"></object>
      </main>
      <React.Fragment>
        <SideBar />
      </React.Fragment>
    </body>
  )
}