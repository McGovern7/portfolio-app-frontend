import React from 'react';
import { Navbar, ImageComp, Card, ScrollTo } from '../components';
import { FaAngleUp } from "react-icons/fa6";
import './pages.css';

export default function Home() {
  return (
    <div className='main-page' id="home-top">
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <main>
        <p id='warning-text'>
          **EXPECT WAIT TIMES (1 MIN +), API HOSTED ON A FREE SUPABASE TRIAL, NEEDS TIME TO LAUNCH**
        </p>
        <section id='description'>
          <h3 id='description-title'>App Description</h3>
          <p>
            &emsp;&ensp;This app provides a space for players of the game Escape from Tarkov to create secure accounts, log their in-game ammo, and view advanced ammo data. The storage tab can be accessed after registering an account and loggin in.
          </p>
        </section>
        <section id='writeup-sect'>
          <h3>Writeup: Tarkov Ammo Storage Application</h3>
          <p>
            &emsp;&ensp;In today's rapidly evolving and competitive tech landscape, full-stack capable developers are becoming highly regarded. Full-stack development is a multi-discipline skill, requiring devs to have an end-to-end understanding of an application. This comprehensive knowledge enables efficient problem-solving and leads to the creation of more robust application architecture.  For example, a full-stack dev assigned to the frontend can leverage their insights of backend processes to optimize how frontend components interact with server-side logic. These devs can streamline queries, robustly handle bad requests, and minimize server data load. In turn improving performance, development time, and user experience.
          </p>
          <p>
            &emsp;&ensp;When creating applications prior to this project, I was primarily assigned roles localized within an app's frontend or backend.  While this specialization allowed for expertise of roles, it limited my understanding of the app’s overall architecture.  My goal with this project is to gain a comprehensive view of an application's stack, while discovering the benefits and challenges associated with full-stack development.
          </p>
          <p>
            &emsp;&ensp;I have successfully taught myself the various software disciplines necessary to build my first web application as a solo full-stack developer.  In addition, I have learned the process of hosting this app both remotely and locally.  Made high in demand by today's devs, the following elements comprise this project's stack.
          </p>
        </section>
        <section>
          <h3>Architecture: The Stack on localhost</h3>
          <h4 style={{ textAlign: 'left', margin: '2rem 0rem 0rem 8rem' }}>Back End</h4>
          <div className='card-block'>
            <Card aria-label='MySQL card' id='data-card'
              title={<p className='card-title' ><b><a target="_blank" rel="noopener noreferrer" href='https://www.mysql.com/'>MySQL</a></b> Database</p>}
              content={<p className='card-content' >MySQLWorkbench initializes SQL tables from a script and hosts the database.</p>}
            />
            <Card aria-label='FASTAPI card' id='api-card'
              title={<p className='card-title' ><b><a target="_blank" rel="noopener noreferrer" href='https://fastapi.tiangolo.com/'>FastAPI</a></b> Querying</p>}
              content={<p className='card-content' >FastAPI queries call the database via SQLAlchemy to make speedy, secure, scalable, and asynch CRUD operations</p>}
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
              content={<p className='card-content' >Enables cross-origin access between the React frontend and FastAPI backend, essential for modern web architectures</p>}
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
          <p className='img-text' aria-labelledby='data-flow-img'>
            *localhost* Portraying the Data Transformations required so that the Frontend and Backend can receive it at each step.
          </p>
          <ImageComp id='data-flow-img' ariaLabel='api data diagram' src='DataFlow.webp' className='shadow' alt="Flow Diagram of how data transfers from frontend to backend using software packages" />
          <p className='img-text' aria-labelledby='image-set'>
            Depicting the Flow of User-Specific Data when navigating the pages of the app. Diagram's changes show the levels of permission between login statuses
          </p>
          <div id='image-set'>
            <ImageComp id='logged-out-img' ariaLabel='Logged out flowchart' src='LoggedOut.webp' className='shadow' alt="Chart depicting a logged out user's API call Dataflow" />
            <ImageComp id='logged-in-img' ariaLabel='Logged in flowchart' src='LoggedIn.webp' className='shadow' alt="Chart depicting a logged In user's API call Dataflow" />
          </div>
        </section>
        <section id='onboarded-sect'>
          <h3>Skills I’ve Onboarded</h3>
          <ul className=" list-group list-group-flush shadow-lg">
            <li className="list-group-item">-  Starting with almost no background, I have built a web API which is <u>asynchronous</u>, <u>multi-port capable</u>, <u>well documented</u>, <u>secured</u>, and <u>efficient</u></li>
            <li className="list-group-item">&emsp;&ensp;-  For future projects, I can develop more complex API techniques within the ever-growing FastAPI web framework</li>
            <li className="list-group-item">&emsp;&ensp;-  With additional built-in packages, I can easily scale my app with features like <u>caching</u>, <u>load balancing</u>, <u>rate limiting</u>, and <u>automated backups</u></li>
            <li className="list-group-item">-  Having never used React prior to this, I have created a <u>modular</u>, <u>scalable</u>, and <u>accessible</u> app.  This app is much more complex than anything I have built in the past, even apps I created in a group</li>
            <li className="list-group-item">&emsp;&ensp;-  I can jump-start future web apps with the components I created for this project (Button, Navbar, Sidebar, etc)</li>
            <li className="list-group-item">&emsp;&ensp;-  Given React’s wealth of libraries, tools, and extensions, there are always new techniques I can and implement</li>
            <li className="list-group-item">-  Onboarded multi-provider hosting in order to host my fullstack site with no cost. Site is updated though Github Commits from my frontend and backend repositories</li>
            <li className="list-group-item">&emsp;&ensp;-  <u>Netlify</u> hosts the React frontend, <u>Render</u> the FastAPI backend, and <u>Supabase</u> handles the PostgreSQL datbase changes</li>
          </ul>
        </section>
        <ScrollTo ariaLabel='scroll to top button' className='scroll-to'
                      icon={<FaAngleUp />} sectionID='top' />
      </main>
    </div>
  )
}