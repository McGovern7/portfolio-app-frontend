import { ReactNode } from 'react';
import './SharedComps.css';

interface CardProps {
	ariaLabel?: string;
	id?: string;
	className: string;
	title: string;
	image: ReactNode;
	content: string;
}

const Card = ({ className, ariaLabel, id, title, image, content }: CardProps) => {
	return (
		<article aria-label={ariaLabel} id={id}
			className={className + ` card-section card shadow`}>
			{title}
			{image}
			{content}
		</article>
	)
}

export default Card;