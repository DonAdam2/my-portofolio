import React from 'react';
//proptypes
import PropTypes from 'prop-types';

const Skill = ({ label }) => (
	<li className="skill">
		<span>{label}</span>
	</li>
);

Skill.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Skill;
