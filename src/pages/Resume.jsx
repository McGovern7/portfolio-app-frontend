import React from 'react';
import Resume from '../assets/Resume.pdf';
import Navbar from '../components/Navbar';
import './MeStyle.css';

export default function ResumePage() {
	return (
		<body className='resume-page'>
			<React.Fragment>
				<Navbar />
			</React.Fragment>
			<object aria-label='Resume PDF' data={Resume} type="application/pdf"></object>
		</body>
	)
}