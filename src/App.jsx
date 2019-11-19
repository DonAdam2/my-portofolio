import React, { Component, Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader/root';
//components
import SideNav from './js/components/navigation/SideNav';
import BackToTop from './js/components/UI/BackToTop';
import ScrollSpy from './js/components/UI/ScrollSpy';
import AboutMe from './js/components/AboutMe';
import Skills from './js/components/Skills';
import Footer from './js/components/Footer';
import MyPortfolio from './js/components/MyPortfolio';
import Loader from './js/components/UI/Loader';
//load banner lazily
const AsyncBanner = lazy(() => import('./js/components/Banner'));

class App extends Component {
	scrollSpyData = ['', 'about-me', 'skills', 'my-portfolio'];
	render() {
		return (
			<Suspense fallback={<Loader />}>
				<ScrollSpy data={this.scrollSpyData}>
					<AsyncBanner />
					<AboutMe />
					<Skills />
					<MyPortfolio />
				</ScrollSpy>
				<Footer />
				<SideNav />
				<BackToTop btnColor="rgba(25,118,210, 0.9)" />
			</Suspense>
		);
	}
}

export default hot(App);
