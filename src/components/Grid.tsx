import React from 'react';
import './components.css';
import anime from "animejs";

const Grid = () => {
	return (
		<div className="grid" >
			<SquareGrid />
		</div>
	);
}

const GRID_WIDTH = 19;
const GRID_HEIGHT = 19;

const SquareGrid = () => {
	const handleSquareClick = (e: any) => {
		anime({
			targets: ".square-point",
			scale: [
				{ value: -1.35, easing: "easeOutSine", duration: 250 },
				{ value: 1.00, easing: "easeInOutQuad", duration: 500 },
			],
			translateY: [
				{ value: 20, easing: "easeOutSine", duration: 250 },
				{ value: 0, easing: "easeInOutBounce", duration: 500 },
			],
			opacity: [
				{ value: 1, easing: "easeOutSine", duration: 250 },
				{ value: 0.5, easing: "easeInOutQuad", duration: 500 },
			],
			delay: anime.stagger(100, {
				grid: [GRID_WIDTH, GRID_HEIGHT],
				from: e.target.dataset.index,
			}),
		});
	}

	const squares = [];
	let index = 0;

	for (let i = 0; i < GRID_HEIGHT; i++) {
		const column = [];
		for (let j = 0; j < GRID_WIDTH; j++) {
			column.push(
				<div className="square-group" onClick={handleSquareClick} data-index={index} key={`${i}-${j}`} >
					<div className="square-point" data-index={index} />
				</div>
			);
			index++;
		}
		squares.push(
			<div className="row-group" key={`row-${i}`}>
				{column}
			</div>
		);
	}

	return (
		<div style={{ gridTemplateColumns: `repeat('autofill', 1fr)`, gridTemplateRows: `repeat('autofill', 1fr)` }} className="square-grid">
			{squares}
		</div>
	);
};

export default Grid;
