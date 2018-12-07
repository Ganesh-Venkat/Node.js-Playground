var globalVariable = 007;
//server.js
var http = require('http');
// require the new module
var requestHandler = require('/home/ubuntu/Idea PaaS /node_playground/Node.js/1.2_Request_Handler.js');
var server = http.createServer(requestHandler);
server.listen(8080);
