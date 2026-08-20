const fs = require("fs");

try{
    const data = fs.readFileSync("ex.txt", "utf-8");
    console.log("data : ", data);
} catch(err){
    console.error("Error: ", err);
}

try{
    const data = fs.writeFileSync("file.txt", "Hello node.,js");
    console.log("File created sucessfully");
    }catch(err){
        console.error("Error :", err);
    }
