const express = require('express');
const path = require('path');

function Server(port) {
	this.port = port;
	this.app = express();
	this.app.use(express.static('public'));
	// this.app.use(express.static(path.join(__dirname, '..', '/public')));
}

Server.prototype.listen = function() {
	this.app.listen(this.port, () => {
		console.log(`Server running at port ${this.port}`);
	});
}

module.exports = Server;