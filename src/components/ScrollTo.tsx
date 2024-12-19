import React, { ReactNode } from 'react';
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
      <div aria-label={ariaLabel} id={id} className={className}
        onClick={ScrollToSection}>
        <button className='scroll-btn circle-btn'>{icon}</button>
      </div>
    )
  };
}

export default ScrollTo;