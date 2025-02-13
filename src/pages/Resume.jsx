import Resume from '../assets/Resume.pdf';
import { Sidebar, useDarkMode, useScreenWidth, useSlider } from '../components';
import { IoContrast } from "react-icons/io5";
import './DesktopStyle.css';
import './MobileStyle.css';
import './SharedStyle.css';

const ResumePage = () => {
  // Call the useContext variables
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { screenClass } = useScreenWidth();
  const { sliderTernary, sliderDiv } = useSlider();

  return (
    <div className={`resume-page ${screenClass} ${darkMode ? 'dark' : ''}`}>
      <div className={`side-bar-column ${screenClass} ${sliderTernary}`}>
        <section className='fixed-section'>
          <Sidebar />
        </section>
      </div>
      <header className={`top ${screenClass}`} >
        {sliderDiv}
        <div className='dark-btn-container'>
          <button className="circle-btn" onClick={toggleDarkMode}>
            <IoContrast />
          </button>
        </div>
      </header>
      <div className={`resume-column ${screenClass}`}>
        <object aria-label='Resume PDF' data={Resume} type="application/pdf"></object>
      </div>
    </div>
  );
};

export default ResumePage