import React, { Fragment } from 'react';
//images
import cookingImage from '../../assets/images/cooking.png';
import fxprimusImage from '../../assets/images/fxprimus.png';
//components
import SlideContent from './UI/SlideContent';
import Title from './shared/Title';

const MyPortfolio = () => (
	<div className="section my-portfolio">
		<div className="container">
			<div className="row">
				<div className="col-xxs-12">
					<Title title="my portfolio" />
				</div>
				<div className="col-xxs-12">
					<h2 className="subtitle">Some Projects</h2>
				</div>
				<div className="col-xxs-12 image-on-right">
					<SlideContent
						leftMarkup={
							<Fragment>
								<div className="title-wrapper">
									<h2 className="title">FxPrimus</h2>
								</div>
								<h3 className="overview">Overview</h3>
								<p>
									My primary role on this site was to create landing pages, update data on it and
									use APIs to get the required data. Also we used web sockets to get live data.
								</p>
								<h3 className="overview">Project Skills</h3>
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
						rightMarkup={<img src={fxprimusImage} alt="Fxprimus Website" />}
					/>
				</div>
				<div className="col-xxs-12 image-on-left">
					<SlideContent
						leftMarkup={<img src={cookingImage} alt="Cooking App" />}
						rightMarkup={
							<Fragment>
								<div className="title-wrapper">
									<h2 className="title">Cooking App</h2>
								</div>
								<h3 className="overview">Overview</h3>
								<p>
									This app was created using Angular 7. It has 3 filters using Angular pipes and it
									has search functionality (based on tags) as well. I'm using flexbox to setup the
									layout.
								</p>
								<h3 className="overview">Project Skills</h3>
								<p>
									Angular 7
									<br />
									Typescript
									<br />
									SCSS
									<br />
									HTML5
								</p>
							</Fragment>
						}
					/>
				</div>
				<div className="col-xxs-12">
					<h2 className="subtitle">Some Pens</h2>
				</div>
				<div className="col-xxs-12  image-on-right">
					<SlideContent
						leftMarkup={
							<Fragment>
								<div className="title-wrapper">
									<h2 className="title">React crop</h2>
								</div>
								<h3 className="overview">Overview</h3>
								<p>
									This pen allows the user to select the required portion of an image to crop it. It
									has a lot of functionalities such as allowing the user to set the desired ratio
									and flip image vertically or horizontally.
								</p>
								<h3 className="overview">Project Skills</h3>
								<p>
									React
									<br />
									HTML5/SCSS
									<br />
									Javascript
								</p>
							</Fragment>
						}
						rightMarkup={
							<iframe
								height="265"
								style={{ width: '100%' }}
								scrolling="no"
								title="React select and crop image"
								src="https://codepen.io/AdamMorsi/embed/preview/mZevwL?height=265&theme-id=default&default-tab=js,result"
								frameBorder="no"
							>
								See the Pen{' '}
								<a href="https://codepen.io/AdamMorsi/pen/mZevwL">React select and crop image</a> by
								Adam Morsi (<a href="https://codepen.io/AdamMorsi">@AdamMorsi</a>) on{' '}
								<a href="https://codepen.io">CodePen</a>.
							</iframe>
						}
					/>
				</div>
				<div className="col-xxs-12 image-on-left">
					<SlideContent
						leftMarkup={
							<iframe
								height="265"
								style={{ width: '100%' }}
								scrolling="no"
								title="React countdown"
								src="https://codepen.io/AdamMorsi/embed/preview/mZayay?height=265&theme-id=default&default-tab=js,result"
								frameBorder="no"
							>
								See the Pen <a href="https://codepen.io/AdamMorsi/pen/mZayay">React countdown</a> by
								Adam Morsi (<a href="https://codepen.io/AdamMorsi">@AdamMorsi</a>) on{' '}
								<a href="https://codepen.io">CodePen</a>.
							</iframe>
						}
						rightMarkup={
							<Fragment>
								<div className="title-wrapper">
									<h2 className="title">React Countdown</h2>
								</div>
								<h3 className="overview">Overview</h3>
								<p>
									This pen allows the developer to set the time to countdown to. It has flip
									animation for each field of the timer.
								</p>
								<h3 className="overview">Project Skills</h3>
								<p>
									React
									<br />
									Javascript
									<br />
									SCSS
									<br />
									HTML5
								</p>
							</Fragment>
						}
					/>
				</div>
				<div className="col-xxs-12 text-center">
					<a className="btn" href="https://codepen.io/AdamMorsi" target="_blank">
						More pens
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default MyPortfolio;
