import { Sidebar, Topbar, useDarkMode, useScreenWidth } from '../components';
import './DesktopStyle.css';
import './MobileStyle.css';
import './SharedStyle.css';

export default function Portfolio() {
  // Call the useContext variables
  const { darkMode } = useDarkMode();
  const { isMobile } = useScreenWidth();

  return (
    <div className={`resume-page ${isMobile ? 'mob' : 'desk'} ${darkMode ? 'dark' : ''}`}>
      <Topbar />
      <Sidebar />
      <div className='extra-col'>
        <h2 className='error'><u>Error 404: Page not found</u></h2>
      </div>
    </div>
  );
};