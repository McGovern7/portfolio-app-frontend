import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ImageComp, useScreenWidth, useSlider } from '.';
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoHome, IoHomeOutline, IoDocumentAttach, IoDocumentAttachOutline } from "react-icons/io5";
import './SharedComps.css';
import './DeskComps.css';
import './MobileComps.css';

const Sidebar = () => {
  const { isMobile } = useScreenWidth();
  const { sliderStatus } = useSlider();
  const [canGoBack, setCanGoBack] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = window.location.pathname === '/portfolio';
  const isResume = window.location.pathname === '/resume';

  const checkCanGoBack = async () => {
    if (location.key !== "default") {
      setCanGoBack(true);
    } else { setCanGoBack(false); };
  };

  const goBack = () => {
    if (navigate(-1)) {
      navigate(-1); // Go back if within the same origin
    } else { setCanGoBack(false); }
  };

  // runs on page load
  useEffect(() => { checkCanGoBack(); });

  return (
    <div className={`sidebar-comp ${isMobile ? 'mob' : 'desk'} ${sliderStatus ? 'shown' : 'hidden'}`}>
      <div className='back-btn-div'>
        <button aria-label='navigates to previous page' id="back-btn" className='circle-btn'
          onClick={goBack} style={{ visibility: canGoBack ? 'visible' : 'hidden' }}>
          <FaArrowLeftLong />
        </button>
      </div>
      <nav>
        <Link className='side-link' to="/portfolio"><div className='side-icon' role='presentation'>
          {isHome ? <IoHome /> : <IoHomeOutline />}
        </div><h5>Home</h5>
        </Link>
        <Link className='side-link' to="/resume"><div className='side-icon' role='presentation'>
          {isResume ? <IoDocumentAttach /> : <IoDocumentAttachOutline />}
        </div><h5>Resume</h5>
        </Link>
      </nav>
      <div id='side-border' />
      <nav>
        <Link className='side-link' to="https://github.com/McGovern7" target="_blank" rel="noopener noreferrer">
          <ImageComp src='GithubLogo.webp' alt="the Github logo in a circle" />
          <h5>Github</h5>
        </Link>
        <Link className='side-link' to="https://www.linkedin.com/in/luke-mcgovern-03248528a/" target="_blank" rel="noopener noreferrer">
          <ImageComp src='LinkedInLogo.webp' alt="the Linked in logo in a circle" />
          <h5>LinkedIn</h5>
        </Link>
        <Link className='side-link' to="https://mail.google.com/mail/u/0/?fs=1&to=luke.mcgovern18@gmail.com&su=&body=&bcc=&tf=cm" target="_blank" rel="noopener noreferrer">
          <ImageComp src='GmailLogo.webp' alt="the Gmail logo in a circle" />
          <h5>Email Me</h5>
        </Link>
      </nav>
      <footer><u>App under development</u> Accessibility features are unimplemented. <br></br>If problem, Disable VPN</footer>
    </div>
  );
};

export default Sidebar;