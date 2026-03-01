const path=require("path");

console.log("DirName : ",path.dirname(__filename)); //will mostly use
console.log("FileName : ",path.basename(__filename));
console.log("ExrensionName : ",path.extname(__filename));

const joinPath = path.join("/user","tarun","kumar");  //can be imp

console.log("Joined Path : ",joinPath);

const resolvePath = path.resolve("/user","tarun","kumar");

console.log("Resolve path : ",resolvePath);

const normalizePath = path.normalize('/user/.documents/../node/projects');   //simplyfy the whole path to short and clean 

console.log("normalizePath : ",normalizePath);