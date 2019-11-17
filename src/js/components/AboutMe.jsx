import React from 'react';
//components
import Card from './UI/Card';
import CodeIcon from './icons/CodeIcon';
import IdIcon from './icons/IdIcon';
import BriefCaseIcon from './icons/BriefCaseIcon';

const AboutMe = () => (
	<div className="row about-me">
		<div className="col-xxs-12">
			<h3 className="title">About Me</h3>
		</div>
		<div className="col-sm-4 card-wrapper">
			<Card
				title="who am i?"
				titleIcon={<CodeIcon />}
				description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae maiores fuga eos provident voluptas perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae maiores fuga eos provident voluptas perferendis."
			/>
		</div>
		<div className="col-sm-4 card-wrapper">
			<Card
				title="why would you choose me?"
				titleIcon={<IdIcon />}
				description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae maiores fuga eos provident voluptas perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae maiores fuga eos provident voluptas perferendis."
			/>
		</div>
		<div className="col-sm-4 card-wrapper">
			<Card
				title="what's in it for you?"
				titleIcon={<BriefCaseIcon />}
				description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae maiores fuga eos provident voluptas perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae maiores fuga eos provident voluptas perferendis."
			/>
		</div>
	</div>
);

export default AboutMe;
