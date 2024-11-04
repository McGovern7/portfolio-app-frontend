import React from 'react';
import Navbar from '../components/Navbar';
import ImageComp from '../components/ImageComp.tsx';
import Card from '../components/Card.tsx'
import '../components/components.css'
import './pages.css'


export default function Home() {
  return (
    <body className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <main>
        <section className='writeup'>
          <h3 className='writeup-title'>Writeup: Tarkov Ammo Storage Application</h3>
          <p>
            &nbsp;&nbsp;&nbsp;In today's rapidly evolving and competitive tech landscape, full-stack development has become an essential skill for developers. Full-stack development is a multi-discipline skill, requiring devs to have an end-to-end understanding of an application. This comprehensive knowledge enables efficient problem-solving and can lead to a more robust application architecture.  For example, a full-stack dev assigned to the frontend can leverage their insights of backend processes to optimize how frontend components interact with server-side logic. These devs can streamline queries, robustly handle bad requests, and minimize server data load—improving both performance and user experience.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;When creating applications prior to this project, I was primarily assigned roles localized within the frontend or backend of an application.  While this specialization allowed for expertise of roles, it limited my understanding of the app’s overall architecture.  With this project, my goal is to gain a comprehensive view of the entire application stack.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;I have successfully taught myself the various software disciplines necessary to build my first web application as a solo full-stack developer.  Made high in demand by today's devs, this project's stack comprises the following tools.
          </p>
        </section>
        <section className='stack'>
          <h3>Architecture: The Stack</h3>
          <h4>Back End</h4>
          <div className='card-block'>
            <Card aria-label='SQL and FASTAPI card' id='api-card'
              title={<p className='card-title' ><b>MySQL CRUD</b> using <b><a target="_blank" rel="noopener noreferrer" href='https://fastapi.tiangolo.com/'>FastAPI</a></b></p>}
              content={<p className='card-content' >MySQL script initializes my database, where FastAPI queries make speedy, secure, scalable, and asynchronous API calls</p>}
            />
            <Card aria-label='Pydantic Card' id='pydantic-card'
              title={<p className='card-title' ><b><a target="_blank" rel="noopener noreferrer" href='https://docs.pydantic.dev/latest/'>Pydantic</a></b> modeling</p>}
              content={<p className='card-content' >Saves resources by automatically serializing data and invalidating bad API requests</p>}
            />
            <Card aria-label='JWT Card' id='jwt-card'
              title={<p className='card-title' ><b><a target="_blank" rel="noopener noreferrer" href='https://jwt.io/introduction'>JWT</a></b> Authentication</p>}
              content={<p className='card-content' >Using server-independent encrypted JSON web tokens to verify a session's access to user data</p>}
            />
            <Card aria-label='CORS Card' id='cors-card'
              title={<p className='card-title' ><b><a target="_blank" rel="noopener noreferrer" href='https://expressjs.com/en/resources/middleware/cors.html'>CORSMiddleware</a></b></p>}
              content={<p className='card-content' >Enabes cross-origin access, essential for modern web architectures</p>}
            />
          </div>
          <h4>Front End</h4>
          <div className='card-block'>
            <Card aria-label='React Card' id='react-card'
              title={<p className='card-title' >The <b><a target="_blank" rel="noopener noreferrer" href='https://react.dev/'>React</a></b> library for building user interfaces</p>}
              content={<p className='card-content' >Simplifies the frontend content into scalable, efficient components</p>}
            />
            <Card aria-label='Axios Card' id='axios-card'
              title={<p className='card-title' >The <b><a target="_blank" rel="noopener noreferrer" href='https://axios-http.com/docs/intro'>Axios</a></b> library</p>}
              content={<p className='card-content' >Asynchronously, automatically parses backend data into usable frontend objects</p>}
            />
            <Card aria-label='Bootstrap Card' id='bootstrap-card'
              title={<p className='card-title' >The <b><a target="_blank" rel="noopener noreferrer" href='https://getbootstrap.com/'>Bootstrap</a></b> styling toolkit</p>}
              content={<p className='card-content' >Uses component presents, saving me from the monotony of styling from scratch</p>}
            />
            <Card aria-label='CSS Card' id='css-card'
              title={<p className='card-title' >The <b><a target="_blank" rel="noopener noreferrer" href='https://www.w3schools.com/html/html_css.asp'>CSS</a></b> style sheet language</p>}
              content={<p className='card-content' >Allows me to create more complex styling options</p>}
            />
          </div>
        </section>

        <section className='dataflow'>
          <h3>API-User Dataflow</h3>
          <ImageComp ariaLabel='api data diagram' src='DataFlow.webp' className='data-flow-img shadow' alt="Flow Diagram of how data transfers from frontend to backend using software packages" />
          <div className='image-set'>
            <ImageComp ariaLabel='Logged out flowchart' src='LoggedOut.webp' className='logged-out-img shadow' alt="Chart depicting a logged out user's API call Dataflow" />
            <ImageComp ariaLabel='Logged in flowchart' src='LoggedIn.webp' className='logged-in-img shadow' alt="Chart depicting a logged In user's API call Dataflow" />
          </div>
        </section>
      </main>
    </body >
  )
}