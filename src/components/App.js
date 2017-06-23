import React, { Component } from 'react';

import Header from './page/header/Header';
import Main from './page/main/Main';
import Footer from './page/footer/Footer';

class App extends Component {
	render() {
		return(
			<div>
				<Header/>
				<Main/>
				<Footer/>
			</div>
		);
	}
}

export default App;
