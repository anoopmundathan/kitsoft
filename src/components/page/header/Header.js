import React from 'react';

import Logo from './Logo';
import Title from './Title';
import NavBar from './NavBar';
import Hamburger from './Hamburger';

const Header = (props) => {

	let headerClass;
	let navClass;

	if (props.hamburgerClicked) {
		navClass = null;
		headerClass = 'header-hamburger';
	} else {
		navClass = 'navbar-container-no-display';
		headerClass = null;
	}
	
	return(
		<header className={headerClass}>
			<div className='header-container'>
				<div className='logo-title-ham-container'>
					<Logo/>
					<Title title={props.title}/>
					<Hamburger onHamburgerClick={props.onHamburgerClick}/>
				</div>
				<div className={navClass}>
					<NavBar />
				</div>
			</div>
		</header>
	);
}

export default Header;