import React from 'react';

const NavBar = (props) => {

	const navItems = props.items.map(item => <li key={item}><a href='#'>{item}</a></li>);
	return(
		<div className='nav-container'>
			<ul className='main-nav'>
				{navItems}
			</ul>
		</div>
	);
}

export default NavBar;