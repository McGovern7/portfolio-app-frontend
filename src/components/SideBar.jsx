import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageComp from './ImageComp.tsx';
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoHome, IoHomeOutline, IoDocumentAttach, IoDocumentAttachOutline } from "react-icons/io5";

import './components.css';

function SideBar() {
	const sideRef = useRef();
	const navigate = useNavigate();
	const [canGoBack, setCanGoBack] = useState();
	const isHome = window.location.pathname === '/portfolio';
	const isResume = window.location.pathname === '/resume';

	const checkCanGoBack = async () => {
		if (document.referrer && new URL(document.referrer).origin === window.location.origin) {
			console.log(canGoBack);
			setCanGoBack(true);
		}
		else {
			console.log(canGoBack);
			setCanGoBack(false);
		}
	}

	const goBack = () => {
		if (canGoBack) {
			navigate(-1); // Go back if within the same origin
		} else {
			navigate('/portfolio'); // Fallback
		}
	};
	useEffect(() => {
		checkCanGoBack();
	});
	return (
		<div className='side-bar-comp'>
			<div className='back-btn-container'>
				<button id="back-btn" onClick={goBack} style={{ visibility: canGoBack ? 'visible' : 'hidden' }}>
					<FaArrowLeftLong />
				</button>
			</div>
			<nav className='side-bar' ref={sideRef}>
				<a id='home-link' href="http://localhost:3000/portfolio"><div className='side-icon'>{isHome ? <IoHome /> : <IoHomeOutline />}</div><h5>Home</h5></a>
				<a id='resume-link' href="http://localhost:3000/resume"><div className='side-icon'>{isResume ? <IoDocumentAttach /> : <IoDocumentAttachOutline />}</div><h5>Resume</h5></a>
			</nav>
			<div id='side-border'/>
			<nav className='side-bar' ref={sideRef}>
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/McGovern7"><ImageComp ariaLabel='Github logo' src='GithubLogo.webp' alt="the Github logo in a circle"></ImageComp><h5>Github</h5></a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luke-mcgovern-03248528a/"><ImageComp aria-label='Linked in logo' src='LinkedInLogo.webp' alt="the Linked in logo in a circle" ></ImageComp><h5>LinkedIn</h5></a>
				<a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&to=luke.mcgovern18@gmail.com&su=&body=&bcc=&tf=cm"><ImageComp ariaLabel='Gmail logo' src='GmailLogo.webp' alt="the Gmail logo in a circle" ></ImageComp><h5>Email Me</h5></a>
			</nav>
		</div>
	);
}

export default SideBar