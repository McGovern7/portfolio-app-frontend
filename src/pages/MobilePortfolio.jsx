import React from 'react';
import { Link } from 'react-router-dom';
import { Card, useDarkMode, useSidebar, useSlider } from '../components';
import { FiArrowUpRight } from "react-icons/fi";
import './MobileStyle.css';
import './SharedStyle.css';

const MobilePortfolio = () => {
  // Call the useContext variables
  const { darkModeTernary, darkModeDiv } = useDarkMode();
  const { sidebar } = useSidebar();
  const { sliderTernary, sliderDiv } = useSlider();

  return (
    <div className={`mobile-portfolio ${darkModeTernary}`}>
      <div className={`side-bar-column mob ${sliderTernary}`}>
        <section className='fixed-section'>
          {sidebar}
        </section>
      </div>
      <header className='top mob'>
        {sliderDiv}
        {darkModeDiv}
      </header>
      <div className='main-col'>
        <section id='intro-mobile'>
          <h1>Luke McGovern</h1>
          <ul style={{ paddingInline: "2vw", marginBottom: "0" }}>
            <p className='mini' style={{ marginBottom: "0" }}>Software Engineer, Fullstack Developer</p>
            <p className='mini' style={{ marginBottom: "0" }}>luke.mcgovern18@gmail.com</p>
          </ul>
        </section>
        <section id='about-me-mobile'>
          <h2>About Me</h2>
          <div className='row'>
            <p>I am a recent Computer Science graduate from the University of Vermont, where I earned a knowledge base spanning multiple disciplines and languages. Since graduating, I've been passionately expanding my C.S. repertoire to more effectively address the ever-evolving challenges in our tech landscape. My passion to code advance comes from an innate desire to find creative solutions to complex problems.</p>
            <p>I have recently become proficient in robotics software architecture, after designing autonomous navigation features for a virtual drone (planning to integrate my code into a self-built drone). I have also and hosted my personal Website, which contains my first fullstack application. These two solo projects have vastly improved my ability to solve problems independently, and create software which far surpasses what is taught at UVM.</p>
            <p>My goal is to join a dev team at an innovative company, where I can use my skills, creativity, and passion to grow into an expert developer. While sending applications, I've been busy upgrading the interface of my Dad's pizza website.</p>
          </div>
        </section>
        <section id='proficiencies-mobile'>
          <h2>Proficiencies</h2>
          <div id='prof-table-mobile'>
            <div className='col-mob'>
              <div className='row-mob' style={{ marginRight: '2vw' }}>
                <h4 className='thin-header'>LANGUAGES</h4>
              </div>
              <div className='row-mob'>
                <div className='col-mob'>
                  <p className='skills'>Python<br />Swift<br />C<br />C++<br />JavaScript</p>
                </div>
                <div className='col-mob'>
                  <p className='skills'>SQL<br />React<br />CSS<br />HTML</p>
                </div>
              </div>
            </div>
            <div className='col-mob'>
              <div className='row-mob'>
                <h4 className='thin-header' id='skills-title-mobile'>SKILLS & TOOLS</h4>
              </div>
              <div className='row-mob'>
                <div className='col-mob'>
                  <p className='skills'>Fullstack Dev<br />FastAPI<br />Figma<br />iOS Dev</p>
                </div>
                <div className='col-mob'>
                  <p className='skills'>GIT<br />ROS Robotics<br />LinuxCLI<br />Pandas</p>
                </div>
                <div className='col-mob'>
                  <p className='skills'>Algorithm Design<br />Data Structures<br />Data Privacy<br />PC Building</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='projects-mobile'>
          <h2>Projects</h2>
          <div className='project-group'>
            <div className='project-link'><Link className='thin-title' to='/tarkov-app/home' target="_blank" rel="noopener noreferrer">TARKOV APP<FiArrowUpRight className='external' /></Link></div>
            <p>Having been primarily assigned Front-End roles in college, I sought to expand my horizons. I built this FastAPI app to encompass all parts of a contemporary website's development stack, and uncoil their interworkings.</p>
            <p>My website's stack is designed using modular components, so that future builds can be scaled with additional components additional like Caching, Load Balancing, and Backups. Expect slow API service, as the SQL is hosted on a free Supabase version.</p>
            <p className='mini'>Frontend</p>
            <div className='shield'>
              <img alt="Javscript" src="https://img.shields.io/badge/-empty?logo=javascript&label=Javascript&labelColor=%234d3459&color=%23fcdc00" />
              <img alt="react version 18.3.1" src="https://img.shields.io/npm/v/react?logo=react&label=React&color=%2300C4DC" />
              <img alt="axios version 1.7.8" src="https://img.shields.io/npm/v/axios?logo=axios&label=Axios&logoColor=%23671ddf&color=%23671ddf" />
              <img alt="Node.js version 20.18.1" src="https://img.shields.io/npm/v/node?logo=node.js&label=Node&color=%23417E38" />
              <img alt="Bootstrap version 5.3.3" src="https://img.shields.io/npm/v/bootstrap?logo=bootstrap&label=Bootstrap&color=%239461fb" />
              <img alt="anime.js version 3.2.2" src="https://img.shields.io/npm/v/animejs?logo=anime&label=anime.js&color=%23F74F4D" />
              <img alt="react-icons version 5.3.0" src="https://img.shields.io/npm/v/react-icons?logo=anime&label=react-icons&color=%23e91e63" />
              <img alt="tailwindcss version 3.4.15" src="https://img.shields.io/npm/v/tailwindcss?logo=tailwindcss&label=Tailwind%20CSS&color=%2338bdf9" />
            </div>
            <p className='mini' style={{ marginTop: '1vh' }}>Backend</p>
            <div className='shield'>
              <img alt="Python" src="https://img.shields.io/badge/-empty?logo=python&label=Python&labelColor=%23214868&color=%23ffde73" />
              <img alt="fast API version 0.0.8" src="https://img.shields.io/npm/v/fastapi?logo=fastapi&label=FastAPI&color=%23009485" />
              <img alt="uvicorn version 0.32.1" src="https://img.shields.io/pypi/v/uvicorn?label=Uvicorn&color=%232094f3" />
              <img alt="SQLAlchemy version 2.0.36" src="https://img.shields.io/pypi/v/sqlalchemy?logo=sqlalchemy&label=SQLAlchemy&color=%23778877" />
              <img alt="Pydantic version 2.10.2" src="https://img.shields.io/pypi/v/pydantic?logo=pydantic&label=Pydantic&logoColor=%23e92063&color=%23e92063" />
              <img alt="python jose version 3.3.0" src="https://img.shields.io/pypi/v/python-jose?label=python-jose&color=%23006dad" />
            </div>
            <p className='mini'>Hosting</p>
            <div className='shield'>
              <img alt="Netlify Frontend" src="https://img.shields.io/badge/Frontend-%20?logo=Netlify&logoColor=%2332e2de&label=Netlify&color=%2332e2de" />
              <img alt="Render Backend" src="https://img.shields.io/badge/Backend-%20?logo=Render&label=Render&color=%232a0052" />
              <img alt="Supabase SQL Database" src="https://img.shields.io/badge/SQL%20Database-%20?logo=Supabase&label=Supabase&color=%2339c385" />
            </div>
          </div>
          <div className='project-group' style={{ paddingTop: '2vh', borderTop: '1px solid #216E4E' }}>
            <div className='project-link'><Link className='thin-title' to='https://github.com/McGovern7/ardupilot-nav-scripts' target="_blank" rel="noopener noreferrer">ARDUPILOT NAV<FiArrowUpRight className='external' /></Link></div>
            <div className='row'>
              <p>After graduation, I joined the drone navigation community. A community where hobbyists build and program drones to navigate without controllers. The code I built for this project allows a drone to navigate a 3D maze autonomously using a script.</p>
              <p>This is just the beginning. I have Future plans to create object recognition and tracking software, which will then be integrated into a custom-built drone. See the writeup.md on Github for the project's overview</p>
            </div>
            <div className='shield'>
              <img alt="ardupilot copter" src="https://img.shields.io/badge/Copter-space?label=Ardupilot&labelColor=%23dedede&color=%23fcd94c" />
              <img alt="Python" src="https://img.shields.io/badge/-empty?logo=python&label=Python&labelColor=%23214868&color=%23ffde73" />
              <img alt="Ubuntu" src="https://img.shields.io/badge/v22.0.4-space?logo=ubuntu&label=Ubuntu&color=%23e95521" />
              <img alt="ros 2 humble" src="https://img.shields.io/badge/Humble-humble?logo=ros&logoColor=%232980b9&label=ROS2&color=%232980b9" />
              <img alt="rclpy node" src="https://img.shields.io/badge/Node-space?label=rclpy&color=%232980b9" />
              <img alt="pymavlink mavutil" src="https://img.shields.io/badge/mavutil-space?label=Pymavlink&color=%23ee6000" />
            </div>
          </div>
        </section>
        <section id='work-experience-mobile'>
          <h2>Work Experience</h2>
          <Card ariaLabel='Work experience, Donahue & Associates' id='D-and-A-job-mobile' isMobile={false}
            title={<p className='card-title'><b>Tech Consultant,<br></br> Donahue & Associates</b> 05/23 - 08/23</p>}
            content={<ul className='card-content'>
              <li>Manage website and help implement new tech endeavors</li>
              <li>Teach realtors how to get aerial shots of properties with a drone</li>
              <li>Set up computer equipment when moving office spaces</li></ul>} />
          <Card ariaLabel='Work experience, Bordeaux Constuction' id='construction-job-mobile' isMobile={false}
            title={<p className='card-title'><b>Construction,<br></br> Bordeaux Construction</b> 2020 - 2024</p>}
            content={<ul className='card-content'>
              <li>Renovate commercial and residential properties</li>
              <li>Assist contractor with full apartment renovations, at each stage of the process</li>
              <li>Flip large returns for property owners</li>
              <li>Build planning and communication skills dealing with potentially dangerous environments</li></ul>} />
        </section>
        <section id='class-work-mobile'>
          <h2>Notable Class Work</h2>
          <Card ariaLabel='Class, Web app development' id='web-dev-class-mobile' isMobile={false}
            title={<p className='card-title'><b>Web App Development</b>Fall 2023</p>}
            content={<p className='card-content'>Developed an iOS app which streamlines flight scheduling between pilots. Uses Apple’s AirTag feature. 3 member semester long project. JSON data exchanges through a RESTful API</p>} />
          <Card ariaLabel='Class, data privacy' id='data-priv-class-mobile' isMobile={false}
            title={<p className='card-title'><b>Data Privacy</b>Fall 2023</p>}
            content={<p className='card-content'>Solo Project-based Learning: Created software which adds privacy mechanisms to create secure and accurate coordinate data. Data then plotted on a world map with GeoPandas.</p>} />
          <Card ariaLabel='Class, software engineering' id='software-eng-class-mobile' isMobile={false}
            title={<p className='card-title'><b>Software Engineering</b>Spring 2023</p>}
            content={<p className='card-content'>Using Agile Development in a group of 4, I coded a simulated monopoly game using PyGame. Code was shared through GitLab for this semester-long project.</p>} />
          <Card ariaLabel='Class, cybersecurity' id='cybersecurity-class-mobile' isMobile={false}
            title={<p className='card-title'><b>Cybersecurity Principles</b>Summer 2022</p>}
            content={<p className='card-content'>Infiltrate my professor’s (fake) online bank using cryptographic hashing to secure computer networks. Newfound understanding of network threat vectors allows me to build more secure software.</p>} />
        </section>
      </div>
    </div>
  );
};

export default MobilePortfolio;