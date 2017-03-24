var fs = require('fs');
var path = require('path');

/**
 * 复制文件夹
 */
/*创建目标文件所需的文件夹*/
function createDir(pathArr){
    var temppath = pathArr[0];
    for(var i = 1 ; i < pathArr.length ; i++){
        temppath += '\\';
        temppath += pathArr[i];
        try{
            fs.mkdirSync(temppath);
            console.log('目标文件夹创建成功');
        }catch (err){
            if(err.code == 'EEXIST'){
                console.log('已经存在');
            }else if(err.code == 'ENOENT'){
                console.log('父级路径不存在');
            }
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
            fs.readFile(sourceDir , function(err , data){
                if(err){
                    console.log(err);
                    return;
                }
                fs.writeFile(targetDir,data,function(err){
                    if(err){
                        console.log('文件复制失败');
                        var paths = targetDir.split(path.sep);
                        paths.pop();
                        createDir(paths);
                        Copy(targetDir , sourceDir);
                        return;
                    }
                });
            });
        }else if(stats.isDirectory()){ //创建文件夹到目的文件夹下
            fs.mkdir(targetDir,function(err){
                if(err)return;
            });
            fs.readdir(sourceDir,function(err , files){
                files.forEach(function(item,index){
                    Copy(path.join(targetDir,item),path.join(sourceDir,item));
                });
            });
        }else{return;};
    })
}
Copy('D:\\bbb','C:\\Users\\Administrator\\Desktop\\sql');//C:\Users\Administrator\Desktop

