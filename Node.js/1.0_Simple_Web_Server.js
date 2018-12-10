var globalVariable = 007;
var putCounter = 0;
var http = require('http');
const { parse } = require('querystring');

//create a server object:
// this is shorthand for createServer, server.on()
http.createServer(function (request, response) {
  if (request.method === 'GET') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('This is a GET request. Global Variable is: ' + globalVariable);
  } else if (request.method === 'POST') {
    // parse request body
    let body = '';
    // request is type Stream which inherits EventEmitter, so no need to event explicitly
    // Grab data by listening to the stream's data & end events
    // Reference: https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
    request.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    request.on('end', () => {
        //console.log(body);
        response.end('This is a POST request' + body);
    });
  } else if (request.method === 'PUT') {
    let body = '';
    // parse request body
    request.on('data', chunk => {
    body += chunk.toString(); // convert Buffer to string
  });
    request.on('end', () => {
      //console.log(body);
      response.end('This is a PUT request' + body);
  });
  } 
}).listen(8080); //the server object listens on port 8080 