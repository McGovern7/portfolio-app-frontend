import { useRef } from 'react';
import ImageComp from './ImageComp';

function SideBar() {
	const sideRef = useRef();
	return (
		<div className='side-bar-comp'>
			<nav className='side-bar' ref={sideRef}>
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/McGovern7"><ImageComp ariaLabel='Github logo' src='GithubLogo.webp' alt="the Github logo in a circle"></ImageComp><h5>Github</h5></a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luke-mcgovern-03248528a/"><ImageComp aria-label='Linked in logo' src='LinkedInLogo.webp' alt="the Linked in logo in a circle" ></ImageComp><h5>LinkedIn</h5></a>
				<a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&to=luke.mcgovern18@gmail.com&su=&body=&bcc=&tf=cm"><ImageComp ariaLabel='Gmail logo' src='GmailLogo.webp' alt="the Gmail logo in a circle" ></ImageComp><h5>Email</h5></a>
				<a href="http://localhost:3000/resume"><ImageComp ariaLabel='resume logo' src='ResumeLogo.webp' alt="a resume symbol in a circle" ></ImageComp><h5>Resume</h5></a>
				<a href="http://localhost:3000/portfolio"><ImageComp ariaLabel='Website logo' src='WebLogo.webp' alt="a website symbol in a circle" ></ImageComp><h5>Website</h5></a>
			</nav>
		</div>
	);
}

export default SideBar