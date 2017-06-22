const Server = require('./Server');

const PORT = process.env.PORT || 4000;
const server = new Server(PORT);

server.listen();

