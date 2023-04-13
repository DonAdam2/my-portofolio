import { useEffect, useRef, useState } from 'react';

const Typewriter = ({ typingSpeed, isInfinite, sentences, separator = '|', color = '#000000' }) => {
  const [subText, setSubText] = useState(''),
    speed = typingSpeed ? typingSpeed : 100,
    delTimer1 = useRef(null),
    delTimer2 = useRef(null),
    typeTimer1 = useRef(null),
    typeTimer2 = useRef(null),
    startWriterTimer = useRef(null),
    initTimer = useRef(null);

  function delWriter(text, i, cb) {
    if (i >= 0) {
      setSubText(text.substring(0, i--));

      delTimer1.current = setTimeout(function () {
        delWriter(text, i, cb);
      }, speed);
    } else if (typeof cb == 'function') {
      delTimer2.current = setTimeout(cb, speed);
    }
  }

  // function to generate the key hitting effect
  function typeWriter(text, i, cb) {
    if (i < text.length + 1) {
      setSubText(text.substring(0, i++));

      typeTimer1.current = setTimeout(function () {
        typeWriter(text, i++, cb);
      }, speed);
    } else if (i === text.length + 1) {
      const foundIndex = sentences.findIndex((el) => el === text),
        isLastSentence = foundIndex === sentences.length - 1;

      if (!isLastSentence || (isLastSentence && isInfinite)) {
        typeTimer2.current = setTimeout(function () {
          delWriter(text, i, cb);
        }, speed);
      }
    }
  }

  // the main writer function
  function StartWriter(i) {
    if (typeof sentences[i] === 'undefined') {
      startWriterTimer.current = setTimeout(function () {
        StartWriter(0);
      }, speed);
    } else if (i < sentences[i].length + 1) {
      typeWriter(sentences[i], 0, function () {
        StartWriter(i + 1);
      });
    }
  }

  useEffect(() => {
    initTimer.current = setTimeout(function () {
      StartWriter(0);
    }, speed);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(delTimer1.current);
      clearTimeout(delTimer2.current);
      clearTimeout(typeTimer1.current);
      clearTimeout(typeTimer2.current);
      clearTimeout(startWriterTimer.current);
      clearTimeout(initTimer.current);
    };
  }, []);

  return (
    <span className="typewriter" style={{ '--color': color }}>
      {subText}
      <span className="separator">{separator}</span>
    </span>
  );
};

export default Typewriter;
