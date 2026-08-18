const http  = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
    res.writeHeader(200,{"Content-Type" : "text/plain"});
    res.end("Hello, Welcome to node.js class");
});


server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});