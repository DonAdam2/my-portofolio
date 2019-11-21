import React, { Component, Fragment, createRef } from 'react';
import { withRouter } from 'react-router-dom';
//proptypes
import PropTypes from 'prop-types';
//tween	JS
import TWEEN from '@tweenjs/tween.js';

class ScrollSpy extends Component {
	state = {
		refsList: {},
		isFirstLoad: false, //used to navigate to required section on app load if section path exist in url
	};
	scrollTimeout = null;
	// animation will be applied only if the user click on a menu link not on scrolling
	shouldAnimate = true;
	scrollDuration = 700;

	componentDidMount() {
		const { data, history } = this.props;
		let list = {};

		//add refs using createRef
		data.forEach((el) => {
			list[el] = createRef();
		});
		this.setState({ refsList: list });

		const urlExist = new Promise((resolve, reject) => {
			data.forEach((el) => {
				if (el === history.location.pathname.replace('/', '')) {
					resolve(true);
				}
			});
		});

		urlExist.then((value) => {
			// the following condition to make sure that we have scroll animation if we paste correct URL of a section in the browser
			if (history.location.pathname !== '/' && value) {
				window.addEventListener('load', () => {
					this.setState({ isFirstLoad: true });
					this.debounceScroll();
				});
				this.animateScrolling(history.location.pathname);
			} else {
				// add the debounceScroll method on scroll
				window.addEventListener('scroll', this.debounceScroll);
			}
		});

		// use animation on link change only when necessary
		history.listen(() => {
			if (this.shouldAnimate) {
				this.animateScrolling(history.location.pathname);
			}
		});
	}

	componentWillUnmount() {
		// remove the debounceScroll method
		window.removeEventListener('scroll', this.debounceScroll);
	}

	// animate scrolling on menu link click
	animateScrolling = (name) => {
		const { refsList } = this.state,
			coords = { y: window.scrollY || window.pageYOffset };

		const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
			.to(
				{ y: this.elementOffsetTop(refsList[name.replace('/', '')].current).top + 10 },
				this.scrollDuration
			) // Move to top of the clicked element in 700ms.
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
		const { refsList, isFirstLoad } = this.state,
			{ history } = this.props,
			// get the current scroll position
			scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
		if (isFirstLoad) {
			history.push(history.location.pathname);
			this.animateScrolling(history.location.pathname);
			this.setState({ isFirstLoad: false });
			window.addEventListener('scroll', this.debounceScroll);
		} else {
			Object.entries(refsList).forEach((el, i) => {
				// if the current section offsetTop is less than the current scroll position => set the active link to the current section
				if (el[1].current.offsetTop <= scrollPosition) {
					// disable scroll animation while scrolling
					this.shouldAnimate = false;

					// push the new link
					history.replace('/' + el[0]);

					// re-enable scroll animation (so that we can have animation if the user click on a link)
					this.shouldAnimate = true;
				}
			});
		}
	};

	debounceScroll = () => {
		clearTimeout(this.scrollTimeout);
		this.scrollTimeout = setTimeout(this.onScrollSpy, 250);
	};

	render() {
		const { refsList } = this.state,
			{ children, data } = this.props;

		return (
			<Fragment>
				{children.map((el, i) => (
					<div key={i} ref={refsList[data[i]]}>
						{el}
					</div>
				))}
			</Fragment>
		);
	}
}

ScrollSpy.propTypes = {
	data: PropTypes.array.isRequired,
};

export default withRouter(ScrollSpy);
