import React from 'react';
import Typewriter from './UI/Typewriter';

const Banner = () => (
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
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
			</ul>
		</div>
		<div className="image-overlay" />
	</div>
);

export default Banner;
