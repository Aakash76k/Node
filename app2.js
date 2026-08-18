const http = require("http");
const PORT = 4000;
const server = http.createServer((req, res)=>{
    res.writeHeader(200,{"Content-Type":"text'html"});
    res.end(`Welcome to html text`);
});

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});