var fs = require('fs');  
var path = require('path');
var SSOdata;  
var DIRdata;
var SSOarray=[];
var DIRarray=[];
fs.readFile("export.csv", function(err, data) {  
  if (err) {  
    console.error(err);  
  } else {  
   var SSOdata = data.toString();
   SSOarray=SSOdata.split("\n");
	 console.log(SSOarray[11]);
   }  
});
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
DIRdata = getFiles('/var/log/gpa')+','+getFiles('/var/log/gpa/registration');
console.log(DIRdata);
DIRarray=(DIRdata.toString()).split(",");
console.log(DIRarray[11]);

