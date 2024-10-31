import { useRef } from 'react';
import ImageComp from './ImageComp';
import './components.css';


function SideBar() {
	const sideRef = useRef();
	return (
		<footer>
			<nav className='sidebar' ref={sideRef}>
				<a href="https://github.com/McGovern7"><ImageComp src='GithubLogo.webp' alt="Github logo"></ImageComp></a>
				<a href="https://www.linkedin.com/in/luke-mcgovern-03248528a/"><ImageComp src='LinkedInLogo.webp' alt="Linked in logo" ></ImageComp></a>
				<a href="https://mail.google.com/mail/u/0/?fs=1&to=luke.mcgovern18@gmail.com&su=SUBJECT&body=BODY&bcc=&tf=cm"><ImageComp src='GmailLogo.webp' alt="Gmail logo" ></ImageComp></a>
			</nav>
		</footer>
	);
}

export default SideBar