// handler.js
// create a file and export the function to be used as the request handler
module.exports = (request, response) => {

  if (request.method === 'GET') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('This is a GET request' + 'test' + globalVariable);
  } else if (request.method === 'POST') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('This is a POST request');
  }
};
