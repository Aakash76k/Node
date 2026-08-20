const fs = require("fs");
// read
try{
    const data = fs.readFileSync("ex.txt", "utf-8");
    console.log("data : ", data);
} catch(err){
    console.error("Error: ", err);
}

//write and create new file same file use overlap

try{
    const data = fs.writeFileSync("file.txt", "Hello node.,js");
    console.log("File created sucessfully");
    }catch(err){
        console.error("Error :", err);
    }
