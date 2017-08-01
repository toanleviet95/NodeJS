var http = require('http');
var fs = require('fs');

// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-type': 'text/html'
//     });

//     // var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
//     // var user = 'Toan LV';
//     // html = html.replace('{user}',user);
//     //res.end(html);
//     fs.createReadStream(__dirname + '/index.html').pipe(res);


// }).listen(1337, '127.0.0.1');

http.createServer(function (req, res) {
    if (req.url === '/' || req.url === '/index.html') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/api'){
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        var obj = {
            name: 'Toan'
        }
        res.end(JSON.stringify(obj));
    }else{
        res.writeHead(404);
        res.end('Not found');
    }

}).listen(1337, '127.0.0.1', function () {
    console.log('Server listening on');
});