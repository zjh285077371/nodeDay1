var fs = require('fs');
fs.readFile('./3.txt',function(err,data){
    if(err) return;
    console.log(data.toString());
});
console.log('hello 1');
var data = fs.readFileSync('./2.txt');
console.log(data.toString());
console.log('hello 2');