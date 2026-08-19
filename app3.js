const http = require("http"); // https  :- hypedr text transfer protocol secure
const server = http.createServer();

server.on("request",(req,res)=>{
    if(req.url === "/about"){
        res.end("AboutPage");

    }else if(req.url === "/contact"){
        res.end("Contact Page");
    }else if(req.url === "/project"){
        res.end("Project Page");
    }else{
        res.end("page not found");
    }
})

server.listen(3001, ()=>{
    console.log(`http:localhost:3001`);
})