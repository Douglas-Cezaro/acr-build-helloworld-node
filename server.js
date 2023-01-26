const http = require("http");
const express = require("express");

const port = 80;

const app = express();

app.use(express.json());

app.get("/test", [], (req, res) => {
  return res.json({ test: "update" });
});

const server = http.createServer(app);

server.listen(port);

console.log(`Server running at http://localhost: ${port}`);

