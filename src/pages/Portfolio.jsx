import React from 'react';
import Navbar from '../components/Navbar.jsx';
import SideBar from '../components/SideBar.jsx';
import './MeStyle.css';

export default function Portfolio() {
  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className='row'>
        <div className='side-bar-column'>
          <React.Fragment>
            <SideBar />
          </React.Fragment>
        </div>
        <div className='main-column'>
          <main>
            <div className='row'></div>
            <div className='column'></div>
            <div className='column'></div>
            <h2>Luke McGovern</h2>
            <p>Fullstack developer, Robotics enthusiast, Seeker of the cutting-edge</p>
          </main>
        </div>
      </div>
    </div>
  )
}