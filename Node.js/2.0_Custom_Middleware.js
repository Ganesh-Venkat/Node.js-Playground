var globalVariable = 007;
var express = require("express");
var myParser = require("body-parser");
var app = express();
// global, for all requests (middleware)
app.use(myParser.urlencoded({extended: true}));
  
function isAdmin(request, response, next) {
    if (request.body.user === "admin") {
        return next();
    } else {
        //var err = new Error("Only admin is authorized to access this page!");
        //err.status = 401;
        //response.end(err);
        response.status(401).end();
    }
}

function isBrowserSupported(request, response, next) {
    var browser = request.body.browser;
    if (browser === "firefox" || browser === "chrome") {
        return next();
    } else {
        response.status(403).end();
    }
}

app.use(isAdmin);
app.use(isBrowserSupported);

// for a get request to this URI in specific (application routing + middleware) 
app.get('/myRequest', function(request,response){
    //code to perform particular action.
    //To access GET variable use.
    //request.var1, request.var2 etc
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('This is a GET request. Global Variable is: ' + globalVariable);
});

/* Need to differentiate between POST & PUT */
app.post('/myRequest', function(request, response) {
    let name = request.body.name;
    response.end('This is a POST request. Hello, ' + name);
});
app.listen(process.env.PORT || 8080);
