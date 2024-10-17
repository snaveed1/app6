const http = require('http');

const hostname = '0.0.0.0';
const port = 30006;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('WOHLIG TRANSFORMATIONS FROM APP6.\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
