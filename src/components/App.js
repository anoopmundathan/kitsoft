import React, { Component } from 'react';

import Header from './page/header/Header';
import Main from './page/main/Main';
import Footer from './page/footer/Footer';

const kitSoftInfo = {
	title: 'Kitsoft'
}

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hamburgerClicked: false
		}
	}

	onHamburgerClick() {
		
		console.log('clicked');

		this.setState({
			hamburgerClicked: !this.state.hamburgerClicked
		});
	}

	render() {
		return(
			<div className='app-container'>
				<Header
					title={kitSoftInfo.title}
					hamburgerClicked = {this.state.hamburgerClicked}
					onHamburgerClick={this.onHamburgerClick.bind(this)}/>
				<Main/>
				<Footer/>
			</div>		
		);
	}
}

export default App;
