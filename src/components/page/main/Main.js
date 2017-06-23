import React from 'react';

const Banner = () => {
	return(
		<div className='banner-container'>
			<span>Hero Image goes here</span>
			<h1>Welcome</h1>
			<span>Hello there</span>
		</div>
	);
}

const Content = () => {
	return(
		<div className='content-container'>
			<div>
				<h1>First content</h1>
				<p>Details</p>
			</div>
			
			<div>
				<h1>Second content</h1>
				<p>Details</p>
			</div>
			<div>
				<h1>Third content</h1>
				<p>Details</p>
			</div>
			
			<div>
				<h1>Fourth content</h1>
				<p>Details</p>
			</div>
		</div>
	);
}

const Main = () => {
	return(
		<main className='main-conatiner'>
			<Banner/>
			<Content/>
		</main>
	);
}

export default Main;