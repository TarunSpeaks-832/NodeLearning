const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname,'data');
// to check if the folder exists or not .. if not create a new folder with "mkdir"
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder has created!");
}

const newFile = path.join(dataFolder,"example.txt");   //to create a new file in the created folder
//synchronous way of creating a file is to write content

fs.writeFileSync(newFile,"Hello from node js");
//now the file has created succesfully

//to read content from the file
console.log(fs.readFileSync(newFile,'utf8')); //the content from the file has readed
// to append to the file content
fs.appendFileSync(newFile,"\nappended content later");
console.log(fs.readFileSync(newFile,'utf8'));
// up to now we have done everything in synchronous way

// now the asynchronous way of creating a file

const asyncFilePath = path.join(dataFolder,"async-example.txt");
fs.writeFile(asyncFilePath,"Hello, Asynfile", (err) => {
    if(err){
        throw err;
    }
    console.log("Async file is created successfully");
    fs.readFile(asyncFilePath,'utf-8', (err,data) =>{
        if(err){
            throw err;
        }
        console.log(data);
        fs.appendFile(asyncFilePath,"\nappended content to file", (err) => {
            if(err) throw err;
            console.log("the content has appended to the async file");
        })
    } );
});