import React from 'react';
//components
import Card from './UI/Card';
import CodeIcon from './icons/CodeIcon';
import MouseIcon from './icons/MouseIcon';
import BriefCaseIcon from './icons/BriefCaseIcon';
import Title from './shared/Title';
import { getYears } from './constants/helpers';

const AboutMe = () => (
	<div className="section about-me">
		<div className="container">
			<div className="row">
				<div className="col-xxs-12">
					<Title title="about me" />
				</div>
				<div className="about-row">
					<div className="about-column card-wrapper">
						<Card
							title="who am i?"
							titleIcon={<CodeIcon />}
							description={
								<ul>
									<li>I'm a software developer who lives in Nicosia, Cyprus.</li>
									<li>
										I have been creating and developing websites and web apps for{' '}
										{getYears('06-01-2017')}+ years.
									</li>
									<li>I have a bachelor degree in computer science.</li>
								</ul>
							}
						/>
					</div>
					<div className="about-column card-wrapper center-card">
						<Card
							title="why would you choose me?"
							titleIcon={<MouseIcon />}
							description={
								<ul>
									<li>Because my primary focus is YOU.</li>
									<li>I keep current with latest web development technologies and tools.</li>
									<li>I provide beautiful, professional and responsive websites.</li>
								</ul>
							}
						/>
					</div>
					<div className="about-column card-wrapper">
						<Card
							title="what's in it for you?"
							titleIcon={<BriefCaseIcon />}
							description={
								<ul>
									<li>Responsive design optimized for all devices.</li>
									<li>Fast development.</li>
									<li>Skilled and punctual developer.</li>
								</ul>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default AboutMe;
