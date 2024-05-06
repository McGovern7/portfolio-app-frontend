import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <h3>Writeup: Tarkov Ammo Storage Application</h3>
      <p>
        Full-stack development is a multi-discipline skill, requiring devs to have an End-to-End understanding of an application. This comprehensive understanding is beneficial, as it can lead to efficient problem solving, and improved application architecture.  Within a team, a dev capable of full-stack development is preferred. For example, even if a full-stack dev is tasked within the front-end, their insights can be effectively communicated with members of the back-end, creating a smoother transition between the groups.
      </p>
      <p>
        When creating applications before this project, my role has always been assigned entirely within the front-end or back-end of an application.  This compartmentalizing of roles allowed for better specialization between team members, but it also prevented me from understanding the app’s overall architecture.
      </p>
      <p>
        For this project I have successfully learned, and integrated the various software disciplines necessary to build a web application as a solo full-stack developer.  I have become more adept with:
      </p>
      <h4>Back End</h4>
      <div className='list-wrap'>
        <ul className='list-group'>
          <li className='list-group-item'><b>MySQL CRUD</b> operations, creating queries in both <b>SQL</b> and <b>FastAPI</b></li>
          <li className='list-group-item'><b>Pydantic</b> model validation</li>
          <li className='list-group-item'><b>JWT</b> Authentication using web tokens</li>
        </ul>
      </div>
      <h4>Front End</h4>
      <div className='list-wrap'>
        <ul className='list-group'>
          <li className='list-group-item'>The <b>React</b> library for web and native user interfaces</li>
          <li className='list-group-item'>The <b>Bootstrap</b> styling toolkit</li>
          <li className='list-group-item'><b>CSS</b> styling</li>
        </ul>
      </div>
      <h3>Architecture</h3>
      <p>
        This application uses Python's FastAPI, in conjunction with MySQL data, to create a fast and intuitive RESTful API framework.
      </p>
    </div>
  )
}