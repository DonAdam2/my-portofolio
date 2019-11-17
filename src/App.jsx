import React, { Component, Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
//components
import SideNav from './js/components/navigation/SideNav';
import BackToTop from './js/components/UI/BackToTop';
import ScrollSpy from './js/components/UI/ScrollSpy';
import AboutMe from './js/components/AboutMe';
import Skills from './js/components/Skills';
import Footer from './js/components/Footer';
//load banner lazily
const AsyncBanner = lazy(() => import('./js/components/Banner'));

class App extends Component {
	scrollSpyData = ['', 'about-me', 'skills'];
	render() {
		return (
			<Suspense fallback={<div>...loading</div>}>
				<ScrollSpy data={this.scrollSpyData}>
					<AsyncBanner />
					<AboutMe />
					<Skills />
				</ScrollSpy>
				<Footer />
				<SideNav />
				<BackToTop btnColor="#5087b7" />
			</Suspense>
		);
	}
}

export default connect()(hot(App));
