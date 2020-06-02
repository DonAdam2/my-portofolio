import React from 'react';
//proptypes
import PropTypes from 'prop-types';

const Skill = ({ label, icon }) => (
	<div className="skill">
		<div className="circle-container">
			<div className="outer-ring" />
			<div className="circle">
				<div className="front">{icon}</div>
				<div className="back">
					<p>{label}</p>
				</div>
			</div>
		</div>
	</div>
);

Skill.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Skill;
