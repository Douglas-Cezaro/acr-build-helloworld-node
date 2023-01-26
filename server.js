const http = require('http')

const port = 80

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Hello World\n')
  response.end('Version: ' + process.env.NODE_VERSION + '\n')
})

server.get("/test",[], (req, res) => {
  return res.json({"test": "update"});
});

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
