var http = require('http');

http.createServer(function(req,res){
    res.write('coderhisham!!!');
    res.end();
}).listen(7000);