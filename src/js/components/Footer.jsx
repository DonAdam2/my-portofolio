import React from 'react';
//icons
import LinkedInIcon from './icons/LinkedInIcon';
import SkypeIcon from './icons/SkypeIcon';
import CodePenIcon from './icons/CodePenIcon';
import GitHubIcon from './icons/GitHubIcon';

const Footer = () => {
	return (
		<div className="section footer">
			<div className="container">
				<div className="row">
					<div className="col-xxs-12 col-sm-4">
						<h1>Social Media</h1>
						<ul>
							<li>
								<a href="https://www.linkedin.com/in/adam-morsi-715517b3/" target="_blank">
									<LinkedInIcon />
								</a>
							</li>
						</ul>
					</div>
					<div className="col-xxs-12 col-sm-4">
						<h1>Contact</h1>
						<ul>
							<li>
								<a href="mailto:adam.morsi@yahoo.com">
									<strong>
										<i className="far fa-envelope" />
									</strong>{' '}
									adam.morsi@yahoo.com
								</a>
							</li>
							<li>
								<strong>
									<i className="fas fa-phone" />
								</strong>{' '}
								+357 97691992
							</li>
							<li>
								<strong>
									<SkypeIcon />
								</strong>{' '}
								don.adam8
							</li>
						</ul>
					</div>
					<div className="col-xxs-12 col-sm-4">
						<h1>CodePen & Git</h1>
						<ul>
							<li>
								<a href="https://codepen.io/AdamMorsi" target="_blank" className="codepen-link">
									<CodePenIcon />
								</a>{' '}
								<a href="https://github.com/DonAdam2" target="_blank">
									<GitHubIcon />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
