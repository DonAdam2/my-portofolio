import React from 'react';
//constants
import { getYears } from '@/js/constants/helpers';
import { myPhoneNumber } from '@/js/constants/constants';
//components
import SkypeIcon from '../../components/icons/SkypeIcon';

const AboutMePage = () => (
  <div className="about-me page-wrapper">
    <div className="content-wrapper">
      <div className="inner-content">
        <p className="main-text title">About Me</p>
        <p>
          I'm a software developer who lives in Nicosia, Cyprus.
          <br /> I have been creating and developing websites and web apps for{' '}
          {getYears('06-01-2017')}+ years.
          <br /> I have a bachelor degree in computer science.
          <br />I keep current with latest web development technologies and tools.
          <br /> I provide beautiful, professional and responsive websites.
        </p>
        <p className="main-text subtitle">You may contact me to have a great product:</p>
        <ul>
          <li>
            <a href="mailto:adam.morsi@yahoo.com">
              <strong className="main-text">
                <i className="far fa-envelope"></i>
              </strong>{' '}
              adam.morsi@yahoo.com
            </a>
          </li>
          <li>
            <strong className="main-text">
              <i className="fas fa-phone"></i>
            </strong>{' '}
            <a href={`tel:+357${myPhoneNumber}`}>+357 {myPhoneNumber}</a>
          </li>
          <li>
            <strong className="main-text d-flex align-items-center">
              <SkypeIcon />
            </strong>{' '}
            <a href="skype:live:don.adam8?chat">Start chat</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutMePage;
