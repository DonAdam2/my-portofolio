import React, { Component, createRef } from 'react';
//proptypes
import PropTypes from 'prop-types';

class SlideContent extends Component {
	leftContent = createRef();
	rightContent = createRef();

	componentDidMount() {
		this.animateSliding(this.leftContent.current);
		this.animateSliding(this.rightContent.current);
	}

	//animate sliding on scroll
	animateSliding = (element) => {
		const slideOnScrollOptions = {
			threshold: 0,
			rootMargin: '0px 0px -100px 0px',
		};

		const slideOnScrollObserver = new IntersectionObserver(function(entries, boserver) {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				} else {
					entry.target.classList.add('appear');
					boserver.unobserve(entry.target);
				}
			});
		}, slideOnScrollOptions);

		slideOnScrollObserver.observe(element);
	};

	render() {
		const { leftMarkup, rightMarkup } = this.props;

		return (
			<div className="slide-content-wrapper">
				<div ref={this.leftContent} className="slide-content-from-left">
					{leftMarkup}
				</div>
				<div className="slide-content-from-right" ref={this.rightContent}>
					{rightMarkup}
				</div>
			</div>
		);
	}
}

SlideContent.propTypes = {
	leftMarkup: PropTypes.node.isRequired,
	rightMarkup: PropTypes.node.isRequired,
};

export default SlideContent;
