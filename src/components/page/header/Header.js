import React, { Component } from 'react';

import Logo from './Logo';
import Title from './Title';
import NavBar from './NavBar';
import Hamburger from './Hamburger';

const kitsoftObj = {
	title: 'Kitsoft',
	navItems: ['Who We Are', 
			   'What We Do', 
			   'How We Work', 
			   'Contact'],
	logo: ''
}

class Header extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hamburgerClicked: false
		}
	}

	onHamburgerClick() {
		this.setState({
			hamburgerClicked: !this.state.hamburgerClicked
		});
	}

	render() {

		const navClass = ['navbar'];
		const headerClass = ['header'];

		const hamBurgerTopClass = ['hamburger-top'];
		const hamBurgerMiddleClass = ['hamburger-middle'];
		const hamBurgerBottomClass = ['hamburger-bottom'];
	
		if (this.state.hamburgerClicked) {
			navClass.push('navbar-hamburger');
			headerClass.push('header-hamburger');
			hamBurgerTopClass.push('hamburger-top-active');
			hamBurgerMiddleClass.push('hamburger-middle-active');
			hamBurgerBottomClass.push('hamburger-bottom-active');
		}

		return(
			<header className={headerClass.join(' ')}>
				<div className='header-container'>
					<div className='logo-title-ham-container'>
						<Logo/>
						<Title title={kitsoftObj.title}/>
						<Hamburger 
							onHamburgerClick={this.onHamburgerClick.bind(this)}
							top={hamBurgerTopClass}
							middle={hamBurgerMiddleClass}
							bottom={hamBurgerBottomClass}
							/>
					</div>
					<div className={navClass.join(' ')}>
						<NavBar items={kitsoftObj.navItems}/>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;