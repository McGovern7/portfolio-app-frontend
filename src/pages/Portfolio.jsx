import React, { useState } from 'react';
import SideBar from '../components/SideBar.jsx';
import Card from '../components/Card.tsx';
import ScrollTo from '../components/ScrollTo.tsx';
import DiagonalSlideGrid from '../components/grid.tsx';
import { IoContrast } from "react-icons/io5";
import './MeStyle.css';

function Portfolio() {
  // unique darkmode button to change palette
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode
  };
  ;
  return (
    <html>
      <div className={`portfolio-page ${darkMode ? 'dark-mode' : ''}`}>
        <div className='side-bar-column'>
          <section className='fixed-section'>
            <React.Fragment>
              <SideBar />
            </React.Fragment>
          </section>
        </div>
        <div className='main-column-A'>
          <section id='intro'>
            <button id='dark-mode-button' onClick={toggleDarkMode}><IoContrast /></button>
            <h1 style={{ marginBottom: "0", }}>Luke McGovern</h1>
            <caption style={{ paddingTop: "0", paddingBottom: "1vh" }}>luke.mcgovern18@gmail.com</caption>
            <p style={{ marginBottom: "4vh", }}>Full-Stack Developer, Software Engineer</p>

            <ul className='scroll-list'>
              <ScrollTo ariaLabel='scroll to about me' id='about-scroll' className='scroll-to'
                content='About Me' sectionID='about-me' />
              <ScrollTo ariaLabel='scroll to proficiencies' id='profiencies-scroll' className='scroll-to'
                content='Proficiencies' sectionID='proficiencies' />
              <ScrollTo ariaLabel='scroll to projects' id='projects-scroll' className='scroll-to'
                content='Projects' sectionID='projects' />
              <ScrollTo ariaLabel='scroll to work experience' id='work-exp-scroll' className='scroll-to'
                content='Work Experience' sectionID='work-experience' />
              <ScrollTo ariaLabel='scroll to classes' id='classes-scroll' className='scroll-to'
                content='Class Work' sectionID='class-work' />
            </ul>
          </section>
          <DiagonalSlideGrid />
        </div>
        <div className='main-column-B'>
          <section id='about-me'>
            <h2>About Me</h2>
            <p>Since recently graduating with a Computer Science degree from my hometown school, UVM, I've been passionately expanding my skillset to face challenges in our ever-evolving tech landscape. I am driven to continuously grow my coding expertise from an innate desire to solve complex problems.</p>
            <p>Recently, I have become proficient in robotics software architecture, and building accessible web applications using full-stack development techniques.  Accomplishing these solo projects has vastly improved my ability to solve obstacles independently.</p>
          </section>
          <section id='proficiencies'>
            <h2>Proficiencies</h2>
            <h4 style={{ textAlign: 'center' }}>Languages</h4>
            <p className='skills'>Python  |  C  |  C++  |  JavaScript  |  Swift  |  React  |  HTML  |  CSS  |  MySQL  |  R</p>
            <h4 style={{ textAlign: 'center' }}>Skills</h4>
            <p className='skills'>Full-Stack Dev  |  FastAPI  |  Linux CLI  |  Git  |  ROS Robotics  |  iOS Dev  |  PC Building          </p>
          </section>
          <section id='projects'>
            <h2>Projects</h2>
            <p>Full-Stack Project:  <a href='http://localhost:3000/home'>Tarkov App</a></p>
            <p>Autonomous Drone Project: <a target="_blank" rel="noopener noreferrer" href='https://github.com/McGovern7/ardupilot-nav-scripts'>Ardupilot Script Nav</a></p>
            <ul>
              <li>Program autonomous navigation software for a drone in a virtual environment (using LiDAR, Odometry, and GPS)</li>
            </ul>
          </section>
          <section id='work-experience'>
            <h2>Work Experience</h2>
            <Card ariaLabel='Work experience, Donahue & Associates' id='D-and-A-job'
              title={<p className='card-title'><b>Tech Consultant, Donahue & Associates</b> May 2023 - Aug 2023</p>}
              content={<ul className='card-content'>
                <li>Manage website and help implement new tech endeavors</li>
                <li>Teach realtors how to get aerial shots of properties with a drone</li>
                <li>Set up computer equipment when moving office spaces</li></ul>} />
            <Card ariaLabel='Work experience, Bordeaux Constuction' id='construction-job'
              title={<p className='card-title'><b>Construction, Bordeaux Construction</b> 2020 - Present</p>}
              content={<ul className='card-content'>
                <li>Renovate commercial and residential properties</li>
                <li>Assist contractor with full apartment renovations, at each stage of the process</li>
                <li>Flip large returns for property owners</li>
                <li>Build planning and communication skills dealing with potentially dangerous environments</li></ul>} />
          </section>
          <section id='class-work'>
            <h2>Notable Class Work</h2>
            <Card ariaLabel='Class, Web app development' id='web-dev-class'
              title={<p className='card-title'><b>Web App Development</b>Fall 2023</p>}
              content={<p className='card-content'>Develop an iOS app which streamlines flight scheduling between pilots. Uses Apple’s AirTag feature. 3 member semester long project. JSON data exchanges through a REST API</p>} />
            <Card ariaLabel='Class, data privacy' id='data-priv-class'
              title={<p className='card-title'><b>Data Privacy</b>Fall 2023</p>}
              content={<p className='card-content'>Solo Project-based Learning: Adding privacy mechanisms to create secure and accurate coordinate data. Plot data on a world map with GeoPandas.</p>} />
            <Card ariaLabel='Class, software engineering' id='software-eng-class'
              title={<p className='card-title'><b>Software Engineering</b>Spring 2023</p>}
              content={<p className='card-content'>Using Agile Development in a group of 4, code a simulated monopoly game using PyGame. Sharing code through GitLab for this semester-long project.</p>} />
            <Card ariaLabel='Class, cybersecurity' id='cybersecurity-class'
              title={<p className='card-title'><b>Cybersecurity Principles</b>Summer 2022</p>}
              content={<p className='card-content'>Infiltrate my professor’s (fake) online bank using cryptographic hashing to secure computer networks. Newfound understanding of network threat vectors allows me to build more secure software.</p>} />
          </section>
        </div>
      </div>
    </html>
  )
}

export default Portfolio;