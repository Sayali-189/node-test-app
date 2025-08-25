const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js Test App running in Docker!\n");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
