import React, { Component, createRef } from 'react';
//proptypes
import PropTypes from 'prop-types';

class Typewriter extends Component {
	state = {
		sentences: [],
		subText: '',
		loopNum: 0,
		isDeleting: false,
	};
	typewrite = createRef();
	timer;

	componentDidMount() {
		const { typingSpeed } = this.props;
		this.timer = setInterval(
			() => {
				this.tick();
			},
			typingSpeed ? typingSpeed : 100
		);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	tick = () => {
		const { subText, loopNum, isDeleting } = this.state,
			{ isInfinite, sentencesText } = this.props,
			i = loopNum % sentencesText.length,
			sentence = sentencesText[i];

		if (isDeleting) {
			this.setState((prevState) => ({
				subText: sentence.substring(0, prevState.subText.length - 1),
			}));
		} else {
			this.setState((prevState) => ({
				subText: sentence.substring(0, prevState.subText.length + 1),
			}));
		}

		if (!isDeleting && subText === sentence) {
			this.setState({ isDeleting: true });
		} else if (isDeleting && subText === '') {
			this.setState((prevState) => ({
				isDeleting: false,
				loopNum: prevState.loopNum + 1,
			}));
		}

		if (!isInfinite && loopNum === sentencesText.length - 1 && subText === sentence) {
			clearInterval(this.timer);
		}
	};

	render() {
		const { subText } = this.state;
		return (
			<span className="typewriter" ref={this.typewrite}>
				{subText}
			</span>
		);
	}
}

Typewriter.propTypes = {
	sentencesText: PropTypes.array.isRequired,
	typingSpeed: PropTypes.number,
	isInfinite: PropTypes.bool,
};

export default Typewriter;
