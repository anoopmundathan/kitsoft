import React from 'react';

const services = [
	{
		name: 'Business and Technology Consulting',
		class: 'box-header-1'
	},
	{
		name: 'Websites and Mobile Apps',
		class: 'box-header-2'
	},
	{
		name: 'Project Management',
		class: 'box-header-3'
	},
	{
		name: 'Training',
		class: 'box-header-4'
	},
	{
		name: 'Networking',
		class: 'box-header-5'
	}
];

const Banner = () => {
	return(
		<div className='banner-container'>
			<h1>Welcome</h1>
			<span>Hello there</span>
		</div>
	);
}

const Content = () => {
	const cardDiv = services.map(item => {
		return(
			<div className='box-container'>
				<div className={item.class}>
				</div>
				<div className='box-detail'>
					<h2>{item.name} </h2>
				</div>
			</div>
		);
	})

	return(
		<div className='content-container'>
			{cardDiv}
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