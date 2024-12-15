import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, ScrollTo, SideBar } from '../components';
// @ts-ignore
import { IoContrast } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { BiExpandHorizontal } from "react-icons/bi";
import './MeStyle.css';

function Portfolio() {
  // unique darkmode button to change palette
  const [darkMode, setDarkMode] = useState(true);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 1100);
  const [hiddenA, setHiddenA] = useState(true);
  const [hiddenB, setHiddenB] = useState(false);

  const handleSlide = async () => {
    if (hiddenA) {
      setHiddenA(false);
      setHiddenB(true);
    }
    else if (hiddenB) {
      setHiddenB(false); // b is showing, so hide it
      setHiddenA(true); // now show A
    };
  };

  useEffect(() => {
    // if (localStorage.getItem('darkMode')) { setDarkMode() }
    const handleResize = () => {
      const isSmall = window.innerWidth <= 1100;
      if (isSmall !== smallScreen) { // if screen changes on this run, update it for next
        if (!isSmall && smallScreen)
          setSmallScreen(false);
        else {
          setSmallScreen(true);
        }
      }
    };
    console.log('small screen', smallScreen);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // cleanup listener
    // eslint-disable-next-line
  }, [handleSlide]);

  // Update the state on button press
  const logDarkMode = async () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Update after state change
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <div className={`portfolio-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className='side-bar-column'>
        <section className='fixed-section'>
          <React.Fragment>
            <SideBar />
          </React.Fragment>
        </section>
      </div>
      <div className={`main-column-A ${hiddenA ? 'hidden-a' : ''} ${hiddenB ? 'hidden-b' : ''}`}>
        <section id='intro'>
          <div className='dark-btn-container'>
            <button id='dark-mode-button' onClick={logDarkMode}><IoContrast /></button>
          </div>
          <h1>Luke McGovern</h1>
          <ul style={{ paddingLeft: '3px', margin: '0' }}>
            <p className='mini' style={{ marginBottom: "0" }}>Software Engineer, Full-Stack Developer</p>
            <p className='mini' style={{ paddingBottom: "2vh", }}>luke.mcgovern18@gmail.com</p>
          </ul>
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
        <Grid />
      </div>
      <div className={`slider-col ${smallScreen ? 'small-screen' : 'big-screen'}`}>
        <button className='slider-button' onClick={handleSlide}><BiExpandHorizontal /></button>
      </div>
      <div className={`main-column-B ${hiddenA ? 'hidden-a' : ''} ${hiddenB ? 'hidden-b' : ''}`}>
        <section id='about-me'>
          <h2>About Me</h2>
          <div className='row'>
            <p className='col'>Since recently graduating with a Computer Science degree from his hometown school of UVM, He's passionately expanding his skillset to address the challenges in this ever-evolving tech landscape. He is driven to continuously grow his coding expertise, from an innate desire to find creative solutions.</p>
            <p className='col'>Recently, he has become proficient in robotics software architecture, and building accessible web applications using full-stack development techniques.  Accomplishing these solo projects has vastly improved his ability to solve obstacles independently, and develop software which reaches beyond the fundamental concepts taught at UVM.</p>
          </div>
        </section>
        <section id='proficiencies'>
          <h2>Proficiencies</h2>
          <div className={`title-row ${darkMode ? 'dark-mode' : ''}`}>
            <h4 className='thin-title' id='language-title'>LANGUAGES</h4>
            <h4 className='thin-title' id='skills-title'>SKILLS & TOOLS</h4>
          </div>
          <div className='row'>
            <div className='col skills'>
              <p>Python</p>
              <p>Swift</p>
              <p>C</p>
              <p>C++</p>
              <p>JavaScript</p>
            </div>
            <div className='col skills'>
              <p>MySQL</p>
              <p>React</p>
              <p>R</p>
              <p>CSS</p>
              <p>HTML</p>
            </div>
            <div className='col skills'>
              <p>Full-Stack Dev</p>
              <p>FastAPI</p>
              <p>Figma</p>
              <p>iOS Dev</p>
            </div>
            <div className='col skills'>
              <p>GIT</p>
              <p>ROS Robotics</p>
              <p>LinuxCLI</p>
              <p>Pandas</p>
            </div>
            <div className='col skills'>
              <p>Algo-Design</p>
              <p>Data-Structs</p>
              <p>Data-Privacy</p>
              <p>PC-Building</p>
            </div>
          </div>
        </section>
        <section id='projects'>
          <h2>Projects</h2>
          <div className='project-group'>
            <div className='project-link'><Link className='thin-title' to='/tarkov-app/home' target="_blank" rel="noopener noreferrer">TARKOV APP<FiArrowUpRight className='external' /></Link></div>
            <div className='row'>
              <p className='col'>Having been primarily assigned Front-End roles in college, He built this FastAPI app to encompass all parts of a contemporary website's development stack.</p>
              <p className='col'>The stack is designed to be modular, so that future builds can be scaled with features additional like Caching, Load Balancing, and Backups. Expect slow API service, as the SQL is hosted on a free version of Supabase.</p>
            </div>
            <p className='mini'>Frontend</p>
            <img className='col shield' alt="Javscript" src="https://img.shields.io/badge/-empty?logo=javascript&label=Javascript&labelColor=%234d3459&color=%23fcdc00" />
            <img className='col shield' alt="react version 18.3.1" src="https://img.shields.io/npm/v/react?logo=react&label=React&color=%2300C4DC" />
            <img className='col shield' alt="axios version 1.7.8" src="https://img.shields.io/npm/v/axios?logo=axios&label=Axios&logoColor=%23671ddf&color=%23671ddf" />
            <img className='col shield' alt="Node.js version 20.18.1" src="https://img.shields.io/npm/v/node?logo=node.js&label=Node&color=%23417E38" />
            <img className='col shield' alt="Bootstrap version 5.3.3" src="https://img.shields.io/npm/v/bootstrap?logo=bootstrap&label=Bootstrap&color=%239461fb" />
            <img className='col shield' alt="anime.js version 3.2.2" src="https://img.shields.io/npm/v/animejs?logo=anime&label=anime.js&color=%23F74F4D" />
            <img className='col shield' alt="react-icons version 5.3.0" src="https://img.shields.io/npm/v/react-icons?logo=anime&label=react-icons&color=%23e91e63" />
            <img className='col shield' alt="tailwindcss version 3.4.15" src="https://img.shields.io/npm/v/tailwindcss?logo=tailwindcss&label=Tailwind%20CSS&color=%2338bdf9" />
            <p className='mini' style={{ marginTop: '1vh' }}>Backend</p>
            <img className='col shield' alt="Python" src="https://img.shields.io/badge/-empty?logo=python&label=Python&labelColor=%23214868&color=%23ffde73" />
            <img className='col shield' alt="fast API version 0.0.8" src="https://img.shields.io/npm/v/fastapi?logo=fastapi&label=FastAPI&color=%23009485" />
            <img className='col shield' alt="uvicorn version 0.32.1" src="https://img.shields.io/pypi/v/uvicorn?label=Uvicorn&color=%232094f3" />
            <img className='col shield' alt="SQLAlchemy version 2.0.36" src="https://img.shields.io/pypi/v/sqlalchemy?logo=sqlalchemy&label=SQLAlchemy&color=%23778877" />
            <img className='col shield' alt="Pydantic version 2.10.2" src="https://img.shields.io/pypi/v/pydantic?logo=pydantic&label=Pydantic&logoColor=%23e92063&color=%23e92063" />
            <img className='col shield' alt="python jose version 3.3.0" src="https://img.shields.io/pypi/v/python-jose?label=python-jose&color=%23006dad" />
            <p className='mini'>Hosting</p>
            <img className='col shield' alt="Netlify Frontend" src="https://img.shields.io/badge/Frontend-%20?logo=Netlify&logoColor=%2332e2de&label=Netlify&color=%2332e2de" />
            <img className='col shield' alt="Render Backend" src="https://img.shields.io/badge/Backend-%20?logo=Render&label=Render&color=%232a0052" />
            <img className='col shield' alt="Supabase SQL Database" src="https://img.shields.io/badge/SQL%20Database-%20?logo=Supabase&label=Supabase&color=%2339c385" />
          </div>
          <div className='project-group' style={{ paddingTop: '4vh', borderTop: '1px solid #216E4E' }}>
            <div className='project-link'><Link className='thin-title' to='https://github.com/McGovern7/ardupilot-nav-scripts' target="_blank" rel="noopener noreferrer">ARDUPILOT NAV<FiArrowUpRight className='external' /></Link></div>
            <div className='row'>
              <p className='col'>After graduation, He joined the drone navigation community. This project allows a drone to autonomously navigate a 3D maze using a script he developed.</p>
              <p className='col'>Future plans to add object recognition and tracking, then implement this software into a custom self-built drone. See the writeup.md on Github for a detailed overview</p>
            </div>
            <img className='col shield' alt="ardupilot copter" src="https://img.shields.io/badge/Copter-space?label=Ardupilot&labelColor=%23dedede&color=%23fcd94c" />
            <img className='col shield' alt="Python" src="https://img.shields.io/badge/-empty?logo=python&label=Python&labelColor=%23214868&color=%23ffde73" />
            <img className='col shield' alt="Ubuntu" src="https://img.shields.io/badge/v22.0.4-space?logo=ubuntu&label=Ubuntu&color=%23e95521" />
            <img className='col shield' alt="ros 2 humble" src="https://img.shields.io/badge/Humble-humble?logo=ros&logoColor=%232980b9&label=ROS2&color=%232980b9" />
            <img className='col shield' alt="rclpy node" src="https://img.shields.io/badge/Node-space?label=rclpy&color=%232980b9" />
            <img className='col shield' alt="pymavlink mavutil" src="https://img.shields.io/badge/mavutil-space?label=Pymavlink&color=%23ee6000" />
          </div>
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
            content={<p className='card-content'>Develop an iOS app which streamlines flight scheduling between pilots. Uses Apple’s AirTag feature. 3 member semester long project. JSON data exchanges through a RESTful API</p>} />
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
  )
}

export default Portfolio;