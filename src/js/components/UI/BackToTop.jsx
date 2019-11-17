import React, { Component } from 'react';
//proptypes
import PropTypes from 'prop-types';
//tween JS
import TWEEN from '@tweenjs/tween.js';

class BackToTop extends Component {
	state = {
		showBtn: false,
	};

	componentDidMount() {
		window.addEventListener('scroll', this.showHideScrollBtn);
		window.addEventListener('load', this.showHideScrollBtn);
	}

	componentWillUnmount() {
		// remove the showHideScrollBtn method
		window.removeEventListener('scroll', this.showHideScrollBtn);
	}

	showHideScrollBtn = () => {
		let currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		this.setState({ showBtn: currentScrollTop > 300 });
	};

	scrollToTop = () => {
		const { scrollAnimationTime } = this.props,
			coords = { y: window.scrollY || window.pageYOffset };

		const tween = new TWEEN.Tween(coords)
			.to({ y: 0 }, scrollAnimationTime && scrollAnimationTime > 0 ? scrollAnimationTime : 700)
			.easing(TWEEN.Easing.Quadratic.Out)
			.onUpdate(function() {
				window.scrollTo(0, coords.y);
			})
			.start();
		requestAnimationFrame(this.animate);
	};

	// required function by tweenJS
	animate = (time) => {
		requestAnimationFrame(this.animate);
		TWEEN.update(time);
	};

	render() {
		const { showBtn } = this.state,
			{ btnColor, iconColor } = this.props;

		return (
			<button
				className={`back-to-top ${showBtn ? 'show-back-to-top' : ''}`}
				style={{ backgroundColor: btnColor ? btnColor : '#dc3545' }}
				onClick={this.scrollToTop}
			>
				<svg
					style={{ fill: iconColor ? iconColor : '#fff' }}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path d="M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z" />
				</svg>
			</button>
		);
	}
}

BackToTop.propTypes = {
	scrollAnimationTime: PropTypes.number,
	btnColor: PropTypes.string,
	iconColor: PropTypes.string,
};

export default BackToTop;
