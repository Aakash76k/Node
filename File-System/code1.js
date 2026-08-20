const fs = require("fs");

// read file
fs.readFile("ex.txt", "utf-8" , (err, data) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log("data : ", data);
});

// write file

fs.writeFile("ex.txt", "tell" , (err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("File created successfully ");
});



