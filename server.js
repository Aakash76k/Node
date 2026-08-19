const http = require("http");
const PORT = 5000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end("<h1> heading: Welcome to Node.js Server</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(
      "<h2> title and a short paragraph with the student's name and roll number</h2>",
    );
  } else if (req.url === "/api/student") {
    res.writeHead(200, { "content-type": "application/json" });
    const student = { name: "Alex", course: "Full Stack", status: "Enrolled" };
    res.end(JSON.stringify(student));
  }else 
  {
    res.end("<h1 style='color: red;'>404 - Page Not Found</h1>")
  }


});

server.listen(PORT);
