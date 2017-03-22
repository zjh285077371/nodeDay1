var buf1 = new Buffer('张家豪');
console.log(buf1.toJSON());

var buf2 = new Buffer([2,234,23,46,12,18],'utf8');
console.log(buf2.toJSON());

var buf3 = Buffer.concat([buf1,buf2],15);
console.log(buf3.toJSON());

var buf4 = new Buffer(10);
buf2.copy(buf4,0,0,6);
console.log(buf4.toJSON());


