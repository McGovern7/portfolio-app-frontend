import { useRef } from 'react';
import './components.css';
import GithubLogo from '../assets/GithubLogo.png'
import LinkedInLogo from '../assets/LinkedInLogo.png'
import GmailLogo from '../assets/GmailLogo.png'

function SideBar() {
	const sideRef = useRef();

	const showSideBar = () => {
		sideRef.current.classList.toggle("responsive_sidebar");
	}
	return (
		<footer>
			<nav className='sidebar' ref={sideRef}>
				<a href="https://github.com/McGovern7"><img src={GithubLogo} alt="Github logo"></img></a>
				<a href="https://www.linkedin.com/in/luke-mcgovern-03248528a/"><img src={LinkedInLogo} alt="Linked in logo" /></a>
				<a href="https://mail.google.com/mail/u/0/?fs=1&to=luke.mcgovern18@gmail.com&su=SUBJECT&body=BODY&bcc=&tf=cm"><img src={GmailLogo} alt="Gmail logo" /></a>
			</nav>
		</footer>
	);
}

export default SideBar