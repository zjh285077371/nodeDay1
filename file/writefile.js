var fs = require('fs');
/**
 * 写入文件
 */
//以同步的方式向硬盘中写入文件
/**
 * 1.回调函数里的err,data是由fs.readFile()决定的
 * 2.
 */
//fs.writeFileSync('./我是写入的文件.txt',new Buffer('我是由buffer转化来的'),'utf8');

/**
 * 异步写入操作
 * option：可以是字符串，默认指定为编码，也可以是object
 * flag
 *      w:替换写入
 *      a:追加增加
 */
fs.writeFile('./我是第二个写入文件.txt',new Buffer('我是由buffer转化来的2'),{ flag : 'w'},function(err){
    if(err)console.log(err);
});

fs.appendFile('./我是第二个写入文件.txt','我是增加的',function(err){
    if(err)console.log(err);
});