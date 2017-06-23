import React from 'react';

import Logo from './Logo';
import Title from './Title';
import NavBar from './NavBar';

const Header = () => {
	return(
		<header>
			<Logo/>
			<Title/>
			<NavBar/>
		</header>
	);
}


export default Header;