/*var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {
    response.write('Hello world!');
    response.end();
});
server.listen(9000);*/

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
    	fs.readFile('./index.html', 'utf-8', function(err, data) {
    		console.log('Zawartość pliku: ');
    		console.log(data);
    	});
        response.write('<h1>Zawartość pliku html: </h1>', data);
        response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404</h1>', '\n<img src="https://i.imgflip.com/p47u0.jpg">');
            response.end();
    };
});

server.listen(8080);