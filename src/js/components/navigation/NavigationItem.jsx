import React from 'react';
import { NavLink } from 'react-router-dom';
//proptypes
import PropTypes from 'prop-types';

const NavigationItem = ({ link, icon, title, exact }) => (
	<NavLink className="quick-nav-item" to={link} exact={exact}>
		<i className={`fas ${icon}`} />
		<span className="quick-nav-title">{title}</span>
	</NavLink>
);

NavigationItem.propTypes = {
	link: PropTypes.string,
	icon: PropTypes.string,
	title: PropTypes.string,
	exact: PropTypes.bool,
};

export default NavigationItem;
