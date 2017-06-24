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
			   'Contact']
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
	
		if (this.state.hamburgerClicked) {
			navClass.push('navbar-hamburger');
			headerClass.push('header-hamburger');
		}

		return(
			<header className={headerClass.join(' ')}>
				<div className='header-container'>
					<div className='logo-title-ham-container'>
						<Logo/>
						<Title title={kitsoftObj.title}/>
						<Hamburger 
							onHamburgerClick={this.onHamburgerClick.bind(this)}/>
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