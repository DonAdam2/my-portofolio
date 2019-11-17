import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
//proptypes
import PropTypes from 'prop-types';
//tween	JS
import TWEEN from '@tweenjs/tween.js';

class ScrollSpy extends Component {
	scrollTimeout = null;
	// animation will be applied only if the user click on a menu link not on scrolling
	shouldAnimate = true;

	componentDidMount() {
		// add the debounceScroll method
		window.addEventListener('scroll', this.debounceScroll);
		window.addEventListener('load', this.debounceScroll);

		const urlExist = new Promise((resolve, reject) => {
			this.props.data.forEach((el) => {
				if (el === this.props.history.location.pathname.replace('/', '')) {
					resolve(true);
				}
			});
		});

		urlExist.then((value) => {
			// the following condition to make sure that we have scroll animation if we paste correct URL of a sction in the browser
			if (this.props.history.location.pathname !== '/' && value) {
				this.animateScrolling(this.props.history.location.pathname);
			}
		});

		// use animation on link change only when necessary
		this.props.history.listen(() => {
			if (this.shouldAnimate) {
				this.animateScrolling(this.props.history.location.pathname);
			}
		});
	}

	componentWillUnmount() {
		// remove the debounceScroll method
		window.removeEventListener('scroll', this.debounceScroll);
	}

	// animate scrolling on menu link click
	animateScrolling = (name) => {
		const coords = { y: window.scrollY || window.pageYOffset };

		const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
			.to({ y: this.elementOffsetTop(this.refs[name.replace('/', '')]).top }, 700) // Move to top of the clicked element in 700ms.
			.easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
			.onUpdate(function() {
				// Called after tween.js updates 'coords'.
				// Move 'box' to the position described by 'coords' with a CSS translation.
				window.scrollTo(0, coords.y);
			})
			.start(); // Start the tween immediately.
		requestAnimationFrame(this.animate);
	};

	// return the scroll top of the given element
	elementOffsetTop = (el) => {
		const rect = el.getBoundingClientRect(),
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop };
	};

	// required function by tweenJS
	animate = (time) => {
		requestAnimationFrame(this.animate);
		TWEEN.update(time);
	};

	onScrollSpy = () => {
		// get the current scroll position
		const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

		Object.entries(this.refs).forEach((el, i) => {
			// if the current section offsetTop is less than the current scroll position => set the active link to the current section
			if (el[1].offsetTop <= scrollPosition) {
				// disable scroll animation while scrolling
				this.shouldAnimate = false;

				// push the new link
				this.props.history.replace('/' + el[0]);

				// re-enable scroll animation (so that we can have animation if the user click on a link)
				this.shouldAnimate = true;
			}
		});
	};

	debounceScroll = () => {
		clearTimeout(this.scrollTimeout);
		this.scrollTimeout = setTimeout(this.onScrollSpy, 50);
	};

	render() {
		const { children, data } = this.props;

		return (
			<Fragment>
				{children.map((el, i) => (
					<div key={i} ref={data[i]}>
						{el}
					</div>
				))}
			</Fragment>
		);
	}
}

ScrollSpy.propTypes = {
	data: PropTypes.array,
};

export default withRouter(ScrollSpy);
