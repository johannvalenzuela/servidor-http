var http = require('http');
var fs = require('fs');

const ROOT = 'documentRoot';

http.createServer(function (req, res) {
    fs.readFile(ROOT + req.url, function (err, data) {
        if (err) {
            res.writeHead(404, { 
                'Content-Type': 'text/html',
                'X-ResponseEcho': JSON.stringify(req.headers) });
            return res.end();
        }
        res.writeHead(200, { 
            'Content-Type': 'text/html' ,
            'X-ResponseEcho': JSON.stringify(req.headers) 
        });
        res.write(data);
        return res.end();
    });
}).listen(9100);