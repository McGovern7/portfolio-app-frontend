import Resume from '../assets/Resume.pdf';
import { Sidebar, Topbar, useScreenWidth } from '../components';
import './DesktopStyle.css';
import './MobileStyle.css';
import './SharedStyle.css';

const ResumePage = () => {
  // Call the useContext variables
  const { isMobile } = useScreenWidth();

  return (
    <div className={`resume-page ${isMobile ? 'mob' : 'desk'}`}>
      <Topbar />
      <Sidebar />
      <div className='extra-col'>
        <object aria-label='Resume PDF' data={Resume} type="application/pdf" />
      </div>
    </div>
  );
};

export default ResumePage