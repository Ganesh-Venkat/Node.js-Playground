//handler.js
// create a file and export the function to be used as the request handler
module.exports = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello, World!');
};
