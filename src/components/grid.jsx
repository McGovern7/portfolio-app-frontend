import anime from "animejs";
import './components.css';

const DiagonalSlideGrid = () => {
	return (
		<div className="diagonal-grid" >
			<SquareGrid />
		</div>
	);
}

const GRID_WIDTH = 30;
const GRID_HEIGHT = 20;

const SquareGrid = () => {
	const squares = [];
	let index = 0;

	for (let i = 0; i < GRID_WIDTH; i++) {
		for (let j = 0; j < GRID_HEIGHT; j++) {
			squares.push(
				<div
					className="square-group"
					data-index={index}
					key={`${i}-${j}`}
				>
					<div
						className="square-point"
						data-index={index}
					/>
				</div>
			);
			index++;
		}
	}

	return (
		<div
			style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1rem)` }}
			className="square-grid"
		>
			{squares}
		</div>
	);
};

export default DiagonalSlideGrid;