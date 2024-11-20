import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageComp from './ImageComp';
import { FaArrowLeftLong } from "react-icons/fa6";
import './components.css';

function SideBar() {
	const sideRef = useRef();
	const navigate = useNavigate();

	const goBack = () => {
		if (document.referrer && new URL(document.referrer).origin === window.location.origin) {
			navigate(-1); // Go back if within the same origin
		} else {
			navigate('/portfolio'); // Fallback
		}
	};
	return (
		<div className='side-bar-comp'>
			<div style={{position: 'relative'}}> </div>
			<button id="back-btn" onClick={goBack}>
				<FaArrowLeftLong />
			</button>
			<nav className='side-bar' ref={sideRef}>
				<a id='github-nav' target="_blank" rel="noopener noreferrer" href="https://github.com/McGovern7"><ImageComp ariaLabel='Github logo' src='GithubLogo.webp' alt="the Github logo in a circle"></ImageComp><h5>Github</h5></a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luke-mcgovern-03248528a/"><ImageComp aria-label='Linked in logo' src='LinkedInLogo.webp' alt="the Linked in logo in a circle" ></ImageComp><h5>LinkedIn</h5></a>
				<a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&to=luke.mcgovern18@gmail.com&su=&body=&bcc=&tf=cm"><ImageComp ariaLabel='Gmail logo' src='GmailLogo.webp' alt="the Gmail logo in a circle" ></ImageComp><h5>Email Me</h5></a>
				<a href="http://localhost:3000/resume"><ImageComp ariaLabel='resume logo' src='ResumeLogo.webp' alt="a resume symbol in a circle" ></ImageComp><h5>Resume</h5></a>
				<a href="http://localhost:3000/home"><ImageComp ariaLabel='Website logo' src='WebLogo.webp' alt="a website symbol in a circle" ></ImageComp><h5>API App</h5></a>
			</nav>
		</div>
	);
}

export default SideBar