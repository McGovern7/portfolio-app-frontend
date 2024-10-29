import React from 'react';
import Navbar from '../components/Navbar';
import '../components/components.css'
import './pages.css'
import LoggedOut from '../assets/LoggedOut.png';
import LoggedIn from '../assets/LoggedIn.png';
import DataFlow from '../assets/DataFlow.png';

export default function Home() {
  return (
    <body className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <main>
        <h3 className='writeup-title'>Writeup: Tarkov Ammo Storage Application</h3>
        <div className='writeup'>
          <p>
            &nbsp;&nbsp;&nbsp;In today's rapidly evolving and competitive tech landscape, full-stack development has become an essential skill for developers. Full-stack development is a multi-discipline skill, requiring devs to have an end-to-end understanding of an application. This comprehensive knowledge enables efficient problem-solving and can lead to a more robust application architecture.  For example, a full-stack dev assigned to the frontend can leverage their insights of backend processes to optimize how frontend components interact with server-side logic. These devs can streamline queries, robustly handle bad requests, and minimize server data load—improving both performance and user experience.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;When creating applications prior to this project, I was primarily assigned roles localized within the frontend or backend of an application.  While this specialization allowed for experties of roles, it limited my understanding of the app’s overall architecture.  With this project, my goal is to gain a comprehensive view of the entire application stack.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;I have successfully taught myself the various software disciplines necessary to build my first web application as a solo full-stack developer.  Made high in demand by today's devs, this project's stack comprises the following tools:
          </p>
        </div>

        <h4>Back End</h4>
        <div className='list-wrap'>
          <ul className='list-group'>
            <li className='list-group-item'><b>MySQL CRUD</b> operations, creating queries in both <b>SQL</b> and <b>FastAPI</b></li>
            <li className='list-group-item'><b>Pydantic</b> model validation</li>
            <li className='list-group-item'><b>JWT</b> Authentication using web tokens</li>
            <li className='list-group-item'><b>CORSMiddleware</b> for cross-origin access and security</li>

          </ul>
        </div>
        <h4>Front End</h4>
        <div className='list-wrap'>
          <ul className='list-group'>
            <li className='list-group-item'>The <b>React</b> library for web and native user interfaces</li>
            <li className='list-group-item'>The <b>Axios</b> library to parse the FastAPI JSON data to Javascript</li>
            <li className='list-group-item'>The <b>Bootstrap</b> styling toolkit</li>
            <li className='list-group-item'><b>CSS</b> styling</li>
          </ul>
        </div>
        <section>
          <h3>Architecture: FrontEnd</h3>

          <h3>Architecture: Backend</h3>
          <div className='writeup'>
            <p>
              &nbsp;&nbsp;&nbsp;This application leverages Python's FastAPI alongside MySQL to create a fast, intuitive, and secure RESTful API framework. I utilized a MySQL script to create static tables and initialize dynamic ones. Subsequent requests are handled through FastAPI with Pydantic, enabling features such as asynchronous support, automatic data validation, interactive documentation, improved security, and scalability for future projects.
            </p>
          </div>
          <h3>Architecture: The Stack</h3>

        </section>
        <section className='dataflow'>
          <h3>API-User Dataflow</h3>
          <img aria-labelledby='image-set' className='data-flow-img' src={DataFlow} loading="lazy" alt="Flow Diagram of how data transfers from frontend to backend using software packages"></img>
          <div className='image-set'>
            <img aria-labelledby='image-set' className='logged-out-img' src={LoggedOut} loading="lazy" alt="Chart depicting a logged out user's API call Dataflow"></img>
            <img aria-labelledby='image-set' className='logged-in-img' src={LoggedIn} loading="lazy" alt="Chart depicting a logged In user's API call Dataflow"></img>
          </div>
        </section>
      </main>
    </body>
  )
}