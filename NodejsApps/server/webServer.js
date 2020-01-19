var http = require('http');
var fs = require('fs');

var server = http.createServer( function(req, resp) {
    fs.readFile("./../views/home.html", function (err, data) {
        if (err) {
            resp.writeHead(404, { 'content-Type': 'text/html' })
            resp.end('File NOt Found', err.message)
        }

        resp.writeHead(200, { 'content-Type': 'text/html' })
        resp.end(data)
    })
});

server.listen('9090')

console.log("server is listening on port 9090");