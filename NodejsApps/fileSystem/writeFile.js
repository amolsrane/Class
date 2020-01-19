// Load the Fs MOdule

var fs= require('fs');


// Syncronous write
fs.writeFileSync('myFile.txt',"The file is written useing FS module")


// Syncronous Read
var data=fs.readFileSync('myFile.txt');

console.log('Data: ',data.toString());

console.log('End Of file')