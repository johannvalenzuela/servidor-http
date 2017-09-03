var net = require('net');
var url = require('url');
var server = net.createServer(function (c) { //'connection' listener
    console.log(c);
    c.write('hello\r\n');
    c.pipe(c);
    c.on('end', function () {
        console.log('server disconnected');
    });
    c.on('connect', function (request) {
        //console.log(request);
    });

    c.on('data', function (request) {
        var recibido = request.toString();
        var headers = recibido;
        console.log(headers);
    });

});
server.listen(9100, function () { //'listening' listener
    console.log('server bound');
});