// buffer :- A Buffer is a temporary memory area. 
// · It stores data in binary form (0s and 1s). 
// When a large file is read, data comes in small parts (chunks).
//  Each chunk is stored in a buffer before being used. 
// Buffer helps to handle data efficiently without loading the full file into memory.

const fs = require('fs');
const data = fs.readFileSync("f1.txt");
console.log(data);
console.log(data.toString()); // to string use to binary code convert string form

