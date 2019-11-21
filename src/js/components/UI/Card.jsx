import React from 'react';
//proptypes
import PropTypes from 'prop-types';

const Card = ({ title, titleIcon, description }) => (
	<div className="card">
		<h3 className="title">
			<span className="icon-wrapper">{titleIcon}</span>
			<span className="text">{title}</span>
		</h3>
		<div className="description">{description}</div>
	</div>
);

Card.propTypes = {
	title: PropTypes.string.isRequired,
	titleIcon: PropTypes.node.isRequired,
	description: PropTypes.node.isRequired,
};

export default Card;
