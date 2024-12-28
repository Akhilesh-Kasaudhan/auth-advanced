const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  }
  if (req.method === "GET" && req.url === "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, world!" }));
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));