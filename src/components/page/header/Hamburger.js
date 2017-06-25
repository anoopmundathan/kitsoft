import React from 'react';
import PropTypes from 'prop-types';

const Hamburger = (props) => {
	return(
		<div className='hamburger-container' onClick={props.onHamburgerClick}>
			<div className='hamburger'>
				<div className={props.top.join(' ')}>
				</div>
				<div className={props.middle.join(' ')}>
				</div>
				<div className={props.bottom.join(' ')}>
				</div>
			</div>
		</div>
	);
}

Hamburger.PropTypes = {
	onHamburgerClick: PropTypes.func.isRequired
}

export default Hamburger;
