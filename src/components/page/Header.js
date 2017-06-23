import React from 'react';

const Logo = () => {
	return(
		<div>
			<img src="" />
		</div>
	);
}

const Title = () => {
	return(
		<div>
			<h1>Kitsoft</h1>
		</div>
	);
}

const NavBar = () => {
	return(
		<div>
			<nav>
				<ul>
					<li>Link1</li>
					<li>Link2</li>
					<li>Link2</li>
				</ul>
			</nav>
		</div>
	);
}

const Header = () => {
	return(
		<header>
			<div>
				<Logo/>
			</div>

			<div>
				<Title/>
			</div>

			<div>
				<NavBar/>
			</div>
		</header>
	);
}


export default Header;