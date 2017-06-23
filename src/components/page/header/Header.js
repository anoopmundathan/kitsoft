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