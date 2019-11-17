import React from 'react';
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
							<p>
								Vestibulum ante ipsum primis in faucibus orci luctus et ultricesposuere cubilia
								Curae; Fusce id purus. Nam adipiscing. Proin sapienipsum, porta a, auctor quis,
								euismod ut, mi. Fusce egestas elit egetlorem. Sed augue ipsum, egestas nec,
								vestibulum et, malesuadaadipiscing, dui. Suspendisse pulvinar, augue ac venenatis
								condimentum,sem libero volutpat nibh, nec pellentesque velit pede quis nunc.
							</p>
						}
						rightMarkup={<img src="../../assets/images/fxprimus.png" alt="fxprimus" />}
					/>
				</div>
			</div>
		</div>
	</div>
);

export default MyPortfolio;
