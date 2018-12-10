var globalVariable = 007;
var putCounter = 0;
var http = require('http');
const { parse } = require('querystring');

var express = require("express");
var myParser = require("body-parser");
var app = express();
app.use(myParser.urlencoded({extended: true}));

app.get('/myRequest',function(request,response){
    //code to perform particular action.
    //To access GET variable use.
    //request.var1, request.var2 etc
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('This is a GET request. Global Variable is: ' + globalVariable);
});

/* Need to differentiate between POST & PUT */
app.post('/myRequest', function(request, response) {
    let name = request.body.name;
    let body = '';
    body += name;
    response.end('This is a POST request. Hello, ' + body);
});

/* 
    Put is used to store data at THIS URI only.
    Whereas Post can initiate an action on server - general - e.g. different URI
*/
app.put('/myRequest', function(request, response) {
    let name = request.body.name;
    let body = '';
    body += name;
    response.end('This is a PUT request. Hello, ' + body);
});
app.listen(process.env.PORT || 8080);

