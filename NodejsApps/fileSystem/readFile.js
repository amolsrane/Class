var fs = require('fs')

//Async write and read
console.log("starting async call")

fs.writeFile("myFile.txt","Data is written in  Async Mode",function(err){
if(err){
    console.log("Error while writing the file",err.message)
    return;
}
console.log("Data Write successfully ");
});

for(var j=0;j<8;j++){
    console.log("Dome Login J  ",j)
}

fs.readFile("newFile.txt",function(err,res){
    if(err){
        console.log("Error while writing the file",err.message)
        return;
    }
    console.log("Data Write successfully ",res.toString());
})


for(var i=0;i<8;i++){
    console.log("some Logic I  ",i)
}