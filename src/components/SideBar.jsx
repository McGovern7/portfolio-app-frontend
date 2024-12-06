import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImageComp from './ImageComp.tsx';
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoHome, IoHomeOutline, IoDocumentAttach, IoDocumentAttachOutline } from "react-icons/io5";
import './components.css';

function SideBar() {
  const sideRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [canGoBack, setCanGoBack] = useState();
  const isHome = window.location.pathname === '/portfolio-app-frontend/portfolio' || '/portfolio-app-frontend';
  const isResume = window.location.pathname === '/portfolio-app-frontend/resume';

  const checkCanGoBack = async () => {
    if (location.key !== "default") {
      setCanGoBack(true);
    } else {
      setCanGoBack(false);
    };
  };

  const goBack = () => {
    if (navigate(-1)) {
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
        <Link className='side-link' to="/portfolio"><div className='side-icon'>{isHome ? <IoHome /> : <IoHomeOutline />}</div><h5>Home</h5></Link>
        <Link className='side-link' to="/resume"><div className='side-icon'>{isResume ? <IoDocumentAttach /> : <IoDocumentAttachOutline />}</div><h5>Resume</h5></Link>
      </nav>
      <div id='side-border' />
      <nav className='side-bar' ref={sideRef}>
        <Link className='side-link' to="https://github.com/McGovern7" target="_blank" rel="noopener noreferrer"><ImageComp ariaLabel='Github logo' src='GithubLogo.webp' alt="the Github logo in a circle"></ImageComp><h5>Github</h5></Link>
        <Link className='side-link' to="https://www.linkedin.com/in/luke-mcgovern-03248528a/" target="_blank" rel="noopener noreferrer"><ImageComp aria-label='Linked in logo' src='LinkedInLogo.webp' alt="the Linked in logo in a circle" ></ImageComp><h5>LinkedIn</h5></Link>
        <Link className='side-link' to="https://mail.google.com/mail/u/0/?fs=1&to=luke.mcgovern18@gmail.com&su=&body=&bcc=&tf=cm" target="_blank" rel="noopener noreferrer"><ImageComp ariaLabel='Gmail logo' src='GmailLogo.webp' alt="the Gmail logo in a circle" ></ImageComp><h5>Email Me</h5></Link>
      </nav>
    </div>
  );
}

export default SideBar