import React from 'react';
import NavigationItem from './NavigationItem';

const SideNav = () => (
	<nav className="quick-nav">
		<NavigationItem link="/" icon="fa-circle" title="home" exact={true} />
		<NavigationItem link="hi" icon="fa-circle" title="home" />
		<NavigationItem link="hi" icon="fa-circle" title="home" />
		<NavigationItem link="hi" icon="fa-circle" title="home" />
		<NavigationItem link="hi" icon="fa-circle" title="home" />
	</nav>
);

export default SideNav;
