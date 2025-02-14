import { useDarkMode, useSlider } from '.'
import { IoContrast } from "react-icons/io5";
import { BsLayoutSidebarInset } from "react-icons/bs";
import './SharedComps.css';
import './DeskComps.css';
import './MobileComps.css';

const Topbar = () => {
  // Call the useContext variables
  const { toggleDarkMode } = useDarkMode();
  const { toggleSlider } = useSlider();

  return (
    <header className='top'>
      <button id='slide-btn' className='circle-btn' onClick={toggleSlider} aria-label='toggles the side bar visibility'>
        <BsLayoutSidebarInset />
      </button>
      <button id='dark-btn' className='circle-btn' onClick={toggleDarkMode} aria-label='toggles the dark mode feature'>
        <IoContrast />
      </button>
    </header>
  );
};

export default Topbar