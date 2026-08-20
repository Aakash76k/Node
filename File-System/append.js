const fs = require("fs");

// append use for added text 
fs.appendFile("ex.txt", "\n append File" , (err) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log("File created sucessfully");
})

// file name change
fs.rename("ex.txt", "example.txt", (err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("File rename sucessfully");
})

// file delete

fs.unlink("example.txt", (err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("delete : ");
})

