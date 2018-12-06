//server.js
var http = require('http');
// require the new module
var handler = require('/home/ubuntu/Idea PaaS /node_playground/2.2 request-handler.js');
var server = http.createServer(handler);
server.listen(8080);
