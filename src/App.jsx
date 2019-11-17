import React, { Component, Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
//components
import SideNav from './js/components/navigation/SideNav';
import BackToTop from './js/components/UI/BackToTop';
import AboutMe from './js/components/AboutMe';
//load banner lazily
const AsyncBanner = lazy(() => import('./js/components/Banner'));

class App extends Component {
	render() {
		return (
			<div>
				<Suspense fallback={<div>...loading</div>}>
					<SideNav />
					<AsyncBanner />
					<div className="container">
						<AboutMe />
					</div>
					<BackToTop btnColor="#dc3545" iconColor="#fff" scrollAnimationTime={700} />
				</Suspense>
			</div>
		);
	}
}

export default connect()(hot(App));
