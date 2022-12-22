import React from 'react';
//components
import Typewriter from '../../components/UI/Typewriter';

const HomePage = () => {
  return (
    <div className="home page-wrapper">
      <div className="inner-content">
        <p className="title">Hi, my name is Adam!</p>
        <p className="subtitle">
          I'm{' '}
          <Typewriter
            sentences={[
              'a software engineer.',
              'creative.',
              'in Love with software development.',
              'your next web guy.',
            ]}
            typingSpeed={100}
            isInfinite={true}
            color="#ffdb99"
          />
        </p>
      </div>
    </div>
  );
};

export default HomePage;
