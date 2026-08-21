// Read + write stream (pipe)
// pipe()→ekstreamkadatadirectlydoosrestreammebhejtahai.
// Efficient for largefiles,memorysavehotihai

const fs = require("fs");

const readStream = fs.createReadStream("exe.txt");
const writeStream = fs.createWriteStream("copy.txt");

readStream.pipe(writeStream); // directly copy file
console.log("file is being copied usinbg streams..");
