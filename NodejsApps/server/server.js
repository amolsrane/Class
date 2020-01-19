// create simple we server using 'http'
// the 'http'is standerd node js module a simple http server 
// it provide creaete server method to create server
//it provieds listen() method to  expose port on whcih the we server 
// will accepet request and genrate response


// Load and catch the module
var http= require('http');


//create serevr 
// the createServer() accepts 'requestlistner' callback to mange request and response 
// request => incoming message deom http object
// response => server response as response object

var server= http.createServer(function(req,resp){
    resp.write('Hi I am node js server')// writing response
    resp.end();// end response
})

//start listening on port

server.listen(8080);

console.log('listening on port 8080');