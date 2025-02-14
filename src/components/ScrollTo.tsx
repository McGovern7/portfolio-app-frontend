import { useEffect, useState, ReactNode } from 'react';
import './SharedComps.css';

interface ScrollToProps {
  className: string;
  content?: string;
  sectionID: string;
  icon?: ReactNode;
}

const ScrollTo = ({ className, content, sectionID, icon }: ScrollToProps) => {
  const [isVisible, setIsVisible] = useState(window.scrollY <= 500);

  useEffect(() => {
    const handleScroll = () => {
      const scrollChange = window.scrollY <= 500;
      if (scrollChange) {
        setIsVisible(true);
      } else { setIsVisible(false); };
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ScrollToSection = () => {
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else { console.error("section not found"); };
  };

  if (content) {
    return ( <button className={className} onClick={ScrollToSection}><h5>{content}</h5></button> );
  } else {
    return (
      <div className={className} style={{ visibility: isVisible ? 'hidden' : 'visible' }}
        onClick={ScrollToSection}>
        <button className='scroll-btn circle-btn'>{icon}</button>
      </div>
    );
  };
};

export default ScrollTo;