//components
import Typewriter from '../../components/Typewriter';

const HomePage = () => {
  return (
    <div className="home page-wrapper">
      <div className="inner-content">
        <p className="title">Hi, my name is Adam!</p>
        <p className="subtitle">
          <Typewriter
            sentences={[
              'I am a software engineer.',
              'I am creative.',
              'I Love software development.',
              'I am your next software guy.',
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
