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
var product=[
{productId:101,PName:'Laptop',CatName:'ECT',price:1000},
{productId:102,PName:'Iron',CatName:'ECL',price:2000},
{productId:103,PName:'Biscut',CatName:'FOD',price:30}
]

var server= http.createServer(function(req,resp){
    var filter=req.url;
    var actData=filter.split('/');
    console.log('actData',actData[1])
var dataResponse=[];
// for(var j=0;j<actData.length;j++){
//     console.log('data',actData[j])
// }
for (var i=0;i<product.length;i++){
    if(product[i].CatName=="ECT"){
        dataResponse.push(product[i]);
    }
}

// console.log(JSON.stringify(dataResponse))

    resp.write(JSON.stringify(dataResponse))// writing response
    resp.end();// end response
});

//start listening on port

server.listen(8080);

console.log('listening on port 8080')