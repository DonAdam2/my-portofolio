import React from 'react';
//proptypes
import PropTypes from 'prop-types';

const Title = ({ title }) => (
	<div className="title-container">
		<div className="line" />
		<h2 className="title">{title}</h2>
		<div className="line" />
	</div>
);

Title.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Title;
