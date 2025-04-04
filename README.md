# Portfolio App Frontend
A React frontend which displays some of my work as a junior software developer.
- Paired with a backend which, for now, handles the API queries needed for my tarkov-app.

## Frontend Description
This repository provides a space for me to host my portfolio frontend, along with any other relevant react content. The app is a single-page multi-router app utilizing advanced features to showcase my growing frontend development skills. 

## Related Repositories
- <a href="https://github.com/McGovern7/portfolio-app-backend">Portfolio App Backend</a>

## Local Environment
Locally hosting this frontend is accomplished through the following steps:

Create a folder to contain the python environment, sql script, along with both frontend and backend folders
```
mkdir portfolio && cd portfolio
```
Create the folders which contain the frontend
```
mkdir frontend && cd frontend
mkdir portfolio-app && cd portfolio-app
npx create-react-app portfolio-app
cd portfolio-app
```
Install the package.json packages
```
npm install
```
Launch the react app
```
npm start
```
If npm install does not download all required packages, try doing it manually with the following commands in /portfolio-app
```
npm install react-router-dom react-icons animejs
npm install --save-dev @types/animejs
npm install --save-dev @types/node
```
If not done already, navigate back to /portfolio and begin installing the backend

Run site with
```
npm start
```

## Remote Build
In order to host this app remotely, the frontend will be hosted using Netlify.

## Stack Components
### Frontend
<div align="center">
    <img height="30px" width="auto" alt="Javscript" src="https://img.shields.io/badge/-empty?logo=javascript&label=Javascript&labelColor=%234d3459&color=%23fcdc00" />
    <img height="30px" width="auto" alt="react version 18.3.1" src="https://img.shields.io/npm/v/react?logo=react&label=React&color=%2300C4DC" />
    <img height="30px" width="auto" alt="axios version 1.7.8" src="https://img.shields.io/npm/v/axios?logo=axios&label=Axios&logoColor=%23671ddf&color=%23671ddf" />
    <img height="30px" width="auto" alt="Node.js version 20.18.1" src="https://img.shields.io/npm/v/node?logo=node.js&label=Node&color=%23417E38" />
    <img height="30px" width="auto" alt="Bootstrap version 5.3.3" src="https://img.shields.io/npm/v/bootstrap?logo=bootstrap&label=Bootstrap&color=%239461fb" />
    <img height="30px" width="auto" alt="anime.js version 3.2.2" src="https://img.shields.io/npm/v/animejs?logo=anime&label=anime.js&color=%23F74F4D" />
    <img height="30px" width="auto" alt="react-icons version 5.3.0" src="https://img.shields.io/npm/v/react-icons?logo=anime&label=react-icons&color=%23e91e63" />
    <img height="30px" width="auto" alt="tailwindcss version 3.4.15" src="https://img.shields.io/npm/v/tailwindcss?logo=tailwindcss&label=Tailwind%20CSS&color=%2338bdf9" />
</div>

### Backend
<div align="center">
    <img height="30px" width="auto" alt="Python" src="https://img.shields.io/badge/-empty?logo=python&label=Python&labelColor=%23214868&color=%23ffde73" />
    <img height="30px" width="auto" alt="fast API version 0.0.8" src="https://img.shields.io/npm/v/fastapi?logo=fastapi&label=FastAPI&color=%23009485" />
    <img height="30px" width="auto" alt="uvicorn version 0.32.1" src="https://img.shields.io/pypi/v/uvicorn?label=Uvicorn&color=%232094f3" />
    <img height="30px" width="auto" alt="SQLAlchemy version 2.0.36" src="https://img.shields.io/pypi/v/sqlalchemy?logo=sqlalchemy&label=SQLAlchemy&color=%23778877" />
    <img height="30px" width="auto" alt="Pydantic version 2.10.2" src="https://img.shields.io/pypi/v/pydantic?logo=pydantic&label=Pydantic&logoColor=%23e92063&color=%23e92063" />
    <img height="30px" width="auto" alt="python jose version 3.3.0" src="https://img.shields.io/pypi/v/python-jose?label=python-jose&color=%23006dad" />  
</div>

### Hosting
<div align="center">
    <img height="30px" width="auto" alt="Netlify Frontend" src="https://img.shields.io/badge/Frontend-%20?logo=Netlify&logoColor=%2332e2de&label=Netlify&color=%2332e2de" />
    <img height="30px" width="auto" alt="Render Backend" src="https://img.shields.io/badge/Backend-%20?logo=Render&label=Render&color=%232a0052" />
    <img height="30px" width="auto" alt="Supabase SQL Database" src="https://img.shields.io/badge/SQL%20Database-%20?logo=Supabase&label=Supabase&color=%2339c385" />
</div>

## Writeup
In today's rapidly evolving and competitive tech landscape, full-stack development has become an essential skill for developers. Full-stack development is a multi-discipline skill, requiring devs to have an end-to-end understanding of an application. This comprehensive knowledge enables efficient problem-solving and can lead to a more robust application architecture. For example, a full-stack dev assigned to the frontend can leverage their insights of backend processes to optimize how frontend components interact with server-side logic. These devs can streamline queries, robustly handle bad requests, and minimize server data load—improving both performance and user experience.

When creating applications prior to this project, I was primarily assigned roles localized within the frontend or backend of an application. While this specialization allowed for expertise of roles, it limited my understanding of the app’s overall architecture. With this project, my goal is to gain a comprehensive view of the entire application stack.

I have successfully taught myself the various software disciplines necessary to build my first web application as a solo full-stack developer. Made high in demand by today's devs, this project's stack comprises the following tools.

## Onboarded Skills
- Starting from almost no background, I have built a Web API which is asynchronous, multi-port capable, well documented, secured, and efficient
- For future projects, I can develop more complex API techniques within the ever-growing FastAPI web framework
- With additional built-in packages, I can easily scale my app with features like caching, load balancing, rate limiting, and automated backups
- Having never used React prior to this, I have created a modular, scalable, and accessible app. This app is much more complex than anything I have built in the past, even apps I created in a group
- I can jump-start future web apps with the components I created for this project (Button, Navbar, Sidebar, etc)
- Given React’s wealth of libraries, tools, and extensions, there are always new techniques I can and implement
- Onboarded multi-provider hosting in order to host my fullstack site with no cost. Site is updated though Github Commits from my frontend and backend repositories
- Netlify hosts the React frontend, Render the FastAPI backend, and Supabase handles the PostgreSQL database changes
