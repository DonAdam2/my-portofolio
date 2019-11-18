import React, { Fragment } from 'react';
import AnimatedDesktop from './UI/AnimatedDesktop';
import Title from './shared/Title';
import Skill from './UI/Skill';

const Skills = () => {
	const list = [
		'Javascript',
		'Typescript',
		'React',
		'React Native',
		'Redux',
		'Angular 2+',
		'RxJs',
		'Webpack',
		'HTML5',
		'CSS3',
		'SCSS',
		'Bootstrap',
		'Material Design',
		'AJAX',
		'Drupal',
		'WordPress',
		'JIRA',
		'Git',
		'Linux',
	];
	return (
		<div className="section skills">
			<div className="container">
				<div className="row">
					<div className="col-xxs-12">
						<Title title="skills" />
					</div>
					<div className="col-sm-6">
						<AnimatedDesktop />
					</div>
					<div className="col-sm-6 skills-wrapper">
						<ul>
							{list.map((el, i) => (
								<Fragment key={i}>
									<Skill label={el} />
								</Fragment>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
