// telnet localhost 3001
// curl localhost:3001
// ab -n 1000 -c 100 http://127.0.0.1:3001/

var net = require('net');

var server = net.createServer(function(socket) {
    // setTimeout(function() {
    //     socket.end('world\n');
    // }, 2000);

    // socket.write('hello\n');

    socket.write('hello\n');
    socket.write('world\n');

    socket.on('data', function(data) {
        socket.write(data);
    });
});

server.listen('3001');