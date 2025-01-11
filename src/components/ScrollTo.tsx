import React, { useEffect, useState, ReactNode } from 'react';
import './components.css';

interface ScrollToProps {
  ariaLabel: string;
  id?: string;
  className: string;
  content?: string;
  sectionID: string;
  icon?: ReactNode;
}

const ScrollTo = ({ ariaLabel, id, className, content, sectionID, icon }: ScrollToProps) => {
  const [isVisible, setIsVisible] = useState(window.scrollY <= 500);

  useEffect(() => {
    const handleScroll = () => {
      const scrollChange = window.scrollY <= 500;
      if (scrollChange) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      };
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const ScrollToSection = () => {
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    else {
      console.error("section not found");
    }
  }
  if (content) {
    return (
      <h5 aria-label={ariaLabel} id={id} className={className}
        onClick={ScrollToSection}>{content}</h5>
    )
  } else {
    return (
      <div aria-label={ariaLabel} id={id} className={className} style={{ visibility: isVisible ? 'hidden' : 'visible' }}
        onClick={ScrollToSection}>
        <button className='scroll-btn circle-btn'>{icon}</button>
      </div>
    )
  };
}

export default ScrollTo;