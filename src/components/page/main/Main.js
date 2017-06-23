import React from 'react';

const Banner = () => {
	return(
		<div className='banner-container'>
			<h1>Welcome</h1>
			<span>Hello there</span>
		</div>
	);
}

const Content = () => {
	return(
		<div className='content-container'>
			<div className='col'>
				<h1>First content</h1>
				<p>Details</p>
			</div>
			
			<div className='col'>
				<h1>Second content</h1>
				<p>Details</p>
			</div>
			<div className='col'>
				<h1>Third content</h1>
				<p>Details</p>
			</div>
			
			<div className='col'>
				<h1>Fourth content</h1>
				<p>Details</p>
			</div>
		</div>
	);
}

const Main = () => {
	return(
		<main className='main-container'>
			<Banner/>
			<Content/>
		</main>
	);
}

export default Main;