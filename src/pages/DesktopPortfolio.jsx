import { Link } from 'react-router-dom';
import { Card, Grid, ScrollTo, useCollapse, useDarkMode, useScreenWidth, Sidebar } from '../components';
import { FiArrowUpRight } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { BiExpandHorizontal } from "react-icons/bi";
import { IoContrast } from "react-icons/io5";
import './DesktopStyle.css';
import './SharedStyle.css';

const DesktopPortfolio = () => {
	// Call the useContext variables
	const { leftStatus, rightStatus, toggleCollapse } = useCollapse();
	const { darkMode, toggleDarkMode } = useDarkMode();
	const { isSmallDesktop } = useScreenWidth();

	return (
		<div className={`desktop-portfolio  ${darkMode ? 'dark' : ''}`}>
			<Sidebar />
			<div className={`left-col ${leftStatus ? '' : 'hidden-a'} ${rightStatus ? '' : 'hidden-b'}`}>
				<section>
					<button id='dark-btn' className='circle-btn' aria-label='toggle dark mode' onClick={toggleDarkMode}>
						<IoContrast />
					</button>
					<h1>Luke McGovern</h1>
					<ul style={{ paddingLeft: '3px' }}>
						<p className='mini' >Software Engineer, Fullstack Developer</p>
						<p className='mini'>luke.mcgovern18@gmail.com</p>
					</ul>
					<ul className='scroll-list' aria-label='scrolls to sections of content' >
						<ScrollTo className='scroll-to' content='About Me' sectionID='about-me' />
						<ScrollTo className='scroll-to' content='Proficiencies' sectionID='proficiencies' />
						<ScrollTo className='scroll-to' content='Projects' sectionID='projects' />
						<ScrollTo className='scroll-to' content='Work Experience' sectionID='work-experience' />
						<ScrollTo className='scroll-to' content='Class Work' sectionID='class-work' />
					</ul>
				</section>
				<Grid aria-hidden="true" />
			</div>
			<div className={`resize-col ${isSmallDesktop ? '' : 'wide'}`}>
				<button id='resize-btn' className='circle-btn' aria-label='collapse current column to expand the other' onClick={toggleCollapse}>
					<BiExpandHorizontal />
				</button>
			</div>
			<div className={`right-col ${leftStatus ? '' : 'hidden-a'} ${rightStatus ? '' : 'hidden-b'}`}>
				<section id='about-me'>
					<h2>About Me</h2>
					<p className='mb-0'>I am a recent Computer Science graduate from the University of Vermont, where I earned a knowledge base spanning multiple disciplines and languages. Since graduating, I've been passionately expanding my C.S. repertoire to dynamically address the evolving challenges in our tech landscape. My passion to code comes from an innate desire to find creative solutions to complex problems.<br /><br />
						<b>(<u>2024</u>)</b> I have recently become proficient in robotics software architecture after designing autonomous navigation features for a virtual drone. I have also developed and hosted my Personal Website, which contains my first fullstack application. These solo projects have improved my ability to solve problems independently, and build large-scale software systems.<br /><br />
						<b>(<u>2025</u>)</b> I am currently working as a contracted web developer, tasked with overhauling design, and API functionality for two companies' e-commerce websites. I am collaborating with business owners, their employees, and brand strategists to improve their companies’ online presence. This real-world experience is improving my ability to analyze digital platforms, understand their inner workings, and implement practical optimizations. Balancing these two gigs has greatly improved my time management and prioritization skills. More info <ScrollTo className='scroll-link' content='here' embed='True' sectionID='work-experience' />.<br /><br />
						My ultimate goal is to join a development team at an innovative company, where I can apply my skills, creativity, and passion to make impactful solutions. I am eager to contribute long-term, grow as a developer, and collaborate with a team that shares my values.</p>
				</section>
				<section id='proficiencies'>
					<h2>Proficiencies</h2>
					<div id='prof-table'>
						<div className='col languages'>
							<div className='row'>
								<h4 className='thin-header'>LANGUAGES</h4>
							</div>
							<div className='row'>
								<div className='col skills'>
									<p>Python<br />Swift<br />C<br />C++</p>
								</div>
								<div className='col skills'>
									<p>Javascript<br />TypeScript<br />Ruby</p>
								</div>
								<div className='col skills'>
									<p>SQL<br />CSS3<br />HTML5</p>
								</div>
							</div>
						</div>
						<div className='col tools'>
							<div className='row'>
								<h4 className='thin-header'>SKILLS & TOOLS</h4>
							</div>
							<div className='row'>
								<div className='col skills'>
									<p className='mb-0'>Fullstack Dev<br />FastAPI<br />Figma<br />iOS Dev<br />ShopifyCLI</p>
								</div>
								<div className='col skills'>
									<p>GIT<br />ROS Robotics<br />LinuxCLI<br />Pandas</p>
								</div>
								<div className='col skills'>
									<p>React.js<br />Node.js<br />Data Privacy<br />PC Building</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id='projects'>
					<h2>Projects</h2>
					<div className='project-link'>
						<Link className='thin-title' aria-label="Open my Tarkov App in a new tab" to='/tarkov-app/home' target="_blank" rel="noopener noreferrer">
							TARKOV APP<FiArrowUpRight className='external' />
						</Link>
					</div>
					<div className='row'>
						<p className='col'>Having been primarily assigned Front-End roles in college, I sought to expand my horizons. I built this FastAPI app to uncover the aspects of a contemporary website's development stack, and uncoil their interworkings.</p>
						<p className='col'>My website's stack is designed using modular components, so that future builds can be scaled with additional components like Caching, Load Balancing, and Backups. Expect slow API service, as the SQL is hosted on a free Supabase version.</p>
					</div>
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
					<p className='mini'>Backend</p>
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
					<div style={{ paddingTop: '4vh', borderTop: '1px solid #216E4E' }} />
					<div className='project-link'>
						<Link className='thin-title' aria-label="Open Ardupilot Github repo in a new tab" to='https://github.com/McGovern7/ardupilot-nav-scripts' target="_blank" rel="noopener noreferrer">
							ARDUPILOT NAV<FiArrowUpRight className='external' />
						</Link>
					</div>
					<div className='row'>
						<p className='col'>After graduation, I joined the drone navigation community. A community where hobbyists build and program drones to navigate without controllers. The code I built for this project allows a drone to navigate a 3D maze autonomously using a script I developed.</p>
						<p className='col'>This is just the beginning. I have Future plans to create object recognition and tracking software, which will then be integrated into a custom-built drone. See the writeup.md on Github for the project's overview</p>
					</div>
					<div className='shield'>
						<img alt="ardupilot copter" src="https://img.shields.io/badge/Copter-space?label=Ardupilot&labelColor=%23dedede&color=%23fcd94c" />
						<img alt="Python" src="https://img.shields.io/badge/-empty?logo=python&label=Python&labelColor=%23214868&color=%23ffde73" />
						<img alt="Ubuntu" src="https://img.shields.io/badge/v22.0.4-space?logo=ubuntu&label=Ubuntu&color=%23e95521" />
						<img alt="ros 2 humble" src="https://img.shields.io/badge/Humble-humble?logo=ros&logoColor=%232980b9&label=ROS2&color=%232980b9" />
						<img alt="rclpy node" src="https://img.shields.io/badge/Node-space?label=rclpy&color=%232980b9" />
						<img alt="pymavlink mavutil" src="https://img.shields.io/badge/mavutil-space?label=Pymavlink&color=%23ee6000" />
					</div>
				</section>
				<section id='work-experience'>
					<span id='work-status'><h2>Work Experience<p><FaCircle color='#8C1A00' /> Active <FaCircle color='#352C63' /> Prior</p></h2></span>
					<Card id='jwm-job'
						title={<p className='card-title'><b> Contract Web Developer<br />
							<Link className='card-link' aria-label="Open Johnson Woolen Mills website in a new tab" to='https://www.johnsonwoolenmills.com/' target="_blank" rel="noopener noreferrer">
								Johnson Woolen Mills<FiArrowUpRight className='external' />
							</Link>
						</b> 3/25–</p>}
						content={<ul className='card-content'>
							<li>Currently overhauling UX/UI of an E-commerce website using ShopifyCLI</li>
							<li>Collaborating with brand ambassadors to outline the rebrand's impact on the website</li>
							<li>Planning to optimize throughput by teaching employees how to properly log sales</li></ul>} />
					<Card id='nypo-job'
						title={<p className='card-title'><b> Web & Digital Strategy Lead<br />
							<Link className='card-link' aria-label="Open New York Pizza oven website in a new tab" to='https://www.nypovt.com/' target="_blank" rel="noopener noreferrer">
								New York Pizza Oven<FiArrowUpRight className='external' />
							</Link>
						</b> 2/25–</p>}
						content={<ul className='card-content'>
							<li>Enhancing the website's design and optimizing the integration of its Point of Sale (POS) API (Using ToastTab).</li>
							<li>Streamlining the online ordering process, Increasing traffic and sales</li>
							<li>Managing the pizza shop's online marketing campaigns</li></ul>} />
					<Card id='D-and-A-job'
						title={<p className='card-title'><b>Tech Consultant<br /> Donahue & Associates</b> 5/23–8/23</p>}
						content={<ul className='card-content'>
							<li>Manage website and help implement new tech endeavors</li>
							<li>Teach realtors how to get aerial shots of properties with a drone</li>
							<li>Set up computer equipment when moving office spaces</li></ul>} />
					<Card id='construction-job'
						title={<p className='card-title'><b>Construction<br /> Bordeaux Construction</b> 6/20–12/24</p>}
						content={<ul className='card-content'>
							<li>Renovate commercial and residential properties</li>
							<li>Assist contractor with full apartment renovations</li>
							<li>Build planning and communication skills in high-risk environments</li></ul>} />
				</section>
				<section id='class-work'>
					<h2>Notable Class Work</h2>
					<Card id='web-dev-class'
						title={<p className='card-title'><b>Web App Development</b>Fall 2023</p>}
						content={<p className='card-content'>Developed an iOS app which streamlines flight scheduling between pilots. Uses Apple’s AirTag feature. 3 member semester long project. JSON data exchanges through a RESTful API</p>} />
					<Card id='data-priv-class'
						title={<p className='card-title'><b>Data Privacy</b>Fall 2023</p>}
						content={<p className='card-content'>Solo Project-based Learning: Created software which adds privacy mechanisms to create secure and accurate coordinate data. Data then plotted on a world map with GeoPandas.</p>} />
					<Card id='software-eng-class'
						title={<p className='card-title'><b>Software Engineering</b>Spring 2023</p>}
						content={<p className='card-content'>Using Agile Development in a group of 4, I coded a simulated monopoly game using PyGame. Code was shared through GitLab for this semester-long project.</p>} />
					<Card id='cybersecurity-class'
						title={<p className='card-title'><b>Cybersecurity Principles</b>Summer 2022</p>}
						content={<p className='card-content'>Infiltrate my professor’s (fake) online bank using cryptographic hashing to secure computer networks. Newfound understanding of network threat vectors allows me to build more secure software.</p>} />
				</section>
			</div>
		</div>
	);
};

export default DesktopPortfolio;