import React from 'react';
//icons
import DarkLinkedInIcon from './icons/footerIcons/DarkLinkedInIcon';
import DarkCodePenIcon from './icons/footerIcons/DarkCodePenIcon';
import DarkGitHubIcon from './icons/footerIcons/DarkGitHubIcon';
import DarkGooglePlayIcon from './icons/footerIcons/DarkGooglePlayIcon';

const Footer = () => (
  <div className="footer">
    <div className="footer-wrapper row">
      <a href="https://www.linkedin.com/in/adam-morsi-715517b3/" className="link" target="_blank">
        <DarkLinkedInIcon />
      </a>
      <a href="https://github.com/DonAdam2" className="link" target="_blank">
        <DarkGitHubIcon />
      </a>
      <a href="https://codepen.io/AdamMorsi" className="link" target="_blank">
        <DarkCodePenIcon />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.adam_morsi.adam_morsi_cv"
        className="link"
        target="_blank"
      >
        <DarkGooglePlayIcon />
      </a>
    </div>
  </div>
);

export default Footer;
