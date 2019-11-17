import React from 'react';

const Footer = () => {
	return (
		<div className="section footer">
			<div className="container">
				<div className="row">
					<div className="col-xxs-4">
						<h1>Social Media</h1>
						<ul>
							<li>
								<a href="https://www.linkedin.com/in/adam-morsi-715517b3/" target="_blank">
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
					<div className="col-xxs-4">
						<h1>Contact</h1>
						<ul>
							<li>Tel: 0035797691992</li>
							<li>
								<a href="mailto:adam.morsi@yahoo.com">Email: adam.morsi@yahoo.com</a>
							</li>
							<li>Skype: don.adam8</li>
						</ul>
					</div>
					<div className="col-xxs-4">
						<h1>CodePen & Git</h1>
						<ul>
							<li>
								<a href="https://codepen.io/AdamMorsi" target="_blank">
									CodePen
								</a>
							</li>
							<li>
								<a href="https://github.com/DonAdam2" target="_blank">
									GitHub
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
