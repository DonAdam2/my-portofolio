import React, { Component, createRef } from 'react';

class FadeContent extends Component {
	wrapper = createRef();

	componentDidMount() {
		this.animateFading(this.wrapper.current);
	}

	//animate sliding on scroll
	animateFading = (element) => {
		const fadeOnScrollOptions = {
			threshold: 0.3,
			rootMargin: '0px 0px -100px 0px',
		};

		const fadeOnScrollObserver = new IntersectionObserver(function(entries, observer) {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				} else {
					entry.target.classList.add('appear');
					observer.unobserve(entry.target);
				}
			});
		}, fadeOnScrollOptions);

		fadeOnScrollObserver.observe(element);
	};

	render() {
		const { children } = this.props;
		return (
			<div className="card fade-in" ref={this.wrapper}>
				{children}
			</div>
		);
	}
}

export default FadeContent;
