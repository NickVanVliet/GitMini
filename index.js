const http = require('http');
const fs = require('fs');
const file = "visitors.txt";

http.createServer((req, res) => {

    if (req.url === '/') {
        const html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    } 

    else if (req.url === '/cat'){
        let count = 0;
        if (fs.existsSync(file)) {
            count = parseInt(fs.readFileSync(file)) || 0;
        }
        count++;
        fs.writeFileSync(file, count.toString());

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ visitors: count }));
    } 

    else if (req.url === '/scripts/catCounter.js') {
        const js = fs.readFileSync('scripts/catCounter.js');
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.end(js);
    } 

    else if (req.url === '/Page1'){
        const html = fs.readFileSync('Page1.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    } 

    else if (req.url === '/Page2'){
        const html = fs.readFileSync('Page2.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    } 

    else {
        res.writeHead(404);
        res.end('404 Not Found');
    }

}).listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});