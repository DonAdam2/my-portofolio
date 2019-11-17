import React from 'react';
import { NavLink } from 'react-router-dom';
//proptypes
import PropTypes from 'prop-types';

const NavigationItem = ({ link, click, icon, title, exact }) => (
	<NavLink className="quick-nav-item" onClick={() => click(link)} to={link} exact={exact}>
		<i className={`fas ${icon}`} />
		<span className="quick-nav-title">{title}</span>
	</NavLink>
);

NavigationItem.propTypes = {
	link: PropTypes.string.isRequired,
	click: PropTypes.func,
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	exact: PropTypes.bool,
};

export default NavigationItem;
