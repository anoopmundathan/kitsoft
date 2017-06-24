import React from 'react';

const Hamburger = (props) => {
	return(
		<div className='hamburger-container' onClick={props.onHamburgerClick}>
			<div className='hamburger'>
				<div className='hamburger-top'>
				</div>
				<div className='hamburger-middle'>
				</div>
				<div className='hamburger-bottom'>
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
