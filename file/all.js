/**
 * 读取两个文件
 * @type {exports|module.exports}
 */
//同步方式
var fs = require('fs');
var name = fs.readFileSync('./name.txt').toString();
var age = fs.readFileSync('./age.txt').toString();
console.log('同步',name,age);

/*
* 异步嵌套回调方式
* 1.需要的时间长
* 2.代码可读性差
*/
fs.readFile('./name.txt',function(err1,name){
    fs.readFile('./age.txt',function(err2,age){
        console.log('异步',name.toString() , age.toString());
    });
});

//计数器方式
var person = {};
function show(){
    if(Object.keys(person).length==2){
        console.log('计数器方式',person);
    }
}
fs.readFile('./age.txt',function(err,age){
    person.age = age.toString();
    show();
});
fs.readFile('./name.txt',function(err,name){
    person.name = name.toString();
    show();
})

//promise 方式 先放一放 后面讲
//事件模式

