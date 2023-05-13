const http = require('http');
const fs = require('fs');
const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    fs.readFile('public/index.html', (err, page) => {
      if (err) {
        res.writeHead(404);
        res.write('Contents not found');
      } else {
        res.writeHead(200, { 'Content-Type': "text/html" })
        res.write(page);
      }
      res.end()
    })
  } else if (req.url === '/dashboard' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': "application/json" });
    res.write('Hello from Dashboard!');
    res.end();
  } else {
    res.writeHead(404);
    res.write('Page not found');
    res.end()
  }
})

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})