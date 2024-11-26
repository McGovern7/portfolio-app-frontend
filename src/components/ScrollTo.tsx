import React from 'react';
import './components.css';

interface ScrollToProps {
    ariaLabel: string;
    id: string;
    className: string;
    content: string;
    sectionID: string;
}

const ScrollTo = ({ ariaLabel, id, className, content, sectionID }: ScrollToProps) => {
    const ScrollToSection = () => {
        const section = document.getElementById(sectionID);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        else {
            console.error("section not found");
        }
    }
    return (
        <h5 aria-label={ariaLabel} id={id} className={className} 
         onClick={ScrollToSection}>{content}</h5>
    )
}

export default ScrollTo;