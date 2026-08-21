const fs = require('fs');
// Read stream
const readStream = fs.createReadStream('bigfile.txt', 'utf8');
// Write stream
const writeStream = fs.createWriteStream('output.txt');
readStream.on('data', (chunk) => {
writeStream.write(chunk); // chunk by chunk write
});
readStream.on('end', () => {
writeStream.end();
console.log('File copied!');
});