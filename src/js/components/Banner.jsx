import React from 'react';
import Typewriter from './UI/Typewriter';

const Banner = () => (
	<div className=" banner">
		<div className="bg">
			<div className="quote">
				<h1>Hi, my name is Adam!</h1>
				<p>
					I'm
					<Typewriter
						sentencesText={[
							' a software developer.',
							' creative.',
							' in Love with web development.',
							' your next web guy.',
						]}
						typingSpeed={100}
						isInfinite={true}
					/>
				</p>
			</div>
			<div className="image-overlay" />
		</div>
	</div>
);

export default Banner;
