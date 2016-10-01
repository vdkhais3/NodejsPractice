var http = require('http');
var express = require('express');

var app = express();

app.use('/', function (req, res) {
    res.end('Arline');
});

http.createServer(app).listen(3000, 'localhost');