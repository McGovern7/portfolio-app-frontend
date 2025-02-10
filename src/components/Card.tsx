import React, { ReactNode } from 'react';
import './SharedComps.css';

interface CardProps {
	ariaLabel: string;
	id: string;
	className: string;
	isMobile: boolean;
	title: string;
	image: ReactNode;
	content: string;
}

const Card = ({ ariaLabel, id, isMobile, title, image, content }: CardProps) => {
	const cardClass = ( isMobile ? 'mob' : 'desk' );
	return (
		<article
			aria-label={ariaLabel}
			id={id}
			className={`card-section ${cardClass} card shadow`}
		>
			{title}
			{image}
			{content}
		</article>
	)
}

export default Card;