const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');
writeStream.write("hello world\n");
writeStream.write('this is write stream\n');
writeStream.end();

writeStream.on('finish',()=>
{
    console.log("WRITING FINISED");
});

writeStream.on('error',(err)=>{
    console.log("error: ", err);
});