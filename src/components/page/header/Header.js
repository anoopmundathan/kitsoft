import React from 'react';

import Logo from './Logo';
import Title from './Title';
import NavBar from './NavBar';
import Hamburger from './Hamburger';

const Header = (props) => {

	const navClass = ['navbar'];
	const headerClass = ['header'];
	
	if (props.hamburgerClicked) {
		navClass.push('navbar-hamburger');
		headerClass.push('header-hamburger');
	}

	return(
		<header className={headerClass.join(' ')}>
			<div className='header-container'>
				<div className='logo-title-ham-container'>
					<Logo/>
					<Title title={props.title}/>
					<Hamburger onHamburgerClick={props.onHamburgerClick}/>
				</div>
				<div className={navClass.join(' ')}>
					<NavBar />
				</div>
			</div>
		</header>
	);
}

export default Header;