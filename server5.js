import { createServer } from 'http';
import { readFile } from 'fs';

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            res.setHeader('Location', '/')
            res.statusCode = 301;
            break;
    }

    readFile(path, (err, data) => {
        if(err) {
            console.error(err);
            res.end()
        } else {
            res.write(data);
            res.end();
        }
    });
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
