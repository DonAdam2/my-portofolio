//icons
import DarkLinkedInIcon from './icons/footerIcons/DarkLinkedInIcon';
import DarkCodePenIcon from './icons/footerIcons/DarkCodePenIcon';
import DarkGitHubIcon from './icons/footerIcons/DarkGitHubIcon';
import DarkGooglePlayIcon from './icons/footerIcons/DarkGooglePlayIcon';
//components
import Tooltip from '@/js/components/shared/Tooltip';

const Footer = () => (
  <div className="footer">
    <div className="footer-wrapper row">
      <Tooltip position="top" isDisplayTooltipIndicator={false} tooltipContent="LinknedIn">
        <a href="https://www.linkedin.com/in/adam-morsi-715517b3/" className="link" target="_blank">
          <DarkLinkedInIcon />
        </a>
      </Tooltip>
      <Tooltip position="top" isDisplayTooltipIndicator={false} tooltipContent="Github">
        <a href="https://github.com/DonAdam2" className="link" target="_blank">
          <DarkGitHubIcon />
        </a>
      </Tooltip>
      <Tooltip position="top" isDisplayTooltipIndicator={false} tooltipContent="Codepen">
        <a href="https://codepen.io/AdamMorsi" className="link" target="_blank">
          <DarkCodePenIcon />
        </a>
      </Tooltip>
      <Tooltip
        position="top"
        isDisplayTooltipIndicator={false}
        tooltipContent="Google play"
        className="no-wrap-text"
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.adam_morsi.adam_morsi_cv"
          className="link"
          target="_blank"
        >
          <DarkGooglePlayIcon />
        </a>
      </Tooltip>
    </div>
    <p className="copyright">&#64; {new Date().getFullYear()} Adam Morsi</p>
  </div>
);

export default Footer;
