import React from 'react';
import Typewriter from './UI/Typewriter';

const Banner = () => {
	let squares = [];

	for (let i = 0; i < 20; i++) {
		squares.push(i);
	}

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
						const randomDimensions = Math.floor(Math.random() * (150 - 15 + 1) + 15);

						return (
							<li
								key={i}
								style={{
									left: `${Math.floor(Math.random() * (100 - 0 + 1) + 0)}%`,
									width: randomDimensions,
									height: randomDimensions,
									animationDelay: `${i % 2 ? Math.floor(Math.random() * (20 - 0 + 1) + 0) : 0}s`,
									animationDuration: `${Math.floor(Math.random() * (50 - 10 + 1) + 10)}s`,
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
