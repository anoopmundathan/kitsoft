import React from 'react';

import Logo from './Logo';
import Title from './Title';
import NavBar from './NavBar';
import Hamburger from './Hamburger';

const Header = () => {
	return(
		<header>
			<div className='header-container'>
				<div className='logo-title-ham-container'>
					<Logo/>
					<Title/>
					<Hamburger/>
				</div>
				<div className='navbar-container'>
					<NavBar/>
				</div>
			</div>
		</header>
	);
}

export default Header;