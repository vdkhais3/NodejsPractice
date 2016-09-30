// curl localhost:3000
// ab -n 1000 -c 100 http://127.0.0.1:3000/

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text-plain' });
    
    setTimeout(function() {
        res.end('world\n');
    }, 2000);

    res.write('hello\n');
});

server.listen(3000);

