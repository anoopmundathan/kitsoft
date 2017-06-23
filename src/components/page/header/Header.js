import React from 'react';

import Logo from './Logo';
import Title from './Title';
import NavBar from './NavBar';

const Header = () => {
	return(
		<header>
			<div className='header-container'>
				<div className='logo-title-container'>
					<Logo/>
					<Title/>
				</div>
				<div className='navbar-container'>
					<NavBar/>
				</div>
			</div>
		</header>
	);
}


export default Header;

// <header class="main-header">
// 				<div class="container clearfix">
// 					<h1 class="name"><a href="#">Best City Guide</a></h1>
// 					<ul class="main-nav">
// 						<li><a href="#">ice cream</a></li>
// 						<li><a href="#">donuts</a></li>
// 						<li><a href="#">tea</a></li>
// 						<li><a href="#">coffee</a></li>
// 					</ul>
// 				</div>
// </header>