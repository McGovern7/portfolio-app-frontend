import React from 'react';

function SynthwaveBackground() {
	return (
		<div className="synthwave-background">
			<div className="synthwave-grid">
				{[...Array(20)].map((_, index) => (
					<div key={index} className="grid-line"></div>
				))}
			</div>
		</div>
	);
}

export default SynthwaveBackground;