//constants
import { getYears } from '@/js/constants/helpers';
import { myPhoneNumber } from '@/js/constants/constants';
//components
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

const AboutMePage = () => (
  <div className="about-me page-wrapper">
    <div className="content-wrapper">
      <div className="inner-content">
        <p className="main-text title">About Me</p>
        <p>
          I'm a software engineer based in Nicosia, Cyprus.
          <br />I have been creating and developing websites and web apps for{' '}
          {getYears('2017-06-01')}+ years.
          <br />I hold a Bachelor's degree in Computer Science.
          <br />I completed one semester of a Master's program in Artificial Intelligence at the
          European University of Cyprus.
          <br />I am currently a Master's student specializing in Artificial Intelligence at the
          University of Bath.
          <br />I stay at the forefront of modern web development technologies and tools.
          <br />I provide beautiful, professional, and responsive websites.
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
              <WhatsAppIcon />
            </strong>{' '}
            <a href={`https://wa.me/357${myPhoneNumber}`}>+357 {myPhoneNumber}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutMePage;
