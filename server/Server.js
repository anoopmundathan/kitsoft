const express = require('express');
const path = require('path');

function Server(port) {
	this.port = port;
	this.app = express();
	this.app.use(express.static('dist'));
}

Server.prototype.listen = function() {
	this.app.listen(this.port, () => {
		console.log(`Express Node Server running on port ${this.port}`);
	});
}

module.exports = Server;