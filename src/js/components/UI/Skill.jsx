import React from 'react';
//proptypes
import PropTypes from 'prop-types';

const Skill = ({ label, icon }) => (
	<div className="skill">
		<div className="circle-container">
			<div className="outer-ring" />
			<div className="circle">
				<div className="front">
					<p>{label}</p>
				</div>
				<div className="back">{icon}</div>
			</div>
		</div>
	</div>
);

Skill.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Skill;
