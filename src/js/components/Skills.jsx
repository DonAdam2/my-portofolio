import React, { Fragment } from 'react';
import Title from './shared/Title';
import Skill from './UI/Skill';
import JavascriptIcon from './icons/JavascriptIcon';
import TypescriptIcon from './icons/TypescriptIcon';
import ReactIcon from './icons/ReactIcon';
import ReduxIcon from './icons/ReduxIcon';
import AngularIcon from './icons/AngularIcon';
import RxjsIcon from '../../assets/images/reactivex.png';
import WebpackIcon from './icons/WebpackIcon';
import Html5Icon from './icons/Html5Icon';
import Css3Icon from './icons/Css3Icon';
import SassIcon from './icons/SassIcon';
import BootstrapIcon from './icons/BootstrapIcon';
import MaterialDesignIcon from './icons/MaterialDesignIcon';
import DrupalIcon from './icons/DrupalIcon';
import WordPressIcon from './icons/WordPressIcon';
import JiraIcon from './icons/JiraIcon';
import GitIcon from './icons/GitIcon';
import LinuxIcon from './icons/LinuxIcon';
import NodeJsIcon from './icons/NodeJsIcon';
import MongoDBIcon from './icons/MongoDBIcon';
import NextJsIcon from './icons/NextJSIcon';

const Skills = () => {
	const list = [
		{ label: 'Javascript', icon: <JavascriptIcon /> },
		{ label: 'Typescript', icon: <TypescriptIcon /> },
		{ label: 'NextJS', icon: <NextJsIcon /> },
		{ label: 'React', icon: <ReactIcon /> },
		{ label: 'React Native', icon: <ReactIcon /> },
		{ label: 'Redux', icon: <ReduxIcon /> },
		{ label: 'Angular 2+', icon: <AngularIcon /> },
		{ label: 'RxJs', icon: <img className="back-logo" src={RxjsIcon} alt="rxjs icon" /> },
		{ label: 'Webpack', icon: <WebpackIcon /> },
		{ label: 'HTML5', icon: <Html5Icon /> },
		{ label: 'CSS3', icon: <Css3Icon /> },
		{ label: 'SCSS', icon: <SassIcon /> },
		{ label: 'NodeJS', icon: <NodeJsIcon /> },
		{ label: 'MongoDB', icon: <MongoDBIcon /> },
		{ label: 'Bootstrap', icon: <BootstrapIcon /> },
		{ label: 'Material Design', icon: <MaterialDesignIcon /> },
		{
			label: 'AJAX',
			icon: (
				<img
					className="back-logo"
					src="https://cdn.artandlogic.com/wp-content/uploads/2000px-AJAX_logo_by_gengns.svg_.png"
					alt="AJAX"
				/>
			),
		},
		{ label: 'Drupal', icon: <DrupalIcon /> },
		{ label: 'WordPress', icon: <WordPressIcon /> },
		{ label: 'JIRA', icon: <JiraIcon /> },
		{ label: 'Git', icon: <GitIcon /> },
		{ label: 'Linux', icon: <LinuxIcon /> },
	];
	return (
		<div className="section skills">
			<div className="container">
				<div className="row">
					<div className="col-xxs-12">
						<Title title="skills" />
					</div>
					<div className="col-md-12 skills-wrapper">
						{list.map((el, i) => (
							<Fragment key={i}>
								<Skill label={el.label} icon={el.icon} />
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
