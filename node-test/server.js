const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Read the content of the index.html file
  const filePath = path.join(__dirname, 'index.html');
  
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error');
      return;
    }

    // Send the content of the HTML file as the response
    res.end(content);
  });
});

const port = 3000;
const ip = '127.0.0.1';

server.listen(port, ip, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});

