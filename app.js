const http  = require("http");

const server = http.createServer((req, res) => {
    Response.writeHeader(200,{"Content-Type" : "trxt/plain"});
    res.end("Hello, Welcome to node.js class");
});