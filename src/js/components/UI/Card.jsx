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
		<p className="description">{description}</p>
	</FadeContent>
);

Card.propTypes = {
	title: PropTypes.string,
	titleIcon: PropTypes.node,
	description: PropTypes.string,
};

export default Card;
