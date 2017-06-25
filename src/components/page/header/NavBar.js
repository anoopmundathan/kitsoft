import React from 'react';
import PropTypes from 'prop-types';

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

NavBar.PropTypes = {
	items: PropTypes.array.isRequired
}

export default NavBar;