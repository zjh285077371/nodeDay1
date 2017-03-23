var fs = require('fs');
var path = require('path');

/**
 * 复制文件夹
 */
/*创建目标文件所需的文件夹*/
function createDir(paths){
    if(paths.length>2) {
        paths.pop();
        try {
            fs.mkdirSync(paths.toString().replace(new RegExp(/\,/g),'\\'));
        } catch (err) {
            createDir(paths);
        }
    }
}

function Copy (targetDir , sourceDir){
    //判断是文件还是文件夹
    fs.stat(sourceDir , function(err , stats){
        if(err){
            console.log("路径错误请检查");
            return;
        }
        if(stats.isFile()){ //复制文件到目的文件夹
            console.log('this is a file.');
            fs.readFile(sourceDir , function(err , data){
                if(err){
                    console.log(err);
                    return;
                }
                fs.writeFile(targetDir,data,function(err){
                    if(err){
                       // console.log('文件复制失败');
                        var paths = targetDir.split(path.sep);
                        createDir(paths);
                        Copy(targetDir , sourceDir);
                        return;
                    }
                });
            });
        }else if(stats.isDirectory()){ //创建文件夹到目的文件夹下
            console.log('this is a dir.');
            /*fs.mkdir(targetDir,function(err){
                console.log('create file' + path.basename(targetDir));
                if(err)return;
            });*/
            fs.readdir(sourceDir,function(err , files){
                files.forEach(function(item){
                    Copy(path.join(targetDir,item),path.join(sourceDir,item));
                });
            });
        }else{return;};
    })
}
Copy('E:\\fff\\kk\\zz','D:');

