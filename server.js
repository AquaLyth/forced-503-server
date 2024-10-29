const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 80;
const server = createServer((req, res) => {
  res.statusCode = 503;
  res.setHeader('Content-Type', 'text/plain');
  res.end('maintenance');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});