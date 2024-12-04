import React from 'react';
import { Navbar, ImageComp, Card } from '../components';
import '../components/components.css';
import './pages.css';

export default function Home() {
  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <main>
        <section id='description'>
          <h3 id='description-title'>App Description</h3>
          <p>
            &nbsp;&nbsp;&nbsp;This app provides a space for players of the game Escape from Tarkov to store the ammo they have found, and view the ammo's advance data. The storage tab can be accessed after registering an account and loggin in.
          </p>
        </section>
        <section id='writeup-sect'>
          <h3 id='unused-writeup-title'>Writeup: Tarkov Ammo Storage Application</h3>
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
        <section id='unused-stack-sect'>
          <h3>Architecture: The Stack</h3>
          <h4 style={{ textAlign: 'left', margin: '2rem 0rem 0rem 8rem' }}>Back End</h4>
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
              content={<p className='card-content' >Enables cross-origin access, essential for modern web architectures</p>}
            />
          </div>
          <h4 style={{ textAlign: 'left', margin: '1rem 0rem 0rem 8rem' }}>Front End</h4>
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

        <section id='dataflow-sect'>
          <h3>API-User Dataflow</h3>
          <p aria-labelledby='data-flow-img'>
            Portraying the Data Transformations required so that the Frontend and Backend can receive it at each step.
          </p>
          <ImageComp id='data-flow-img' ariaLabel='api data diagram' src='DataFlow.webp' className='shadow' alt="Flow Diagram of how data transfers from frontend to backend using software packages" />
          <p aria-labelledby='image-set'>
            Depicting the Flow of User-Specific Data when navigating the pages of the app. Diagram's changes show the levels of permission between login statuses
          </p>
          <div id='image-set'>
            <ImageComp id='logged-out-img' ariaLabel='Logged out flowchart' src='LoggedOut.webp' className='shadow' alt="Chart depicting a logged out user's API call Dataflow" />
            <ImageComp id='logged-in-img' ariaLabel='Logged in flowchart' src='LoggedIn.webp' className='shadow' alt="Chart depicting a logged In user's API call Dataflow" />
          </div>
        </section>
        <section id='onboarded-sect'>
          <h3>Skills I’ve Onboarded</h3>
          <ul class=" list-group list-group-flush shadow-lg">
            <li class="list-group-item">-  Starting from almost no background, I have built a web api which is <u>asynchronous</u>, <u>multi-port capable</u>, <u>well documented</u>, <u>secured</u>, and <u>efficient</u></li>
            <li class="list-group-item">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-  For future projects, I can develop more complex api techniques within the ever-growing FastAPI web framework. </li>
            <li class="list-group-item">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-  With additional built-in packages, I can easily scale my app with features like <u>caching</u>, <u>load balancing</u>, <u>rate limiting</u>, and <u>automated backups</u>.</li>
            <li class="list-group-item">-  Having never used React prior to this, I have created a <u>modular</u>, <u>scalable</u>, and <u>accessible</u> app.  This app is much more complex than anything I have built in the past, even apps I created in a group</li>
            <li class="list-group-item">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-  I can jump-start future web apps with the components I created for this project (Button, Navbar, Sidebar, etc) </li>
            <li class="list-group-item">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-  Given React’s wealth of libraries, tools, and extensions, there are always new techniques I can and implement. </li>
          </ul>
        </section>
      </main>
    </div>
  )
}