// read file using stream

const fs = require("fs");
const readStream = fs.createReadStream("bigfile.txt",'utf8');

readStream.on('data',(chunk)=>{
    console.log('new chunk: ', chunk);
});

readStream.on('end',()=> {
    console.log("file reading finished")
});

readStream.on("error",(err) =>{
    console.log('Error: ', err);
});