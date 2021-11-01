const http = require("http");

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("<h1>Hello World</h1>");
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));