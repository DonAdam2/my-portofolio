import React from 'react';
import Typewriter from './UI/Typewriter';

const Banner = () => {
	let squares = [];

	for (let i = 0; i < 20; i++) {
		squares.push(i);
	}

	const generateRandomNum = ({ min, max }) => Math.floor(Math.random() * (max - min + 1) + min);

	return (
		<div className="intro">
			<div className="quote">
				<h1>Hi, my name is Adam!</h1>
				<p>
					I'm{' '}
					<Typewriter
						sentencesText={[
							'a software developer.',
							'creative.',
							'in Love with web development.',
							'your next web guy.',
						]}
						typingSpeed={100}
						isInfinite={true}
					/>
				</p>
			</div>
			<div className="squares-wrapper">
				<ul className="squares">
					{squares.map((el, i) => {
						const randomDimensions = generateRandomNum({ min: 15, max: 150 });

						return (
							<li
								key={i}
								style={{
									left: `${generateRandomNum({ min: 0, max: 90 })}%`,
									width: randomDimensions,
									height: randomDimensions,
									animationDelay: `${i % 2 ? generateRandomNum({ min: 0, max: 20 }) : 0}s`,
									animationDuration: `${generateRandomNum({ min: 10, max: 50 })}s`,
								}}
							/>
						);
					})}
				</ul>
			</div>
			<div className="image-overlay" />
		</div>
	);
};

export default Banner;
