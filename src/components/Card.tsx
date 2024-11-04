import React, { ReactNode } from 'react';
import './components.css';

interface CardProps {
    ariaLabel: string;
    id: string;
    className: string;
    title: string;
    image: ReactNode;
    content: string;
}

const Card = ({ ariaLabel, id, title, image, content }: CardProps) => {
    return (
        <article
            aria-label={ariaLabel}
            id={id}
            className='card-section card shadow'
        >
            {title}
            {image}
            {content}
        </article>
    )
}

export default Card;