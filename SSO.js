var fs = require('fs');  
var path = require('path');
var grep = require('simple-grep');
var DIRdata;
var SSOarray=[];
var DIRarray=[];
//Синхронно читаем файл с SSO | переводим в string | записываем в массив 1
var readSSO = fs.readFileSync("export.csv", 'utf8')
SSOarray=(SSOdata.toString()).split("\n");
console.log(SSOarray[]);
//Читаем директорию на предмет имён файлов в ней записываем данные в массив 2
var getFiles = function (dir, files_){
    
  files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};
// Дальше хочу асинхронно искать в файлах из массива 2 текст массива 1 но пока просто вывожу данные в консоль.
SSOarray=SSOdata.split("\n");
DIRdata = getFiles('/var/log/gpa')+','+getFiles('/var/log/gpa/registration');
DIRarray=(DIRdata.toString()).split(",");
console.log(DIRarray[11]);
console.log(SSOarray[11]);


