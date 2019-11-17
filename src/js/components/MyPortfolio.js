import React, { Fragment } from 'react';
//components
import SlideContent from './UI/SlideContent';
import Title from './UI/Title';

const MyPortfolio = () => (
	<div className="section my-portfolio">
		<div className="container">
			<div className="row">
				<div className="col-xxs-12">
					<Title title="my portfolio" />
				</div>
				<div className="col-xxs-12">
					<SlideContent
						leftMarkup={
							<Fragment>
								<div className="title-wrapper">
									<h2 className="title">FxPrimus</h2>
								</div>
								<h3>Overview</h3>
								<p>
									My primary role on this site was to create landing pages, update data on it and
									use APIs to get the required data. Also we used web sockets to get live data.
								</p>
								<h3>Project Skills</h3>
								<p>
									Web sockets
									<br />
									HTML5/CSS3
									<br />
									Javascript
									<br />
									Bootstrap
									<br />
									JQuiry
								</p>
							</Fragment>
						}
						rightMarkup={<img src="../../assets/images/fxprimus.png" alt="fxprimus" />}
					/>
				</div>
			</div>
		</div>
	</div>
);

export default MyPortfolio;
