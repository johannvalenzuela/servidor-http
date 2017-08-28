var http = require('http');
var url = require('url');
var fs = require('fs');

const ROOT = 'documentRoot';

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname;
    fs.readFile(ROOT + filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            console.log(ROOT + filename);
            res.writeHead(404, { 'X-ResponseEcho': JSON.stringify(req.headers) });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'X-ResponseEcho': JSON.stringify(req.headers) });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(9100);