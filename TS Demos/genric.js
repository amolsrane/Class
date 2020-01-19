;
function processNumKeyPairs(key, value) {
    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value);
}
function processStringKeyPairs(key, value) {
    console.log('processStringKeyPairs: key = ' + key + ', value = ' + value);
}
var numKVProcessor = processNumKeyPairs;
numKVProcessor(1, 12345); //Output: processNumKeyPairs: key = 1, value = 12345 
var strKVProcessor = processStringKeyPairs;
strKVProcessor(4, "Abc");
