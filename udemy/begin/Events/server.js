var http = require('http');

var handleRequest = function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Welcome to Nodejs\n');
};

var server = http.createServer(handleRequest);

server.listen(3000, 'localhost');

