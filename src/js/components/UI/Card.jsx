import React from 'react';
//proptypes
import PropTypes from 'prop-types';
//components
import FadeContent from './FadeContent';

const Card = ({ title, titleIcon, description }) => (
	<FadeContent>
		<h3 className="title">
			<span className="icon-wrapper">{titleIcon}</span>
			<span className="text">{title}</span>
		</h3>
		<div className="description">{description}</div>
	</FadeContent>
);

Card.propTypes = {
	title: PropTypes.string.isRequired,
	titleIcon: PropTypes.node.isRequired,
	description: PropTypes.node.isRequired,
};

export default Card;
